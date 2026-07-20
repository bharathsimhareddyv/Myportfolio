import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { galleryItems } from "../../data/gallery";

function InfinitePhotoStrip({ items, reverse = false, duration = 45 }) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden mask-fade-x">
      <motion.div
        className="flex gap-3 sm:gap-4 w-max py-1"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {loop.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="shrink-0 relative w-[240px] sm:w-[300px] md:w-[340px] aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border)] group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-3 sm:p-3.5">
              <p className="text-[10px] uppercase tracking-[0.16em] text-teal-300/90 font-semibold">
                {item.category}
              </p>
              <p className="text-white text-xs sm:text-sm font-semibold leading-snug line-clamp-2 mt-0.5">
                {item.title}
              </p>
              {item.location && (
                <p className="text-white/65 text-[10px] sm:text-xs mt-0.5">{item.location}</p>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="section-pad relative overflow-hidden gradient-mesh">
      <div className="container-max relative z-10">
        <SectionHeading
          eyebrow="Trainings Gallery"
          title="College training moments"
          description="Classroom sessions, campus batches, and Skillsac / Payashost moments — infinite auto scroll."
          align="center"
        />

        <InfinitePhotoStrip items={galleryItems} duration={42} />
      </div>
    </section>
  );
}
