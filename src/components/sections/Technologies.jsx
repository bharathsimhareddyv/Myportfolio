import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { SectionHeading } from "../ui/SectionHeading";
import { techGrid } from "../../data/skills";

export function Technologies() {
  const row1 = techGrid.slice(0, Math.ceil(techGrid.length / 2));
  const row2 = techGrid.slice(Math.ceil(techGrid.length / 2));
  const track1 = useRef(null);
  const track2 = useRef(null);

  useEffect(() => {
    const anims = [];
    if (track1.current) {
      anims.push(
        gsap.to(track1.current, {
          xPercent: -50,
          duration: 28,
          ease: "none",
          repeat: -1,
        })
      );
    }
    if (track2.current) {
      anims.push(
        gsap.fromTo(
          track2.current,
          { xPercent: -50 },
          { xPercent: 0, duration: 32, ease: "none", repeat: -1 }
        )
      );
    }
    return () => anims.forEach((a) => a.kill());
  }, []);

  const Marquee = ({ items, trackRef }) => (
    <div className="overflow-hidden mb-4">
      <div ref={trackRef} className="flex gap-4 w-max">
        {[...items, ...items].map((tech, i) => (
          <motion.div
            key={`${tech}-${i}`}
            whileHover={{ scale: 1.05, y: -2 }}
            className="glass rounded-2xl px-6 py-4 min-w-[140px] text-center font-display font-semibold text-sm cursor-grow"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="technologies" className="section-pad">
      <div className="container-max mb-10">
        <SectionHeading
          eyebrow="Technologies"
          title="Tools I build and teach with"
          description="Animated technology grid drawn from resume skill lists."
          align="center"
        />
      </div>
      <Marquee items={row1} trackRef={track1} />
      <Marquee items={row2} trackRef={track2} />
    </section>
  );
}
