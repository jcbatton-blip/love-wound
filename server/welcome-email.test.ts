import { describe, it, expect } from "vitest";
import { WELCOME_EMAILS, getWelcomeEmail } from "./welcome-emails";

describe("Welcome Email Templates", () => {
  it("should have welcome emails for all products", () => {
    const expectedProducts = [
      "kit",
      "mirror_session",
      "teaching_clinic",
      "group_container",
      "individual_container",
      "individual_container_plan",
      "couples_container",
      "couples_container_plan",
      "retreat"
    ];

    for (const productId of expectedProducts) {
      const email = getWelcomeEmail(productId);
      expect(email).toBeDefined();
      expect(email?.subject).toBeDefined();
      expect(email?.body).toBeDefined();
      expect(email?.subject.length).toBeGreaterThan(0);
      expect(email?.body.length).toBeGreaterThan(100);
    }
  });

  it("should return null for non-existent product", () => {
    const email = getWelcomeEmail("non_existent_product");
    expect(email).toBeNull();
  });

  it("should have proper structure for kit welcome email", () => {
    const email = getWelcomeEmail("kit");
    expect(email).toBeDefined();
    expect(email?.subject).toContain("Welcome to The Kit");
    expect(email?.body).toContain("Jeff Batton");
    expect(email?.body).toContain("jeff@jeffbatton.com");
  });

  it("should have proper structure for mirror session welcome email", () => {
    const email = getWelcomeEmail("mirror_session");
    expect(email).toBeDefined();
    expect(email?.subject).toContain("Mirror Session");
    expect(email?.body).toContain("90 minutes");
    expect(email?.body).toContain("jeff@jeffbatton.com");
  });

  it("should have proper structure for teaching clinic welcome email", () => {
    const email = getWelcomeEmail("teaching_clinic");
    expect(email).toBeDefined();
    expect(email?.subject).toContain("Teaching Clinic");
    expect(email?.body).toContain("60 minutes");
    expect(email?.body).toContain("interns");
  });

  it("should have proper structure for group container welcome email", () => {
    const email = getWelcomeEmail("group_container");
    expect(email).toBeDefined();
    expect(email?.subject).toContain("Group Container");
    expect(email?.body).toContain("Tuesday");
    expect(email?.body).toContain("6pm EST");
  });

  it("should have proper structure for individual container welcome email", () => {
    const email = getWelcomeEmail("individual_container");
    expect(email).toBeDefined();
    expect(email?.subject).toContain("Container");
    expect(email?.body).toContain("12 weekly");
    expect(email?.body).toContain("Voxer");
  });

  it("should have proper structure for couples container welcome email", () => {
    const email = getWelcomeEmail("couples_container");
    expect(email).toBeDefined();
    expect(email?.subject).toContain("Couples Container");
    expect(email?.body).toContain("12 weekly");
    expect(email?.body).toContain("relationship");
  });

  it("should have proper structure for retreat welcome email", () => {
    const email = getWelcomeEmail("retreat");
    expect(email).toBeDefined();
    expect(email?.subject).toContain("Retreat");
    expect(email?.body).toContain("2.5 days");
    expect(email?.body).toContain("immersive");
  });

  it("should include contact information in all emails", () => {
    const productIds = Object.keys(WELCOME_EMAILS);
    
    for (const productId of productIds) {
      const email = getWelcomeEmail(productId);
      expect(email?.body).toContain("jeff@jeffbatton.com");
      expect(email?.body).toContain("Jeff Batton");
    }
  });

  it("should have clear expectations in all emails", () => {
    const productIds = Object.keys(WELCOME_EMAILS);
    
    for (const productId of productIds) {
      const email = getWelcomeEmail(productId);
      expect(email?.body).toContain("expect");
    }
  });
});
