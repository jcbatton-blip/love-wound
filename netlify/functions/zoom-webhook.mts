import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";
import type { Config, Context } from "@netlify/functions";
import {
  allClients,
  portalStore,
  runtimeEnv,
  saveClient,
} from "./_portal-integrations.mts";

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function safeEqual(left: string, right: string): boolean {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function verifyZoomSignature(
  raw: string,
  timestamp: string,
  signature: string,
  secret: string,
  now = Date.now()
): boolean {
  if (!timestamp || !signature) return false;
  if (Math.abs(now - Number(timestamp) * 1000) > 5 * 60 * 1000) return false;
  const expected = `v0=${createHmac("sha256", secret)
    .update(`v0:${timestamp}:${raw}`)
    .digest("hex")}`;
  return safeEqual(expected, signature);
}

async function zoomAccessToken(): Promise<string> {
  const credentials = Buffer.from(
    `${runtimeEnv("ZOOM_CLIENT_ID")}:${runtimeEnv("ZOOM_CLIENT_SECRET")}`
  ).toString("base64");
  const accountId = encodeURIComponent(runtimeEnv("ZOOM_ACCOUNT_ID"));
  const response = await fetch(
    `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${accountId}`,
    {
      method: "POST",
      headers: { authorization: `Basic ${credentials}` },
    }
  );
  if (!response.ok) throw new Error("Zoom access token request failed.");
  const data = (await response.json()) as { access_token?: string };
  if (!data.access_token)
    throw new Error("Zoom did not return an access token.");
  return data.access_token;
}

async function meetingSummary(meetingId: string): Promise<Record<string, any>> {
  const token = await zoomAccessToken();
  const accountId = encodeURIComponent(runtimeEnv("ZOOM_ACCOUNT_ID"));
  const response = await fetch(
    `https://api.zoom.us/v2/accounts/${accountId}/meetings/${encodeURIComponent(meetingId)}/meeting_summary`,
    { headers: { authorization: `Bearer ${token}` } }
  );
  if (!response.ok) throw new Error("Zoom meeting summary was unavailable.");
  return (await response.json()) as Record<string, any>;
}

function stringList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map(item => String(item).trim())
      .filter(Boolean)
      .slice(0, 12);
  }
  if (typeof value !== "string") return [];
  return value
    .split(/\n+/)
    .map(item => item.replace(/^[-*•\d.)\s]+/, "").trim())
    .filter(Boolean)
    .slice(0, 12);
}

export default async (
  request: Request,
  _context: Context
): Promise<Response> => {
  if (request.method !== "POST")
    return json({ error: "Method not allowed." }, 405);
  try {
    const raw = await request.text();
    const event = JSON.parse(raw) as Record<string, any>;
    const secret = runtimeEnv("ZOOM_WEBHOOK_SECRET");

    if (event.event === "endpoint.url_validation") {
      const plainToken = String(event.payload?.plainToken ?? "");
      return json({
        plainToken,
        encryptedToken: createHmac("sha256", secret)
          .update(plainToken)
          .digest("hex"),
      });
    }

    const timestamp = request.headers.get("x-zm-request-timestamp") ?? "";
    const signature = request.headers.get("x-zm-signature") ?? "";
    if (!verifyZoomSignature(raw, timestamp, signature, secret)) {
      return json({ error: "Invalid signature." }, 401);
    }
    if (event.event !== "meeting.summary_completed")
      return json({ received: true });

    const meeting = event.payload?.object ?? {};
    const meetingId = String(meeting.id ?? meeting.meeting_id ?? "");
    const meetingUuid = String(meeting.uuid ?? meetingId);
    if (!meetingId) throw new Error("Zoom did not include a meeting ID.");
    const summary = await meetingSummary(meetingId);
    const store = portalStore();
    const clients = await allClients(store);
    const client = clients.find(item =>
      (item.appointments ?? []).some(
        appointment =>
          appointment.zoomMeetingId === meetingId ||
          appointment.zoomMeetingId === meetingUuid
      )
    );

    if (!client) {
      await store.setJSON(`unmatched/zoom/${encodeURIComponent(meetingUuid)}`, {
        meetingId,
        meetingUuid,
        receivedAt: new Date().toISOString(),
        reason: "No client appointment matched this Zoom meeting.",
      });
      return json({ received: true, matched: false });
    }

    const now = new Date().toISOString();
    const sourceId = `zoom:${meetingUuid}`;
    const alreadyPublished = client.summaries.some(
      item => item.sourceId === sourceId
    );
    if (!alreadyPublished) {
      const startTime = String(
        summary.meeting_start_time ?? meeting.start_time ?? now
      );
      client.summaries.push({
        id: randomUUID(),
        sourceId,
        sessionDate: startTime.slice(0, 10),
        title: String(
          summary.summary_title ?? meeting.topic ?? "Session summary"
        ),
        reflection: String(
          summary.summary_content ?? "Your session summary is ready."
        ),
        takeaways: stringList(summary.summary_overview),
        nextSteps: stringList(summary.next_steps),
        status: "published",
        createdAt: now,
        updatedAt: now,
      });
      client.updatedAt = now;
      await saveClient(store, client);
    }

    await store.setJSON(`nugget-sources/${encodeURIComponent(meetingUuid)}`, {
      id: randomUUID(),
      sourceId,
      clientId: client.id,
      sourceType: "zoom-session-summary",
      status: "ready-for-distillation",
      destinations: ["substack", "blog", "book"],
      guardrails: [
        "Extract only standalone insights that could apply to anyone.",
        "Never create a case study or client narrative.",
        "Never retain names, identifying details, or reconstructable circumstances.",
      ],
      source: summary,
      createdAt: now,
    });
    return json({ received: true, matched: true });
  } catch (error) {
    console.error("[Zoom webhook] Request failed", error);
    return json({ error: "Webhook processing failed." }, 500);
  }
};

export const config: Config = { path: "/api/zoom-webhook" };
