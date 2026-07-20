import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { clients, campusTrainings } from "../../data/companies";

function InfiniteLogoStrip({ items, duration = 32 }) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden mask-fade-x py-2">
      <motion.div
        className="flex gap-3 sm:gap-4 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {loop.map((c, i) => (
          <div
            key={`${c.id}-${i}`}
            className="h-16 sm:h-20 min-w-[140px] sm:min-w-[168px] px-4 sm:px-5 rounded-2xl border border-[var(--border)] flex items-center justify-center shrink-0"
            style={{ background: c.darkBg ? "#0a0c10" : "#ffffff" }}
            title={c.name}
          >
            {c.logo ? (
              <img
                src={c.logo}
                alt={c.name}
                className="max-h-9 sm:max-h-11 max-w-[120px] object-contain"
                loading="lazy"
              />
            ) : (
              <span
                className={`text-xs sm:text-sm font-display font-semibold text-center leading-tight ${
                  c.darkBg ? "text-white" : "text-slate-800"
                }`}
              >
                {c.name}
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function InfiniteTextStrip({ items, duration = 35 }) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden mask-fade-x py-2">
      <motion.div
        className="flex gap-3 sm:gap-4 w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {loop.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="glass rounded-full px-5 py-2.5 flex items-center gap-3 border border-[var(--border)] hover:border-[var(--color-brand)]/50 transition-colors shrink-0"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--color-brand)] shrink-0 animate-pulse" />
            <span className="text-xs sm:text-sm font-display font-bold text-[var(--text)] whitespace-nowrap">
              {item.name}
            </span>
            <span className="text-[10px] sm:text-xs text-[var(--text-muted)] bg-[var(--border)]/30 px-2 py-0.5 rounded-full whitespace-nowrap">
              {item.location}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Companies() {
  return (
    <section id="companies" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-70 pointer-events-none" />
      <div className="container-max relative z-10">
        <SectionHeading
          eyebrow="Clients & Campuses"
          title="Who I’ve worked with"
          description="Corporate partnerships, clients, and training initiatives conducted across universities nationwide."
          align="center"
        />

        <div className="mb-10 md:mb-14">
          <div className="flex items-end justify-between gap-4 mb-5 px-1">
            <h3 className="font-display text-xl sm:text-2xl font-bold">Clients & Partners</h3>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[var(--color-brand)] font-semibold">
              Infinite scroll
            </span>
          </div>
          <InfiniteLogoStrip items={clients} duration={35} />
        </div>

        <div>
          <div className="flex items-end justify-between gap-4 mb-5 px-1">
            <h3 className="font-display text-xl sm:text-2xl font-bold">Campuses Trained</h3>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[var(--color-brand)] font-semibold">
              Auto scroll
            </span>
          </div>
          <InfiniteTextStrip items={campusTrainings} duration={40} />
        </div>
      </div>
    </section>
  );
}
