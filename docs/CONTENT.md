# Scholametrix — Website content (v1)

All copy for scholametrix.tech, page by page and section by section, ready to drop into the
Next.js build. Everything here is based on what the product actually does today (AI marking
service + e-Exam platform). Nothing is invented: no fake customers, testimonials or accuracy
numbers.

Items marked **[CONFIRM]** need your answer before launch. Items marked **[ADD]** need
information only you have.

---

## 0. Brand basics

| Item | Value |
|---|---|
| Name | **Scholametrix** (Scholar + Metrics) |
| Domain | scholametrix.tech (API stays at api.scholametrix.tech) |
| Tagline | **Fair, fast AI marking for written exams.** |
| One-liner (SEO description) | Scholametrix marks written exam answers with AI against your rubric — per-criterion marks, highlighted evidence and a clear reason for every mark — and teachers approve every result. |
| Elevator pitch (30 s) | Marking written exams takes teachers weeks, and two markers rarely give the same answer the same mark. Scholametrix reads every answer against the teacher's rubric, suggests a mark for each criterion, highlights the exact words that earned it and explains why. The teacher accepts with one tick or adjusts. Results reach students in days, not weeks — and every mark is still a teacher's decision. |
| Founded | 2026 · Rajshahi, Bangladesh **[CONFIRM city / year]** |
| Contact email | hello@scholametrix.tech **[CONFIRM — mailbox must exist]** |
| Sales / demo email | sales@scholametrix.tech **[CONFIRM or use hello@]** |
| Phone / WhatsApp | **[ADD]** |
| Social | LinkedIn, Facebook page, X **[ADD links or remove]** |
| Logo | `Resources/logo-scholarmetrix.png` — note the file name says "scholar**r**metrix"; the brand everywhere is **Scholametrix** |

**Voice:** confident, plain, academic-trustworthy. Short sentences. Say what the product does,
never hype ("revolutionary", "100% accurate"). Always repeat the promise that teachers stay in
control — it is the main objection buyers have.

---

## 1. Global navigation and footer

**Top nav:** Product ▾ (AI Marking · e-Exam Platform · For Developers) · How it works · Security ·
Pricing · About · Partners — buttons: **Book a demo** (primary), **Sign in** (secondary, links to
console/e-Exam **[CONFIRM target]**)

**Footer**

- Column "Product": AI Marking · e-Exam Platform · Developer API · Pricing · Security
- Column "Company": About · Team · Partners & Sponsors · Case study · Contact
- Column "Resources": API documentation · FAQ · Privacy policy · Terms of service
- Column "Contact": hello@scholametrix.tech · [phone] · Rajshahi, Bangladesh
- Bottom line: © 2026 Scholametrix. All rights reserved. · Built in Bangladesh for classrooms everywhere.
- Newsletter (optional): "Get product updates — one email a month." **[CONFIRM — needs a mailing tool]**

---

## 2. Home page `/`

**SEO title:** Scholametrix — AI Marking for Written Exams | Fair, Fast, Teacher-Approved
**Meta description:** Mark written exam answers with AI against your own rubric. Per-criterion
marks, highlighted evidence and clear reasons — teachers approve every result. For universities,
schools and EdTech platforms.

### 2.1 Hero
- Eyebrow chip: `New · AI marking for written answers`
- H1: **Mark written exams in hours, not weeks — *fairly.***
  (accent word in italic serif + gradient: *fairly.*)
- Sub: Scholametrix reads every answer against your rubric, suggests marks for each criterion,
  highlights the evidence and explains the reason. Your teachers approve every mark with one tick.
- Primary CTA: **Book a demo** → /contact
- Secondary CTA: **See how it works** → #how-it-works
- Trust line under CTAs: ✓ Teacher-approved marks ✓ English & Bangla ✓ Zero-data-retention AI
- Visual: live marking demo card (see design plan §4.1) — a student answer, rubric criteria
  filling in, highlights appearing, "Approved by teacher ✓".

### 2.2 Proof bar
- Label: "In use at" → University of Rajshahi e-Exam **[CONFIRM permission to name RU + use logo]**
- Alternative if not confirmed: "Built with and for university examiners in Bangladesh"

