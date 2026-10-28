"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Experience", "#experience"], ["Contact", "#contact"]];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-3! pt-3! sm:px-5!">
      <nav aria-label="Main navigation" className="mx-auto flex h-14 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#101416]/80 px-4! shadow-lg shadow-black/10 backdrop-blur-xl sm:px-6!">
        <a href="#home" aria-label="Rashed Al-Awamleh home" className="flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-cyan-200">
          <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-xs font-bold tracking-tight text-cyan-100">RA</span>
          <span className="text-sm font-semibold text-white">Rashed Al-Awamleh</span>
        </a>
        <ul className="hidden items-center gap-6 md:flex">{navItems.map(([name, href]) => <li key={name}><a href={href} className="text-xs text-gray-300 transition hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-cyan-200">{name}</a></li>)}</ul>
        <button type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)} className="rounded-lg border border-white/10 px-3! py-2! text-sm text-white focus-visible:outline-2 focus-visible:outline-cyan-200 md:hidden">{menuOpen ? "Close" : "Menu"}</button>
      </nav>
      <AnimatePresence>{menuOpen && <motion.div id="mobile-navigation" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }} className="mx-3 mt-2 rounded-2xl border border-white/10 bg-[#101416]/95 p-4! shadow-xl backdrop-blur-xl sm:mx-5 md:hidden"><ul className="grid gap-1">{navItems.map(([name, href]) => <li key={name}><a href={href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3! py-2.5! text-sm text-gray-200 transition hover:bg-white/5 hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-cyan-200">{name}</a></li>)}</ul></motion.div>}</AnimatePresence>
    </header>
  );
}
