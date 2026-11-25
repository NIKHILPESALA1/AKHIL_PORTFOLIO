import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MoveUpRight, Atom, Orbit, Cpu, BookOpen, ExternalLink, GraduationCap, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/Navbar";
import QuantumOrb from "./components/QuantumOrb";
import Reveal from "./components/Reveal";
import SectionHeading from "./components/SectionHeading";
import ProjectCard from "./components/ProjectCard";
import { profile, skillGroups, projects, learningJourney } from "./data/portfolio";

function Background() {
  return (
    <>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />
      <div className="noise-overlay" />
    </>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="status-pill">
            <span className="pulse-dot" /> OPEN TO LEARNING & COLLABORATION
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }} className="mono mt-8 text-xs uppercase tracking-[.24em] text-cyan-200/70">
            Hello, I'm {profile.shortName}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .22, duration: .8 }} className="hero-title mt-4">
            Exploring the<br />
            <span className="gradient-text">Quantum</span> Frontier<span className="text-cyan-300">.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .38 }} className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            {profile.introduction}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5 }} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="primary-button">Explore my work <ArrowUpRight size={17} /></a>
            <a href="#about" className="secondary-button">Discover more <ArrowDown size={16} /></a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }} className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
            <div><p className="mono text-[10px] uppercase tracking-widest text-slate-500">Currently</p><p className="mt-1 text-sm text-slate-200">First-year student</p></div>
            <div><p className="mono text-[10px] uppercase tracking-widest text-slate-500">Studying at</p><p className="mt-1 text-sm text-slate-200">Alliance University</p></div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .2 }} className="relative mx-auto w-full max-w-[540px]">
          <QuantumOrb />
        </motion.div>
      </div>
      <a href="#about" className="scroll-cue"><span /> SCROLL TO EXPLORE</a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-wrap">
      <div className="section-container">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curiosity is where" accent="it begins." description="A little context about the person behind the experiments, ideas and code." />
        <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
          <Reveal className="glass-panel p-7 sm:p-9">
            <div className="mb-7 flex items-center gap-3 text-cyan-200"><Atom size={21} /><span className="mono text-xs tracking-[.2em]">THE PERSON BEHIND THE QUBITS</span></div>
            <h3 className="max-w-xl text-2xl font-bold leading-snug text-white sm:text-3xl">Building a foundation for the <span className="gradient-text">next era of computing.</span></h3>
            <p className="mt-6 text-sm leading-8 text-slate-400 sm:text-base">{profile.about}</p>
          </Reveal>
          <Reveal delay={.12} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div className="info-tile"><span className="info-icon"><GraduationCap size={20} /></span><div><p className="mono text-[10px] tracking-[.18em] text-slate-500">EDUCATION</p><h4 className="mt-2 font-semibold text-white">{profile.degree}</h4><p className="mt-1 text-sm text-slate-400">{profile.university}</p></div></div>
            <div className="info-tile"><span className="info-icon"><Orbit size={20} /></span><div><p className="mono text-[10px] tracking-[.18em] text-slate-500">CURRENT CHAPTER</p><h4 className="mt-2 font-semibold text-white">{profile.year}</h4><p className="mt-1 text-sm text-slate-400">Learning, experimenting, building.</p></div></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Focus() {
  const icons = [Atom, Cpu, BookOpen];
  const reduceMotion = useReducedMotion();

  return (
    <section id="focus" className="section-wrap section-alt">
      <div className="section-container">
        <SectionHeading eyebrow="WHAT I'M EXPLORING" title="Areas of" accent="focus." description="Concepts, tools and mathematical foundations I'm exploring." />
        <div className="grid gap-4 md:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[i];
            return <Reveal key={group.number} delay={i * .1} className="focus-card">
              <div className="flex items-center justify-between"><span className="mono text-xs text-cyan-300/60">{group.number} / 03</span><motion.span animate={reduceMotion ? {} : { rotate: [0, 12, 0], scale: [1, 1.08, 1] }} transition={{ duration: 5, delay: i * .35, repeat: Infinity, ease: "easeInOut" }}><Icon className="text-cyan-200" size={21} /></motion.span></div>
              <h3 className="mt-8 text-xl font-bold text-white">{group.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{group.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">{group.skills.map((skill, skillIndex) => <motion.span className="tag" key={skill} initial={reduceMotion ? false : { opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} whileHover={reduceMotion ? {} : { y: -2, scale: 1.04 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: .35, delay: reduceMotion ? 0 : skillIndex * .06 }}>{skill}</motion.span>)}</div>
            </Reveal>;
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-wrap">
      <div className="section-container">
        <SectionHeading eyebrow="SELECTED WORK" title="Ideas turned into" accent="experiments." description="A collection of projects, explorations and technical documentation. Each project will tell the story of the problem, process and outcome." />
        {projects.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">{projects.map((project, i) => <Reveal key={project.title} delay={i * .08}><ProjectCard project={project} index={i} /></Reveal>)}</div>
        ) : (
          <Reveal className="empty-projects">
            <div className="empty-orbit"><Orbit size={34} /></div>
            <p className="mono mt-6 text-[10px] tracking-[.22em] text-cyan-200/70">THE NEXT DISCOVERY STARTS HERE</p>
            <h3 className="mt-3 text-2xl font-bold text-white">Projects are being prepared.</h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-400">Akhil's project showcase is ready for his actual work. Add each project with its overview, technology stack, GitHub link and report or documentation.</p>
            <a href={profile.github} target="_blank" rel="noreferrer" className="secondary-button mt-7">Visit GitHub <Github size={16} /></a>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="section-wrap section-alt">
      <div className="section-container">
        <SectionHeading eyebrow="THE LEARNING PATH" title="A journey of" accent="discovery." description="Every expert starts somewhere. This is the beginning of a journey through quantum technologies and beyond." />
        <div className="timeline">
          {learningJourney.map((item, i) => <Reveal key={item.title} delay={i * .12} className="timeline-item">
            <div className={`timeline-dot ${item.current ? "active" : ""}`} />
            <div className="timeline-content">
              <span className="mono text-xs text-cyan-200">{item.date}</span>
              <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-violet-200/70">{item.place}</p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">{item.detail}</p>
            </div>
          </Reveal>)}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-wrap">
      <div className="section-container">
        <Reveal className="contact-panel">
          <div className="contact-glow" />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="eyebrow justify-center"><span className="eyebrow-dot" /> CONNECT / COLLABORATE</div>
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">Have an idea?</h2>
            <p className="gradient-text mt-2 text-4xl font-extrabold tracking-tight sm:text-6xl">Let's explore it.</p>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">Interested in quantum computing, research, technology or learning together? I'd love to connect and exchange ideas.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {profile.email ? <a href={`mailto:${profile.email}`} className="primary-button"><Mail size={16} /> Say hello</a> : <a href={profile.linkedin} target="_blank" rel="noreferrer" className="primary-button"><Linkedin size={16} /> Connect on LinkedIn</a>}
              <a href={profile.github} target="_blank" rel="noreferrer" className="secondary-button"><Github size={16} /> GitHub <ExternalLink size={14} /></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.07] px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <a href="#home" className="font-bold tracking-tight text-white">AKHIL<span className="text-cyan-300">.</span></a>
        <p className="text-xs text-slate-500">Designed & built with curiosity by {profile.name}.</p>
        <div className="flex gap-4"><a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer" className="social-link"><Github size={17} /></a><a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer" className="social-link"><Linkedin size={17} /></a><a href="#home" aria-label="Back to top" className="social-link"><MoveUpRight size={17} /></a></div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Focus />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
