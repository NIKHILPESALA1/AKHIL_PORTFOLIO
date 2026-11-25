import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";

const links = [
  ["About", "#about"],
  ["Focus", "#focus"],
  ["Projects", "#projects"],
  ["Journey", "#journey"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="nav-shell mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="brand-mark">A<span>.</span></span>
          <span className="font-bold tracking-tight text-white">AKHIL<span className="text-cyan-300">.</span></span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="nav-link">{label}</a>
          ))}
        </div>

        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="nav-cta hidden md:inline-flex">
          Let's connect <ArrowUpRight size={15} />
        </a>

        <button
          className="rounded-xl border border-white/10 p-2 text-white md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="nav-mobile mx-auto mt-2 max-w-7xl rounded-2xl p-4 md:hidden">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white">
              {label}
            </a>
          ))}
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="mt-2 flex items-center gap-2 rounded-xl bg-cyan-300 px-3 py-3 text-sm font-bold text-slate-950">
            Let's connect <ArrowUpRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
}
