import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SectionHeading } from "../ui/SectionHeading";
import { trainerExperience } from "../../data/experience";

export function TrainerExperience() {
  const [openId, setOpenId] = useState(trainerExperience[0]?.id);

  return (
    <section id="trainer-experience" className="section-pad gradient-mesh">
      <div className="container-max">
        <SectionHeading
          eyebrow="Trainer Experience"
          title="Academic mentoring & training roles"
          description="Technical training roles and freelance mentoring across campuses and clients."
        />

        <div className="space-y-4">
          {trainerExperience.map((exp) => {
            const open = openId === exp.id;
            return (
              <div key={exp.id} className="glass rounded-3xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : exp.id)}
                  className="w-full text-left p-5 sm:p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-brand)] font-semibold">
                      {exp.duration}
                    </p>
                    <h3 className="font-display text-lg sm:text-xl font-bold mt-1">
                      {exp.designation}
                    </h3>
                    <p className="text-[var(--text-muted)] text-sm sm:text-base">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--text-muted)]">
                    <HiOutlineLocationMarker />
                    {exp.location}
                    {exp.batchSize && (
                      <span className="ml-1 rounded-full bg-[var(--color-brand-muted)] text-[var(--color-brand)] px-3 py-1 text-xs font-semibold">
                        Mentored: {exp.batchSize}
                      </span>
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 md:px-7 pb-6 sm:pb-7 border-t border-[var(--border)] pt-5">
                        {exp.responsibilities?.length > 0 && (
                          <>
                            <h4 className="font-semibold mb-2 text-sm sm:text-base">
                              Responsibilities
                            </h4>
                            <ul className="space-y-2 text-sm text-[var(--text-muted)] list-disc pl-4 mb-5">
                              {exp.responsibilities.map((r) => (
                                <li key={r}>{r}</li>
                              ))}
                            </ul>
                          </>
                        )}

                        {exp.topics?.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-2 text-sm sm:text-base">
                              Topics Covered
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.topics.map((t) => (
                                <span
                                  key={t}
                                  className="text-xs rounded-full px-3 py-1 border border-[var(--border)]"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
