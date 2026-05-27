# Design Prompt — Thiel Masonry Restoration Premium Website
### For: Senior UI/UX Designer (Stitch AI)
### Deliverable: A 2D, complex-animated, premium, fully-responsive marketing website
### Version 2.0 — execution-grade brief

---

## 0. How to Use This Brief (instructions for Stitch AI)

Generate a complete, multi-page responsive website following every specification below. Treat the design tokens in §3–§6 as a strict, non-negotiable system — do not introduce colors, fonts, spacing values, or radii outside the defined scales. Where this brief gives exact values (hex, rem, ms, px), use them verbatim. Where it describes intent ("weighty," "settling"), interpret with senior-level taste but stay inside the system.

**Output expectations:**
- Generate every page listed in §7 as a distinct screen, plus the responsive variants in §11.
- Produce desktop (1440px), tablet (768px), and mobile (390px) frames for the Home page at minimum; other pages may be shown at desktop + mobile.
- Build the reusable components in §8 as a labeled component set / design-system page.
- Annotate interactive states (default/hover/active/focus/disabled) where called for.
- The attached logo is the **single source of truth** for brand color and tone. Sample from it; do not recolor it.

**Design priorities, in order:** (1) Trust & credibility, (2) Lead conversion (call/quote), (3) Brand distinctiveness (heraldic craft), (4) Motion delight. Never let #3 or #4 compromise #1 or #2.

---

## 1. The Brief in One Sentence

Design a premium, heraldry-inspired marketing website for **Thiel Masonry Restoration** — a 5.0-star, owner-operated masonry restoration contractor in Becker, Minnesota that takes on the tough foundation, block, and chimney repairs other contractors decline — so the site feels like *craftsmanship, permanence, and old-world trade pride* rendered in a modern, conversion-focused interface.

---

## 2. Brand Foundation (read before designing)

**Who they are:** A small, owner-operated business run by a master mason named **Dustin**. They *restore and repair* masonry — they don't just pour concrete. Reputation is built on taking jobs others won't, fast callbacks, fair quotes, and finished work customers call "fantastic."

**Brand personality:** Heritage craftsmanship · trustworthy · grounded · skilled · approachable. NOT corporate, NOT flashy, NOT trendy-startup. Think *coat-of-arms meets construction-grade reliability.*

**Target visitor:** A Central-Minnesota homeowner (often 35–70) with a deteriorating foundation, chimney, or block wall, who has likely been turned down or ignored by other contractors. They are anxious, want reassurance and a fast human response, and are mostly on mobile. Secondary: small commercial property owners/managers.

**Primary visitor goal:** "Can this person fix my problem, can I trust them, and how do I reach them fast?"

**Service area:** Minneapolis & Central Minnesota — Becker, Annandale, Sherburne County, St. Cloud corridor, Buffalo, Monticello, Big Lake, Elk River, and surrounding towns.

**Verified business facts (use exactly):**
- Name: Thiel Masonry Restoration
- Owner / face of brand: Dustin
- Phone (click-to-call everywhere): (763) 688-1248
- Email: thielmasonry@gmail.com
- Address: 15441 Oliva St SE, Becker, MN 55308
- Rating: 5.0 ★ from 7 Google reviews
- Facebook: facebook.com/ThielMasonryRestoration
- Hours: effectively "Always reachable / by appointment" (no fixed storefront hours)

**Core services to feature:** Masonry restoration · exterior building repair · foundation & cement-block repair · chimney repair · tuck pointing · mortar repair · thru-wall flashing · real-stone installation · cultured-stone installation. Residential + commercial.

