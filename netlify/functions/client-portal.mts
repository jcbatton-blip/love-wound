import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";
import { getDeployStore, getStore, type Store } from "@netlify/blobs";
import { getUser, type User } from "@netlify/identity";
import type { Config, Context } from "@netlify/functions";
import Stripe from "stripe";

type SummaryStatus = "draft" | "published";
type ClientStatus = "active" | "paused";

type SessionSummary = {
  id: string;
  sourceId?: string;
  sessionDate: string;
  title: string;
  reflection: string;
  takeaways: string[];
  nextSteps: string[];
  status: SummaryStatus;
  createdAt: string;
  updatedAt: string;
};

type Appointment = {
  id: string;
  eventUri: string;
  title: string;
  startTime: string;
  endTime: string;
  status: "active" | "canceled";
  cancelUrl: string;
  rescheduleUrl: string;
  joinUrl?: string;
  zoomMeetingId?: string;
  updatedAt: string;
};

type PaymentRecord = {
  id: string;
  appointmentId: string;
  description: string;
  amount: number;
  currency: string;
  status: "paid" | "refunded";
  paidAt: string;
  receiptUrl?: string;
  updatedAt: string;
};

type BillingAuthorization = {
  status: "pending" | "active";
  acceptedAt: string;
  setupCompletedAt?: string;
  termsVersion: "2026-09-24";
};

type ClientRecord = {
  version: 1 | 2;
  id: string;
  identityUserId?: string;
  name: string;
  email: string;
  preferredName: string;
  focus: string;
  memberSince: string;
  status: ClientStatus;
  accessCodeHash?: string;
  appointments?: Appointment[];
  payments?: PaymentRecord[];
  stripeCustomerId?: string;
  billingAuthorization?: BillingAuthorization;
  summaries: SessionSummary[];
  createdAt: string;
  updatedAt: string;
};

type AdminSession = {
  role: "admin";
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

function signSession(session: AdminSession): string {
  const payload = Buffer.from(JSON.stringify(session)).toString("base64url");
  return `${payload}.${digest(payload)}`;
}

function readAdminSession(request: Request): AdminSession | null {
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
    ) as AdminSession;
    if (session.role !== "admin" || session.expiresAt <= Date.now())
      return null;
    return session;
  } catch {
    return null;
  }
}

function sessionCookie(session: AdminSession): string {
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
    appointments: (client.appointments ?? [])
      .filter(appointment => appointment.status === "active")
      .sort((a, b) => a.startTime.localeCompare(b.startTime))
      .map(
        ({
          zoomMeetingId: _zoomMeetingId,
          eventUri: _eventUri,
          ...appointment
        }) => appointment
      ),
    payments: (client.payments ?? [])
      .filter(payment => payment.status === "paid")
      .sort((a, b) => b.paidAt.localeCompare(a.paidAt))
      .map(
        ({
          id: _id,
          appointmentId: _appointmentId,
          updatedAt: _updatedAt,
          ...payment
        }) => payment
      ),
    billing: {
      cardSaved: client.billingAuthorization?.status === "active",
    },
    summaries: client.summaries
      .filter(summary => summary.status === "published")
      .sort((a, b) => b.sessionDate.localeCompare(a.sessionDate))
      .map(({ status: _status, ...summary }) => summary),
  };
}

