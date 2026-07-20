import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { achievements } from "../../data/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="section-pad">
      <div className="container-max">
        <SectionHeading
          eyebrow="Achievements"
          title="Impact at a glance"
          description="Metrics derived only from resume statements and attached partner lists."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((a) => (
            <GlassCard key={a.id} className="text-center">
              <p className="font-display text-3xl font-bold text-[var(--color-brand)] mb-2">
                {a.value}
              </p>
              <h3 className="font-display font-semibold mb-2">{a.title}</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">{a.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
