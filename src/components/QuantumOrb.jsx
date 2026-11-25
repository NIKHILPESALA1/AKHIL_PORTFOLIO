import { motion, useReducedMotion } from "framer-motion";

export default function QuantumOrb() {
  const reduce = useReducedMotion();

  return (
    <div className="orb-stage" aria-label="Animated visualization of a qubit and its probability cloud" role="img">
      <div className="orb-glow" />
      <div className="orb-grid" />
      <div className="orb-cloud" aria-hidden="true">
        <motion.span
          className="cloud-lobe cloud-lobe-cyan"
          animate={reduce ? {} : { x: [-5, 7, -5], scale: [0.94, 1.08, 0.94], opacity: [0.28, 0.52, 0.28] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="cloud-lobe cloud-lobe-violet"
          animate={reduce ? {} : { x: [5, -7, 5], scale: [1.06, 0.94, 1.06], opacity: [0.4, 0.24, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      {[0, 1].map((n) => (
        <motion.span
          key={`wave-${n}`}
          className={`wave-ring wave-ring-${n + 1}`}
          animate={reduce ? {} : { scale: [0.78, 1.18], opacity: [0.42, 0] }}
          transition={{ duration: 4.8, delay: n * 2.4, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
      <motion.div
        className="orb-core"
        animate={reduce ? {} : { scale: [1, 1.055, 1], filter: ["brightness(1)", "brightness(1.16)", "brightness(1)"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="orb-core-inner" />
        <span className="core-spark" />
      </motion.div>
      {[0, 1, 2].map((n) => (
        <motion.div
          key={n}
          className={`orbit orbit-${n + 1}`}
          animate={reduce ? {} : { rotate: n % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 24 + n * 10, repeat: Infinity, ease: "linear" }}
        >
          <span className={`orbit-node node-${n + 1}`} />
        </motion.div>
      ))}
      <motion.span
        className="orb-particle particle-one"
        animate={reduce ? {} : { x: [0, 9, 0], y: [0, -13, 0], opacity: [0.35, 0.9, 0.35] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="orb-particle particle-two"
        animate={reduce ? {} : { x: [0, -8, 0], y: [0, 11, 0], opacity: [0.7, 0.3, 0.7] }}
        transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="orb-label label-top">QUBIT // 001</span>
      <span className="orb-label label-bottom">|ψ⟩ SUPERPOSITION</span>
      <span className="orb-cross cross-one">+</span>
      <span className="orb-cross cross-two">+</span>
    </div>
  );
}