**Differentiators to weaponize in copy and layout:**
1. "The contractor who says yes" — takes the hard jobs others refuse (this is the #1 theme across reviews).
2. Perfect 5.0★ rating.
3. Fast, personal response — Dustin answers and shows up.
4. Honest, reasonable quotes.
5. Seasonally-correct craftsmanship — schedules work for proper cure weather (a credibility signal of real expertise).

---

## 3. Color System

Derived entirely from the logo crest (red banners, brick shield, pewter filigree, steel helmet, wood-handled trowel) so the site and the mark feel inseparable.

### 3.1 Core Brand Tokens
| Token | Hex | Source in logo | Primary use |
|---|---|---|---|
| `--brand-crimson` | `#B01E24` | Red banners | Primary CTAs, key emphasis, active states |
| `--brand-crimson-deep` | `#7E1419` | Banner shadows | CTA hover/active, footer base, gradient ends |
| `--brick` | `#A6452E` | Shield brickwork | Illustrative fills, dark-section accents |
| `--brick-warm` | `#C36B4A` | Lit brick faces | Texture highlights, hover tints |
| `--trowel-wood` | `#C8A06A` | Trowel handle | The "premium" accent: hairline rules, eyebrow underlines, star fills, icon details |
| `--pewter` | `#8A8D91` | Filigree / helmet | Secondary text, borders, idle icons |
| `--steel-dark` | `#3A3D42` | Helmet shadow | Body headings, nav text |
| `--ironwork` | `#22242A` | Crest outlines | Primary text, dark sections (never pure black) |
| `--mortar` | `#E7E0D6` | Mortar lines | Section background, card surfaces |
| `--cream` | `#FAF7F2` | (lightened mortar) | Page base, lightest surface |

### 3.2 Functional / Semantic Tokens
| Token | Hex | Use |
|---|---|---|
| `--bg-page` | `#FAF7F2` | Default page background |
| `--bg-surface` | `#FFFFFF` | Cards, form fields, modals |
| `--bg-muted` | `#E7E0D6` | Alternating section bands |
| `--bg-dark` | `#22242A` | Dark sections / footer |
| `--text-primary` | `#22242A` | Body + headings on light |
| `--text-secondary` | `#5A5E64` | Supporting copy |
| `--text-on-dark` | `#FAF7F2` | Text on dark/crimson |
| `--border-subtle` | `#D8D0C4` | Dividers, card borders |
| `--focus-ring` | `#B01E24` | Keyboard focus outline (3px, 2px offset) |
| `--success` | `#2E7D5B` | Form success |
| `--error` | `#B3261E` | Form validation error |
| `--star-gold` | `#C8A06A` | Review stars (uses trowel-wood) |

### 3.3 Gradients & Texture
- `--grad-hero-overlay`: linear, `#22242A` at 78% opacity → `#22242A` at 35% opacity, top-to-bottom over the hero brick photo (guarantees text contrast).
- `--grad-crimson-band`: 135°, `#B01E24` → `#7E1419` for CTA bands.
- Brick texture overlay on dark sections: the brick shield motif at **4–6% opacity**, multiply blend, never louder.

### 3.4 Color Rules
- **60 / 30 / 10**: ~60% neutral (cream/mortar/white), ~30% structural dark (steel/ironwork), ~10% crimson + wood accents.
- Crimson = action & emphasis ONLY. No large flat crimson fields except deliberate CTA bands.
- `--trowel-wood` is the restraint signal — hairlines and details only; never large fills.
- Verify contrast (see §10): white on `--brick` and crimson on `--cream` are the risk pairs.

---

## 4. Typography System

Heritage in display type; clean and legible everywhere else. Three families, defined roles, no exceptions.

### 4.1 Families & Roles
| Role | Typeface | Weights | Usage |
|---|---|---|---|
| Display / H1 | **Cormorant Garamond** | 600, 700 | Hero headline, major section titles. High-contrast serif echoing the crest. |
| Heraldic accent | **Cinzel** | 600, 700 | SHORT all-caps eyebrows, the motto, stat numerals, the big "5.0". Never body or long strings. |
| Subheads / H2–H4 | **Fraunces** (Soft optical) | 500, 600 | Section subheads, card titles, pull quotes. Warm bridge between display and body. |
| Body / UI / forms | **Inter** | 400, 500, 600 | All paragraphs, labels, buttons, nav, captions. The workhorse. |

All four are free Google Fonts — load via Google Fonts, subset latin, `font-display: swap`.

### 4.2 Type Scale (fluid; desktop max shown)
| Token | Size (rem) | Line-height | Tracking | Typical use |
|---|---|---|---|---|
| `display-xl` | 4.5 | 1.05 | -0.01em | Hero H1 |
| `display-l` | 3.375 | 1.1 | -0.01em | Section H1 / page titles |
| `h2` | 2.5 | 1.15 | 0 | Section headers |
| `h3` | 1.875 | 1.2 | 0 | Sub-sections, card titles |
| `h4` | 1.5 | 1.3 | 0 | Minor headers |
| `body-l` | 1.25 | 1.6 | 0 | Lead paragraphs |
| `body` | 1.0 | 1.65 | 0 | Default body |
| `caption` | 0.875 | 1.5 | 0.02em | Captions, meta |
| `eyebrow` | 0.8125 | 1.4 | 0.18em | Cinzel uppercase labels |

Use `clamp()` so `display-xl` scales from 2.25rem (mobile) → 4.5rem (desktop). Body never below 1rem on mobile. Max line length 65–75ch for paragraphs.

---

## 5. Spacing, Grid, Layout & Elevation Tokens

### 5.1 Spacing scale (8px base)
`--space-1: 4px` · `2: 8px` · `3: 12px` · `4: 16px` · `5: 24px` · `6: 32px` · `7: 48px` · `8: 64px` · `9: 96px` · `10: 128px`. Vertical section padding: 96px desktop / 64px tablet / 48px mobile.

### 5.2 Grid
- Desktop: 12-column, max content width **1200px**, gutter 32px, outer margin fluid.
- Tablet: 8-column, gutter 24px.
- Mobile: 4-column, gutter 16px, 20px outer margins.

### 5.3 Radii
`--radius-sm: 6px` (chips, inputs) · `--radius-md: 12px` (cards, buttons) · `--radius-lg: 20px` (modals, large media) · `--radius-pill: 999px` (filter chips). Slightly squared, not rounded-soft — reads as solid/built.

### 5.4 Elevation (warm-tinted shadows, never pure black)
- `--shadow-1`: 0 1px 2px rgba(34,36,42,0.06) — resting cards
- `--shadow-2`: 0 4px 12px rgba(34,36,42,0.10) — hover lift
- `--shadow-3`: 0 12px 32px rgba(34,36,42,0.16) — modals, sticky nav on scroll
- Focus elevation pairs with the crimson focus ring, never replaces it.

### 5.5 Borders
1px `--border-subtle` default; 2px `--trowel-wood` for the "premium" hairline accents under eyebrows and on featured cards.

---

## 6. Motion & Animation System ("2D complex animated")

Motion is **weighty and crafted** — like stone settling — never bouncy/playful. One easing curve sitewide for cohesion.

### 6.1 Tokens
- Standard ease: `cubic-bezier(0.22, 1, 0.36, 1)` ("settle")
- Entrance ease (slight overshoot, for brick-lay): `cubic-bezier(0.34, 1.56, 0.64, 1)` — used ONLY on the brick-lay reveal, low amplitude.
- Durations: micro `150ms` · standard `300ms` · entrance `500ms` · hero choreography `1200ms`.
- Scroll reveals trigger at ~15% element-in-view, run once, stagger 80ms between siblings.

### 6.2 Choreographed moments
1. **Hero crest assembly (on load, ~1200ms):** shield fades+scales in (0–400ms) → trowel slides diagonally into place (300–700ms) → top & bottom banners unfurl/scale-x from center (600–1000ms) → SVG line-draw on the pewter filigree (700–1200ms). Headline and CTA fade-up (900–1200ms). Skips entirely under reduced-motion (everything renders final state).
2. **Hero background parallax:** brick photo translates Y at ~0.3× scroll speed; overlay fixed. Disable on mobile (perf).
3. **Brick-lay scroll reveal (Services & Reviews grids):** cards rise 24px + fade, 500ms, entrance ease, 80ms stagger, alternating slight X offset so they "course" like laid brick. Settles, no looping.
4. **Mortar-smear section dividers:** diagonal SVG-mask wipe between major sections, 600ms, standard ease, triggered on scroll.
5. **Stat counters:** count up from 0 on in-view, 1200ms, Cinzel numerals (5.0★, 7 reviews, years, towns served).
6. **Before/After slider:** draggable handle (pointer + keyboard arrows); clip-reveals the "after" image; handle has a subtle wood-toned grip.
7. **Sticky nav transform:** transparent over hero → solid `--cream` + `--shadow-3` + condensed logo on scroll past 80px, 300ms.
8. **Magnetic primary CTA:** subtle 4–6px magnetic pull toward cursor on hover + soft `--trowel-wood` glow; press = 2px down + crimson-deep.
9. **Micro-interactions:** link underline wipes in `--trowel-wood` (200ms); input focus draws a crimson underline; icon hover shifts pewter→crimson.

### 6.3 Reduced motion
`prefers-reduced-motion: reduce` → no parallax, no assembly, no counters animating (show final), reveals become instant opacity. Functionality (slider, nav) stays.

---

## 7. Sitemap & Page Specifications

**Sitemap:** Home · Services · Projects (Before/After) · Reviews · About · Service Area · Contact · (utility: 404, Privacy, Quote Thank-You).
**Global nav order:** Logo · Services · Projects · Reviews · About · Area · [Phone] · **Get a Free Quote** (crimson).

---

### 7.1 Home (anchored single-scroll + linked detail pages)

**A. Sticky Nav** — Logo lockup left; links center/right; click-to-call phone `(763) 688-1248` with phone icon; crimson "Get a Free Quote" button far right. Mobile: logo + tap-to-call + hamburger; slide-in drawer with links and a full-width quote CTA pinned at bottom.

**B. Hero (full viewport, min 88vh)** — Animated crest (§6.2-1). Eyebrow (Cinzel): "MASONRY RESTORATION · CENTRAL MINNESOTA". H1 (Cormorant): "Masonry Restored. Built to Last." Subhead (Inter body-l): "Foundation, block & chimney repair done right — by the mason who says yes when others won't. Serving Minneapolis & Central Minnesota." Dual CTA: primary "Get a Free Quote" + ghost "See Our Work". Trust strip: ★★★★★ 5.0 · 7 Google Reviews · Residential & Commercial · Free Quotes. Background: brick-wall photo + `--grad-hero-overlay`.

**C. Trust Bar** — 4 animated stat counters on `--bg-muted`: `5.0★ Rating` · `7 Five-Star Reviews` · `Serving Central MN` · `Free On-Site Quotes`.

**D. "We Say Yes" differentiator band** — crimson `--grad-crimson-band` with 5% brick texture. Large Fraunces pull-quote built from the review theme: "When other contractors said no, Dustin said yes." Supporting line about taking on the deteriorated foundations and walls others refuse. Ghost-on-crimson CTA "Tell Us About Your Project."

**E. Services Grid** — eyebrow "WHAT WE RESTORE", H2 "Built to outlast the weather." 3×3 (desktop) / 2-col (tablet) / 1-col (mobile) grid, brick-lay reveal. 9 cards: Masonry Restoration · Foundation & Block Repair · Chimney Repair · Tuck Pointing · Mortar Repair · Thru-Wall Flashing · Real Stone Install · Cultured Stone Install · Exterior Building Repair. Each: custom line icon (wood-detail), Fraunces h4 title, one-line Inter description, "Learn more →" link to Services anchor. Hover: `--shadow-2` lift + crimson title.

**F. Before/After Showcase** — H2 "See the difference." 2–3 featured projects using the signature slider (§6.2-6), each with a location tag (e.g., "Foundation block · Annandale, MN") and a one-line job story. CTA "View all projects →".

**G. Process Section** — eyebrow "HOW IT WORKS", 4 numbered steps connected by an animated mortar-line path: 1) Call or request a quote → 2) Dustin visits & gives an honest quote → 3) Scheduled for proper cure weather → 4) Restored & built to last. Each step: Cinzel numeral, Fraunces title, short Inter line.

