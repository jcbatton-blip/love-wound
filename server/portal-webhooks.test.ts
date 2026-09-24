import { createHmac } from "node:crypto";
import { describe, expect, it } from "vitest";
import { verifyCalendlySignature } from "../netlify/functions/calendly-webhook.mts";
import { paymentFromCalendly } from "../netlify/functions/calendly-webhook.mts";
import { verifyZoomSignature } from "../netlify/functions/zoom-webhook.mts";

describe("portal integration webhook security", () => {
  it("accepts a current Calendly signature and rejects a changed payload", () => {
    const now = Date.UTC(2026, 8, 23, 16, 0, 0);
    const timestamp = String(now / 1000);
    const raw = JSON.stringify({ event: "invitee.created" });
    const secret = "calendly-test-secret";
    const signature = createHmac("sha256", secret)
      .update(`${timestamp}.${raw}`)
      .digest("hex");

    expect(
      verifyCalendlySignature(
        raw,
        `t=${timestamp},v1=${signature}`,
        secret,
        now
      )
    ).toBe(true);
    expect(
      verifyCalendlySignature(
        `${raw} `,
        `t=${timestamp},v1=${signature}`,
        secret,
        now
      )
    ).toBe(false);
  });

  it("accepts a current Zoom signature and rejects an expired request", () => {
    const now = Date.UTC(2026, 8, 23, 16, 0, 0);
    const timestamp = String(now / 1000);
    const raw = JSON.stringify({ event: "meeting.summary_completed" });
    const secret = "zoom-test-secret";
    const signature = `v0=${createHmac("sha256", secret)
      .update(`v0:${timestamp}:${raw}`)
      .digest("hex")}`;

    expect(verifyZoomSignature(raw, timestamp, signature, secret, now)).toBe(
      true
    );
    expect(
      verifyZoomSignature(
        raw,
        timestamp,
        signature,
        secret,
        now + 6 * 60 * 1000
      )
    ).toBe(false);
  });
});

describe("Calendly payment records", () => {
  it("turns a successful Stripe payment into a client receipt record", () => {
    const record = paymentFromCalendly(
      {
        external_id: "ch_paid-session",
        provider: "stripe",
        amount: 150,
        currency: "USD",
        successful: true,
      },
      {
        id: "invitee-1",
        eventUri: "event-1",
        title: "Private coaching session",
        startTime: "2026-09-24T17:00:00Z",
        endTime: "2026-09-24T18:00:00Z",
        status: "active",
        cancelUrl: "",
        rescheduleUrl: "",
        updatedAt: "2026-09-24T16:00:00Z",
      },
      "2026-09-24T16:00:00Z",
      "https://pay.stripe.com/receipts/payment/example"
    );

    expect(record).toMatchObject({
      id: "ch_paid-session",
      appointmentId: "invitee-1",
      amount: 150,
      currency: "USD",
      status: "paid",
      receiptUrl: "https://pay.stripe.com/receipts/payment/example",
    });
  });

  it("does not create a record for unsuccessful payment data", () => {
    const appointment = {
      id: "invitee-1",
      eventUri: "event-1",
      title: "Private coaching session",
      startTime: "2026-09-24T17:00:00Z",
      endTime: "2026-09-24T18:00:00Z",
      status: "active" as const,
      cancelUrl: "",
      rescheduleUrl: "",
      updatedAt: "2026-09-24T16:00:00Z",
    };
    expect(
      paymentFromCalendly(
        { provider: "stripe", amount: 150, successful: false },
        appointment,
        "2026-09-24T16:00:00Z"
      )
    ).toBeNull();
  });
});
