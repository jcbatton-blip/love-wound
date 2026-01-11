import type { Express } from "express";
import { getDb } from "../db";
import { applications } from "../../drizzle/schema";

export function registerSubmitApplicationRoute(app: Express) {
  app.post("/api/submit-application", async (req, res) => {
    try {
      const { name, email, phone, whyNow, whatTried, readyForCommitment } = req.body;

      // Validate required fields
      if (!whyNow || !whatTried || !readyForCommitment) {
        return res.status(400).json({ 
          error: "Missing required fields: whyNow, whatTried, readyForCommitment" 
        });
      }

      const db = await getDb();
      if (!db) {
        return res.status(500).json({ error: "Database not available" });
      }

      // Insert application into database
      const [application] = await db.insert(applications).values({
        name: name || null,
        email: email || null,
        phone: phone || null,
        whyNow,
        whatTried,
        readyForCommitment,
        status: "pending",
      });

      res.json({ 
        success: true, 
        applicationId: application.insertId 
      });
    } catch (error) {
      console.error("Error submitting application:", error);
      res.status(500).json({ error: "Failed to submit application" });
    }
  });
}
