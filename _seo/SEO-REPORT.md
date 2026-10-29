# SEO report: farsanaa.in (formerly farsanafarsu.github.io/Digitalmarketingconsultantinkerala)

Prepared 18 Oct 2026. This folder starts with `_`, so GitHub Pages does not publish it.
Rollback point: Git tag `pre-seo-checkpoint`. All changes are on branch `seo-optimisation`, which has not been pushed.

---

## 1. Initial audit (before changes)

What the site is: a static, hand-written HTML site on GitHub Pages (project site, Jekyll build), with 7 HTML pages: the homepage, 5 service pages and a case-studies page. No framework or backend.

| # | Severity | Issue found | Evidence |
|---|---|---|---|
| A1 | Critical | No `sitemap.xml` anywhere | 404 on the live site |
| A2 | High | No canonical tag on any page | Checked all 7 heads |
| A3 | High | Case-studies page: `<title>` inside `<body>`, no meta description, no `lang` | Line 13 of the old file |
| A4 | High | Case-studies page was a dead end: no links to home, services or contact | Only `#case-n` links on the page |
| A5 | High | 2 broken homepage links: `/chatgpt-ads-kerala` and `/website-development-kerala` (root-relative, so they resolve to farsanafarsu.github.io/... and 404; the pages also don't exist) | Services section |
| A6 | High | Trivandrum, the real base location, appears only in the locations list; never stated as the base. 0 mentions on any service page | Text extraction |
| A7 | Medium | No Open Graph or social share image on the homepage or case studies; service pages had no og:url, og:image or Twitter card | Heads |
| A8 | Medium | Case-studies H1 and stats were out of date ("Nine brands. Twenty-five campaigns", 665 conversations, about ₹1.25 lakh) | Tables now hold 13 cases and 61 campaign rows |
| A9 | Medium | Service pages thin next to competitors: 580–880 words vs about 1,200–1,450 on the competitor pages that could be read | Word counts |
| A10 | Medium | No About page; experience and education exist only in a PDF | Site inventory |
| A11 | Medium | Social media marketing is on the resume but has no page | Resume vs site |
| A12 | Medium | Working files publicly served: a 666 KB zip, a 1.5 MB palette PNG, draft content Markdown (duplicate text), Apps Script code, `.vscode` | Repo root |
| A13 | Low | Person schema thin: no url, no location, no `@id` linking pages; service schema had no page URLs; no BreadcrumbList | JSON-LD |
| A14 | Low | No custom 404 page | Live 404 is GitHub's default |
| A15 | Low | Service-page titles 66–84 characters (Google cuts at about 60) | Heads |
| A16 | Info | Homepage HTML is 427 KB (187 KB inline CSS, 83 KB inline JS, 41 KB base64) | Size breakdown, not changed (see Remaining issues) |
| A17 | Info | Case-studies page shows one case at a time with JavaScript (`hidden`); without a hash, Google's render shows case 1 only | Page script |

Checked and fine: one H1 per page, sensible heading order, every `<img>` has alt text (decorative duplicates use `alt=""`), viewport and charset set, no `noindex` anywhere, all content in the initial HTML (not JavaScript-rendered), homepage FAQ schema valid, contact form labelled.

---

## 2. Competitor analysis

Method: raw HTML fetched on 18 Oct 2026, read as Googlebot sees it before JavaScript. Rankings, traffic, backlinks and domain authority: **Not verified** (no access to Ahrefs, SEMrush or Search Console data for these domains). The web search tool returns US results, so it was used only to discover names, not to judge rankings.

| Site | Title / H1 | Pages and structure | Words (home) | Schema | Trust signals | Observed weaknesses |
|---|---|---|---|---|---|---|
| jaseem.org | Not verified | Not verified | – | – | – | Domain did not resolve (DNS failure) from this network on 18 Oct 2026 |
| anjuanuraj.com | "Digital Marketing Consultant in Kerala \| Google & Meta Ads Expert" / H1 "Digital Marketing Consultant in Kerala" | WordPress; home, /google-ads-expert/, /blog/ | ~1,175 | Person, WebSite, FAQPage, PostalAddress | Testimonials, case-study mentions, "certified" | Only 1 H2; few service pages |
| rahoof.in | "Best Digital Marketing Consultant in Kerala \| Rahoof" / H1 "TOP-RATED BEST…" | WordPress; best-seo-expert-in-kerala, best-performance-marketer-in-kerala, blog, Calicut post | ~1,289 | Person, Article, FAQPage | Experience section, client links | Self-awarded "best/top-rated" wording; thin H2 structure |
| safuvan.com | Empty title | Hostinger Horizons app | **0** | None | – | Content renders only with JavaScript: Googlebot's first pass sees an empty page |
| sheronkumar.com/google-ads-expert-kerala | "Google Ads Expert in Kerala \| Sheron Kumar" | ~25 service × city pages (Kochi, Bangalore, Chennai, Dubai…) | ~1,286 | ProfessionalService, LocalBusiness, BreadcrumbList, FAQPage | Packages, cal.com booking, WhatsApp | Many near-identical city pages (doorway risk); Kochi-focused, only 1 Thiruvananthapuram mention |
| sinupsabu.in | "Best Digital Marketing Consultant & Trainer in Trivandrum" / H1 = name (×2) + a third H1 | WordPress; digital-marketing-expert-in-trivandrum, seo-services-in-kerala, google-ads-expert-kerala, portfolio, blog | ~1,195 | Person, Organization, ProfilePage | 14 years claimed, student testimonials, free SEO-audit tool | 3 H1s; trainer-focused, not campaign proof. **Main Trivandrum competitor.** |
| salmanseoexpert.in | "Salman SEO Expert \| Digital Marketing Agency in Kerala…" | .php service pages (SEO, social media, web design, video, logo) | ~1,464 | **None** | Reviews, pricing table, case studies | No structured data; promises "rank #1" |
| IRPR Agency (found by search) | Trivandrum location pages | Many /locations/thiruvananthapuram/* pages | – | – | Self-reported stats | Agency, templated location pages |

### Prioritised opportunities

1. **Proof is your edge.** No competitor shows campaign-level numbers with Ads Manager screenshots; you have 13 case studies. Link them from every service page (done for Meta ads, social media and About).
2. **Trivandrum is under-served by individual consultants.** Only sinupsabu.in targets it seriously, and it is trainer-led. Your real base is Trivandrum, so it is now stated on the homepage, the About page and every service page.
3. **Honesty as a differentiator.** Competitors promise "#1" and "best". Your pages now say plainly that no one can guarantee rankings. That builds trust and keeps you clear of Google's guidance on misleading claims.
4. **Avoid the city-page trap** that sheronkumar.com uses. Build one Trivandrum page only when you have Trivandrum-specific proof (for example, the Arena Trivandrum case).
5. **Structured data.** salmanseoexpert.in has none, and most others have only basics. Your site now has a connected Person, WebSite, Service, Breadcrumb and FAQ graph.

---

## 3. Keyword research

See `keywords.csv` (45 keywords, grouped A–F as briefed). **Search volume and difficulty are "Not verified" for every row**, because Google Keyword Planner and Search Console were not available to me. Priorities are judgement calls based on business fit, competitor targeting and the proof on the site. Fill in the volume column from Keyword Planner (free with a Google Ads account) before making big content decisions.

---

## 4. Keyword-to-page map (as implemented)

Existing URLs were kept, not renamed. Renaming `-specialist-` to `-expert-` would only reset any signals the pages have earned, and titles now carry "Expert" anyway.

| URL | Primary keyword | Secondary | Title (final) | H1 | Schema |
|---|---|---|---|---|---|
| `/` | digital marketing consultant in Kerala | …in Trivandrum, digital marketing expert Kerala, freelance digital marketer | Digital Marketing Consultant in Kerala \| Trivandrum \| Farsana | The digital marketing consultant in Kerala who gets your business found like this. | Person, WebSite, WebPage, ItemList of Services, FAQPage |
| `/about-farsana/` (new) | Farsana digital marketing consultant Trivandrum | digital marketing expert in Trivandrum | About Farsana N \| Digital Marketing Consultant in Trivandrum | Farsana N, digital marketing consultant in Trivandrum | ProfilePage, Person, BreadcrumbList |
| `/meta-ads-specialist-kerala/` | Meta Ads expert in Kerala | Facebook/Instagram ads expert, lead generation, click-to-WhatsApp | Meta Ads Expert in Kerala \| Facebook & Instagram Ads \| Farsana | Meta ads specialist in Kerala | Service, FAQPage, BreadcrumbList |
| `/google-ads-specialist-kerala/` | Google Ads expert in Kerala | …in Trivandrum, PPC, search ads | Google Ads Expert in Kerala \| Search & Call Ads \| Farsana | Google ads specialist in Kerala | Service, FAQPage, BreadcrumbList |
| `/seo-specialist-kerala/` | SEO expert in Kerala | SEO expert Trivandrum, technical/local SEO, SEO audit, AEO, GEO | SEO Expert in Kerala \| Local & Technical SEO \| Farsana | SEO specialist in Kerala | Service, FAQPage, BreadcrumbList |
| `/social-media-marketing-kerala/` (new) | social media marketing expert Kerala | social media manager Trivandrum | Social Media Marketing Expert in Kerala \| Farsana | Social media marketing in Kerala | Service, FAQPage, BreadcrumbList |
| `/influencer-marketing-kerala/` | influencer marketing in Kerala | consultant, Trivandrum, Malayalam creators | Influencer Marketing in Kerala \| Malayalam Creators \| Farsana | Influencer marketing in Kerala | Service, FAQPage, BreadcrumbList |
| `/ai-solutions-developer-kerala/` | AI solutions developer Kerala | AI chatbots, automation | AI Solutions Developer in Kerala \| Chatbots \| Farsana | AI solutions developer in Kerala | Service, FAQPage, BreadcrumbList |
| `/case-studies/` | Meta ads case studies Kerala | results, proof | Meta Ads Case Studies from Kerala \| Real Results \| Farsana | Thirteen Meta ads case studies. Sixty-one campaigns. Every number from Ads Manager. | CollectionPage, BreadcrumbList |

Not created, on purpose: a separate `/ai-seo-aeo-geo/` page (demand for these terms is unproven, so AEO and GEO stay inside the SEO page until Search Console shows impressions), `/blog/` (an empty blog is thin content; see the content calendar) and town pages.

---

## 5. Code changes (completed)

| Issue | Change | Files | Verified by |
|---|---|---|---|
| A1 | Added `sitemap.xml` (9 canonical URLs) | sitemap.xml | Parsed as valid XML; all 9 URLs return 200 locally |
| A1 | Added `robots.txt` (allow all + sitemap). **Not read by Google on a github.io project path; takes effect with a custom domain** | robots.txt | Served 200 |
| A2, A7 | Canonical, robots, Open Graph (url, image, locale, site name) and Twitter card on every page; new 1200×630 share image | all pages, assets/og-image.png | Crawl: canonical matches each page URL |
| A3 | Title, description and `lang` moved into a valid `<head>` | case-studies/index.html | `<title>` found inside head |
| A4 | Site nav added (Home, Meta ads, Google ads, SEO, About, Book a free audit) | case-studies/index.html | Screenshot at 1280 and 500 px |
| A5 | Broken links now go to the contact form ("Ask about ChatGPT ads", "Ask about a website") | index.html | Crawl: 0 broken internal links |
| A6 | "Based in Trivandrum (Thiruvananthapuram)" on the homepage (brands line, locations, footer), About page and a Trivandrum FAQ on every service page | all pages | Text check |
| A8 | H1, intro and stats recomputed from the page's own tables: 2,477 conversations, 6,187 landing page views, about ₹2.13 lakh | case-studies/index.html | Script summed all 61 table rows |
| A9 | New "Mistakes I fix" section (6 cards: common problems and how results are measured) on Meta, Google, SEO and Influencer pages; 1–2 new FAQs each (also in FAQ schema) | 4 service pages, lp.css (1 line) | Screenshot |
| A10 | New About page from resume facts only | about-farsana/index.html | Crawl 200, screenshots |
| A11 | New Social media marketing page; proof from BlackBox (resume) and Saki, PRception, BlackBox (case studies) | social-media-marketing-kerala/index.html | Crawl 200, screenshot |
| A12 | `_config.yml` excludes the zip, palette, draft content, Apps Script and .vscode from the published site (files stay in the repo) | _config.yml | Takes effect on the next Pages build; check the URLs return 404 afterwards |
| A13 | Person upgraded (Farsana N, Thiruvananthapuram, education, languages, `@id`); WebSite and WebPage added; services link to their pages; breadcrumbs everywhere | all pages | All 9 pages' JSON-LD parses |
| A14 | Custom 404 page with links back in (`noindex`) | 404.html | Served 200 locally |
| A15 | Titles shortened to 49–62 characters, descriptions to 137–158 | 7 pages | Script output |
| Nav | "Social media" added to service-page nav; About and Social media in all footers; homepage footer now links every page | all pages | Crawl |

No design, colours, fonts or existing sections were removed.

---

## 6. Final titles and descriptions

| Page | Title | Description |
|---|---|---|
| / | Digital Marketing Consultant in Kerala \| Trivandrum \| Farsana | Trivandrum-based digital marketing consultant for Kerala businesses: Meta Ads, Google Ads, SEO and influencer marketing, with real Ads Manager case studies. |
| /about-farsana/ | About Farsana N \| Digital Marketing Consultant in Trivandrum | Farsana N, a Trivandrum-based digital marketing consultant with 4+ years in Meta Ads, Google Ads, SEO, social media and influencer marketing. |
| /meta-ads-specialist-kerala/ | Meta Ads Expert in Kerala \| Facebook & Instagram Ads \| Farsana | Meta ads specialist in Kerala. Facebook and Instagram campaigns built for enquiries, calls and WhatsApp messages, with a weekly report on what each lead cost. |
| /google-ads-specialist-kerala/ | Google Ads Expert in Kerala \| Search & Call Ads \| Farsana | Google ads specialist in Kerala. Search, Performance Max and call campaigns, with negative keywords and conversion tracking set up before a rupee is spent. |
| /seo-specialist-kerala/ | SEO Expert in Kerala \| Local & Technical SEO \| Farsana | SEO expert in Kerala, based in Trivandrum. Technical and on-page SEO, local SEO and Google Business Profile, plus AEO and GEO, with monthly reporting. |
| /social-media-marketing-kerala/ | Social Media Marketing Expert in Kerala \| Farsana | Social media marketing in Kerala by a Trivandrum-based consultant: content plans, Reels, Malayalam and English posts and monthly reports. |
| /influencer-marketing-kerala/ | Influencer Marketing in Kerala \| Malayalam Creators \| Farsana | Influencer marketing in Kerala. A dashboard of 10,000+ influencers across every niche, reach checked before you pay, and every creator tracked to enquiries. |
| /ai-solutions-developer-kerala/ | AI Solutions Developer in Kerala \| Chatbots \| Farsana | AI solutions developer in Kerala: AI chatbots for your website and WhatsApp, lead follow-up automation and custom machine learning models in Python. |
| /case-studies/ | Meta Ads Case Studies from Kerala \| Real Results \| Farsana | 13 Meta ads case studies from Kerala and the Gulf: 2,477 conversations and 3,023 calls, with every number taken from Ads Manager screenshots. |

## 7. Sitemap and robots validation

- `sitemap.xml`: valid XML against the sitemaps.org namespace; 9 URLs; all return 200; all match their canonical; none is noindex or redirected.
- `robots.txt`: syntax valid, allows everything, declares the sitemap. **Limitation:** Google looks for robots.txt only at `https://farsanafarsu.github.io/robots.txt` (currently 404, which Google treats as "crawl everything", so nothing is blocked). Options: (a) do nothing and submit the sitemap in Search Console, which works; (b) create a `farsanafarsu.github.io` repo containing a robots.txt that lists this sitemap; (c) move to a custom domain (about ₹800–1,200 a year), which also gives a shorter, more trustworthy URL. Recommended: (c) when budget allows, otherwise (a).

## 8. Structured data validation

- Syntax: all JSON-LD on all 9 pages parses as valid JSON (automated check). Types: Person, WebSite, WebPage, ProfilePage, CollectionPage, Service, ItemList, FAQPage, BreadcrumbList.
- Rich-result eligibility is a separate question. **BreadcrumbList** is eligible. **FAQPage** rich results have been limited by Google to authoritative government and health sites since 2023, so expect no FAQ snippets; the markup still helps machines (and AI answers) read the Q&A. Person, Service and ProfilePage are understood but have no dedicated rich result.
- Not added, on purpose: LocalBusiness (no public office), AggregateRating or Review (no collected reviews), awards or certifications.
- To do after deploy: run each URL through https://search.google.com/test/rich-results and https://validator.schema.org.

## 9. Internal linking plan

| From | To | Anchor | Status |
|---|---|---|---|
| Home services rows | each service page | "Learn more" | Existed |
| Home footer | all 8 pages | page names | **Added** |
| Every service page footer | About, Case studies, Social media | page names | **Added** |
| Every service page nav | Social media page | "Social media" | **Added** |
| Case studies | Home, Meta, Google, SEO, About, contact | nav | **Added** |
| Meta ads FAQ | Trenster case | "Trenster case study" | **Added** |
| Social media page | BlackBox, Saki, PRception cases; Meta ads page | "Read the case", "Meta ads" | **Added** |
| About | BlackBox case, case studies, all services | descriptive | **Added** |
| Google ads page → case studies | – | – | Recommended once there is a Google Ads case study |
| SEO page → a documented SEO result | – | – | Recommended: write up the BlackBox #1-ranking work with Search Console screenshots |
| Home → About | "Explore my resume" points to the PDF | – | Recommended: add an "About me" text link next to it |

Content clusters to grow: Meta ads and lead generation (strongest), SEO and audits, influencer marketing, social media, Google Ads, AEO and GEO.

## 10. Content calendar (recommended, 1 article every 2 weeks)

Each piece must use your own data or screenshots. That is what separates it from AI filler.

1. What a WhatsApp lead really costs in Kerala: cost per conversation across 13 real campaigns (data from the case studies) → Meta page
2. Boost button vs Ads Manager: the same budget, two results → Meta page
3. How I audited a Kerala business website: a 66-point checklist walkthrough → SEO page
4. Onam influencer campaign: coordinating 50+ creators in 2 weeks (Parleg) → Influencer page
5. How BlackBox Learning reached #1 for its target keywords (with Search Console screenshots) → SEO page
6. Google Ads negative keyword list for Kerala service businesses → Google page
7. Google Business Profile checklist for Trivandrum businesses → SEO page
8. How to check whether a Malayalam influencer's followers are real → Influencer page
9. AEO and GEO explained for Kerala business owners: what's real and what's hype → SEO page
10. Product ads that sell on WhatsApp: the Trenster campaigns → Meta page

Publish them under `/blog/<slug>/` only once you have 2–3 ready, and add `/blog/` to the sitemap at that point.

## 11. Remaining issues (not fixed)

| Severity | Issue | Why not fixed | Recommendation |
|---|---|---|---|
| Medium | Homepage is 427 KB of HTML with large inline CSS/JS; heavy scroll animations | Splitting it out risks breaking the design you built | Measure first at https://pagespeed.web.dev on mobile; if LCP is over 2.5 s, move inline CSS and JS to cached files |
| Medium | Case-studies page shows one case at a time with JavaScript | Changing it alters how visitors use the page | Consider showing all cases when there is no `#case-n` in the URL, or give each case its own URL |
| Medium | Stated figures disagree: the resume says ₹50 lakh+ Meta spend; the Meta page says ₹60 L+ spent, 1,00,000+ calls, 10,000+ campaigns; the homepage counters say 1,00,000 | I can't verify which is current | **Please confirm the real numbers** so every page says the same thing; inconsistent numbers hurt trust |
| Medium | No genuine client testimonials | None supplied | Ask 3–5 clients for a written quote with permission (name, business, one result) |
| Low | Influencer page claims "10,000+ influencers in my dashboard" | Not verifiable from the repo | Keep only if you can show it |
| Low | Google Business Profile | Eligibility: a service-area business without a storefront can hide its address, but Google requires in-person contact with customers | Create one only if you meet clients in person; never use a fake address |
| Low | Free github.io URL | Needs a domain purchase | Custom domain (see §7) |

## 12. Deployment checklist

1. Review locally: open each page from the `seo-optimisation` branch (or ask Claude for screenshots).
2. Merge to main: `git checkout main`, `git merge seo-optimisation`, `git push`.
3. Wait for the "pages build and deployment" action to go green (about 1 minute).
4. Hard-refresh (Ctrl + Shift + R) and click through: home footer links, the case-studies nav, both new pages and a fake URL (to see the 404 page).
5. Check that `…/assets/content/SEO_Website_Content_Digital_Marketing_Consultant_Kerala.md` and the zip now return 404 (the `_config.yml` exclusions worked).
6. Rollback if anything breaks: `git revert -m 1 <merge-commit>` then push (or `git reset --hard pre-seo-checkpoint` locally).

## 13. Google Search Console checklist

1. Go to https://search.google.com/search-console and choose **Add property → URL prefix**: `https://farsanafarsu.github.io/Digitalmarketingconsultantinkerala/`. (A Domain property isn't possible on github.io.)
2. Verify with the **HTML tag** method: copy the `<meta name="google-site-verification" …>` tag, send it to me (or paste it into the `<head>` of index.html), push, then click Verify.
3. **Sitemaps** → submit `sitemap.xml`.
4. **URL Inspection** → inspect the homepage and each service page → "Request indexing" (about 10 a day). This asks Google to crawl; it does not guarantee indexing or ranking.
5. After 1–2 weeks: **Pages** report (indexed vs not indexed, and why) and **Performance** report (queries, impressions, clicks, CTR, average position). Filter queries containing "trivandrum" and "kerala".
6. Optional: GA4 (free). Create a property, add the tag, and mark contact form submits as a key event. You already log enquiries to a Google Sheet, so add a "How did you find me?" field to measure organic leads.
7. Monthly: note impressions, clicks and enquiries per page in a sheet, so you can see which pages are worth expanding.

## 14. 30-day action plan

| Week | Do | Who |
|---|---|---|
| 1 | Approve and deploy this branch; set up Search Console; submit the sitemap; request indexing for 9 URLs; run the Rich Results Test | You (+ me for code) |
| 1 | Confirm the real spend, calls and campaign figures (§11) so every page matches | You |
| 2 | Fill search volumes in keywords.csv from Keyword Planner; check PageSpeed mobile scores | You |
| 2 | Ask 3–5 clients for testimonials; update the LinkedIn headline to "Digital marketing consultant in Trivandrum, Kerala" with the site link | You |
| 3 | Publish article 1 (WhatsApp lead costs) and article 5 (BlackBox SEO, with screenshots); link from the service pages | You + me |
| 3 | Add the site link to your Instagram bio, LinkedIn, BlackBox/PRception team pages (if allowed) and any directory where you are genuinely listed | You |
| 4 | Read the Search Console Performance report; for pages with impressions but low CTR, rewrite titles; decide on a custom domain | You + me |

Expect the first meaningful Search Console data after 2–4 weeks, and movement on competitive Kerala keywords over months, not weeks. No ranking can be guaranteed.

---

## 15. Update 20 Oct 2026: move to farsanaa.in and "best" keyword pass

### Domain move
- Every canonical, Open Graph URL, JSON-LD `@id`/`url`, the sitemap and robots.txt now use `https://farsanaa.in/`. The 404 page's links became root-relative (`/…`).
- `src/worker.js` (Cloudflare Worker) 301-redirects `http://` and `www.farsanaa.in` (and the workers.dev URL) to `https://farsanaa.in`, so only one copy is indexable. Before this, all of them returned 200.
- The old github.io copy now carries canonicals pointing to farsanaa.in. Best: turn off GitHub Pages (repo Settings → Pages → Unpublish) once farsanaa.in is indexed, or leave it; the canonicals consolidate it.
- Search Console: add a **Domain** property for `farsanaa.in` (DNS TXT record in Cloudflare), submit `https://farsanaa.in/sitemap.xml`, and request indexing for the homepage and service pages.

### Competitors seen for "best digital marketing consultant in Kerala" (raw HTML, 20 Oct 2026)
Rankings **Not verified**: the search tool returns US results, not google.co.in.

| Site | Title | H1s / H2s | Words | Exact phrase uses | Schema |
|---|---|---|---|---|---|
| rahoof.in | Best Digital Marketing Consultant in Kerala \| Rahoof | 1 / 1 | ~1,280 | 24 (heavy repetition) | Person, FAQPage, Article |
| kvhudaif.com | Brand Consultant in Kerala \| Digital Marketing Consultant in Kerala | 1 / 15 | ~1,420 | 0 | Person, Article |
| akhilsutheesh.com | Best Digital Marketer in Kerala \| Akhil Sutheesh | **0** / 2 | ~460 | 0 | Person, Video |
| sijiraju.com | Best Digital Marketer in Thrissur, Kerala \| Freelancer | 1 / 15 | ~2,490 | 0 | Person, Article |
| sidhthemarketer.com (Trivandrum) | Best digital marketing freelancer in Trivandrum | 1 (empty) / 5 | ~590 | 0 | Person, Organization, Blog |
| sinupsabu.in (Trivandrum) | Best Digital Marketing Consultant & Trainer in Trivandrum | **7** / 17 | ~1,200 | 0 | Person, ProfilePage |
| anjuanuraj.com | Digital Marketing Consultant in Kerala \| Google & Meta Ads Expert | 1 / 1 | ~1,175 | 0 | Person, FAQPage |
| vishnupadmakumar.com (Kochi) | Freelance Digital Marketer in Kochi, Kerala | 1 / 8 | ~790 | 0 | Person |
| athiras.com | Indonesian spam content | – | – | – | Domain appears hijacked/expired; ignore |

**farsanaa.in homepage after this pass:** title "Best Digital Marketing Consultant in Kerala | Farsana", phrase in title, H1, description, an H2 and the FAQ (natural use, not 24×), ~4,150 words, 13 H2s, Person/WebSite/WebPage/Service/FAQPage graph. On-page it now matches or beats every competitor above. What competitors have that this site lacks: **age, backlinks, Google reviews and blog posts**. Those, not more on-page edits, decide the top spot now.

### Changes
- Homepage: title, og:title, WebPage name, description, H1 ("The best digital marketing consultant in Kerala gets your business found like this."), About paragraph adds "freelance digital marketing expert" / "digital marketer in Kerala", stronger proof in the "best" FAQ, new FAQ "Are you a freelance digital marketer in Kerala?" (HTML and FAQ schema).
- Service titles prefixed "Best …" (Meta Ads, Google Ads, SEO, Social media, Influencer marketing consultant, AI solutions developer).

---

## 16. Fixes from the Medialab audit (20 Oct 2026, scored 86/100)

| Audit item | Status | Change |
|---|---|---|
| FAIL HTML size 421.7 KB | Fixed | 97 KB. CSS → `assets/home.css`, 22 scripts → `assets/home.js` (deferred, each block isolated with try/catch), embedded portrait → `assets/farsana-digital-marketing-consultant-kerala.webp`, decorative `aria-hidden` mock-ups and the duplicate brand row are now injected by home.js |
| FAIL inline CSS 183 KB | Fixed | 0 KB inline; external CSS cached 30 days, linked with `?v=` |
| Security headers (HSTS, nosniff, X-Frame-Options, CSP) and charset | Fixed | Set in `src/worker.js`; CSP allows Google Fonts, cdnjs (Matter.js), the Apps Script / FormSubmit form endpoints and Cloudflare analytics |
| llms.txt, humans.txt | Fixed | Added at the root |
| Meta description 158 chars | Fixed | 146 chars |
| twitter:image, favicon | Fixed | All pages; favicon.svg/.ico + apple-touch-icon |
| Next-gen images (45 PNG) | Fixed | All 35 PNG files converted to lossless WebP; references updated; PNGs removed |
| Iframe | Fixed | Resume viewer iframe is created only when the dialog opens |
| Author / date | Fixed | Footer byline (`class="author"`, `rel="author"`) + `<time>`; WebPage schema has author, datePublished, dateModified |
| Keyword in image alt | Fixed | Portrait alt text |
| `<main>` missing | Fixed | Homepage content wrapped in `<main id="main">` |
| Keyword density 0.1% | Improved | 9 natural uses (title, description, H1, 2 H2s, intro, FAQ, contact, footer, alt). The tool wants 0.5% (~19 uses on this page); not done because that level of repetition reads as keyword stuffing |
| Keyword in URL | Won't fix | It is the homepage (`/`); a separate "best-…" page would compete with it |

Gotcha found: a `url()` inside a CSS custom property set in an inline style resolves against the stylesheet that uses it, so brand logos broke once CSS moved to `assets/`. They now use root-absolute `/assets/...` paths.

---

## 17. Second pass (30 Oct 2026)

Re-audit of the live site and the repo against the "master prompt" brief. Search Console data was not available, so keyword choices are still unverified against real queries.

Found live: the old GitHub Pages copy still serves the whole site (duplicate), and Cloudflare's trailing-slash redirects were 307 (temporary). Both are fixed by the JS redirect in every `<head>` and the 301 rewrite in `src/worker.js` (301 verified locally).

| Change | Files |
|---|---|
| H1 now "Digital marketing consultant in Kerala, helping your business get found and grow."; hero line names SEO, Google ads, Meta ads and performance marketing; CTAs "Discuss your project" (#contact) and "View my work" (/case-studies/) | index.html |
| Exact phrase "best digital marketing consultant" cut from ~12 to 10 source uses: removed from portrait alt, contact H2 (now "Hire a digital marketing consultant in Kerala") and footer byline. Kept in title, description, "How to choose" H2 and FAQ. Note: this lowers the density the Medialab tool asked for (section 16); repetition was starting to read as stuffing | index.html |
| Social media marketing added as homepage service 04 (row, desktop slide in the services panel, ItemList schema); counter now / 09 | index.html, assets/home.js |
| "consultant in Kerala" variant added once to each intro; also stops the intro duplicating the homepage service text | meta-ads-, google-ads-, seo-specialist-kerala |
| Case-study images: real width/height on all 37, `loading="lazy"` outside case 1 (≈1.3 MB was downloading up front) | case-studies/index.html |
| Mock ad headline `<h4>` → `<p class="ga-hl">` (H1→H4 jump) | google-ads-specialist-kerala, assets/lp.css |
| Width/height on 9 client logos | meta-ads-specialist-kerala |
| `?v=20261030` on home.js and lp.css; sitemap lastmod and WebPage dateModified 2026-10-30 | all pages, sitemap.xml |

Not done on purpose: separate "performance marketing" or "lead generation" pages (no dedicated proof yet, would be thin); `#all` on case studies is a JS view, not a broken anchor.

After deploy: request indexing for `/` in Search Console, resubmit the sitemap, and turn off GitHub Pages for this repo once the JS redirect is live there.
