"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative grid min-h-[80vh] items-center gap-12 overflow-hidden bg-[var(--primary)] px-5! py-24! md:grid-cols-[1.15fr_.85fr] md:px-20!">
      <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} viewport={{ once: true, amount: 0.25 }}>
        <p className="mb-2! text-xs font-semibold uppercase tracking-[2px] text-[var(--secondary)]">About</p>
        <h2 className="mb-5! text-2xl font-bold text-white sm:text-3xl">Practical software, built with care.</h2>
        <p className="mb-4! text-sm leading-7 text-gray-300 sm:text-base">I’m a Computer Science graduate from the University of Jordan. My work spans full-stack applications, Flutter mobile development, backend APIs, database integration, AI-powered customer experiences, and workflow automation.</p>
        <p className="text-sm leading-7 text-gray-400 sm:text-base">I built and deployed an AI sales agent used by a real store, led a four-person team delivering a graduation project, and developed an offline-first mobile app. I value clean architecture, automated testing, security, and dependable application behavior—using AI-assisted tools alongside conventional engineering practices and deterministic business logic.</p>
      </motion.div>
      <motion.div className="relative z-10 space-y-4" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.1 }} viewport={{ once: true, amount: 0.25 }}>
        <div className="rounded-2xl border border-cyan-300/20 bg-white/[0.035] p-6!">
          <p className="mb-2! text-xs font-semibold uppercase tracking-[1.6px] text-[var(--secondary)]">Education · August 2026</p>
          <h3 className="text-lg font-semibold text-white">B.S. in Computer Science</h3>
          <p className="mt-2! text-sm leading-6 text-gray-400">The University of Jordan<br />King Abdullah II School of Information Technology · Amman, Jordan</p>
          <p className="mt-4! text-xs leading-6 text-gray-500">Data Structures &amp; Algorithms · Software Engineering · Mobile Application Development · Databases · Operating Systems · Networks</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[{ title: "Languages", lines: ["Arabic · Native", "English · Professional working proficiency"] }, { title: "Approach", lines: ["Reliable by design", "Tested and maintainable"] }].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5!">
              <h3 className="mb-3! text-xs font-semibold uppercase tracking-wider text-cyan-100">{item.title}</h3>
              {item.lines.map((line) => <p key={line} className="mb-1! text-xs leading-5 text-gray-400">{line}</p>)}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
