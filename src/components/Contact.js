"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedinIn, FaGithub } from "react-icons/fa6";

const contacts = [
  { label: "Email", value: "alawamlehrashed04@gmail.com", href: "mailto:alawamlehrashed04@gmail.com", Icon: FaEnvelope },
  { label: "Phone", value: "+962 79 710 7594", href: "tel:+962797107594", Icon: FaPhone },
  { label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/rashed-al-awamleh-5b2893292", Icon: FaLinkedinIn, external: true },
  { label: "GitHub", value: "github.com/rashedraed04", href: "https://github.com/rashedraed04", Icon: FaGithub, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--primary)] px-5! py-24! md:px-20!">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl" />
      <motion.div className="relative z-10 mx-auto max-w-4xl text-center" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true, amount: 0.2 }}>
        <p className="mb-2! text-xs font-semibold uppercase tracking-[2px] text-[var(--secondary)]">Contact</p>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Let’s build something useful.</h2>
        <p className="mx-auto mt-4! max-w-2xl text-sm leading-7 text-gray-400">I’m open to software development roles, internships, freelance opportunities, and thoughtful collaborations. Reach out and tell me what you’re working on.</p>
        <div className="mt-9! grid gap-3 text-left sm:grid-cols-2">
          {contacts.map(({ label, value, href, Icon, external }) => (
            <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} aria-label={`${label}: ${value}${external ? " (opens in a new tab)" : ""}`} className="group flex min-w-0 items-center gap-4 rounded-xl border border-white/10 bg-white/[0.035] p-4! transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200">
              <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 text-[var(--secondary)]"><Icon /></span>
              <span className="min-w-0"><span className="block text-[10px] font-semibold uppercase tracking-wider text-gray-500">{label}</span><span className="mt-1! block break-all text-sm text-gray-200 group-hover:text-cyan-100">{value}</span></span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
