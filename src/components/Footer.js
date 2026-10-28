export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--primary)] px-5! py-7! text-center sm:flex sm:items-center sm:justify-between sm:px-20! sm:text-left">
      <p className="text-xs text-gray-500">© {new Date().getFullYear()} Rashed Al-Awamleh · Amman, Jordan</p>
      <a href="#home" className="mt-3! inline-block text-xs text-gray-400 transition hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-cyan-200 sm:mt-0!">Back to top ↑</a>
    </footer>
  );
}
