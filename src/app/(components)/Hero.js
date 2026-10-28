"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaArrowDown, FaGithub, FaEnvelope } from "react-icons/fa";

const orbitSkills = ["Flutter", "Python", "FastAPI", "Firebase", "Gemini", "PostgreSQL"];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[var(--primary)] px-5! pt-20! text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.14),transparent_58%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dots opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10 sm:h-[34rem] sm:w-[34rem]">
        <div className="absolute inset-8 rounded-full border border-cyan-300/10" />
        {!reduceMotion && orbitSkills.map((skill, index) => (
          <motion.span key={skill} className="absolute rounded-full border border-cyan-200/15 bg-[#12191d]/90 px-3! py-1.5! text-xs text-cyan-100/75 shadow-[0_0_25px_rgba(0,194,255,.1)]" style={{ left: `${50 + 48 * Math.cos((index / orbitSkills.length) * Math.PI * 2)}%`, top: `${50 + 48 * Math.sin((index / orbitSkills.length) * Math.PI * 2)}%` }} animate={{ y: [0, -7, 0] }} transition={{ duration: 4 + index % 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}>
            {skill}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p className="mb-5! inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4! py-2! text-xs font-medium tracking-wide text-cyan-100/80 sm:text-sm" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#00c2ff]" /> Amman, Jordan <span aria-hidden="true">·</span> Computer Science Graduate
        </motion.p>
        <motion.h1 className="pb-3! text-4xl font-extrabold leading-[1.08] tracking-tight drop-shadow-[0_0_24px_rgba(0,194,255,.16)] sm:text-6xl md:text-7xl" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          Rashed <span className="text-[var(--secondary)]">Al-Awamleh</span>
        </motion.h1>
        <motion.h2 className="pb-3! text-base font-medium text-gray-200 sm:text-xl md:text-2xl" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}>
          Full-Stack Web &amp; Mobile Developer <span className="text-[var(--secondary)]">|</span> AI &amp; Automation
        </motion.h2>
        <motion.p className="mx-auto max-w-2xl text-sm leading-7 text-gray-400 sm:text-base" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }}>
          I build full-stack applications, cross-platform mobile experiences, and AI-powered automation tools—with an emphasis on reliable architecture, secure integrations, and practical solutions to real problems.
        </motion.p>
        <motion.div className="mt-8! flex flex-wrap items-center justify-center gap-3" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }}>
          <a href="#projects" className="rounded-lg bg-[var(--secondary)] px-5! py-3! text-sm font-bold text-[#071014] transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">View My Projects</a>
          <a href="#contact" className="rounded-lg border border-white/20 px-5! py-3! text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"><FaEnvelope aria-hidden="true" className="mr-2 inline" />Contact Me</a>
          <a href="https://github.com/rashedraed04" target="_blank" rel="noopener noreferrer" aria-label="Visit Rashed Al-Awamleh's GitHub profile (opens in a new tab)" className="rounded-lg border border-white/20 px-4! py-3! text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"><FaGithub aria-hidden="true" className="mr-2 inline" />GitHub</a>
        </motion.div>
      </div>
      <a href="#about" aria-label="Scroll to about section" className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/10 p-3! text-gray-400 transition hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-cyan-200"><FaArrowDown aria-hidden="true" /></a>
    </section>
  );
}
