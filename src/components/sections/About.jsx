import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { about, profile, statistics } from "../../data/profile";
import { useCounter, useInViewOnce } from "../../hooks/useCounter";

function StatItem({ item }) {
  const [ref, inView] = useInViewOnce();
  const count = useCounter(item.value, {
    enabled: inView,
    duration: item.value >= 1000 ? 2200 : 1600,
  });

  return (
    <div ref={ref} className="text-center p-3 sm:p-4">
      <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-brand)]">
        {count.toLocaleString()}
        {item.suffix}
      </p>
      <p className="text-[10px] sm:text-xs md:text-sm text-[var(--text-muted)] mt-1.5 tracking-wide uppercase">
        {item.label}
      </p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="About Me"
          title="Leader. Engineer. Trainer."
          description={about.summary}
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-4 md:gap-6 mb-6 md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none lg:self-start"
          >
            <div className="glass rounded-3xl p-1.5 overflow-hidden relative">
              <div className="relative aspect-[5/4] rounded-[1.25rem] overflow-hidden">
                <img
                  src={profile.photo2 || profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover object-[center_28%]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 top-0 p-3 sm:p-4">
                  <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                    Developer • Trainer • Mentor
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-white">
                  <p className="font-display text-base sm:text-lg font-bold">15+ Production Apps</p>
                  <p className="text-[10px] sm:text-xs text-white/75 mt-0.5">
                    End-to-End MERN Delivery & Cloud Hosting
                  </p>
                  <div className="mt-2.5 grid grid-cols-2 gap-2 text-center">
                    <div className="rounded-lg bg-white/10 backdrop-blur-sm px-1 py-1.5">
                      <p className="text-[10px] font-bold">3+ Years Dev</p>
                      <p className="text-[8px] text-white/65">Full Stack</p>
                    </div>
                    <div className="rounded-lg bg-white/10 backdrop-blur-sm px-1 py-1.5">
                      <p className="text-[10px] font-bold">4+ Years Train</p>
                      <p className="text-[8px] text-white/65">5000+ Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 content-start">
            <GlassCard>
              <h3 className="font-display text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Developer Journey
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                {about.developerJourney}
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-display text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Trainer Journey
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                {about.trainerJourney}
              </p>
            </GlassCard>
            <GlassCard hover={false} className="sm:col-span-2">
              <h3 className="font-display text-lg sm:text-xl font-bold mb-3">Education</h3>
              <p className="font-semibold text-sm sm:text-base">{profile.education.degree}</p>
              <p className="text-[var(--text-muted)] mt-1 text-sm">{profile.education.institution}</p>
              <p className="text-[var(--color-brand)] mt-2 font-semibold text-sm">
                CGPA: {profile.education.cgpa}
              </p>
            </GlassCard>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 sm:gap-2 p-3 sm:p-4 md:p-6 mb-8 md:mb-10"
        >
          {statistics.map((s) => (
            <StatItem key={s.id} item={s} />
          ))}
        </motion.div>

        <div>
          <h3 className="font-display text-base sm:text-lg font-semibold mb-3 sm:mb-4">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {about.softSkills.map((skill) => (
              <span
                key={skill}
                className="glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-[var(--text-muted)] hover:text-[var(--color-brand)] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
