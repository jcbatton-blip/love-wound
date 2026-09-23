import { beforeEach, describe, expect, it, vi } from "vitest";

const records = new Map<string, unknown>();
const store = {
  async get(key: string) {
    return records.get(key) ?? null;
  },
  async setJSON(key: string, value: unknown) {
    records.set(key, structuredClone(value));
  },
  async set(key: string, value: unknown) {
    records.set(key, value);
  },
  async delete(key: string) {
    records.delete(key);
  },
  async list() {
    return { blobs: [], directories: [] };
  },
};

const { mockGetUser } = vi.hoisted(() => ({
  mockGetUser: vi.fn(),
}));

vi.mock("@netlify/blobs", () => ({
  getStore: () => store,
  getDeployStore: () => store,
}));

vi.mock("@netlify/identity", () => ({
  getUser: mockGetUser,
}));

import portalHandler from "../netlify/functions/client-portal.mts";

const origin = "https://jeffbatton.com";

function request(path: string, options: RequestInit = {}) {
  return new Request(`${origin}/api/client-portal${path}`, {
    ...options,
    headers: {
      origin,
      "content-type": "application/json",
      ...(options.headers || {}),
    },
  });
}

async function call(path: string, options: RequestInit = {}) {
  return portalHandler(request(path, options), {} as never);
}

function cookieFrom(response: Response) {
  return response.headers.get("set-cookie")?.split(";")[0] ?? "";
}

beforeEach(() => {
  records.clear();
  mockGetUser.mockReset();
  mockGetUser.mockResolvedValue(null);
  Object.assign(globalThis, {
    Netlify: {
      env: {
        get: (key: string) =>
          ({
            PORTAL_SESSION_SECRET:
              "a-secure-test-secret-that-is-longer-than-32-characters",
            PORTAL_ADMIN_PASSWORD: "test-admin-password",
          })[key],
      },
      context: { deploy: { context: "production" } },
    },
  });
});

describe("private client portal", () => {
  it("keeps admin endpoints private", async () => {
    const response = await call("/admin/clients");
    expect(response.status).toBe(401);
  });

  it("lets a confirmed client create a profile", async () => {
    mockGetUser.mockResolvedValue({
      id: "identity-user-1",
      email: "avery@example.com",
      name: "Avery Example",
      confirmedAt: "2026-09-23T10:00:00.000Z",
    });

    const beforeSetup = await call("/session");
    expect(beforeSetup.status).toBe(200);
    await expect(beforeSetup.json()).resolves.toMatchObject({
      role: "client",
      needsProfile: true,
    });

    const setup = await call("/onboard", {
      method: "POST",
      body: JSON.stringify({
        name: "Avery Example",
        preferredName: "Avery",
        focus: "Choose clarity over urgency.",
      }),
    });
    expect(setup.status).toBe(201);
    const setupBody = await setup.json();
    expect(setupBody.client.name).toBe("Avery Example");
    expect(setupBody.client.appointments).toEqual([]);
    expect(JSON.stringify(setupBody)).not.toContain("identity-user-1");
  });

  it("shows clients only their own published session summaries", async () => {
    const adminLogin = await call("/admin-login", {
      method: "POST",
      body: JSON.stringify({ password: "test-admin-password" }),
    });
    expect(adminLogin.status).toBe(200);
    const adminCookie = cookieFrom(adminLogin);

    const created = await call("/admin/clients", {
      method: "POST",
      headers: { cookie: adminCookie },
      body: JSON.stringify({
        name: "Avery Example",
        email: "avery@example.com",
        preferredName: "Avery",
        focus: "Practice choosing clarity over urgency.",
        memberSince: "2026-01-15",
      }),
    });
    expect(created.status).toBe(201);
    const createdBody = await created.json();
    const clientId = createdBody.client.id;

    const draft = await call(`/admin/clients/${clientId}/summaries`, {
      method: "POST",
      headers: { cookie: adminCookie },
      body: JSON.stringify({
        sessionDate: "2026-09-01",
        title: "Jeff-only hold",
        reflection: "This should remain private.",
        status: "draft",
      }),
    });
    expect(draft.status).toBe(201);

    const published = await call(`/admin/clients/${clientId}/summaries`, {
      method: "POST",
      headers: { cookie: adminCookie },
      body: JSON.stringify({
        sessionDate: "2026-09-15",
        title: "Choosing the steadier response",
        reflection:
          "You noticed that a pause creates room for a different choice.",
        takeaways: ["Urgency is information, not instruction."],
        nextSteps: ["Pause before replying."],
        status: "published",
      }),
    });
    expect(published.status).toBe(201);

    mockGetUser.mockResolvedValue({
      id: "identity-user-1",
      email: "avery@example.com",
      name: "Avery Example",
      confirmedAt: "2026-09-23T10:00:00.000Z",
    });
    const clientSession = await call("/session");
    expect(clientSession.status).toBe(200);
    const clientBody = await clientSession.json();
    expect(clientBody.client.name).toBe("Avery Example");
    expect(clientBody.client.summaries).toHaveLength(1);
    expect(clientBody.client.summaries[0].title).toBe(
      "Choosing the steadier response"
    );
    expect(JSON.stringify(clientBody)).not.toContain("Jeff-only hold");
    expect(JSON.stringify(clientBody)).not.toContain("identityUserId");

    const adminAttempt = await call("/admin/clients");
    expect(adminAttempt.status).toBe(401);
  });
});
