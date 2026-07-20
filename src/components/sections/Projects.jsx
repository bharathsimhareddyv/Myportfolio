import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { developerProjects, trainerProjects } from "../../data/projects";

export function Projects() {
  const [tab, setTab] = useState("trainer");

  return (
    <section id="projects" className="section-pad">
      <div className="container-max">
        <SectionHeading
          eyebrow="Projects"
          title="Delivery & training programs"
          description="Developer project case studies were not attached — trainer programs below are taken from the resumes."
        />

        <div className="flex gap-2 mb-8">
          {[
            { id: "trainer", label: "Trainer Projects" },
            { id: "developer", label: "Developer Projects" },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                tab === t.id
                  ? "bg-[var(--color-brand)] text-white"
                  : "glass text-[var(--text-muted)]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "trainer" ? (
          <div className="grid md:grid-cols-2 gap-6">
            {trainerProjects.map((p) => (
              <GlassCard key={p.id}>
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--color-brand)] font-semibold">
                  {p.type}
                </span>
                <h3 className="font-display text-xl font-bold mt-2 mb-3">{p.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                  {p.description}
                </p>
                <ul className="space-y-1.5 text-sm text-[var(--text-muted)] list-disc pl-4 mb-4">
                  {p.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full px-3 py-1 border border-[var(--border)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {developerProjects.map((p) => (
              <GlassCard key={p.id} className={p.placeholder ? "border-dashed" : ""}>
                <h3 className="font-display text-xl font-bold mb-3">{p.name}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                  {p.description}
                </p>
                {p.placeholder ? (
                  <p className="text-xs italic text-[var(--text-muted)]">
                    Placeholder — add GitHub, live demo, images, and tech stack when available.
                  </p>
                ) : (
                  <div className="flex gap-3">
                    {p.github && (
                      <a href={p.github} className="inline-flex items-center gap-2 text-sm hover:text-[var(--color-brand)]">
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {p.liveDemo && (
                      <a href={p.liveDemo} className="inline-flex items-center gap-2 text-sm hover:text-[var(--color-brand)]">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </GlassCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
