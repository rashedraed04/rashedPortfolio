"use client";

import { motion } from "framer-motion";

const groups = [
  { title: "Languages", items: ["Dart", "Python", "Java", "C++", "JavaScript", "SQL", "HTML", "CSS"] },
  { title: "Mobile & architecture", items: ["Flutter · Android & iOS", "Provider", "BLoC", "Clean Architecture", "REST APIs", "Hive"] },
  { title: "Backend & APIs", items: ["FastAPI", "Pydantic", "Jinja2", "Webhooks", "Meta Messenger Graph API", "Telegram Bot API"] },
  { title: "Cloud & data", items: ["Firebase Auth", "Cloud Firestore", "Firebase Storage", "FCM", "Supabase", "PostgreSQL", "Docker", "Render"] },
  { title: "AI & automation", items: ["Gemini API", "LLM-powered features", "Python automation", "AI-assisted development"] },
  { title: "Testing & tools", items: ["pytest", "Flutter unit & widget tests", "Git & GitHub", "GitHub Actions", "Postman", "VS Code", "Android Studio"] },
  { title: "Design tools", items: ["Figma", "Google Stitch", "Wireframing", "Prototyping", "Premiere Pro", "CapCut"] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#101416] px-5! py-24! md:px-20!">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dots opacity-25" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div className="mb-12! text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <p className="mb-2! text-xs font-semibold uppercase tracking-[2px] text-[var(--secondary)]">Technical toolkit</p>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Tools I use to build and ship</h2>
          <p className="mt-3! text-sm text-gray-400">A practical toolkit shaped by the projects I’ve built and tested.</p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, index) => (
            <motion.article key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5! transition-colors hover:border-cyan-300/30" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.06 }} viewport={{ once: true, amount: 0.15 }}>
              <h3 className="mb-4! flex items-center gap-2 text-sm font-semibold text-white"><span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--secondary)] shadow-[0_0_10px_#00c2ff]" />{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => <li key={item} className="rounded-full border border-cyan-200/10 bg-[#071014]/70 px-2.5! py-1.5! text-[11px] leading-4 text-gray-300">{item}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