### 2.3 The problem
- Section label: THE PROBLEM
- H2: **Written exams are the best test of understanding — and the hardest to mark.**
- Three cards:
  1. **Weeks of marking** — A single course can mean hundreds of scripts. Results wait while
     teachers mark late into the night.
  2. **Inconsistent marks** — Different markers, or the same marker on a tired evening, give the
     same answer different marks.
  3. **Little feedback** — Students get a number, rarely the reason. They can't see what they
     missed.

### 2.4 How it works  `#how-it-works`
- Label: HOW IT WORKS
- H2: **From rubric to released results in four steps**
- Steps:
  1. **Set the rubric** — Write criteria with marks, or let Scholametrix draft a rubric from your
     model answer. You review and approve it.
  2. **Students answer** — Through the Scholametrix e-Exam platform or your own system via our API.
  3. **AI suggests marks** — Each answer gets marks per criterion, highlighted evidence, strong and
     weak points, and missing points — in seconds for a class, steadily for thousands.
  4. **Teachers approve** — Accept with a tick, or adjust a mark and add a reason. Only approved
     marks reach students.

### 2.5 Feature bento
- Label: WHAT YOU GET
- H2: **Everything a careful examiner does — at the speed of software**
- Tiles:
  - **Rubric drafting** — Turn a model answer into a balanced rubric in seconds; every criterion
    traces back to the model answer and marks add up.
  - **Marks per criterion** — Not one opaque number: a mark for each criterion, rounded to your
    mark step (e.g. 0.5).
  - **Highlighted evidence** — The exact phrases that earned (or lost) marks are highlighted on the
    student's answer.
  - **Why this mark** — A short, plain explanation the teacher can check and the student can learn from.
  - **English & Bangla** — Marks and highlights work in Bangla script, English, and mixed answers
    with formulas.
  - **Smart skips** — Blank answers get zero instantly and identical answers reuse the first result,
    so you never pay twice.
  - **Built for exam day** — Small exams are marked in real time; large exams queue and finish
    steadily without slowing anyone down.
  - **Cost control** — Monthly usage limits per institution and a clear per-answer price.

### 2.6 Teacher in control
- Label: HUMAN IN THE LOOP
- H2: **The AI suggests. Your teachers decide.**
- Body: Every Scholametrix mark starts as a suggestion. Teachers see the highlighted answer, the
  reason and the criterion marks side by side, then accept with one tick or adjust. When a teacher
  raises a mark above the suggestion, they record why. Every decision is stored, so you can measure
  how often teachers agree with the AI — per course, per question, per model.
- Bullet points:
  - Nothing reaches a student without a teacher's approval
  - Adjust any criterion, add a note, re-run an answer
  - Full audit trail of who approved what, and when

### 2.7 Two ways to use Scholametrix
- H2: **Use our complete exam platform — or plug AI marking into yours**
- Card A — **Scholametrix e-Exam** — A complete online examination system: question bank,
  exam scheduling and approval, timed exams with autosave, automatic MCQ marking, AI-assisted
  written marking, results and reports. → Explore e-Exam
- Card B — **AI Marking API** — Already have an LMS or exam system? Connect with an API key: send
  answers, receive marks through signed webhooks. → Read the API docs

### 2.8 Who it's for
- H2: **Built for everyone who marks written answers**
- Universities — Faculty-wide exams, department-level control, audit trails.
- Colleges & schools — Faster results for board-style written exams.
- Exam & admission bodies — Thousands of scripts marked consistently, on schedule.
- EdTech & LMS companies — Add rubric-based AI marking to your product with one API.

### 2.9 Case study teaser **[CONFIRM permission]**
- Label: CASE STUDY
- H2: **University of Rajshahi runs its online exams on Scholametrix**
- Body: The e-Exam platform runs exams for departments at one of Bangladesh's largest public
  universities. Teachers build rubrics in the question bank, students sit timed exams, and
  written answers arrive in the evaluation workspace with suggested marks waiting.
- Facts row (only facts you can confirm): Departments onboarded **[ADD]** · Students **[ADD]** ·
  Exams held **[ADD]**
