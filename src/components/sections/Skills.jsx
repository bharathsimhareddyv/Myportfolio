import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { skillCategories } from "../../data/skills";

function SkillTile({ skill }) {
  if (skill.placeholder) {
    return (
      <div className="glass rounded-2xl px-4 py-3 opacity-70">
        <p className="font-medium text-sm">{skill.name === "—" ? "Coming soon" : skill.name}</p>
        {skill.note && <p className="text-xs text-[var(--text-muted)] mt-1">{skill.note}</p>}
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl px-4 py-3">
      <p className="font-medium text-sm">{skill.name}</p>
      {skill.note && <p className="text-xs text-[var(--text-muted)] mt-1">{skill.note}</p>}
    </div>
  );
}

export function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const current = skillCategories.find((c) => c.id === active) || skillCategories[0];

  return (
    <section id="skills" className="section-pad gradient-mesh">
      <div className="container-max">
        <SectionHeading
          eyebrow="Skills"
          title="Technical depth across the stack"
          description="Skills categorized from the attached resumes — proficiency indicators reflect stated focus areas."
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === cat.id
                  ? "bg-[var(--color-brand)] text-white shadow-lg"
                  : "glass text-[var(--text-muted)] hover:text-[var(--color-brand)]"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="glass rounded-3xl p-6 md:p-8"
          >
            <h3 className="font-display text-2xl font-bold mb-6">{current.title}</h3>
            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              {current.skills.map((skill, i) => (
                <SkillTile key={`${current.id}-${skill.name}-${i}`} skill={skill} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
