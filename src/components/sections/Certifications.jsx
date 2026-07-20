import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { certifications } from "../../data/certifications";
import { HiOutlineBadgeCheck } from "react-icons/hi";

export function Certifications() {
  return (
    <section id="certifications" className="section-pad gradient-mesh">
      <div className="container-max">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & recognition"
          description="No certificate files were attached with this request. Structure is ready for updates."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((c) => (
            <GlassCard key={c.id} className={c.placeholder ? "border-dashed opacity-80" : ""}>
              <div className="flex items-start gap-3">
                <HiOutlineBadgeCheck className="text-[var(--color-brand)] text-2xl shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-bold">{c.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] mt-1">{c.issuer}</p>
                  {c.note && (
                    <p className="text-xs italic text-[var(--text-muted)] mt-3">{c.note}</p>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