**H. Testimonials** — eyebrow "WHAT NEIGHBORS SAY", surfaces 3–4 real reviews (carousel on mobile, 3-up on desktop) with reviewer name, date, 5 gold stars, full text; "Read all 7 reviews →" to §7.4. Pull from verbatim set in §7.4.

**I. Service Area** — H2 "Proudly serving Central Minnesota." Custom-styled (not raw embed) stylized map illustration with a pin cluster; two-column town list; reassurance line "Not sure if you're in range? Just call." CTA tap-to-call.

**J. Final CTA band** — dark `--bg-dark` with faint crest watermark. H2 "Got a problem others won't touch?" Crimson "Get a Free Quote" + phone. Microcopy: "Fast callbacks. Honest quotes. No pressure."

**K. Footer** — 4 columns: (1) logo + one-line positioning + Facebook icon; (2) Services list; (3) Quick links; (4) Contact block (click-to-call, email, address, "By appointment / always reachable"). Bottom bar: © Thiel Masonry Restoration, Becker MN · privacy link. NAP marked up for local SEO.

---

### 7.2 Services (detail page)
Page title + intro. Each of the 9 services = a full row (alternating image left/right on desktop, stacked on mobile): custom icon, Fraunces h3 title, 2–3 sentence description, a "What's included" checklist (3–5 bullets, wood check icons), and a "Common in Central MN" context note (e.g., freeze-thaw spalling, settling footings). Sticky left anchor-nav listing all services on desktop. Mid-page and end CTA bands. Each row deep-links from the Home services grid.

