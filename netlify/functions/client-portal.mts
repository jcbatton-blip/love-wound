import {
  createHmac,
  randomBytes,
  randomUUID,
  timingSafeEqual,
} from "node:crypto";
import { getDeployStore, getStore, type Store } from "@netlify/blobs";
import type { Config, Context } from "@netlify/functions";

type SummaryStatus = "draft" | "published";
type ClientStatus = "active" | "paused";

type SessionSummary = {
  id: string;
  sessionDate: string;
  title: string;
  reflection: string;
  takeaways: string[];
  nextSteps: string[];
  status: SummaryStatus;
  createdAt: string;
  updatedAt: string;
};

type ClientRecord = {
  version: 1;
  id: string;
  name: string;
  email: string;
  preferredName: string;
  focus: string;
  memberSince: string;
  status: ClientStatus;
  accessCodeHash: string;
  summaries: SessionSummary[];
  createdAt: string;
  updatedAt: string;
};

type Session = {
  role: "admin" | "client";
  clientId?: string;
  issuedAt: number;
  expiresAt: number;
};

type RateLimitRecord = { count: number; resetAt: number };

const COOKIE_NAME = "jblc_portal";
const CLIENT_INDEX_KEY = "client-index";
const MAX_BODY_BYTES = 64_000;

function env(name: string): string {
  const runtime = globalThis as typeof globalThis & {
    Netlify?: { env?: { get: (key: string) => string | undefined } };
  };
  const value = runtime.Netlify?.env?.get(name);
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

function portalStore(): Store {
  const runtime = globalThis as typeof globalThis & {
    Netlify?: { context?: { deploy?: { context?: string } } };
  };
  if (runtime.Netlify?.context?.deploy?.context === "production") {
    return getStore("client-portal", { consistency: "strong" });
  }
  return getDeployStore({ name: "client-portal" });
}

function json(
  data: unknown,
  status = 200,
  headers: HeadersInit = {}
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store, private",
      "x-content-type-options": "nosniff",
      "referrer-policy": "no-referrer",
      ...headers,
    },
  });
}

function digest(value: string): string {
  return createHmac("sha256", env("PORTAL_SESSION_SECRET"))
    .update(value)
    .digest("base64url");
}

function safeEqual(left: string, right: string): boolean {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  return a.length === b.length && timingSafeEqual(a, b);
}

function signSession(session: Session): string {
  const payload = Buffer.from(JSON.stringify(session)).toString("base64url");
  return `${payload}.${digest(payload)}`;
}

function readSession(request: Request): Session | null {
  const cookie = request.headers.get("cookie") ?? "";
  const token = cookie
    .split(";")
    .map(part => part.trim())
    .find(part => part.startsWith(`${COOKIE_NAME}=`))
    ?.slice(COOKIE_NAME.length + 1);

  if (!token) return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature || !safeEqual(digest(payload), signature))
    return null;

  try {
    const session = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8")
    ) as Session;
    if (session.expiresAt <= Date.now()) return null;
    if (session.role === "client" && !session.clientId) return null;
    return session;
  } catch {
    return null;
  }
}

function sessionCookie(session: Session): string {
  const maxAge = Math.max(
    0,
    Math.floor((session.expiresAt - Date.now()) / 1000)
  );
  return `${COOKIE_NAME}=${signSession(session)}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${maxAge}`;
}

function clearCookie(): string {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;
}

function cleanText(
  value: unknown,
  maxLength: number,
  required = false
): string {
  if (typeof value !== "string") {
    if (required) throw new Error("A required field is missing.");
    return "";
  }
  const cleaned = value.trim().replace(/\r\n/g, "\n");
  if (required && !cleaned) throw new Error("A required field is missing.");
  if (cleaned.length > maxLength)
    throw new Error("One of the fields is too long.");
  return cleaned;
}

function cleanList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .slice(0, 12)
    .map(item => cleanText(item, 500))
    .filter(Boolean);
}

function validEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validDate(value: string): boolean {
  return (
    /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(Date.parse(`${value}T00:00:00Z`))
  );
}

async function body(request: Request): Promise<Record<string, unknown>> {
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) throw new Error("Request is too large.");
  try {
    return JSON.parse(raw || "{}") as Record<string, unknown>;
  } catch {
    throw new Error("Invalid request.");
  }
}

function requireSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

function publicClient(client: ClientRecord) {
  return {
    id: client.id,
    name: client.name,
    preferredName: client.preferredName,
    email: client.email,
    focus: client.focus,
    memberSince: client.memberSince,
    status: client.status,
    summaries: client.summaries
      .filter(summary => summary.status === "published")
      .sort((a, b) => b.sessionDate.localeCompare(a.sessionDate))
      .map(({ status: _status, ...summary }) => summary),
  };
}

function adminClient(client: ClientRecord) {
  const { accessCodeHash: _accessCodeHash, ...safe } = client;
  return {
    ...safe,
    summaries: [...safe.summaries].sort((a, b) =>
      b.sessionDate.localeCompare(a.sessionDate)
    ),
  };
}

async function getClient(
  store: Store,
  clientId: string
): Promise<ClientRecord | null> {
  return store.get(`clients/${clientId}`, {
    type: "json",
  }) as Promise<ClientRecord | null>;
}

async function getClientIds(store: Store): Promise<string[]> {
  return (
    ((await store.get(CLIENT_INDEX_KEY, { type: "json" })) as
      | string[]
      | null) ?? []
  );
}

async function saveClient(store: Store, client: ClientRecord): Promise<void> {
  await store.setJSON(`clients/${client.id}`, client);
}

function clientCodeHash(code: string): string {
  return digest(`client-code:${code}`);
}

function inviteFor(request: Request, code: string): string {
  const url = new URL(request.url);
  return `${url.origin}/client-portal#access=${encodeURIComponent(code)}`;
}

function requestFingerprint(request: Request): string {
  const ip = request.headers.get("x-nf-client-connection-ip") ?? "unknown";
  return digest(`rate:${ip}`).slice(0, 32);
}

async function isRateLimited(store: Store, request: Request): Promise<boolean> {
  const key = `rate/${requestFingerprint(request)}`;
  const record = (await store.get(key, {
    type: "json",
  })) as RateLimitRecord | null;
  if (!record || record.resetAt <= Date.now()) return false;
  return record.count >= 10;
}

async function failedLogin(store: Store, request: Request): Promise<void> {
  const key = `rate/${requestFingerprint(request)}`;
  const now = Date.now();
  const current = (await store.get(key, {
    type: "json",
  })) as RateLimitRecord | null;
  const record =
    !current || current.resetAt <= now
      ? { count: 1, resetAt: now + 15 * 60 * 1000 }
      : { count: current.count + 1, resetAt: current.resetAt };
  await store.setJSON(key, record);
}

async function successfulLogin(store: Store, request: Request): Promise<void> {
  await store.delete(`rate/${requestFingerprint(request)}`);
}

function unauthorized(): Response {
  return json({ error: "Please sign in to continue." }, 401);
}

function forbidden(): Response {
  return json({ error: "You do not have access to that." }, 403);
}

