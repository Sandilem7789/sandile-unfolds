# 🧠 sandile-unfolds

**Sandile Mathenjwa — Full Stack Developer Portfolio with Embedded AI Agent and Workflow Automation**

This portfolio showcases Sandile’s web development work and integrates an AI‑powered chatbot built with n8n.  
The agent currently supports **text‑based conversations only**, helping recruiters and visitors ask about projects, skills, and background.  
Future updates will expand functionality, including voice input and SaaS networking features.

---

## 🚀 Why this project

To create a clean, professional portfolio that blends technical depth with automation and interactivity — empowering recruiters and visitors to discover relevant information effortlessly.

---

## ✨ Features (Current)

- **Portfolio Showcase**  
  Modular React components highlight projects, skills, and background.

- **Text‑based Recruiter Chatbot**  
  An embedded n8n agent supports conversational Q&A about Sandile’s work.  
  > 🎤 *Note: Voice input (mic button) is not yet functional — text chat only at this stage.*

- **Visitor Analytics via n8n**  
  Events are routed to n8n workflows for dashboards, notifications, and engagement tracking.

- **Call Icon Voice Handoff**  
  After four on-page questions, the chat agent nudges visitors to tap a call icon that opens the ElevenLabs voice agent for deeper conversations.

---

## 🛠️ Tech Stack

| Layer        | Tools & Frameworks                          |
|--------------|---------------------------------------------|
| Frontend     | React, TypeScript, Vite                     |
| Styling      | Tailwind CSS, ShadCN UI                     |
| Hosting      | Netlify (static site)                       |
| Automation   | n8n workflows                               |
| Backend      | VPS‑hosted APIs, secure webhook endpoints   |

---

## 📦 Installation

```bash
git clone https://github.com/Sandilem7789/sandile-unfolds.git
cd sandile-unfolds
npm install
npm run dev

---

## 🎧 RAG → Voice Call Flow

- **Call icon flow**: The inline chat counts each submitted prompt. Once the visitor sends four or more prompts, the agent replies with “If you need more information press the call icon,” reveals a phone glyph beside the mic button, and keeps the conversation context intact so the handoff feels like a natural continuation.
- **Query threshold**: The threshold is controlled via the `CALL_PROMPT_THRESHOLD` constant in `src/components/AgentSection.tsx` (default is 4, but you can set it to 5 or any other value). The counter resets if the visitor closes the chat widget.
- **ElevenLabs embed**: Clicking the call icon renders `<elevenlabs-convai agent-id=...>` plus the official `@elevenlabs/convai-widget-embed` script. The script only loads when the widget is needed and reuses the `VITE_ELEVENLABS_AGENT_ID` environment variable, so rotating agent IDs is as simple as updating `.env`.
- **Styling & configuration notes**: The call icon lives inside the existing input pill for visual continuity, with a helper caption beneath the field. The voice widget mounts inside the chat card, inherits the glassmorphism container styles, and can be restyled by targeting the wrapper div (`bg-black/40 border-white/10`).

