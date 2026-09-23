import { createHmac } from "node:crypto";
import { describe, expect, it } from "vitest";
import { verifyCalendlySignature } from "../netlify/functions/calendly-webhook.mts";
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
