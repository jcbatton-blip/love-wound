import { randomUUID } from "node:crypto";
import { getDeployStore, getStore, type Store } from "@netlify/blobs";

export type Appointment = {
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

export type IntegrationClient = {
  version: 1 | 2;
  id: string;
  identityUserId?: string;
  name: string;
  email: string;
  preferredName: string;
  focus: string;
  memberSince: string;
  status: "active" | "paused";
  accessCodeHash?: string;
  appointments?: Appointment[];
  summaries: Array<Record<string, unknown>>;
  createdAt: string;
  updatedAt: string;
};

const CLIENT_INDEX_KEY = "client-index";

export function portalStore(): Store {
  const runtime = globalThis as typeof globalThis & {
    Netlify?: { context?: { deploy?: { context?: string } } };
  };
  if (runtime.Netlify?.context?.deploy?.context === "production") {
    return getStore("client-portal", { consistency: "strong" });
  }
  return getDeployStore({ name: "client-portal" });
}

export function runtimeEnv(name: string): string {
  const runtime = globalThis as typeof globalThis & {
    Netlify?: { env?: { get: (key: string) => string | undefined } };
  };
  const value = runtime.Netlify?.env?.get(name) ?? process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export async function getClientIds(store: Store): Promise<string[]> {
  return (
    ((await store.get(CLIENT_INDEX_KEY, { type: "json" })) as
      | string[]
      | null) ?? []
  );
}

export async function getClient(
  store: Store,
  id: string
): Promise<IntegrationClient | null> {
  return store.get(`clients/${id}`, {
    type: "json",
  }) as Promise<IntegrationClient | null>;
}

export async function saveClient(
  store: Store,
  client: IntegrationClient
): Promise<void> {
  await store.setJSON(`clients/${client.id}`, client);
}

export async function findClientByEmail(
  store: Store,
  email: string
): Promise<IntegrationClient | null> {
  const normalized = email.trim().toLowerCase();
  for (const id of await getClientIds(store)) {
    const client = await getClient(store, id);
    if (client?.email.trim().toLowerCase() === normalized) return client;
  }
  return null;
}

export async function ensureClientForBooking(
  store: Store,
  email: string,
  name: string
): Promise<IntegrationClient> {
  const existing = await findClientByEmail(store, email);
  if (existing) return existing;
  const now = new Date().toISOString();
  const client: IntegrationClient = {
    version: 2,
    id: randomUUID(),
    name: name.trim() || email,
    email: email.trim().toLowerCase(),
    preferredName: name.trim().split(/\s+/)[0] || "",
    focus: "",
    memberSince: now.slice(0, 10),
    status: "active",
    appointments: [],
    summaries: [],
    createdAt: now,
    updatedAt: now,
  };
  await saveClient(store, client);
  const ids = await getClientIds(store);
  if (!ids.includes(client.id)) {
    await store.setJSON(CLIENT_INDEX_KEY, [...ids, client.id]);
  }
  return client;
}

export async function allClients(store: Store): Promise<IntegrationClient[]> {
  const clients = await Promise.all(
    (await getClientIds(store)).map(id => getClient(store, id))
  );
  return clients.filter((client): client is IntegrationClient =>
    Boolean(client)
  );
}
