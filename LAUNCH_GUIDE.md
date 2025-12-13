# 🚀 Love Wound Website Launch Guide

Congratulations! Your new premium digital home is ready. This guide covers the final steps to take this live and transition your business to the new model.

## 1. Domain Connection
To replace your current site with this new one:

1.  **Open the "Settings" panel** in the Manus sidebar (bottom left).
2.  Click on **"Domains"**.
3.  Select **"Connect Existing Domain"**.
4.  Enter `jeffbatton.com` (or your desired domain).
5.  Follow the DNS instructions provided (you will need to log into your domain registrar, likely GoDaddy or Namecheap, and update the A records).

## 2. Stripe Payments Setup
Your site is currently in "Test Mode". To start accepting real credit card payments for the $5,000 and $7,500 packages:

1.  **Claim your Stripe account:** Check your email for the invite from Manus/Stripe or click the link in the Project Settings.
2.  **Verify your details:** Add your bank account info so you can get paid.
3.  **Switch to Live:** Once verified, the site will automatically switch to processing real charges.

## 3. Transitioning Legacy Clients
You have a draft email ready to send to your existing clients to move them from QuickBooks/Manual invoicing to this new system.

*   **File Location:** `legacy_transition_email.md` (in your project files)
*   **Action:** Copy/paste this into your email provider, fill in the placeholders, and send it 2 weeks before you want to switch them over.

## 4. The "Coach/Player" Model
Your Services page is now set up with the new structure we defined:

*   **Individual Container:** $5,000 (12 Weekly Sessions)
*   **Couples Container:** $7,500 (12 Weekly 90-min Sessions)
*   **Positioning:** "We run the play until you can't get it wrong."

## 5. Final Content Check
*   **Testimonials:** "Stories from the Mirror" now features your real client reviews (Tyler, Barbara, Denitra, etc.).
*   **Assets:** Your professional headshot and *Grinnin' Like a Jackass* book cover are live.

---

**Need Help?**
If you get stuck on the DNS/Domain part, just ask me here, and I can walk you through the specific steps for your registrar.

**Ready to Launch?**
Click the **"Publish"** button in the top right of the Manus interface!

## 6. Affiliate Marketing Setup
I've added a "Books That Changed My Life" section to the Book page. To get paid when people buy them:

1.  **Sign up for Amazon Associates:** Go to [affiliate-program.amazon.com](https://affiliate-program.amazon.com/) and create an account.
2.  **Get your links:** Search for *Awareness*, *The Body Keeps the Score*, and *Attached*. Click "Get Link" (Text only).
3.  **Update the site:**
    *   Open the Manus "Code" panel.
    *   Navigate to `client/src/pages/Book.tsx`.
    *   Find the lines that say `href="https://amzn.to/3CQqZ1L"`.
    *   Replace that URL with your unique affiliate link.
    *   Click "Save" (or ask me to do it for you once you have the links!).
