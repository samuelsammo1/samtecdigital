import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { submitContact } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Samuel Sam Eno" },
      { name: "description", content: "Get in touch with Samuel Sam Eno about internships, entry-level roles, full-time or contract work, and remote freelance projects in AI, data, and web development." },
      { property: "og:title", content: "Contact — Samuel Sam Eno" },
      { property: "og:description", content: "Get in touch with Samuel Sam Eno about internships, entry-level roles, full-time or contract work, and remote freelance projects in AI, data, and web development." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Contact info */}
            <div>
              <p className="text-sm font-medium text-primary mb-3">Get in Touch</p>
              <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
                Let's work <span className="text-gradient">together</span>
              </h1>
              <p className="mt-4 max-w-md text-lg text-muted-foreground">
                I'm open to internships and entry-level roles, full-time or contract work, and remote, flexible freelance projects in AI, data, and web development.
              </p>

              <div className="mt-10 space-y-6">
                <a
                  href="mailto:samtextechnology.info@gmail.com"
                  className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-card p-5 transition-all hover:border-primary/20"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p className="font-display text-base font-semibold text-foreground">samtextechnology.info@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+2349026946776"
                  className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-card p-5 transition-all hover:border-primary/20"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                    <p className="font-display text-base font-semibold text-foreground">+234 902 694 6776</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/samuel-sam-b3a2543b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-card p-5 transition-all hover:border-primary/20"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">LinkedIn</p>
                    <p className="font-display text-base font-semibold text-foreground">linkedin.com/in/samuel-sam-b3a2543b0</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-card p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                    <p className="font-display text-base font-semibold text-foreground">Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form + Availability */}
            <div className="space-y-8">
              <ContactForm />
              <div className="rounded-2xl border border-white/[0.06] bg-card p-8 md:p-10">
                <h2 className="font-display text-xl font-bold">Availability</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Currently available for:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-2 w-2 rounded-full bg-green-400 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Internships</p>
                      <p className="text-xs text-muted-foreground">AI, Data, Web Development roles</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-2 w-2 rounded-full bg-green-400 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Entry-level Positions</p>
                      <p className="text-xs text-muted-foreground">Full-time or contract work</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-2 w-2 rounded-full bg-green-400 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Freelance Projects</p>
                      <p className="text-xs text-muted-foreground">Remote and flexible · Web development, data analysis, AI automation</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-xl bg-surface p-6">
                  <h3 className="font-display text-sm font-bold">Quick Facts</h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Experience</span>
                      <span className="font-medium">6+ years</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Languages</span>
                      <span className="font-medium">Python, SQL, JS, PHP</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Remote</span>
                      <span className="font-medium">Yes, fully</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Timezone</span>
                      <span className="font-medium">WAT (UTC+1)</span>
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:samtextechnology.info@gmail.com?subject=Opportunity%20for%20Samuel%20Sam%20Eno"
                  className="mt-8 flex w-full items-center justify-center rounded-lg bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 glow-indigo"
                >
                  Send me an email
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

type Status = "idle" | "submitting" | "success" | "error";

function ContactForm() {
  const submit = useServerFn(submitContact);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      await submit({ data: form });
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/[0.06] bg-card p-8 md:p-10"
    >
      <h2 className="font-display text-xl font-bold">Send a message</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Fill out the form and I'll get back to you soon.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            value={form.name}
            onChange={handleChange}
            disabled={status === "submitting"}
            className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={255}
            value={form.email}
            onChange={handleChange}
            disabled={status === "submitting"}
            className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={2000}
            rows={5}
            value={form.message}
            onChange={handleChange}
            disabled={status === "submitting"}
            className="w-full resize-none rounded-lg border border-white/10 bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Tell me about your project or opportunity…"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 flex w-full items-center justify-center rounded-lg bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 glow-indigo disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "success" && (
        <p className="mt-4 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-300">
          Thanks! Your message was sent successfully.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {errorMsg || "Failed to send. Please try again."}
        </p>
      )}
    </form>
  );
}
