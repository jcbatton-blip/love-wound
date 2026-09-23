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

vi.mock("@netlify/blobs", () => ({
  getStore: () => store,
  getDeployStore: () => store,
}));

import portalHandler from "./client-portal.mts";

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

  it("shows clients only their own published reflections", async () => {
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
    const accessCode = new URL(createdBody.inviteLink).hash.replace(
      "#access=",
      ""
    );

    const draft = await call(`/admin/clients/${clientId}/summaries`, {
      method: "POST",
      headers: { cookie: adminCookie },
      body: JSON.stringify({
        sessionDate: "2026-09-01",
        title: "Jeff-only draft",
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

    const clientLogin = await call("/client-login", {
      method: "POST",
      body: JSON.stringify({ code: decodeURIComponent(accessCode) }),
    });
    expect(clientLogin.status).toBe(200);
    const clientBody = await clientLogin.json();
    expect(clientBody.client.name).toBe("Avery Example");
    expect(clientBody.client.summaries).toHaveLength(1);
    expect(clientBody.client.summaries[0].title).toBe(
      "Choosing the steadier response"
    );
    expect(JSON.stringify(clientBody)).not.toContain("Jeff-only draft");
    expect(JSON.stringify(clientBody)).not.toContain("accessCodeHash");

    const clientCookie = cookieFrom(clientLogin);
    const adminAttempt = await call("/admin/clients", {
      headers: { cookie: clientCookie },
    });
    expect(adminAttempt.status).toBe(403);
  });
});
