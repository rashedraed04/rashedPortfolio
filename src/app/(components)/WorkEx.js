"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#101416] px-5! py-20! md:px-20!">
      <motion.div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/[0.025] p-6! sm:p-8!" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true, amount: 0.2 }}>
        <p className="mb-2! text-xs font-semibold uppercase tracking-[2px] text-[var(--secondary)]">Earlier experience</p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div><h2 className="text-lg font-bold text-white sm:text-xl">Freelance Video Editor</h2><p className="mt-1! text-sm text-gray-400">Self-employed · Amman, Jordan</p></div>
          <span className="rounded-full border border-white/10 px-3! py-1! text-xs text-gray-400">2017–2021</span>
        </div>
        <p className="mt-4! max-w-3xl text-sm leading-7 text-gray-400">Edited and produced video content and montages for regional clients using Adobe Premiere Pro and CapCut. Managed client feedback and revision rounds while delivering to tight deadlines.</p>
      </motion.div>
    </section>
  );
}