- CTA: Read the case study →

### 2.10 Security & trust (teaser of /security)
- H2: **Student data treated like exam papers — locked down**
- Six items: Zero-data-retention AI providers · Student answers never used to train models ·
  Encrypted keys & secrets (AES-256) · Signed webhooks (HMAC) · Role-based access & audit log ·
  Cloud or on your own servers
- CTA: Read our security approach →

### 2.11 Developer strip
- H2: **Three calls to add AI marking to any system**
- Code sample (shown in a terminal card, tabs: cURL / Node.js):
  ```bash
  curl https://api.scholametrix.tech/v1/evaluations \
    -H "Authorization: Bearer $SCHOLAMETRIX_KEY" \
    -d '{ "groupId": "exam-2026-cse101", "question": { ... }, "answers": [ ... ] }'
  ```
- Points: REST + JSON · Signed webhooks · Idempotent submissions · Progress per exam
- CTA: Read the API docs →

### 2.12 Pricing teaser
- H2: **Pay per answer marked. No surprises.**
- Body: Plans include a monthly allowance and a clear price per extra answer. Blank and duplicate
  answers can be free. Universities can choose an annual agreement.
- CTA: See pricing →

### 2.13 Team teaser
- H2: **Built by examiners' colleagues, not strangers to the classroom**
- Founder cards (photo, name, role, one line) → link to /about#team

### 2.14 Partner & sponsor CTA
- H2: **Help us bring fair marking to every classroom**
- Body: We're looking for pilot institutions, research partners and sponsors who believe written
  exams deserve fast, consistent and explained marks.
- Buttons: Become a pilot partner · Sponsor or invest

### 2.15 FAQ (also used for FAQPage schema)
1. **Does the AI give final marks?** — No. It suggests marks; a teacher approves or adjusts every
   one before students see it.
2. **Which languages are supported?** — English and Bangla, including mixed answers and formulas.
   More languages on request.
3. **How accurate is it?** — Accuracy depends on a clear rubric. Because teachers review every
   suggestion, we measure agreement between the AI and your teachers for each course and share it
   with you. **[UPDATE with pilot agreement figure once measured]**
4. **Is student data used to train AI?** — No. We use AI providers with zero data retention, and
   answers are never used for training.
5. **Can we use it with our existing system?** — Yes, through the AI Marking API, or use our
   complete e-Exam platform.
6. **Can it run on our own servers?** — Yes. Institutions with strict data rules can host the
   service on their own infrastructure.
7. **How long does marking take?** — Small exams get suggestions within seconds of submission.
   Large exams are queued and finished steadily, typically well before teachers sit down to review.
8. **How is it priced?** — Per answer marked, with a monthly allowance. See Pricing.

### 2.16 Final CTA
- H2: **See your own exam marked by Scholametrix**
- Body: Send us one question, your rubric and a few anonymous answers. We'll show you the
  suggested marks in a live 30-minute demo.
- Button: Book a demo

---

## 3. AI Marking page `/ai-marking`

**SEO title:** AI Marking — Rubric-Based Grading for Written Answers | Scholametrix
**Meta:** Automated, rubric-based marking for written and essay answers. Per-criterion marks,
highlighted evidence, explanations, English & Bangla. Teachers approve every mark.

- Hero H1: **AI marking that shows its work**
- Sub: Per-criterion marks, highlighted evidence and a clear reason for every answer — reviewed and
  approved by your teachers.
- Section "Anatomy of a marked answer" — annotated screenshot/mock with callouts:
  criterion marks · total · highlights (green = earned, amber = partly, red = missing) ·
  why this mark · strong points · weak points · missing points · teacher actions.
- Section "Rubric drafting" — from model answer to rubric; checks: marks add up, steps of 0.5,
  every criterion traced to the model answer; teacher edits and approves.
- Section "Consistent by design" — same rubric, same settings, same model for every student;
  temperature 0; marks recomputed and clamped on the server so totals always add up.
- Section "Fast at any scale" — real-time lane for small exams, steady queue for big ones, so
  results arrive on schedule even on the busiest exam day.
