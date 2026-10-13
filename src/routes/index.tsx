import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroBg from "../assets/hero-bg.png";
import avatarAsset from "../assets/samuel-portrait.jpeg.asset.json";

const avatar = avatarAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samuel Sam Eno | AI Developer & Data Analyst" },
      { name: "description", content: "Portfolio of Samuel Sam Eno — Junior AI Agent Developer, Data Analyst, and Web Developer passionate about AI and data-driven solutions." },
      { property: "og:title", content: "Samuel Sam Eno | AI Developer & Data Analyst" },
      { property: "og:description", content: "Junior AI Agent Developer, Data Analyst, and Web Developer passionate about AI and data-driven solutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const featuredProjects = [
  {
    title: "AI Email Intelligence & Automation System",
    description: "Built an AI workflow that classifies incoming emails, extracts key details, prioritizes messages, and routes requests to the right team.",
    tags: ["n8n", "Gmail", "Gemini", "Automation"],
  },
  {
    title: "AI Job Application Agent",
    description: "Created a job application assistant that extracts resume content, evaluates role fit, and generates tailored application insights.",
    tags: ["Python", "Streamlit", "Gemini"],
  },
  {
    title: "AI Invoice & Payment Follow-Up System",
    description: "Automated invoice tracking and payment follow-ups using invoice dates, due dates, and payment status.",
    tags: ["n8n", "Google Sheets", "Automation"],
  },
];

const skills = [
  "Python",
  "SQL",
  "MySQL",
  "JavaScript",
  "PHP",
  "HTML5",
  "CSS3",
  "AI Agents",
  "Data Analysis",
  "Excel",
];

function Index() {
  const [activeSkill, setActiveSkill] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="h-full w-full object-cover opacity-40"
            width={1920}
            height={1080}
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-36 md:pb-40">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Open to opportunities
              </div>
              <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
                Samuel <span className="text-gradient">Sam Eno</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-lg">
                Junior AI Agent Developer, Data Analyst, and Web Developer skilled in Python, SQL, JavaScript, and PHP. Passionate about using AI and data-driven solutions to solve real-world problems.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 glow-indigo"
                >
                  View My Work
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-white/10"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
                <img
                  src={avatar}
                  alt="Samuel Sam Eno"
                  className="relative h-72 w-72 rounded-3xl object-cover ring-1 ring-white/10 md:h-96 md:w-96"
                  width={512}
                  height={512}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
      <section className="border-y border-white/[0.06] bg-surface py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {skills.map((skill, i) => (
              <button
                key={skill}
                onMouseEnter={() => setActiveSkill(i)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                  activeSkill === i
                    ? "border-primary/40 bg-primary/15 text-primary"
                    : "border-white/10 bg-white/[0.03] text-muted-foreground hover:text-foreground"
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-medium text-primary mb-2">Featured Work</p>
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Projects & Creations
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View all projects
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="group relative rounded-2xl border border-white/[0.06] bg-card p-6 transition-all hover:border-primary/20 hover:bg-surface-raised"
              >
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary"
                  >
                    Learn more
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              View all projects
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / Highlights */}
      <section className="border-y border-white/[0.06] bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-gradient">7+</p>
              <p className="mt-2 text-sm text-muted-foreground">Projects Built</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-gradient">20+</p>
              <p className="mt-2 text-sm text-muted-foreground">Certifications</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-gradient">6+</p>
              <p className="mt-2 text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Ready to build something <span className="text-gradient">together?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            I'm available for internships, entry-level roles, full-time or contract work, and remote, flexible freelance projects in AI, data analysis, and web development.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 glow-indigo"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
