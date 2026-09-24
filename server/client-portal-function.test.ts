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

const {
  mockGetUser,
  mockCustomerList,
  mockCustomerCreate,
  mockCheckoutCreate,
  mockCheckoutRetrieve,
} = vi.hoisted(() => ({
  mockGetUser: vi.fn(),
  mockCustomerList: vi.fn(),
  mockCustomerCreate: vi.fn(),
  mockCheckoutCreate: vi.fn(),
  mockCheckoutRetrieve: vi.fn(),
}));

vi.mock("@netlify/blobs", () => ({
  getStore: () => store,
  getDeployStore: () => store,
}));

vi.mock("@netlify/identity", () => ({
  getUser: mockGetUser,
}));

vi.mock("stripe", () => ({
  default: class StripeMock {
    customers = { list: mockCustomerList, create: mockCustomerCreate };
    checkout = {
      sessions: {
        create: mockCheckoutCreate,
        retrieve: mockCheckoutRetrieve,
      },
    };
  },
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
  mockCustomerCreate.mockReset();
  mockCustomerCreate.mockResolvedValue({ id: "cus_test123" });
  mockCustomerList.mockReset();
  mockCustomerList.mockResolvedValue({ data: [] });
  mockCheckoutCreate.mockReset();
  mockCheckoutCreate.mockResolvedValue({
    id: "cs_test_saved123",
    url: "https://checkout.stripe.com/c/pay/test-session",
  });
  mockCheckoutRetrieve.mockReset();
  Object.assign(globalThis, {
    Netlify: {
      env: {
        get: (key: string) =>
          ({
            PORTAL_SESSION_SECRET:
              "a-secure-test-secret-that-is-longer-than-32-characters",
            PORTAL_ADMIN_PASSWORD: "test-admin-password",
            STRIPE_SECRET_KEY: "sk_test_portal",
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

    const storedClient = structuredClone(
      records.get(`clients/${clientId}`)
    ) as Record<string, any>;
    storedClient.payments = [
      {
        id: "ch_private-stripe-id",
        appointmentId: "invitee-1",
        description: "Private coaching session",
        amount: 150,
        currency: "USD",
        status: "paid",
        paidAt: "2026-09-15T16:00:00.000Z",
        receiptUrl: "https://pay.stripe.com/receipts/payment/example",
        updatedAt: "2026-09-15T16:00:00.000Z",
      },
    ];
    records.set(`clients/${clientId}`, storedClient);

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
    expect(clientBody.client.payments).toEqual([
      {
        description: "Private coaching session",
        amount: 150,
        currency: "USD",
        status: "paid",
        paidAt: "2026-09-15T16:00:00.000Z",
        receiptUrl: "https://pay.stripe.com/receipts/payment/example",
      },
    ]);
    expect(JSON.stringify(clientBody)).not.toContain("Jeff-only hold");
    expect(JSON.stringify(clientBody)).not.toContain("identityUserId");
    expect(JSON.stringify(clientBody)).not.toContain("ch_private-stripe-id");

    const adminAttempt = await call("/admin/clients");
    expect(adminAttempt.status).toBe(401);
  });

  it("saves a card only after explicit consent and Stripe confirmation", async () => {
    mockGetUser.mockResolvedValue({
      id: "identity-user-card",
      email: "card@example.com",
      name: "Card Example",
      confirmedAt: "2026-09-24T10:00:00.000Z",
    });

    const setup = await call("/onboard", {
      method: "POST",
      body: JSON.stringify({
        name: "Card Example",
        preferredName: "Card",
        focus: "",
      }),
    });
    expect(setup.status).toBe(201);
    const clientId = (await setup.json()).client.id;

    const withoutConsent = await call("/billing/setup", {
      method: "POST",
      body: JSON.stringify({ consent: false }),
    });
    expect(withoutConsent.status).toBe(400);
    expect(mockCustomerCreate).not.toHaveBeenCalled();

    const checkout = await call("/billing/setup", {
      method: "POST",
      body: JSON.stringify({ consent: true }),
    });
    expect(checkout.status).toBe(200);
    await expect(checkout.json()).resolves.toEqual({
      url: "https://checkout.stripe.com/c/pay/test-session",
    });
    expect(mockCheckoutCreate).toHaveBeenCalledWith(
      expect.objectContaining({
        mode: "setup",
        customer: "cus_test123",
        client_reference_id: clientId,
      })
    );

    mockCheckoutRetrieve.mockResolvedValue({
      mode: "setup",
      status: "complete",
      client_reference_id: clientId,
      customer: "cus_test123",
    });
    const confirmed = await call("/billing/setup-status", {
      method: "POST",
      body: JSON.stringify({ sessionId: "cs_test_saved123" }),
    });
    expect(confirmed.status).toBe(200);
    await expect(confirmed.json()).resolves.toEqual({
      billing: { cardSaved: true },
    });

    const session = await call("/session");
    const sessionBody = await session.json();
    expect(sessionBody.client.billing).toEqual({ cardSaved: true });
    expect(JSON.stringify(sessionBody)).not.toContain("cus_test123");
  });
});
