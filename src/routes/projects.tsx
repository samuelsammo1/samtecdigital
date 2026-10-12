import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Samuel Sam Eno" },
      { name: "description", content: "Explore projects by Samuel Sam Eno — AI agents, data analysis, web development, and automation solutions." },
      { property: "og:title", content: "Projects — Samuel Sam Eno" },
      { property: "og:description", content: "Explore projects by Samuel Sam Eno — AI agents, data analysis, web development, and automation solutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    title: "AI Email Intelligence & Automation System",
    description:
      "Built an AI workflow that classifies incoming emails as client, job opportunity, support, invoice, or newsletter; extracts key details; sets priority; and routes requests to the right team using Gmail, Gemini, and Google Sheets.",
    tags: ["n8n", "Gmail", "Gemini", "Google Sheets"],
    category: "Automation",
  },
  {
    title: "AI Invoice & Payment Follow-Up System",
    description:
      "Automated invoice tracking and payment follow-ups using invoice dates, due dates, payment status, and scheduled reminders.",
    tags: ["n8n", "Google Sheets", "Invoicing", "Automation"],
    category: "Automation",
  },
  {
    title: "AI Job Application Agent",
    description:
      "Developed a Python and Streamlit assistant that extracts resume content, evaluates job listings, and generates tailored application insights.",
    tags: ["Python", "Streamlit", "Gemini", "AI"],
    category: "AI",
  },
  {
    title: "AI Lead & CRM Automation System",
    description:
      "Automated lead intake, qualification, follow-up, and CRM updates to support sales and customer communication workflows.",
    tags: ["n8n", "AI Agents", "CRM", "Automation"],
    category: "Automation",
  },
  {
    title: "WhatsApp & Messenger Customer Support Automation",
    description:
      "Designed a conversational workflow that receives customer messages, understands intent, and routes requests to the appropriate response or support path.",
    tags: ["Meta", "n8n", "AI Agents", "Customer Support"],
    category: "AI",
  },
  {
    title: "Titanic Survival Prediction",
    description:
      "Built a machine learning classifier to predict passenger survival on the Titanic using Python, pandas, and scikit-learn. Engineered features from Pclass, Age, SibSp, Parch, and Fare, handled missing values, trained a RandomForestClassifier, and evaluated accuracy on a held-out test set.",
    tags: ["Machine Learning", "Python", "scikit-learn", "Jupyter"],
    category: "Data",
  },
  {
    title: "AIFPU Online Voting System",
    description:
      "Secure online voting platform for Akanu Ibiam Federal Polytechnic, Unwana. Features student registration with department/programme selection, admin portal for managing elections, positions, candidates, and departments, real-time vote tracking, audit logs, and results dashboards for transparent student union and departmental elections.",
    tags: ["Web Dev", "Authentication", "Dashboards", "Real-time"],
    category: "Web Dev",
  },
  {
    title: "AI Powered Job Alert Automation",
    description:
      "Automated job discovery system that scrapes listings, filters by role and skills, and delivers personalized alerts in real time using AI-powered matching and workflow automation.",
    tags: ["AI", "Automation", "n8n", "Scraping"],
    category: "Automation",
  },

  {
    title: "Supermarket Analytics (Capstone Project)",
    description:
      "End-to-end analytics capstone analyzing supermarket sales data to uncover customer trends, product performance, and revenue drivers with interactive dashboards and SQL-driven insights.",
    tags: ["Data Analysis", "SQL", "Dashboards", "Capstone"],
    category: "Data",
  },
  {
    title: "Real Estate AI Agent",
    description:
      "Built a Voiceflow-powered chatbot for property inquiries and lead engagement. The agent handles natural language queries about listings, schedules viewings, and captures lead information seamlessly.",
    tags: ["Voiceflow", "AI", "NLP", "Automation"],
    category: "AI",
  },
  {
    title: "Samtex AI Agent",
    description:
      "Developed a chatbot for automated user interaction and support. Handles common queries, routes complex issues, and provides instant responses 24/7.",
    tags: ["AI", "Chatbot", "Automation"],
    category: "AI",
  },
  {
    title: "Veterinary Practice Automation",
    description:
      "Automated veterinary workflow and data processes using Tally and Make. Streamlined patient intake, appointment scheduling, and record management.",
    tags: ["Tally", "Make", "Automation", "Workflow"],
    category: "Automation",
  },
  {
    title: "Smart Attendance System",
    description:
      "Developed a real-time attendance tracking system with automated reporting, analytics dashboard, and integration with institutional databases.",
    tags: ["PHP", "MySQL", "JavaScript", "Real-time"],
    category: "Web Dev",
  },
  {
    title: "DMS Ventures LLC Web Platform",
    description:
      "Improved UI/UX, database performance, and integrated CRM/SMS workflows. Built and maintained web systems for a remote US-based venture.",
    tags: ["PHP", "MySQL", "CRM", "UI/UX"],
    category: "Web Dev",
  },
  {
    title: "Students' Mental Health Analysis",
    description:
      "Used SQL to analyze survey data and identify stress patterns among students. Generated actionable insights for institutional mental health programs.",
    tags: ["SQL", "Data Analysis", "Statistics"],
    category: "Data",
  },
  {
    title: "Quiz-Based Exam System",
    description:
      "Built an online testing platform with auto-scoring, timed assessments, and instant result generation for educational institutions.",
    tags: ["PHP", "MySQL", "JavaScript", "Education"],
    category: "Web Dev",
  },
];

const categories = ["All", "AI", "Web Dev", "Automation", "Data"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-4">
            <p className="text-sm font-medium text-primary">Portfolio</p>
          </div>
          <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            Projects & <span className="text-gradient">Creations</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A collection of projects spanning AI agents, data analysis, web development, and automation — built with passion and purpose.
          </p>

          <a
            href="https://drive.google.com/drive/folders/1M03yF_UlDK3wrJ2lcZTvCh4ibJ5NTwHq?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary transition-all hover:bg-primary/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>
            View more work on Google Drive
            <span aria-hidden>→</span>
          </a>
          <a
            href="https://github.com/samuelsammo1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 ml-0 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:text-foreground sm:ml-3"
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.31-3.76-1.31-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.11c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>
            View GitHub profile
            <span aria-hidden>→</span>
          </a>

          {/* Category filter */}
          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground glow-indigo"
                    : "border border-white/10 bg-white/[0.03] text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="group flex flex-col rounded-2xl border border-white/[0.06] bg-card p-6 transition-all hover:border-primary/20 hover:bg-surface-raised"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
