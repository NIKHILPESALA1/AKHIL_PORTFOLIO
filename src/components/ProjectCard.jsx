import { ArrowUpRight, Github, FileText, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      whileHover={{ y: -7 }}
      transition={{ duration: 0.25 }}
      className="project-card group"
    >
      <div className="flex items-start justify-between">
        <span className="mono text-xs text-cyan-300/70">PROJECT / {project.number || String(index + 1).padStart(2, "0")}</span>
        <Sparkles size={17} className="text-violet-300/70 transition group-hover:text-cyan-200" />
      </div>
      <div className="my-8 flex h-28 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-[radial-gradient(circle_at_50%_50%,rgba(87,90,255,.18),transparent_62%),rgba(255,255,255,.02)]">
        <div className="project-visual"><span /><span /><span /></div>
      </div>
      <p className="mono text-[10px] uppercase tracking-[.2em] text-violet-300">{project.category}</p>
      <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
      <p className="mt-3 min-h-16 text-sm leading-6 text-slate-400">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags?.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
      </div>
      <div className="mt-7 flex flex-wrap gap-4 border-t border-white/[0.08] pt-5">
        {project.github && <a className="project-link" href={project.github} target="_blank" rel="noreferrer"><Github size={15} /> Source <ArrowUpRight size={13} /></a>}
        {project.demo && <a className="project-link" href={project.demo} target="_blank" rel="noreferrer"><ArrowUpRight size={15} /> Live demo</a>}
        {project.documentation && <a className="project-link" href={project.documentation} target="_blank" rel="noreferrer"><FileText size={15} /> Documentation</a>}
      </div>
    </motion.article>
  );
}
