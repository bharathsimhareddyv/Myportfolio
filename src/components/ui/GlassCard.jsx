import { motion } from "framer-motion";

export function GlassCard({ children, className = "", hover = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -6, transition: { duration: 0.25 } } : undefined}
      className={`glass rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