### 7.3 Projects / Before & After
Intro + filter chips: All · Foundation · Block · Chimney · Stone · Tuck Pointing. Responsive masonry gallery of project cards (before/after thumb, title, location tag). Click → lightbox modal with full before/after slider, location, date, and a short job-story paragraph, plus prev/next. Empty/whilesmall state: if few projects, render larger feature cards so the page never looks sparse. CTA band at end.

### 7.4 Reviews (dedicated page)
Mirrors the Google Business Profile — every review earns its place on this trust-driven business.

**Header / summary:** big Cinzel `5.0` + 5 animated gold stars, "Based on 7 Google reviews," distribution bars (5★=7 full crimson; 4–1★=0 empty pewter, animate width in-view), and a "Write a Review" button linking to Google.

**Keyword filter chips** (mirror Google topics): All · cement block repair (3) · reasonable quote (4) · concrete blocks (2) · foundation (2) · wall (3). Active = crimson pill, idle = mortar pill. Filters the grid.

**Sort control:** dropdown — Most relevant (default) / Newest / Highest.

**Review grid** — ALL 7 reviews, verbatim, in a brick-coursing masonry grid (brick-lay reveal). Each card: reviewer name, credential (e.g., "Local Guide · 19 reviews"), relative date, 5 gold stars, full text, and a subtle Google "G" source mark.

