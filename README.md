# TEDxIntegral University – Website Prototype

This repository contains the official website prototype for **TEDxIntegral University 2026**, the first-ever TEDx edition at Integral University, Lucknow.

The goal is to build a **single-page, component-based React site** that follows TED/TEDx branding rules, is easy for multiple volunteers to work on in parallel, and can later connect to a Supabase backend for registration and ticketing.

---

## Tech Stack

- **Frontend**: React (Vite)
- **Styling**: CSS (global design tokens + section-level styles)
- **Animations (planned)**: GSAP / canvas (from original prototype) – to be ported gradually
- **Original prototype**: HTML5, CSS3, JS (kept in `tedx-integral_1.html` and `assets/` as reference)
- **Planned backend**: Supabase (Postgres + Auth) + Node/Next-style API routes

---

## Project structure

```text
TEDxIUL/
├── index.html                        ← Vite entry point (mounts React app)
├── tedx-integral_1.html              ← Archived HTML prototype (commented out)
├── vite.config.js
├── package.json
├── package-lock.json
├── eslint.config.js
├── CHANGELOG.md
├── README.md
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/                              ← LIVE REACT APP (edit these)
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css                     ← Main stylesheet (tokens + base)
│   │
│   ├── assets/                       ← Images used by React components
│   │   ├── LKO.png                   ← Hero background illustration (Imambara skyline)
│   │   ├── IUL.jpg                   ← Integral University image (Venue section)
│   │   ├── tedx-logo.png
│   │   └── tedx-network.png          ← About section graphic
│   │
│   ├── data/
│   │   └── eventData.js              ← FAQs, schedule, tickets, etc.
│   │
│   └── components/
│       ├── Navbar.jsx / Navbar.css
│       ├── Hero.jsx / Hero.css
│       ├── Countdown.jsx / Countdown.css
│       ├── Tickets.jsx / Tickets.css
│       ├── About.jsx / About.css
│       ├── AboutTed.jsx / AboutTed.css
│       ├── Theme.jsx / Theme.css
│       ├── Schedule.jsx / Schedule.css
│       ├── Speakers.jsx / Speakers.css
│       ├── Sponsors.jsx / Sponsors.css
│       ├── FAQ.jsx / FAQ.css
│       ├── Venue.jsx / Venue.css
│       ├── Contact.jsx / Contact.css
│       └── Footer.jsx / Footer.css
│
└── assets/                           ← PROTOTYPE ONLY (ignore these)
    ├── css/styles.css
    ├── js/main.js
    └── images/tedx-logo.png
```

**Key rule:**

- ✅ Edit anything inside **`src/`** — that’s what the live site uses.  
- 🗄️ **`assets/`** (root) and **`tedx-integral_1.html`** are **archived prototype** files for reference only.

---

## Getting started

### Prerequisites

- Node.js (LTS)
- Git

### Installation

```bash
git clone https://github.com/GPA95/TEDxIUL.git
cd TEDxIUL

npm install
npm run dev
```

Then open the printed `http://localhost:5173` (or similar) in your browser.

---

## Development workflow

We use a **branch-per-feature** workflow to avoid conflicts:

1. Update local `main`:

   ```bash
   git checkout main
   git pull origin main
   ```

2. Create a feature branch:

   ```bash
   git checkout -b feature/<short-description>
   ```

3. Make changes, then:

   ```bash
   git add .
   git commit -m "feat: short message"
   git push -u origin feature/<short-description>
   ```

4. Open a **Pull Request** on GitHub into `main`.
5. After review and merge, clean up locally:

   ```bash
   git checkout main
   git pull origin main
   git branch -d feature/<short-description>
   ```

---

## Deployment (Netlify)

The prototype is deployed via **Netlify** for easy sharing with organizers and other teams.

### Production deploy

- The **`main`** branch is connected to Netlify.
- Every push to `main` triggers a new production build (`npm run build`) and deploy (output from `dist`).

### Preview deploys

- Every Pull Request gets its own **preview URL** from Netlify.
- Use this link to review changes visually before merging.

If you are a collaborator and need access to Netlify, contact the repo owner to be added to the project.

---

## Sections & components (current)

Each major section of the TEDx site is its own React component:

- `Navbar` – top navigation + anchor links, mobile hamburger menu
- `Hero` – Imambara skyline hero, event name, theme, date, CTAs
- `Countdown` – countdown to event date (placeholder until date is finalized)
- `Tickets` – ticket CTA and planned ticket tiers (content via `eventData.js`)
- `About` – About TEDxIntegral University and the 2026 edition
- `AboutTed` – “About TEDx, x = independently organized event” and “About TED” with official links
- `Theme` – “Tessellation: From Individual Ideas to Collective Impact”
- `Schedule` – event timeline (days + sessions, powered by `eventData.js`)
- `Speakers` – speaker cards (currently placeholder; to be filled once speakers are confirmed)
- `Sponsors` – sponsor thank-you section (separate from hero, per TEDx rules)
- `FAQ` – FAQs about the event (accordion, data from `eventData.js`)
- `Venue` – Integral University info + Google Maps embed for the event location
- `Contact` – contact details and links (email, social, optional Google Form)
- `Footer` – links + TEDx license text

Static content (FAQs, schedule items, ticket info, etc.) is defined in `src/data/eventData.js` so non-frontend contributors can update copy without touching component logic.

---

## TEDx branding and content rules

We follow official TED/TEDx website guidelines as closely as possible.

- **Homepage must include:**
  - “What is TEDx?” language with a visible link to the [TEDx program](https://www.ted.com/about/programs-initiatives/tedx-program).
  - Footer text: **“This independent TEDx event is operated under license from TED.”**
  - Event name, date, theme, venue, and city.
- **About section** includes:
  - Official “About TEDx, x = independently organized event” text.
  - Official “About TED” text.
- **Sponsors**:
  - Sponsor logos/names **do not appear in the hero**.
  - Sponsor logos are smaller than the TEDx event logo.
  - No ads or disallowed sponsor categories (weapons, gambling, sex-related, etc.).
- **Logos**:
  - Only the TEDxIntegralUniversity event logo and permitted TEDx imagery are used (no TED Conference logo).

As the event details evolve, we’ll keep refining the copy and layout while staying within these rules.

---

## Backend & database (planned)

Planned (not yet integrated):

- Supabase/Postgres for:
  - User profiles
  - Events and sessions
  - Tickets and registrations
  - Roles (attendee, organizer, admin)
  - Future: coupons, feedback, certificates, volunteers, FAQs
- Integration plan:
  - Tickets CTA → registration/login → dashboard (via API + Supabase)
  - Admin view(s) with role-based access and Row-Level Security (RLS)

For now, the focus is a stable, presentable **frontend prototype**.

---

## Contributors

- **[Ammaar Ahmad Khan](https://github.com/GPA95)** – Repo owner, React structure, architecture, Venue/AboutTed, Navbar/Hero responsiveness
- **[Abdul Malik](https://github.com/abdulmalik812)** – Original HTML/CSS/JS prototype
- **[Yazdaan Wali](https://github.com/yazdaanwali)** – Content (About, Theme, FAQs, Schedule), UI copy and text refinements
- **[Owais Raza](https://github.com/oraza7867)** – Inspired the React components and advanced features for future updates

New contributors: please open an issue or contact the team before starting work on a new feature or large refactor.
