import type { Express } from "express";
import { getDb } from "../db";
import { applications } from "../../drizzle/schema";
import { desc } from "drizzle-orm";

export function registerGetApplicationsRoute(app: Express) {
  app.get("/api/applications", async (req, res) => {
    try {
      const db = await getDb();
      if (!db) {
        return res.status(500).json({ error: "Database not available" });
      }

      // Fetch all applications, ordered by most recent first
      const allApplications = await db
        .select()
        .from(applications)
        .orderBy(desc(applications.createdAt));

      res.json(allApplications);
    } catch (error) {
      console.error("Error fetching applications:", error);
      res.status(500).json({ error: "Failed to fetch applications" });
    }
  });
}