- Section "What we never do" — never release marks without a teacher · never train on student
  answers · never hide how a mark was reached.
- CTA: Book a demo · Read API docs

## 4. e-Exam Platform page `/e-exam`  **[CONFIRM: can e-Exam be sold under the Scholametrix brand?]**

**SEO title:** Online Examination System with AI Marking | Scholametrix e-Exam
**Meta:** A secure online examination system for universities: question bank, exam approval,
timed exams with autosave, automatic MCQ marking, AI-assisted written marking, results and reports.

- H1: **The complete online examination system — with AI marking built in**
- Sub: Everything from question bank to final mark sheet, in one secure platform.
- Modules (cards):
  - **Question bank** — MCQ and written questions with rubrics, Excel import.
  - **Exam builder & approval** — Teachers build exams; heads and admins review and approve.
  - **Secure exam taking** — Server-side timer, autosave as students type, safe submission.
  - **Automatic MCQ marking** — Instant, exact.
  - **Written answer evaluation** — AI-suggested marks, teacher approval, per-student workspace.
  - **Results & final marking** — Mark sheets, result publishing, Excel/PDF reports.
  - **Roles for everyone** — Super admin, faculty admin, department head, teacher, student — each
    sees only their scope.
  - **Dashboards** — Live exam calendar, submissions, marking queue and performance at a glance.
  - **Audit log** — Every important action recorded.
  - **Typing practice** — Built-in typing course and speed tests so students are ready for online exams.
- Section "Designed in this order: integrity → reliability → security → performance → a clean UI."
- CTA: Book a demo

## 5. Developers page `/developers`

**SEO title:** AI Marking API for EdTech & LMS Developers | Scholametrix
- H1: **Add AI marking to your product in an afternoon**
- Steps: 1) Get an API key · 2) `GET /v1/me` to check it · 3) `PUT /v1/webhook` to receive results
  · 4) `POST /v1/evaluations` to submit answers
- Endpoint table: rubrics/draft · evaluations (submit, list, get, rerun, review) · evaluations/try
  · groups/:id/progress · usage · billing · webhook
- Webhook: `X-AMS-Signature: t=…,v1=…` HMAC-SHA256 — verification snippet
- Limits: up to 500 answers per request, 20,000 characters per answer, idempotent per answer.
- CTA: Request API access

## 6. Security page `/security`

**SEO title:** Security & Data Privacy | Scholametrix
- H1: **Built for exam-grade security**
- Sections:
  - **Your data** — Student answers are processed only to mark them. AI providers are restricted to
    zero-data-retention hosts. Nothing is used for training.
  - **Access** — Role-based access with scopes (faculty, department, course). Two-factor sign-in for
    super admins. Every key action goes to an audit log.
  - **Secrets** — API keys stored as hashes; connection secrets encrypted with AES-256-GCM; secrets
    shown masked.
  - **Integrations** — Webhooks signed with HMAC-SHA256 and time-stamped to block replays.
  - **Infrastructure** — TLS everywhere, databases never exposed to the internet, regular backups.
  - **Deployment choice** — Our cloud, or your own servers for full data residency.
- Note: "Questions from your IT or legal team? Email security@scholametrix.tech" **[CONFIRM mailbox]**

## 7. Pricing page `/pricing`  **[CONFIRM prices before showing numbers]**

**SEO title:** Pricing — Pay Per Answer Marked | Scholametrix
- H1: **Simple pricing that scales with your exams**
- Three cards (numbers hidden behind "Contact us" until you confirm):
  1. **Pilot** — For one department or course. Free for the first **[ADD n]** answers **[CONFIRM offer]**.
     Guided setup, rubric workshop, agreement report.
  2. **Institution** — Monthly fee with included answers + price per extra answer. Blank and
     duplicate answers free. e-Exam platform included **[CONFIRM]**. *Most popular*
  3. **Enterprise / API** — For exam bodies and EdTech platforms. Volume pricing, SLA, on-premise
     option, dedicated support.
- Below: "Every plan: teacher approval workflow · English & Bangla · usage limits · monthly
  statement and invoice"
