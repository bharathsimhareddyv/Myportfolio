import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { SectionHeading } from "../ui/SectionHeading";
import { testimonials } from "../../data/testimonials";

function InfiniteTestimonials({ items, duration = 45 }) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden mask-fade-x">
      <motion.div
        className="flex gap-4 sm:gap-5 w-max py-1"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {loop.map((t, i) => (
          <article
            key={`${t.id}-${i}`}
            className="shrink-0 w-[280px] sm:w-[340px] md:w-[380px] glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col"
          >
            <FaQuoteLeft className="text-[var(--color-brand)] mb-3 opacity-70 text-lg" />
            <p className="text-sm sm:text-[15px] text-[var(--text-muted)] leading-relaxed flex-1">
              “{t.quote}”
            </p>
            <div className="mt-5 pt-4 border-t border-[var(--border)]">
              <p className="font-display font-bold text-sm sm:text-base">{t.name}</p>
              <p className="text-xs sm:text-sm text-[var(--color-brand)] mt-0.5">{t.role}</p>
            </div>
          </article>
        ))}
      </motion.div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-60 pointer-events-none" />
      <div className="container-max relative z-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="What students say"
          description="Real feedback shared by learners after training sessions."
          align="center"
        />

        <InfiniteTestimonials items={testimonials} duration={45} />
      </div>
    </section>
  );
}