> **All 7 reviews to include (verbatim):**
>
> **Shawn Cole** · 4 reviews · 6 months ago — ★★★★★
> "Dustin was great to work with. He did an excellent job fixing my garage foundation. I highly recommend Thiel masonry restoration to anyone needing work done."
>
> **RJ** · 5 reviews · 2 years ago — ★★★★★
> "Dustin repaired a badly deteriorated cement block on my basement exterior wall in Annandale. He was the only contractor I could find that was willing to do the work. He drove to my home, gave me a quick and reasonable quote, and repaired the block a few weeks later when the weather warmed up. The repair work looks fantastic! I highly recommend Dustin!"
>
> **RJ** · Local Guide · 14 reviews · 2 photos · 2 years ago — ★★★★★
> "Dustin repaired a badly deteriorated cement block on the exterior foundation wall of my home. No other contractors were willing to do the work. Dustin came over promptly to give me a reasonable quote after I called him. He did the repair when the outside temps were high enough for the patch to set and cure. The patchwork looks fantastic! I highly recommend Dustin!"
>
> **Corrine** · 1 review · 2 years ago — ★★★★★
> "A friend recommended Dustin to us for repair we needed done on our chimney. I was worried that it would be a stressful process, but Dustin was so easy to work with and put my mind at ease. He was really easy to get ahold of and did a great job. We would recommend him to anyone!"
>
> **Jerrad Palmer** · 8 reviews · a year ago — ★★★★★
> "Dustin did a fantastic job! He was responsive and had a very competitive quote. Can't refer him enough :) thanks again!"
>
> **ron music** · 2 reviews · a year ago — ★★★★★
> "Due to some bad footings on my garage wall it let the brick tilt out, I found Thiel Masonry. Dustin was the only one that responded — he came out and gave a reasonable quote, came out 2 weeks later and did an amazing job bringing everything back to level. I highly recommend Thiel Masonry."
>
> **Cha C** · Local Guide · 19 reviews · a year ago — ★★★★★
> "Professional and affordable."

