import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  stripeCustomerId: varchar("stripeCustomerId", { length: 255 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Tenant responses for property sale notifications
 */
export const tenantResponses = mysqlTable("tenantResponses", {
  id: int("id").autoincrement().primaryKey(),
  propertyAddress: varchar("propertyAddress", { length: 255 }).notNull(),
  tenantName: varchar("tenantName", { length: 255 }).notNull(),
  tenantEmail: varchar("tenantEmail", { length: 320 }).notNull(),
  tenantPhone: varchar("tenantPhone", { length: 50 }),
  
  // Photography availability
  photoDate1: varchar("photoDate1", { length: 100 }),
  photoDate2: varchar("photoDate2", { length: 100 }),
  photoDate3: varchar("photoDate3", { length: 100 }),
  
  // Showing preferences
  showingPreferences: text("showingPreferences"),
  blackoutDates: text("blackoutDates"),
  advanceNoticeHours: int("advanceNoticeHours").default(24),
  
  // Questions/concerns
  questions: text("questions"),
  
  // Status tracking
  status: mysqlEnum("status", ["pending", "reviewed", "scheduled"]).default("pending").notNull(),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type TenantResponse = typeof tenantResponses.$inferSelect;
export type InsertTenantResponse = typeof tenantResponses.$inferInsert;

/**
 * Testimonials table for managing client reviews
 */
export const testimonials = mysqlTable("testimonials", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  initial: varchar("initial", { length: 10 }).notNull(),
  date: varchar("date", { length: 100 }).notNull(),
  title: varchar("title", { length: 500 }).notNull(),
  text: text("text").notNull(),
  featured: int("featured").default(0).notNull(), // 0 = not featured, 1 = featured on Services page
  displayOrder: int("displayOrder").default(0).notNull(), // for manual ordering
  category: varchar("category", { length: 50 }), // e.g., "personal", "couples", "transformation"
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = typeof testimonials.$inferInsert;

/**
 * Application responses for Root-Work Mentorship
 */
export const applications = mysqlTable("applications", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 320 }),
  phone: varchar("phone", { length: 50 }),
  
  // Application questions
  whyNow: text("whyNow").notNull(),
  whatTried: text("whatTried").notNull(),
  readyForCommitment: text("readyForCommitment").notNull(),
  
  // Status tracking
  status: mysqlEnum("status", ["pending", "reviewed", "scheduled", "accepted", "declined"]).default("pending").notNull(),
  notes: text("notes"), // Admin notes about the applicant
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Application = typeof applications.$inferSelect;
export type InsertApplication = typeof applications.$inferInsert;
