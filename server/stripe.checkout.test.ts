import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock Stripe before importing routers
vi.mock("stripe", () => {
  return {
    default: vi.fn().mockImplementation(() => ({
      checkout: {
        sessions: {
          create: vi.fn().mockResolvedValue({
            url: "https://checkout.stripe.com/test-session-url",
          }),
        },
      },
      billingPortal: {
        sessions: {
          create: vi.fn().mockResolvedValue({
            url: "https://billing.stripe.com/test-portal-url",
          }),
        },
      },
    })),
  };
});

// Import products to verify they exist
import { getProductById, PRODUCTS } from "../shared/products";

describe("Stripe Products Configuration", () => {
  it("should have products defined", () => {
    expect(PRODUCTS).toBeDefined();
    expect(Array.isArray(PRODUCTS)).toBe(true);
    expect(PRODUCTS.length).toBeGreaterThan(0);
  });

  it("should find mirror_session product", () => {
    const product = getProductById("mirror_session");
    expect(product).toBeDefined();
    expect(product?.name).toBe("The Mirror Session");
    expect(product?.price).toBe(35000); // $350.00 in cents
  });

  it("should find teaching_clinic product", () => {
    const product = getProductById("teaching_clinic");
    expect(product).toBeDefined();
    expect(product?.name).toBe("The Teaching Clinic");
    expect(product?.price).toBe(15000); // $150.00 in cents
  });

  it("should find kit product", () => {
    const product = getProductById("kit");
    expect(product).toBeDefined();
    expect(product?.name).toBe("The Kit");
    expect(product?.price).toBe(4700); // $47.00 in cents
  });

  it("should find inner_circle product", () => {
    const product = getProductById("inner_circle");
    expect(product).toBeDefined();
    expect(product?.name).toBe("The Inner Circle");
    expect(product?.price).toBe(2900); // $29.00 in cents
    expect(product?.type).toBe("subscription");
  });

  it("should return undefined for non-existent product", () => {
    const product = getProductById("non_existent_product");
    expect(product).toBeUndefined();
  });
});

describe("Stripe Checkout Integration", () => {
  it("should have all required product fields", () => {
    for (const product of PRODUCTS) {
      expect(product.id).toBeDefined();
      expect(product.name).toBeDefined();
      expect(product.description).toBeDefined();
      expect(product.price).toBeDefined();
      expect(product.currency).toBe("usd");
      expect(typeof product.price).toBe("number");
      expect(product.price).toBeGreaterThan(0);
    }
  });
});
