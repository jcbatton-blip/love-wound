# 🛠️ Back of House System Audit & Streamlining Plan

**Objective:** Simplify Jeff Batton's coaching operations from a tangled web of tools (QuickBooks, Calendly, Zoom, Manual Invoicing) into a single, automated flow.

## 1. The Current State (The "Tangle")
Currently, a client interaction likely looks like this:
1.  Client emails/calls to book.
2.  Jeff sends a Calendly link (or manual times).
3.  Jeff creates a Zoom link manually (or via Calendly).
4.  Jeff goes to QuickBooks to generate an invoice.
5.  Client pays (maybe).
6.  Session happens.

**Pain Points:**
*   Too many logins.
*   Manual invoicing is a friction point.
*   "Chasing" payments.
*   Disjointed client experience.

## 2. The Proposed "One-Flow" System
We can consolidate this using **Stripe + Calendly + Website** as the core stack.

### A. Payments (Stripe)
*   **Replace QuickBooks Invoicing:** Use Stripe Payment Links directly on the website.
*   **Why:** Clients pay *before* the engagement starts. No more chasing.
*   **Action:**
    *   Create a "Product" in Stripe for "Individual Container" ($5,000).
    *   Create a "Product" in Stripe for "Couples Container" ($7,500).
    *   Embed these "Buy Buttons" on the Services page.

### B. Scheduling (Calendly)
*   **Embed on Website:** Instead of sending a link, have a `/booking` page on your site with your calendar embedded.
*   **Auto-Zoom:** Connect Zoom to Calendly.
    *   *Result:* When they book, the Zoom link is *automatically* generated and emailed to both of you. You never have to create a Zoom link manually again.
*   **Gating:** Set Calendly to only allow bookings if they have paid (optional, via Stripe integration) or keep it open for "Clients Only".

### C. The Client Portal (Website Footer)
*   **Zoom:** We have already added your standard Zoom link to the footer for easy access.
*   **Future:** We can add a "Book Your Next Session" link right next to it that opens your Calendly overlay.

## 3. Implementation Checklist

| Task | Status | Action Item |
| :--- | :--- | :--- |
| **1. Stripe Setup** | 🟡 Pending | Complete Stripe verification in Manus Settings. |
| **2. Zoom Integration** | ✅ Done | Standard link added to Footer. |
| **3. Calendly Audit** | ⚪ To Do | Connect Calendly to Zoom (in Calendly settings). |
| **4. QuickBooks Retirement** | ⚪ To Do | Export client list for "Transition Email". |

## 4. Immediate Next Step
**Let's verify your Stripe account.**
Once that is active, I can replace the "Get Your Kit" buttons with real "Purchase Session" buttons, and you can stop sending QuickBooks invoices forever.
