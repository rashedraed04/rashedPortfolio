"use client";

import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "AI Sales Agent for Facebook Messenger", role: "Featured · Deployed for a real store", repo: "https://github.com/rashedraed04/messenger-agent",
    summary: "An Arabic-language sales system that talks with customers in Jordanian Arabic, recommends catalog products, recognizes items in customer photos, and gathers order details.",
    details: ["Arabic RTL storefront, admin dashboard, and bot simulator", "Deterministic JOD pricing, phone validation, and order state transitions alongside Gemini responses", "HMAC-SHA256 webhook verification, CSRF protection, rate limiting, and prompt-injection tests", "Supabase Auth, PostgreSQL, Storage, daily Telegram order report", "318 pytest tests, GitHub Actions CI, Docker, and Render deployment"],
    tech: ["Python", "FastAPI", "Supabase", "PostgreSQL", "Gemini API", "Jinja2", "Bootstrap", "Docker", "pytest"], featured: true,
  },
  {
    title: "SmartPass — Student Platform", role: "Team Lead & Mobile Developer · Team of four", repo: "https://github.com/rashedraed04/SmartPass",
    summary: "University of Jordan graduation project: a cross-platform student app with an academic assistant, student community, and GPA expectation calculator. I led a four-person team through design, development, and delivery.",
    details: ["Gemini-powered course and study guidance", "Community forum with threaded discussions, voting, and real-time updates", "GPA expectation calculator with projected GPA visualization", "Firebase Authentication, Cloud Firestore, security rules, and cloud media storage"],
    tech: ["Flutter", "Dart", "Firebase", "Gemini API", "Clean Architecture"],
  },
  {
    title: "Easy Set — Offline-First Gym Tracker", role: "Solo Developer · Android", repo: "https://github.com/rashedraed04/EasySet",
    summary: "A workout tracker built to keep training usable without a network connection or an account. Hive is the local source of truth; Google Sign-In enables optional Firestore sync across devices.",
    details: ["Reusable routines, guided workouts, previous-weight prefill, and rest timers", "Personal records, Epley one-rep-max calculations, and progress charts", "Arabic RTL support and dark mode", "Per-user Firestore rules, release signing, obfuscation, and unit/widget tests in CI"],
    tech: ["Flutter", "Dart", "Hive", "Firebase", "Firestore", "fl_chart"],
  },
  {
    title: "Job Application Automation Tool", role: "Supporting project · Python", repo: null,
    summary: "A Python script designed to automate repetitive job-application steps, with error logging and handling for edge cases.", details: [], tech: ["Python", "Automation", "Error handling"],
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.article layout className={`overflow-hidden rounded-2xl border p-5! sm:p-7! ${project.featured ? "border-cyan-300/35 bg-[linear-gradient(135deg,rgba(0,194,255,.09),rgba(255,255,255,.025)_48%)] sm:p-8!" : "border-white/10 bg-white/[0.035]"}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.08 }} viewport={{ once: true, amount: 0.12 }}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="mb-2! text-[10px] font-semibold uppercase tracking-[1.7px] text-cyan-200/75">{project.role}</p>
          <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">{project.title}</h3>
        </div>
        {project.repo ? <a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} GitHub repository (opens in a new tab)`} className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-cyan-200/20 px-3! py-2! text-xs font-semibold text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-200/10 focus-visible:outline-2 focus-visible:outline-cyan-200"><FaGithub aria-hidden="true" />Repository <FaArrowUpRightFromSquare aria-hidden="true" className="text-[10px]" /></a> : <span className="rounded-lg border border-white/10 px-3! py-2! text-xs text-gray-500">No public repository</span>}
      </div>
      <p className="mt-4! max-w-4xl text-sm leading-7 text-gray-300">{project.summary}</p>
      {project.details.length > 0 && <ul className="mt-4! grid gap-2 sm:grid-cols-2">{project.details.map((item) => <li key={item} className="flex gap-2 text-xs leading-6 text-gray-400"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--secondary)]" />{item}</li>)}</ul>}
      <ul aria-label={`${project.title} technologies`} className="mt-5! flex flex-wrap gap-2">{project.tech.map((item) => <li key={item} className="rounded-full border border-white/10 bg-black/20 px-2.5! py-1! text-[10px] text-gray-300">{item}</li>)}</ul>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[var(--primary)] px-5! py-24! md:px-20!">
      <div className="mx-auto max-w-6xl">
        <motion.div className="mb-12! text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <p className="mb-2! text-xs font-semibold uppercase tracking-[2px] text-[var(--secondary)]">Selected work</p>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Projects built around real use</h2>
          <p className="mt-3! text-sm text-gray-400">From production AI workflows to reliable mobile experiences.</p>
        </motion.div>
        <div className="grid gap-5">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}
