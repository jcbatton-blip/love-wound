# Financial Automation Workflow: The "Virtual CFO" Engine

**Objective:** Eliminate manual data entry and ensure every dollar is tracked, categorized, and filed automatically.

This document outlines the "If This, Then That" logic we will implement using **Zapier** (or Make.com) to connect Stripe, your Bank, and Google Drive.

## 1. The Income Engine (Stripe → Drive → Sheets)

We need to know exactly when money hits the account without logging into Stripe.

| Trigger Event | Action 1 (Notification) | Action 2 (Record Keeping) | Action 3 (Filing) |
| :--- | :--- | :--- | :--- |
| **New Payment Received** (Stripe) | Send **Slack/Email** notification: "New $5,000 Payment from [Client]" | Add row to **"JBLC_Revenue_Tracker"** Google Sheet | Generate **PDF Receipt** and save to `01_Financials/01_Income` |
| **New Subscription Started** | Send notification: "New Monthly Recurring Revenue (MRR) Added" | Update **"Active_Clients"** Sheet | Create Client Folder in `03_Clients` |
| **Payment Failed** | **URGENT** Email to Jeff: "Payment Failed for [Client]" | Add to **"Collections"** Sheet | - |

### **The "Revenue Tracker" Google Sheet**
This sheet will be your dashboard. It will automatically populate with:
*   Date
*   Client Name
*   Product (e.g., "Individual Container")
*   Amount
*   Stripe Fee
*   Net Amount

## 2. The Expense Engine (Receipts → Drive)

Capturing expenses is usually the weak link. We will solve this with a "Forwarding Rule."

**The Setup:**
1.  Create a dedicated email alias: `receipts@jeffbatton.com` (or similar).
2.  **Zapier Trigger:** New Email to `receipts@...` with Attachment.
3.  **Action:** Save Attachment to Google Drive Folder `!_INBOX_TO_SORT`.
4.  **Auto-Rename:** Rename file to `Receipt_[Date]_[Sender].pdf`.

**Your Job:**
*   When you get a receipt in your inbox? Forward it to `receipts@...`.
*   When you buy something physical? Snap a photo and email it to `receipts@...`.
*   **Result:** It lands in the Drive folder, ready for the "Robot" script to file it.

## 3. The "Virtual CFO" Monthly Report

By automating the data collection above, we can generate a monthly snapshot.

**Automated Report Structure (Google Sheets Dashboard):**
*   **Total Revenue:** Sum of "Net Amount" column for the month.
*   **Run Rate:** Current MRR x 12.
*   **Expense Ratio:** (Total Expenses / Total Revenue) %.
*   **Profit:** Revenue - Expenses.

**The 1st of the Month Ritual:**
1.  Open the **"JBLC_Revenue_Tracker"** Sheet.
2.  Drag and drop the PDF Bank Statement into `!_INBOX_TO_SORT`.
3.  Review the "Profit" number.
4.  Transfer 20% of Profit to the "Tax Savings" bank account (Manual Step - Crucial).

---
*Designed by Manus AI for JBLC*
