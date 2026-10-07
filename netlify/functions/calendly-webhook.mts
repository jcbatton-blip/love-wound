import { createHmac, timingSafeEqual } from "node:crypto";
import type { Config, Context } from "@netlify/functions";
import Stripe from "stripe";
import {
  ensureClientForBooking,
  portalStore,
  runtimeEnv,
  saveClient,
  type Appointment,
  type PaymentRecord,
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

export function verifyCalendlySignature(
  raw: string,
  header: string,
  secret: string,
  now = Date.now()
): boolean {
  const parts = Object.fromEntries(
    header.split(",").map(part => part.trim().split("=", 2))
  );
  const timestamp = parts.t;
  const signature = parts.v1;
  if (!timestamp || !signature) return false;
  if (Math.abs(now - Number(timestamp) * 1000) > 5 * 60 * 1000) return false;
  const expected = createHmac("sha256", secret)
    .update(`${timestamp}.${raw}`)
    .digest("hex");
  return safeEqual(expected, signature);
}

function meetingId(joinUrl = ""): string | undefined {
  return joinUrl.match(/zoom\.us\/(?:j|wc)\/(\d+)/i)?.[1];
}

async function scheduledEvent(uri: string): Promise<Record<string, any>> {
  if (!uri) return {};
  const response = await fetch(uri, {
    headers: { authorization: `Bearer ${runtimeEnv("CALENDLY_ACCESS_TOKEN")}` },
  });
  if (!response.ok) throw new Error("Calendly event details were unavailable.");
  const data = (await response.json()) as { resource?: Record<string, any> };
  return data.resource ?? {};
}

function safeReceiptUrl(value: unknown): string | undefined {
  if (typeof value !== "string" || !value) return undefined;
  try {
    const url = new URL(value);
    if (
      url.protocol !== "https:" ||
      !(url.hostname === "stripe.com" || url.hostname.endsWith(".stripe.com"))
    ) {
      return undefined;
    }
    return url.toString();
  } catch {
    return undefined;
  }
}

async function stripeReceiptUrl(
  externalId: string
): Promise<string | undefined> {
  if (!externalId) return undefined;
  const stripe = new Stripe(runtimeEnv("STRIPE_SECRET_KEY"), {
    apiVersion: "2025-11-17.clover",
  });
  if (externalId.startsWith("ch_")) {
    const charge = await stripe.charges.retrieve(externalId);
    return "deleted" in charge ? undefined : safeReceiptUrl(charge.receipt_url);
  }
  if (externalId.startsWith("pi_")) {
    const intent = await stripe.paymentIntents.retrieve(externalId, {
      expand: ["latest_charge"],
    });
    const charge = intent.latest_charge;
    if (charge && typeof charge !== "string" && !("deleted" in charge)) {
      return safeReceiptUrl(charge.receipt_url);
    }
  }
  return undefined;
}

export function paymentFromCalendly(
  value: unknown,
  appointment: Appointment,
  paidAt: string,
  receiptUrl?: string
): PaymentRecord | null {
  if (!value || typeof value !== "object") return null;
  const payment = value as Record<string, unknown>;
  if (payment.successful !== true || payment.provider !== "stripe") return null;
  const externalId = String(payment.external_id ?? "").trim();
  const amount = Number(payment.amount);
  if (!externalId || !Number.isFinite(amount) || amount < 0) return null;
  return {
    id: externalId,
    appointmentId: appointment.id,
    description: appointment.title || "Private coaching session",
    amount,
    currency: String(payment.currency ?? "USD").toUpperCase(),
    status: "paid",
    paidAt,
    receiptUrl: safeReceiptUrl(receiptUrl),
    updatedAt: new Date().toISOString(),
  };
}

export default async (
  request: Request,
  _context: Context
): Promise<Response> => {
  if (request.method !== "POST")
    return json({ error: "Method not allowed." }, 405);
  try {
    const raw = await request.text();
    const signature = request.headers.get("calendly-webhook-signature") ?? "";
    if (
      !verifyCalendlySignature(
        raw,
        signature,
        runtimeEnv("CALENDLY_WEBHOOK_SIGNING_KEY")
      )
    ) {
      return json({ error: "Invalid signature." }, 401);
    }

    const event = JSON.parse(raw) as {
      event?: string;
      payload?: Record<string, any>;
    };
    if (!["invitee.created", "invitee.canceled"].includes(event.event ?? "")) {
      return json({ received: true });
    }

    const payload = event.payload ?? {};
    const email = String(payload.email ?? "")
      .trim()
      .toLowerCase();
    if (!email) throw new Error("Calendly did not include the invitee email.");
    const eventUri =
      typeof payload.scheduled_event === "string"
        ? payload.scheduled_event
        : String(payload.scheduled_event?.uri ?? "");
    const details = await scheduledEvent(eventUri);
    const location = details.location ?? {};
    const joinUrl = String(
      location.join_url ?? location.location ?? payload.location?.join_url ?? ""
    );
    const id = String(payload.uri ?? payload.uuid ?? eventUri);
    const now = new Date().toISOString();
    const appointment: Appointment = {
      id,
      eventUri,
      title: String(details.name ?? "Coaching session"),
      startTime: String(details.start_time ?? ""),
      endTime: String(details.end_time ?? ""),
      status: event.event === "invitee.canceled" ? "canceled" : "active",
      cancelUrl: String(payload.cancel_url ?? ""),
      rescheduleUrl: String(payload.reschedule_url ?? ""),
      joinUrl: joinUrl || undefined,
      zoomMeetingId: meetingId(joinUrl),
      updatedAt: now,
    };

    let payment = paymentFromCalendly(
      payload.payment,
      appointment,
      String(payload.created_at ?? now)
    );
    if (payment && !payment.receiptUrl) {
      try {
        payment = {
          ...payment,
          receiptUrl: await stripeReceiptUrl(payment.id),
        };
      } catch (error) {
        console.warn("[Calendly webhook] Stripe receipt lookup failed", error);
      }
    }

    const store = portalStore();
    const client = await ensureClientForBooking(
      store,
      email,
      String(payload.name ?? "")
    );
    client.appointments ??= [];
    const existingIndex = client.appointments.findIndex(item => item.id === id);
    if (existingIndex >= 0) client.appointments[existingIndex] = appointment;
    else client.appointments.push(appointment);
    if (payment) {
      client.payments ??= [];
      const paymentIndex = client.payments.findIndex(
        item => item.id === payment.id
      );
      if (paymentIndex >= 0) client.payments[paymentIndex] = payment;
      else client.payments.push(payment);
    }
    client.updatedAt = now;
    await saveClient(store, client);
    return json({ received: true });
  } catch (error) {
    console.error("[Calendly webhook] Request failed", error);
    return json({ error: "Webhook processing failed." }, 500);
  }
};

export const config: Config = { path: "/api/calendly-webhook" };