export default async (
  request: Request,
  _context: Context
): Promise<Response> => {
  try {
    const url = new URL(request.url);
    const path = url.pathname.replace(/^\/api\/client-portal\/?/, "/");
    const method = request.method.toUpperCase();
    const store = portalStore();

    if (method !== "GET" && !requireSameOrigin(request)) {
      return json({ error: "This request could not be verified." }, 403);
    }

    if (method === "POST" && path === "/client-login") {
      if (await isRateLimited(store, request)) {
        return json(
          { error: "Too many attempts. Please wait 15 minutes and try again." },
          429
        );
      }
      const input = await body(request);
      const code = cleanText(input.code, 160, true);
      const targetHash = clientCodeHash(code);
      const ids = await getClientIds(store);
      let client: ClientRecord | null = null;

      for (const id of ids) {
        const candidate = await getClient(store, id);
        if (candidate && safeEqual(candidate.accessCodeHash, targetHash)) {
          client = candidate;
          break;
        }
      }

      if (!client || client.status !== "active") {
        await failedLogin(store, request);
        return json(
          {
            error:
              "That private access link is not valid. Ask Jeff for a new one.",
          },
          401
        );
      }

      await successfulLogin(store, request);
      const now = Date.now();
      const session: Session = {
        role: "client",
        clientId: client.id,
        issuedAt: now,
        expiresAt: now + 30 * 24 * 60 * 60 * 1000,
      };
      return json({ role: "client", client: publicClient(client) }, 200, {
        "set-cookie": sessionCookie(session),
      });
    }

    if (method === "POST" && path === "/admin-login") {
      if (await isRateLimited(store, request)) {
        return json(
          { error: "Too many attempts. Please wait 15 minutes and try again." },
          429
        );
      }
      const input = await body(request);
      const password = cleanText(input.password, 300, true);
      if (
        !safeEqual(
          digest(`admin:${password}`),
          digest(`admin:${env("PORTAL_ADMIN_PASSWORD")}`)
        )
      ) {
        await failedLogin(store, request);
        return json({ error: "That password is not correct." }, 401);
      }
      await successfulLogin(store, request);
      const now = Date.now();
      const session: Session = {
        role: "admin",
        issuedAt: now,
        expiresAt: now + 12 * 60 * 60 * 1000,
      };
      return json({ role: "admin" }, 200, {
        "set-cookie": sessionCookie(session),
      });
    }

    if (method === "POST" && path === "/logout") {
      return json({ success: true }, 200, { "set-cookie": clearCookie() });
    }

    const session = readSession(request);

    if (method === "GET" && path === "/session") {
      if (!session) return unauthorized();
      if (session.role === "admin") return json({ role: "admin" });
      const client = await getClient(store, session.clientId!);
      if (!client || client.status !== "active") return unauthorized();
      return json({ role: "client", client: publicClient(client) });
    }

    if (!session) return unauthorized();

    if (path.startsWith("/admin/") && session.role !== "admin")
      return forbidden();

    if (method === "GET" && path === "/admin/clients") {
      const clients = await Promise.all(
        (await getClientIds(store)).map(id => getClient(store, id))
      );
      return json({
        clients: clients.filter(Boolean).map(client => adminClient(client!)),
      });
    }

    if (method === "POST" && path === "/admin/clients") {
      const input = await body(request);
      const name = cleanText(input.name, 120, true);
      const email = cleanText(input.email, 320, true).toLowerCase();
      if (!validEmail(email))
        return json({ error: "Enter a valid email address." }, 400);
      const now = new Date().toISOString();
      const id = randomUUID();
      const code = randomBytes(32).toString("base64url");
      const memberSince = cleanText(input.memberSince, 10) || now.slice(0, 10);
      if (!validDate(memberSince))
        return json({ error: "Enter a valid start date." }, 400);
      const client: ClientRecord = {
        version: 1,
        id,
        name,
        email,
        preferredName:
          cleanText(input.preferredName, 80) || name.split(/\s+/)[0],
        focus: cleanText(input.focus, 500),
        memberSince,
        status: "active",
        accessCodeHash: clientCodeHash(code),
        summaries: [],
        createdAt: now,
        updatedAt: now,
      };
      await saveClient(store, client);
      const ids = await getClientIds(store);
      if (!ids.includes(id))
        await store.setJSON(CLIENT_INDEX_KEY, [...ids, id]);
      return json(
        { client: adminClient(client), inviteLink: inviteFor(request, code) },
        201
      );
    }

    const clientMatch = path.match(/^\/admin\/clients\/([^/]+)$/);
    if (method === "PATCH" && clientMatch) {
      const client = await getClient(store, clientMatch[1]);
      if (!client) return json({ error: "Client not found." }, 404);
      const input = await body(request);
      const email = cleanText(input.email, 320, true).toLowerCase();
      if (!validEmail(email))
        return json({ error: "Enter a valid email address." }, 400);
      const status = input.status === "paused" ? "paused" : "active";
      const memberSince = cleanText(input.memberSince, 10);
      if (memberSince && !validDate(memberSince))
        return json({ error: "Enter a valid start date." }, 400);
      const updated: ClientRecord = {
        ...client,
        name: cleanText(input.name, 120, true),
        email,
        preferredName: cleanText(input.preferredName, 80),
        focus: cleanText(input.focus, 500),
        memberSince,
        status,
        updatedAt: new Date().toISOString(),
      };
      await saveClient(store, updated);
      return json({ client: adminClient(updated) });
    }

    const rotateMatch = path.match(
      /^\/admin\/clients\/([^/]+)\/rotate-access$/
    );
    if (method === "POST" && rotateMatch) {
      const client = await getClient(store, rotateMatch[1]);
      if (!client) return json({ error: "Client not found." }, 404);
      const code = randomBytes(32).toString("base64url");
      client.accessCodeHash = clientCodeHash(code);
      client.updatedAt = new Date().toISOString();
      await saveClient(store, client);
      return json({ inviteLink: inviteFor(request, code) });
    }

    const summariesMatch = path.match(/^\/admin\/clients\/([^/]+)\/summaries$/);
    if (method === "POST" && summariesMatch) {
      const client = await getClient(store, summariesMatch[1]);
      if (!client) return json({ error: "Client not found." }, 404);
      const input = await body(request);
      const sessionDate = cleanText(input.sessionDate, 10, true);
      if (!validDate(sessionDate))
        return json({ error: "Enter a valid session date." }, 400);
      const now = new Date().toISOString();
      const summary: SessionSummary = {
        id: randomUUID(),
        sessionDate,
        title: cleanText(input.title, 160, true),
        reflection: cleanText(input.reflection, 12_000, true),
        takeaways: cleanList(input.takeaways),
        nextSteps: cleanList(input.nextSteps),
        status: input.status === "published" ? "published" : "draft",
        createdAt: now,
        updatedAt: now,
      };
      client.summaries.push(summary);
      client.updatedAt = now;
      await saveClient(store, client);
      return json({ client: adminClient(client), summary }, 201);
    }

    const summaryMatch = path.match(
      /^\/admin\/clients\/([^/]+)\/summaries\/([^/]+)$/
    );
    if (method === "PATCH" && summaryMatch) {
      const client = await getClient(store, summaryMatch[1]);
      if (!client) return json({ error: "Client not found." }, 404);
      const summary = client.summaries.find(
        item => item.id === summaryMatch[2]
      );
      if (!summary) return json({ error: "Summary not found." }, 404);
      const input = await body(request);
      const sessionDate = cleanText(input.sessionDate, 10, true);
      if (!validDate(sessionDate))
        return json({ error: "Enter a valid session date." }, 400);
      summary.sessionDate = sessionDate;
      summary.title = cleanText(input.title, 160, true);
      summary.reflection = cleanText(input.reflection, 12_000, true);
      summary.takeaways = cleanList(input.takeaways);
      summary.nextSteps = cleanList(input.nextSteps);
      summary.status = input.status === "published" ? "published" : "draft";
      summary.updatedAt = new Date().toISOString();
      client.updatedAt = summary.updatedAt;
      await saveClient(store, client);
      return json({ client: adminClient(client), summary });
    }

    return json({ error: "Not found." }, 404);
  } catch (error) {
    console.error("[Client portal] Request failed", error);
    const message =
      error instanceof Error && !error.message.startsWith("Missing required")
        ? error.message
        : "The portal is temporarily unavailable. Please try again shortly.";
    return json({ error: message }, 500);
  }
};

export const config: Config = {
  path: ["/api/client-portal", "/api/client-portal/*"],
};
