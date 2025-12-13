# Virtual CFO Implementation Guide

**Objective:** Execute the transition to an automated financial system.

This guide consolidates the Drive Architecture and Automation Workflows into a step-by-step execution plan.

## Phase 1: The Foundation (Google Drive)

**Action:** Create the folder structure manually.
1.  Log in to your Google Drive.
2.  Create a new folder: `00_JBLC_Master`.
3.  Inside, create the 5 core pillars:
    *   `01_Financials`
    *   `02_Legal`
    *   `03_Clients`
    *   `04_Content_Marketing`
    *   `05_Products`
4.  Create the "Drop Zone" folder at the top level: `!_INBOX_TO_SORT`.

## Phase 2: The Automation (Zapier)

**Action:** Connect your tools.
1.  **Sign up for Zapier** (Free tier may suffice to start, Starter tier recommended for multi-step zaps).
2.  **Connect Accounts:**
    *   Stripe
    *   Google Sheets
    *   Gmail
    *   Google Drive
3.  **Build "Zap #1" (Income Tracker):**
    *   *Trigger:* Stripe "New Payment".
    *   *Action:* Google Sheets "Create Spreadsheet Row" (in `JBLC_Revenue_Tracker`).
4.  **Build "Zap #2" (Receipt Filer):**
    *   *Trigger:* Gmail "New Attachment" (Search string: "has:attachment label:receipts").
    *   *Action:* Google Drive "Upload File" (to `!_INBOX_TO_SORT`).

## Phase 3: The Rituals (Your Role)

Even with automation, a CFO needs to review the books.

### **Weekly Ritual (Friday, 15 mins)**
*   **Check the Inbox:** Look at `!_INBOX_TO_SORT`. Are files piling up?
*   **Check the Sheet:** Open `JBLC_Revenue_Tracker`. Does the "Net Revenue" match your mental math?
*   **Clear the Mental RAM:** Know that every dollar is recorded.

### **Monthly Ritual (1st of Month, 30 mins)**
*   **The "Profit First" Transfer:**
    *   Look at Total Profit in the tracker.
    *   Move **20%** to your Tax Savings Account.
    *   Move **10%** to your "War Chest" (Business Savings).
    *   The rest is for Operating Expenses and Owner's Draw.
*   **Upload Statements:** Download bank PDFs and drop them in `!_INBOX_TO_SORT`.

## Phase 4: The "Robot" Script (Future State)

Once the folders are active, we can deploy a Google Apps Script to auto-sort files from the Inbox to their final destination based on keywords (e.g., "Stripe" -> `01_Income`).

**For now:** The "Drop Zone" + Zapier is a massive leap forward. It ensures all documents are in *one place* (Google Drive) rather than scattered across email and desktop.

---
*Designed by Manus AI for JBLC*
