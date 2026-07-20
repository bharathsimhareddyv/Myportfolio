import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignClass =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 md:mb-16 flex flex-col gap-3 max-w-3xl ${alignClass}`}
    >
      {eyebrow && (
        <span className="text-xs md:text-sm tracking-[0.22em] uppercase text-[var(--color-brand)] font-semibold">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
