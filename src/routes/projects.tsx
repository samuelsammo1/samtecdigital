import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Samuel Sam Eno" },
      { name: "description", content: "Explore projects by Samuel Sam Eno — AI agents, data analysis, web development, and automation solutions." },
      { property: "og:title", content: "Projects — Samuel Sam Eno" },
      { property: "og:description", content: "Explore projects by Samuel Sam Eno — AI agents, data analysis, web development, and automation solutions." },
    ],
  }),
  component: Projects,
});

const projects = [
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

import { useState } from "react";
