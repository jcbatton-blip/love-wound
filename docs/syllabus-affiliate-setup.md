# Syllabus and Amazon Associates handoff

September 17, 2026. The deployed site uses root HTML files, not the older React pages.

The syllabus is `library.html`, served at `/syllabus`. Nine ordinary Amazon product links are present. They do not earn commissions yet. Do not reuse `lovewound-20` from the older React source without verifying that it belongs to Jeff and is active.

## Activate once the account is verified

1. Sign into the correct Amazon Associates account, or enroll JeffBatton.com. The current browser session reports no connected Associates account.
2. Confirm the approved website and tracking ID in that account.
3. Generate a SiteStripe text link for each exact book edition and replace the nine ordinary product URLs. Confirm each destination title and format.
4. Add `rel="sponsored"` to the nine paid links.
5. Place this disclosure between the introductory section and the books, visibly above the first purchase link:

   “As an Amazon Associate I earn from qualifying purchases. If you buy through the Amazon links on this page, I may earn a commission at no additional cost to you.”

6. Add the same Amazon identification to the footer. Check desktop and phone display and ensure the disclosure remains visible without JavaScript.
7. Verify all nine links have Jeff's confirmed tag. Do not place a test order using Jeff's own account to meet application requirements.

No book prices or star ratings are copied from Amazon. Existing book covers were reused; new War of Art, Body Keeps the Score, and Iron John thumbnails came from publisher pages, not Amazon product-image scraping. Publisher-hosted availability alone does not establish a reuse license; retain source records and confirm promotional-use permission before production release.

## Cover sources

- War of Art: https://blackirishbooks.com/product/the-war-of-art/
- Body Keeps the Score: https://www.penguinrandomhouse.com/books/313183/the-body-keeps-the-score-by-bessel-van-der-kolk-md/
- Iron John: https://www.hachettebookgroup.com/titles/robert-bly/iron-john/9780306824265/
- Remaining six covers: existing site assets under `client/public/images/`.

## Current rules checked

- Physical books: 4.5% standard commission, subject to qualifying-purchase rules: https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ
- Application review: at least three qualifying sales within 180 days; own orders do not count: https://affiliate-program.amazon.com/help/node/topic/G8TW5AE9XL2VX9VM
- Disclosure: https://affiliate-program.amazon.com/help/node/topic/GHQNZAU6669EZS98
- SiteStripe: https://affiliate-program.amazon.com/help/node/topic/GJMMT7G4C8K4Y3AY

## Remaining booking work

The existing `/jcbatton/let-s-talk` event is titled “Coaching Session,” lasts one hour, and does not collect payment. Both free discovery and paid-session paths currently lead there. The website makes the individual price and separate payment arrangements explicit, but distinct discovery, individual, and couples event types are still recommended. No existing Calendly event or payment setting was modified.

Confirmed public prices: individual $150; couples $250; weekend retreat $4,500. Proposed, not approved: four individual sessions $540 and four couples sessions $900. No package, deposit, refund, expiry, cancellation, or retreat-inclusion terms were invented.