function adminClient(client: ClientRecord) {
  const {
    accessCodeHash: _accessCodeHash,
    identityUserId,
    stripeCustomerId: _stripeCustomerId,
    ...safe
  } = client;
  return {
    ...safe,
    accountLinked: Boolean(identityUserId),
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

async function findClientForUser(
  store: Store,
  user: User
): Promise<ClientRecord | null> {
  const email = user.email?.trim().toLowerCase();
  const ids = await getClientIds(store);
  let emailMatch: ClientRecord | null = null;

  for (const id of ids) {
    const client = await getClient(store, id);
    if (!client) continue;
    if (client.identityUserId === user.id) return client;
    if (
      email &&
      !client.identityUserId &&
      client.email.trim().toLowerCase() === email
    ) {
      emailMatch = client;
    }
  }

  if (emailMatch) {
    emailMatch.identityUserId = user.id;
    emailMatch.version = 2;
    emailMatch.updatedAt = new Date().toISOString();
    await saveClient(store, emailMatch);
  }
  return emailMatch;
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
      const session: AdminSession = {
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

    const adminSession = readAdminSession(request);

    if (method === "GET" && path === "/session") {
      if (adminSession) return json({ role: "admin" });
      const user = await getUser();
      if (!user) return unauthorized();
      const client = await findClientForUser(store, user);
      if (!client) {
        return json({
          role: "client",
          needsProfile: true,
          user: { email: user.email ?? "", name: user.name ?? "" },
        });
      }
      if (client.status !== "active") return forbidden();
      return json({ role: "client", client: publicClient(client) });
    }

    if (method === "POST" && path === "/onboard") {
      const user = await getUser();
      if (!user?.email) return unauthorized();
      const input = await body(request);

      const now = new Date().toISOString();
      const name = cleanText(input.name, 120, true);
      let client = await findClientForUser(store, user);

      if (client?.status === "paused") return forbidden();

      if (client) {
        client.name = name;
        client.preferredName =
          cleanText(input.preferredName, 80) || name.split(/\s+/)[0];
        client.focus = cleanText(input.focus, 500);
        client.version = 2;
        client.updatedAt = now;
      } else {
        client = {
          version: 2,
          id: randomUUID(),
          identityUserId: user.id,
          name,
          email: user.email.toLowerCase(),
          preferredName:
            cleanText(input.preferredName, 80) || name.split(/\s+/)[0],
          focus: cleanText(input.focus, 500),
          memberSince: now.slice(0, 10),
          status: "active",
          appointments: [],
          payments: [],
          summaries: [],
          createdAt: now,
          updatedAt: now,
        };
        const ids = await getClientIds(store);
        if (!ids.includes(client.id))
          await store.setJSON(CLIENT_INDEX_KEY, [...ids, client.id]);
      }

      await saveClient(store, client);
      return json({ role: "client", client: publicClient(client) }, 201);
    }

    if (method === "POST" && path === "/billing/setup") {
      const user = await getUser();
      if (!user?.email) return unauthorized();
      const client = await findClientForUser(store, user);
      if (!client || client.status !== "active") return forbidden();
      const input = await body(request);
      if (input.consent !== true) {
        return json(
          { error: "Please authorize secure card storage before continuing." },
          400
        );
      }

      const stripe = new Stripe(env("STRIPE_SECRET_KEY"), {
        apiVersion: "2025-11-17.clover",
      });
      let customerId = client.stripeCustomerId;
      if (!customerId) {
        const existingCustomers = await stripe.customers.list({
          email: client.email,
          limit: 1,
        });
        customerId = existingCustomers.data[0]?.id;
        if (!customerId) {
          const customer = await stripe.customers.create({
            email: client.email,
            name: client.name,
            metadata: { portalClientId: client.id },
          });
          customerId = customer.id;
        }
      }

      const origin = new URL(request.url).origin;
      const checkout = await stripe.checkout.sessions.create({
        mode: "setup",
        currency: "usd",
        customer: customerId,
        client_reference_id: client.id,
        payment_method_types: ["card"],
        consent_collection: {
          payment_method_reuse_agreement: { position: "auto" },
        },
        custom_text: {
          submit: {
            message:
              "Your card is stored securely by our payment processor, not by Jeff Batton Life Coaching. It may be charged only for your scheduled coaching sessions at your agreed rate under the cancellation terms you accepted.",
          },
        },
        setup_intent_data: {
          description: "Card saved for scheduled coaching sessions",
          metadata: { portalClientId: client.id },
        },
        success_url: `${origin}/client-portal?billing=saved&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/client-portal?billing=canceled`,
      });
      if (!checkout.url) {
        return json({ error: "Secure card setup could not be opened." }, 502);
      }

      client.stripeCustomerId = customerId;
      client.billingAuthorization = {
        status: "pending",
        acceptedAt: new Date().toISOString(),
        termsVersion: "2026-09-24",
      };
      client.updatedAt = new Date().toISOString();
      await saveClient(store, client);
      return json({ url: checkout.url });
    }

    if (method === "POST" && path === "/billing/setup-status") {
      const user = await getUser();
      if (!user?.email) return unauthorized();
      const client = await findClientForUser(store, user);
      if (!client || client.status !== "active") return forbidden();
      const input = await body(request);
      const sessionId = cleanText(input.sessionId, 200, true);
      if (!/^cs_(?:test_|live_)?[A-Za-z0-9]+$/.test(sessionId)) {
        return json({ error: "That card confirmation is not valid." }, 400);
      }

      const stripe = new Stripe(env("STRIPE_SECRET_KEY"), {
        apiVersion: "2025-11-17.clover",
      });
      const checkout = await stripe.checkout.sessions.retrieve(sessionId);
      const checkoutCustomer =
        typeof checkout.customer === "string"
          ? checkout.customer
          : checkout.customer?.id;
      if (
        checkout.mode !== "setup" ||
        checkout.status !== "complete" ||
        checkout.client_reference_id !== client.id ||
        !client.stripeCustomerId ||
        checkoutCustomer !== client.stripeCustomerId
      ) {
        return json(
          { error: "The payment processor has not confirmed this card setup." },
          409
        );
      }

      const now = new Date().toISOString();
      client.billingAuthorization = {
        status: "active",
        acceptedAt: client.billingAuthorization?.acceptedAt ?? now,
        setupCompletedAt: now,
        termsVersion: "2026-09-24",
      };
      client.updatedAt = now;
      await saveClient(store, client);
      return json({ billing: { cardSaved: true } });
    }

    if (!adminSession) return unauthorized();
    if (path.startsWith("/admin/") && adminSession.role !== "admin")
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

      const existing = await Promise.all(
        (await getClientIds(store)).map(id => getClient(store, id))
      );
      if (
        existing.some(client => client?.email.trim().toLowerCase() === email)
      ) {
        return json(
          { error: "A client profile already exists for that email." },
          409
        );
      }

      const now = new Date().toISOString();
      const id = randomUUID();
      const memberSince = cleanText(input.memberSince, 10) || now.slice(0, 10);
      if (!validDate(memberSince))
        return json({ error: "Enter a valid start date." }, 400);
      const client: ClientRecord = {
        version: 2,
        id,
        name,
        email,
        preferredName:
          cleanText(input.preferredName, 80) || name.split(/\s+/)[0],
        focus: cleanText(input.focus, 500),
        memberSince,
        status: "active",
        appointments: [],
        payments: [],
        summaries: [],
        createdAt: now,
        updatedAt: now,
      };
      await saveClient(store, client);
      const ids = await getClientIds(store);
      if (!ids.includes(id))
        await store.setJSON(CLIENT_INDEX_KEY, [...ids, id]);
      return json({ client: adminClient(client) }, 201);
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
        version: 2,
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
        status: input.status === "draft" ? "draft" : "published",
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
      summary.status = input.status === "draft" ? "draft" : "published";
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