- FAQ mini: Is there a setup fee? · Can we pay annually? · What counts as an answer?
- Local currency note: Prices in BDT for Bangladesh, USD internationally.

## 8. About page `/about`

**SEO title:** About Scholametrix — Our Mission and Team
- H1: **Every written answer deserves a fair, fast and explained mark**
- Story: Scholametrix started inside a university exam office problem: online exams made
  submission instant, but written answers still took weeks to mark. We built an AI that marks the
  way a careful examiner does — against the rubric, with evidence — and kept teachers in charge of
  every final mark. **[EDIT to your real founding story]**
- Mission: Make high-quality written assessment fast and fair for every institution, in every language.
- Vision: A world where students get their marks — and the reasons — while the exam is still fresh.
- Values: Teachers decide · Show the evidence · Privacy by default · Build for real classrooms
- **Team** `#team`
  - **MD Omar Faruk** — Founder & CEO. Photo: `Resources/MD Omar Faruk(CEO).jpeg` (rotate 90° —
    the file is stored sideways). Bio: "Omar leads product and engineering. He designed and built
    the Scholametrix AI marking service and the e-Exam platform now used at the University of
    Rajshahi." **[ADD: education, previous work, LinkedIn, email]**
  - **Khalid Hossen** — Co-founder **[CONFIRM title, e.g. COO / CTO / Head of Partnerships]**.
    Photo: `Resources/CO-Founder (Khalid Hossen).jpg`. Bio: **[ADD 2–3 lines + LinkedIn]**
  - Advisors (optional section, hidden until filled) **[ADD]**
- Milestones timeline (only true items):
  - Oct 2026 — AI marking service launched; first institution connected
  - Oct 2026 — e-Exam platform with AI-assisted marking in use at University of Rajshahi **[CONFIRM]**
  - Next — Pilot agreement study with teachers · Bangla marking benchmark · more institutions

## 9. Partners & Sponsors page `/partners`

**SEO title:** Partner, Pilot or Sponsor Scholametrix
- H1: **Partner with us to modernise assessment**
- Three tracks:
  1. **Pilot institutions** — Run one course with AI-assisted marking at no or low cost; receive an
     agreement report comparing AI suggestions with your teachers' marks.
  2. **Research partners** — Co-author studies on AI-assisted assessment, Bangla-language NLP and
     marking consistency.
  3. **Sponsors & investors** — Support our roadmap. Sponsors are recognised on our website and in
     pilot reports. **[CONFIRM what you offer sponsors]**
- "Why now" block: written exams are growing online; marking capacity isn't; AI is finally able to
  mark against a rubric and explain itself.
- Traction block (facts only): live production deployment · institutions connected **[ADD]** ·
  answers marked **[ADD]**
- Downloadable pitch deck (optional) **[ADD PDF]**
- Form: name, organisation, type (Pilot / Research / Sponsor / Investor / Other), message.

## 10. Case study `/case-studies/university-of-rajshahi`  **[CONFIRM permission]**
- Challenge → Solution → How it works there → Results (only confirmed numbers) → Quote from a
  teacher or admin **[ADD real quote with permission, or omit]**

## 11. Contact / Book a demo `/contact`

**SEO title:** Book a Demo | Scholametrix
- H1: **Let's mark one of your exams together**
- Sub: Tell us about your institution. We reply within one working day.
- Form fields: Full name* · Work email* · Organisation* · Role · Country* · Type (University /
  College / School / Exam body / EdTech / Other) · Students per term (select ranges) · Message ·
  consent checkbox "I agree to be contacted about Scholametrix" — submit "Request demo"
- Side panel: email, phone/WhatsApp, address, office hours (Sun–Thu, 10:00–18:00 BST)
  **[CONFIRM]**
- Form delivery **[CONFIRM: send to email via Resend/SMTP, or store in a database?]**

## 12. Legal
- `/privacy` and `/terms` — standard SaaS templates adapted to Bangladesh law **[must be reviewed
  by you or a lawyer before launch; I'll draft plain-language versions]**

## 13. 404 page
- "This page went missing — like an unmarked script." Buttons: Home · Contact
