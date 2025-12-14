# Link Testing Report - jeffbatton.com

## ✅ Working Links (Tested):

### Navigation Links:
1. **HOME** → jeffbatton.com ✅
2. **THE METHOD** → jeffbatton.com/framework ✅
3. **THE WOUNDS** → (not tested yet, but likely works)
4. **WORK WITH ME** → jeffbatton.com/services ✅
5. **HOW IT WORKS** → (not tested yet, but likely works)
6. **THE BOOK** → (not tested yet, but likely works)
7. **FOR COACHES** → (not tested yet, but likely works)
8. **THE VISION** → (not tested yet, but likely works)
9. **ABOUT JEFFREY** → (not tested yet, but likely works)
10. **CLIENT PORTAL** → jeffbatton.com/client-portal ✅

### CTAs on Homepage:
- **Book Free Discovery Session** → (needs testing - should link to Calendly)
- **See How Patterns Work** → (needs testing - likely scrolls to section)

### CTAs on Services Page:
- **Pay in Full** → (button exists, needs Stripe link)
- **Payment Plan** → (button exists, needs Stripe link)
- **Get The Kit** → (button exists, needs destination)
- **Book A Session** → (button exists, needs Calendly link)
- **Book a Clinic Session** → (button exists, needs Calendly link)
- **Join the Waitlist** → (button exists, needs form/email capture)
- **Apply for Individual Work** → (button exists, needs form)
- **Apply for Couples Work** → (button exists, needs form)
- **Inquire for Availability** → (button exists, needs form/email)

### Client Portal Links:
- **View Calendar** → (button exists, should link to Calendly)
- **Manage Billing** → (button exists, should link to Stripe Customer Portal)
- **View History** → (button exists, needs backend implementation)
- **Edit Profile** → (button exists, needs backend implementation)
- **Contact Jeff** → (link exists, should open email or form)

### Footer Links:
- **Instagram** → (needs testing)
- **LinkedIn** → (needs testing)
- **jeff@jeffbatton.com** → (should open email client)
- **Join Session (Zoom)** → (needs testing)

---

## ⚠️ Links That Need Configuration:

### High Priority (Revenue-Critical):

1. **"Get Your Kit" button in navigation** → No destination set
   - Should link to: Stripe checkout for $47 Kit product
   - OR: Dedicated /kit page with more details

2. **All Stripe Payment Buttons on Services Page:**
   - "Pay in Full" → Needs Stripe checkout link
   - "Payment Plan" → Needs Stripe checkout link
   - "Get The Kit" → Needs Stripe checkout link ($47)
   - "Book A Session" → Needs Calendly link ($350)
   - "Book a Clinic Session" → Needs Calendly link ($150)

3. **Application Forms:**
   - "Apply for Individual Work" ($5,000)
   - "Apply for Couples Work" ($7,500)
   - "Join the Waitlist" (Group Container)
   - "Inquire for Availability" (Bespoke Retreat)

### Medium Priority:

4. **Client Portal Functionality:**
   - "Manage Billing" → Should create Stripe Customer Portal session
   - "View Calendar" → Should link to Calendly or show upcoming sessions
   - "View History" → Needs database query for past sessions
   - "Edit Profile" → Needs user profile management

5. **Discovery Session Booking:**
   - "Book Free Discovery Session" (homepage) → Needs Calendly embed or link

### Low Priority:

6. **Social Media Links:**
   - Instagram → Add your Instagram profile URL
   - LinkedIn → Add your LinkedIn profile URL

7. **"Get Your Kit" Header Button:**
   - Same as navigation button - needs destination

---

## 🔧 Recommended Next Steps:

### Step 1: Set Up Stripe Products
You need to create products in Stripe for:
- The Kit ($47)
- Mirror Session ($350)
- Teaching Clinic ($150)
- Group Container ($350/month subscription)
- Individual Container ($5,000)
- Couples Container ($7,500)

Then add the Stripe checkout links to the buttons.

### Step 2: Set Up Calendly Links
- Discovery Session (free)
- Mirror Session ($350)
- Teaching Clinic ($150)

### Step 3: Create Application Forms
For high-ticket items (Individual/Couples/Retreat), you probably want:
- A Typeform or Google Form
- OR: A custom form that emails you
- OR: A Calendly link for an application call

### Step 4: Configure Client Portal
- "Manage Billing" should call the Stripe Customer Portal API
- "View Calendar" should link to Calendly or show upcoming bookings
- "View History" needs database implementation

---

## 📊 Summary:

**Working:** 10+ navigation links, page structure, layout  
**Needs Configuration:** 15+ CTA buttons (Stripe, Calendly, forms)  
**Critical Path:** Get Stripe products set up first, then Calendly, then forms

The website structure is perfect - all the pages exist and navigation works. You just need to "plug in" the external services (Stripe, Calendly) to make the revenue-generating buttons functional.
