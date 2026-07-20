import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { developerExperience } from "../../data/experience";

export function DeveloperExperience() {
  return (
    <section id="developer-experience" className="section-pad">
      <div className="container-max">
        <SectionHeading
          eyebrow="Developer Experience"
          title="Engineering roles & delivery"
          description="Timeline of engineering and leadership roles — Software Engineer at PCS Global, Director at Skillsac, CTO at Payashost."
        />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-brand)] via-[var(--border)] to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {developerExperience.map((job, index) => {
              const left = index % 2 === 0;
              return (
                <motion.article
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                    left ? "" : ""
                  }`}
                >
                  <div
                    className={`absolute left-4 md:left-1/2 h-3 w-3 rounded-full bg-[var(--color-brand)] ring-4 ring-[var(--bg)] md:-translate-x-1/2 top-6`}
                  />

                  <div className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                    <div className="glass rounded-3xl p-6 md:p-7 text-left">
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-brand)] font-semibold mb-2">
                        {job.duration}
                      </p>
                      <h3 className="font-display text-xl font-bold">{job.designation}</h3>
                      <p className="text-[var(--text-muted)] mt-1 font-medium">{job.company}</p>
                      <p className="text-sm text-[var(--text-muted)] mt-1">
                        {job.location} · {job.type}
                      </p>

                      {job.responsibilities?.length > 0 && (
                        <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)] list-disc pl-4">
                          {job.responsibilities.map((r) => (
                            <li key={r}>{r}</li>
                          ))}
                        </ul>
                      )}

                      {job.technologies?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {job.technologies.map((t) => (
                            <span
                              key={t}
                              className="text-xs rounded-full px-3 py-1 bg-[var(--color-brand-muted)] text-[var(--color-brand)]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                      {job.note && (
                        <p className="mt-4 text-xs italic text-[var(--text-muted)]">{job.note}</p>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