**CTA band:** crimson crest-watermark — "Join our happy customers — get a free quote" + click-to-call.
**SEO:** `Review` + `AggregateRating` schema (ratingValue 5.0, reviewCount 7) for star-rich results.

### 7.5 About / Meet Dustin
Hero with portrait (or on-site action shot) + Cormorant title "Meet Dustin." Narrative blocks: the craft philosophy; why restoration over replacement; the "takes the hard jobs" origin story; the seasonally-correct expertise; the heraldry/crest meaning (knight = protection, trowel = trade, brick = permanence). Trust callouts (local, owner-operated, 5.0★). Closing CTA. Keep warm and first-person where possible.

### 7.6 Service Area
Expanded version of Home §I: stylized regional map, full town/county list, FAQ-style "Do you serve my area?" reassurance, and CTA. Local-SEO copy naming key towns.

### 7.7 Contact / Free Quote
Two-column (stacks on mobile, form first). **Form fields:** Name* · Phone* · Email · Service type (dropdown of the 9 services + "Not sure") · Project description (textarea) · optional photo upload (huge for masonry — let them show the damage) · preferred contact method. Inline validation, crimson error/green success states, labeled, keyboard-accessible. Submit = crimson magnetic button "Request My Free Quote." **Contact rail:** click-to-call card, email, address, "by appointment / always reachable," Facebook link, and a styled map. Reassurance microcopy: "Dustin personally reviews every request — expect a fast callback." On submit → Thank-You page/state ("Thanks — Dustin will call you shortly") with phone fallback.

### 7.8 Utility
- **404:** crest illustration, "This page crumbled — but your foundation doesn't have to," link home + quote CTA.
- **Quote Thank-You:** confirmation, what-happens-next, phone fallback.
- **Privacy:** simple, legible legal page using body styles.

---

## 8. Component Library (build as a labeled design-system page)

For each component, define **default / hover / active / focus / disabled** where applicable.

1. **Buttons** — Primary (crimson, white text, magnetic, wood glow on hover, crimson-deep on press); Secondary (steel outline, fills on hover); Ghost (text + animated wood underline); sizes sm/md/lg; icon-left/right variants; full-width mobile.
2. **Click-to-call chip** — phone icon + number; persistent on mobile.
3. **Service Card** — icon, title, description, link; hover lift + crimson title; featured variant with wood hairline border.
4. **Stat Counter** — Cinzel numeral + label; in-view count-up.
5. **Review Card** — name, credential, date, 5 stars, text, Google mark; equal-height in grid.
6. **Before/After Slider** — labeled before/after, draggable + keyboard, wood grip handle.
7. **Filter Chip** — pill; idle mortar / active crimson; count suffix.
8. **Section Eyebrow** — Cinzel uppercase + wood hairline rule.
9. **Process Step** — numeral, title, line, connector path node.
10. **Form Field set** — label, input/textarea/select, helper, error, success; focus underline draw.
11. **Sticky Nav** — transparent + scrolled states; mobile drawer.
12. **Footer.**
13. **Lightbox/Modal** — focus-trapped, ESC/overlay close, prev/next.
14. **Mortar-smear Divider.**
15. **Crest Watermark element** (for CTA bands).
16. **Icon set** — custom line icons for all 9 services + phone/email/location/star/Facebook/arrow/check, unified stroke weight with optional wood detail.

