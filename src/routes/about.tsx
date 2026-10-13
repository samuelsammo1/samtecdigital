import { createFileRoute } from "@tanstack/react-router";
import avatarAsset from "../assets/samuel-portrait.jpeg.asset.json";

const avatar = avatarAsset.url;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Samuel Sam Eno" },
      { name: "description", content: "Learn about Samuel Sam Eno — background, skills, education, certifications, and professional experience." },
      { property: "og:title", content: "About — Samuel Sam Eno" },
      { property: "og:description", content: "Learn about Samuel Sam Eno — background, skills, education, certifications, and professional experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const technicalSkills = [
  { name: "Python", level: 80 },
  { name: "SQL & MySQL", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "PHP", level: 70 },
  { name: "HTML & CSS", level: 90 },
  { name: "Data Analysis", level: 80 },
];

const tools = [
  "n8n",
  "Make (Integromat)",
  "Voiceflow",
  "Zapier",
  "WordPress",
  "Hostinger",
  "Replit",
  "Microsoft Excel",
  "Tally",
  "PostgreSQL",
];

const workExperience = [
  {
    role: "AI Automation Specialist",
    company: "Brand You Creative Agency",
    period: "October 2026",
    bullets: [],
  },
  {
    role: "AI Specialist/Web & Systems Developer",
    company: "DMS Ventures LLC",
    period: "2026 — Present",
    location: "Remote",
    bullets: [
      "Built and maintained web systems for the organization",
      "Implemented compliance and CRM integration workflows",
      "Improved database performance and UI/UX",
    ],
  },
  {
    role: "Web Development Instructor",
    company: "Freelance / Institution",
    period: "2023 — 2025",
    bullets: [
      "Taught HTML, CSS, and JavaScript to students",
      "Guided students through real-world projects",
    ],
  },
  {
    role: "Web Developer",
    company: "Anchor Digital Technology",
    period: "2022 — 2024",
    bullets: [
      "Developed web applications and platforms for clients",
      "Managed frontend and backend integration",
    ],
  },
  {
    role: "Graphic Designer / IT Support",
    company: "Freelance",
    period: "2019 — 2022",
    bullets: [
      "Designed graphics for branding and marketing materials",
      "Provided tech support and system maintenance",
    ],
  },
];

const education = [
  {
    degree: "HND, Software & Web Development",
    school: "In View",
    status: "In Progress",
  },
  {
    degree: "ND, Computer Science",
    school: "",
    status: "Distinction",
  },
];

const certifications = [
  { name: "Introduction to Universal AI", org: "MIT", year: "2026" },
  { name: "Introduction to AI Agent", org: "DataCamp", year: "2026" },
  { name: "IBM Dev Day: Bob Edition", org: "IBM", year: "2026" },
  { name: "AI Demystified", org: "IBM", year: "2026" },
  { name: "Microsoft AI Skills Program", org: "Microsoft", year: "2026", count: "6 Certifications" },
  { name: "LinkedIn AI Skills Program", org: "LinkedIn", year: "2026", count: "3 Certificates" },
  { name: "Google Data Analytics Certificate", org: "Google", year: "2021" },
  { name: "Career Skills in Software Development", org: "", year: "2024" },
  { name: "CPN Frontend Development (Level 3)", org: "Nigeria Computer Society", year: "2025" },
  { name: "Emotional Intelligence", org: "", year: "2024" },
  { name: "Marketing & Sales", org: "", year: "2024" },
  { name: "English for IT 1 & 2", org: "Cisco Networking Academy", year: "2024" },
];

