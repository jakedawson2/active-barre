# Intro offer and booking on activebarre.com (short design)

Date: 2026-11-13. Approved by Jake in the Active Barre thread.

**Why:** get more new clients booking. Booking was hidden behind the "Timetable" menu item, and the
intro pack (4 classes for $40, new joiners only) wasn't on the site at all. Ads and organic visitors
will both land, so the homepage and a dedicated page both feature it.

**Goals:** a visible intro offer and "Book a class" on the first screen; an `/intro` page to point
ads at; prices that match Bookamat (audit 2026-11-13). **Non-goals:** a redesign. The site moves into
the booking app repo in about a month, so the look and structure stay as they are.

**Approaches:** (1) edit the existing Gatsby site in place (chosen: small, live now, same look);
(2) rebuild now in the booking app repo (rejected for now: the booking app isn't ready, and Jake
asked to edit the existing site).

**Design**
- Homepage: an offer card between the intro and the menu: "New to Active Barre? 4 classes for $40",
  buttons "Claim intro offer" (to `/intro`) and "Book a class" (opens the timetable panel).
- Timetable panel: renamed "Timetable and prices"; intro callout on top, then the Bookamat booking
  embed, then prices brought in line with Bookamat (5 Reformer pack added, 1 Visit Pass is 4 weeks).
- `/intro`: offer, what's included, class blurbs with studio photos, first-class notes, claim button.
- `/#timetable` opens the timetable panel directly. Stub `/page-2` removed. Search description
  says Victoria Street, not Pulteney Street.
- Claude's calls: the offer is called "Intro offer", not "Women's Health Intro Pack". Claim buttons
  go to the Bookamat studio page until Jake supplies the direct pack link (one constant in
  `src/config.js`).
