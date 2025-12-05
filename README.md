# sandile-unfolds

Sandile Mathenjwa — portfolio website with embedded AI agent and automation integrations. This project showcases web work, collects visitor analytics via n8n workflows, and includes an AI-powered recruiter chatbot with future plans to expand into a SaaS for graduate networking.

**Why this project**: a clean, professional portfolio with practical automation and an interactive agent to help recruiters and visitors quickly find relevant information.

**Features**
- **Clean portfolio showcase**: Modular React components showcase projects, skills, and background.
- **Visitor analytics via n8n**: Visitor events are routed to `n8n` for processing and lightweight automation (notifications, dashboards).
- **Recruiter engagement chatbot**: An embedded conversational agent helps recruiters ask about experience, projects, and schedule follow-ups.
- **Future SaaS expansion**: Planned features to turn the platform into a graduate networking SaaS (matchmaking, job feeds, analytics dashboards).

**Installation**
- Clone the repository:

```bash
git clone https://github.com/Sandilem7789/sandile-unfolds.git
cd sandile-unfolds
```

- Install dependencies (npm):

```powershell
npm install
```

- Run the development server (Vite):

```powershell
npm run dev
```

Notes:
- This project uses Vite + React + TypeScript. If you use `bun` or `pnpm`, you can substitute the appropriate commands (e.g., `bun install` / `bun dev`).

**Usage**
- Open the site locally at the address printed by `npm run dev` (usually `http://localhost:5173`).
- Viewing the portfolio: navigate the `home`, `projects`, `about`, and `contact` pages to review work and case-studies.
- Interacting with the AI agent: click the agent UI (embedded widget) to ask about projects, request a resume, or schedule a conversation. The agent can trigger `n8n` automations for recruiter follow-ups.

**Tech Stack**
- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS and component-based UI primitives
- **Hosting**: Netlify (static site) or other static hosts
- **Automation / Analytics**: n8n workflows for event processing and notifications
- **Backend / Services**: VPS-hosted APIs for server-side logic and secure webhook endpoints

**Roadmap**
- **Phase 1 — Portfolio improvements**: polish UI, add performance and accessibility improvements, refine AI agent responses and collector flows.
- **Phase 2 — SaaS graduate network**: build user accounts, matchmaking engine, recruiter dashboards, monetization options, and multi-tenant support.

**License**
- This project is released under the **MIT License**. See the `LICENSE` file for details.

**Author**
- **Name**: Sandile Mathenjwa
- GitHub: `https://github.com/Sandilem7789`
- LinkedIn: `https://www.linkedin.com/in/sandile-mathenjwa-869140144/`

----

If you'd like, I can also:
- Add a `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md` for open collaboration.
- Add a short `Makefile` or script for common tasks.
- Add badges (Netlify build, license, npm version) to the header.