function About() {
  return (
    <>
      {/* About Hero */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="relative mx-auto w-fit lg:mx-0">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent blur-xl" />
                <img
                  src={avatar}
                  alt="Samuel Sam Eno"
                  className="relative h-64 w-64 rounded-3xl object-cover ring-1 ring-white/10 md:h-80 md:w-80"
                  width={512}
                  height={512}
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <p className="text-sm font-medium text-primary mb-3">About Me</p>
              <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
                Samuel Sam Eno
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Junior AI Agent Developer, Data Analyst, and Web Developer from Nigeria. I specialize in building AI-powered solutions, analyzing data to uncover insights, and developing modern web applications that solve real-world problems.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                With expertise spanning Python, SQL, JavaScript, and PHP, I bring a versatile technical toolkit to every project. I'm passionate about using AI and data-driven solutions to improve decision-making and create meaningful impact.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-muted-foreground">
                  <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  Nigeria
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-muted-foreground">
                  <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  samtextechnology.info@gmail.com
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-muted-foreground">
                  <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  +234 902 694 6776
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="border-y border-white/[0.06] bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <p className="text-sm font-medium text-primary mb-2">Technical Skills</p>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Core Competencies
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-5">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-indigo-bright transition-all"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="mb-4 font-display text-lg font-semibold">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <h3 className="mt-8 mb-4 font-display text-lg font-semibold">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {["Problem-solving", "Communication", "Analytical Thinking", "Team Collaboration"].map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <p className="text-sm font-medium text-primary mb-2">Experience</p>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Work History
            </h2>
          </div>

          <div className="relative space-y-0">
            {workExperience.map((job, i) => (
              <div
                key={`${job.role}-${i}`}
                className="relative border-l border-white/[0.08] pl-8 pb-10 last:pb-0"
              >
                <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-display text-lg font-bold">{job.role}</h3>
                  <span className="text-sm text-muted-foreground">— {job.company}</span>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  {job.period} {job.location && `· ${job.location}`}
                </p>
                <ul className="space-y-1.5">
                  {job.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering */}
      <section className="border-y border-white/[0.06] bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <p className="text-sm font-medium text-primary mb-2">Volunteering</p>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Community & Leadership
            </h2>
          </div>

          <div className="relative space-y-0">
            <div className="relative border-l border-white/[0.08] pl-8 pb-10 last:pb-0">
              <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="font-display text-lg font-bold">IAB Industry Exhibitions and Forums committee</h3>
                <span className="text-sm text-muted-foreground">— IEEE Robotics and Automation Society</span>
              </div>
              <p className="mb-3 text-sm text-muted-foreground">
                Jul 2026 — Present · Science and Technology
              </p>
              <p className="text-sm text-muted-foreground">
                Supported the planning and coordination of industry exhibitions and professional forums, helping connect robotics and automation communities through events and knowledge sharing.
              </p>
            </div>

            <div className="relative border-l border-white/[0.08] pl-8 pb-0 last:pb-0">
              <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="font-display text-lg font-bold">Director of Software</h3>
                <span className="text-sm text-muted-foreground">— National Association of Computing Students (NACOS)</span>
              </div>
              <p className="mb-3 text-sm text-muted-foreground">
                Sep 2025 — Present · Akanu Ibiam Federal Polytechnic, Unwana, Nigeria · Science and Technology
              </p>
              <p className="text-sm text-muted-foreground">
                Serving as the Director of Software, I lead software-related initiatives that promote innovation, technical skill-building, and collaboration among computing students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-y border-white/[0.06] bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <p className="text-sm font-medium text-primary mb-2">Education</p>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Academic Background
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="rounded-2xl border border-white/[0.06] bg-card p-6"
              >
                <h3 className="font-display text-lg font-bold">{edu.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{edu.school || "Polytechnic"}</p>
                <span className="mt-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {edu.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <p className="text-sm font-medium text-primary mb-2">Certifications</p>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Credentials & Certificates
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={`${cert.name}-${cert.org}`}
                className="rounded-xl border border-white/[0.06] bg-card p-5 transition-all hover:border-primary/20"
              >
                <h3 className="font-display text-sm font-bold text-foreground">{cert.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {cert.org && `${cert.org} · `}{cert.year}
                  {cert.count && ` · ${cert.count}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