---

## 9. Microcopy Kit (use or adapt)
- Hero H1: "Masonry Restored. Built to Last."
- Hero sub: "Foundation, block & chimney repair done right — by the mason who says yes when others won't."
- Differentiator: "When other contractors said no, Dustin said yes."
- Process reassurance: "Fast callbacks. Honest quotes. No pressure."
- Final CTA: "Got a problem others won't touch?"
- Form reassurance: "Dustin personally reviews every request — expect a fast callback."
- Area: "Not sure if you're in range? Just call."

Tone: plain-spoken, confident, warm, no jargon-dumping, no hype words ("world-class," "cutting-edge"). Speak like a trustworthy tradesman.

---

## 10. Accessibility (WCAG 2.1 AA — required)
- Text contrast ≥ 4.5:1 (≥3:1 large). **Verify the risk pairs:** white on `--brick` (#A6452E) and crimson (#B01E24) on `--cream` — if any fail, darken to `--brand-crimson-deep` or add a scrim; do not ship failing combos.
- Visible focus on every interactive element (3px `--focus-ring`, 2px offset).
- Full keyboard operability incl. slider (arrow keys), modal (focus trap, ESC), nav drawer.
- Respect `prefers-reduced-motion` (§6.3).
- Alt text on all imagery; form inputs have real `<label>`s; errors announced.
- Tap targets ≥ 44×44px on mobile. Don't rely on color alone for state (pair with icon/weight).

---

## 11. Responsive Behavior
- **Breakpoints:** mobile ≤480 · tablet 481–1024 · desktop ≥1025; design at 390 / 768 / 1440.
- **Mobile-first reality:** most traffic is mobile homeowners in distress — tap-to-call must be one thumb-tap from any scroll position (persistent call affordance + sticky bottom "Free Quote" bar on mobile).
- Grids: 9-service grid 3→2→1 col; reviews 3→2→1; process 4→2→stacked.
- Disable hero parallax + heavy assembly on mobile; keep core reveals.
- Forms single-column on mobile, large 16px+ inputs (prevents iOS zoom), native selects.
- Nav collapses to hamburger drawer with pinned quote CTA.

---

## 12. Performance & SEO
- Target LCP < 2.5s, CLS < 0.1. Optimize/compress hero; lazy-load gallery & below-fold; `font-display: swap`.
- Defer non-critical animation JS; reserve image dimensions to avoid layout shift.
- Semantic headings (one H1/page), descriptive titles/meta per page.
- LocalBusiness schema (NAP, geo, area served) + Review/AggregateRating schema on Reviews.
- Service-area town keywords in copy and Service Area page.

---

## 13. Mood / Reference Direction
Premium tradesman heritage — a Savile Row tailor's site built for a master mason. Warm neutral canvas, confident crimson accents, generous "mortar" whitespace, tactile brick/stone texture used with restraint, crest-derived heraldic detailing signaling pride in craft. **Avoid:** generic contractor-template blue, stock clip-art, neon, cluttered layouts, gimmicky motion, or anything undermining the old-world-craftsmanship promise of the logo.

---

## 14. Definition of Done (checklist)
- [ ] All pages in §7 designed; Home at 3 breakpoints.
- [ ] Every token in §3–§6 applied; nothing off-system.
- [ ] All 9 services represented consistently across Home + Services.
- [ ] All 7 reviews present verbatim on Reviews page.
- [ ] Click-to-call + Free Quote reachable from every screen incl. mobile.
- [ ] Component states (hover/active/focus/disabled) shown.
- [ ] Risk contrast pairs verified AA.
- [ ] Reduced-motion + keyboard paths accounted for.
- [ ] Logo used unaltered; palette sampled from it.

---

*The attached logo is the single source of truth for color and brand tone. Every palette token, type pairing, spacing value, and motion choice above is engineered to make the finished site feel like a natural extension of that crest.*
