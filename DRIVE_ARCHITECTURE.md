# JBLC Digital Headquarters: Google Drive Architecture

**Objective:** Create a self-organizing digital filing cabinet that allows for "Virtual CFO" management without requiring manual sorting.

## 1. The "JBLC Master" Folder Structure

You will create one master folder named **"00_JBLC_Master"**. Inside, we will use a numbered structure to keep folders sorted permanently.

*   **01_Financials** (The "CFO" Folder)
    *   `01_Income` (Stripe Reports, Invoices)
    *   `02_Expenses` (Receipts, Software Subscriptions)
    *   `03_Taxes` (1099s, Annual Returns)
    *   `04_Banking` (Monthly Statements - Checking/Savings/Credit)
    *   `05_Payroll` (Contractor Agreements, W9s)
*   **02_Legal**
    *   `01_Entity_Docs` (LLC Formation, EIN, Operating Agreement)
    *   `02_Contracts` (Client Agreements, Templates)
    *   `03_Insurance` (Policy Documents, COIs)
    *   `04_IP` (Trademarks, Copyrights)
*   **03_Clients** (Secure Client Records)
    *   `01_Active` (Folder for each client: "Lastname_Firstname")
    *   `02_Alumni` (Archived client folders)
    *   `03_Waitlist`
*   **04_Content_Marketing**
    *   `01_Brand_Assets` (Logos, Headshots, Fonts)
    *   `02_Website` (Copy, Images, Backups)
    *   `03_Social` (Instagram, LinkedIn drafts)
    *   `04_Newsletter`
*   **05_Products**
    *   `01_The_Kit` (PDFs, Audio files)
    *   `02_Certification` (Curriculum, Manuals)
    *   `03_Retreats` (Venues, Itineraries)

## 2. The "Inbox Zero" Automation Strategy

Since you cannot grant me direct login access to sort files manually, we will build an **Automated Sorting Machine** using a specific "Drop Zone" folder.

### **The Workflow:**
1.  **The Drop Zone:** Create a folder named `!_INBOX_TO_SORT` at the top level.
2.  **Input Methods:**
    *   **Scan:** Use Google Drive App on phone to scan paper receipts directly to this folder.
    *   **Email:** Set up a filter in Gmail so any email with attachment from "Stripe" or "Receipt" forwards to a dedicated "Save to Drive" address (or use a Zapier trigger).
    *   **Upload:** Drag and drop bank statements here once a month.
3.  **The "Robot" (Google Apps Script):**
    *   We will install a simple script (I will provide the code) that runs every hour.
    *   It looks at the filename.
    *   It moves the file to the correct folder automatically.

### **Naming Convention Protocol:**
For the robot to work, files must be named simply:
*   `Receipt_Zoom_Dec2025.pdf` -> Moves to `01_Financials/02_Expenses`
*   `Statement_Chase_Nov2025.pdf` -> Moves to `01_Financials/04_Banking`
*   `Contract_Smith_John.pdf` -> Moves to `02_Legal/02_Contracts`

## 3. Implementation Steps
1.  **Create the Folders:** Manually set up the tree above.
2.  **Install the Script:** (I will provide a copy-paste script in the next step).
3.  **Test:** Drop a file named `Receipt_Test.pdf` into the Inbox and watch it move.

---
*Designed by Manus AI for JBLC*
