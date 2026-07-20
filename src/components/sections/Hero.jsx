import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from "react-icons/fa";
import { Button } from "../ui/Button";
import { profile } from "../../data/profile";

function TypeRoles({ roles }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    const speed = deleting ? 36 : 58;

    if (!deleting && text === current) {
      const pause = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(pause);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
      return;
    }

    const t = setTimeout(() => {
      setText(
        deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(t);
  }, [text, deleting, index, roles]);

  return (
    <span className="text-gradient font-display font-bold">
      {text}
      <span className="animate-pulse text-[var(--color-brand)]">|</span>
    </span>
  );
}

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100svh] flex items-center overflow-hidden gradient-mesh"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <motion.div
          className="absolute -top-24 -right-16 h-64 sm:h-80 w-64 sm:w-80 rounded-full bg-[var(--color-brand)]/20 blur-3xl"
          animate={{ x: [0, 24, 0], y: [0, 16, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 -left-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"
          animate={{ x: [0, -16, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container-max section-pad pt-28 sm:pt-32 md:pt-36 relative z-10 w-full"
      >
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 xl:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[var(--color-brand)] font-semibold mb-4 sm:mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)] animate-pulse" />
              Director · CTO · Freelance Trainer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.7 }}
              className="font-display text-[2.15rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-7xl font-extrabold tracking-tight mb-4"
            >
              {profile.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-5 sm:mb-6 min-h-[2.4em]"
            >
              <TypeRoles roles={profile.roles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-[var(--text-muted)] text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-6 sm:mb-8"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-2.5 sm:gap-3 mb-6 sm:mb-8"
            >
              <Button href="#contact">
                <FaEnvelope /> Contact Me
              </Button>
              <Button variant="secondary" href="#companies">
                View Clients
              </Button>
              <a
                href={profile.resumes.developer}
                download={profile.resumes.developerFilename}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm md:text-base font-semibold transition-all duration-300 bg-transparent text-[var(--text)] border border-[var(--border)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                <FaDownload /> Developer Resume
              </a>
              <a
                href={profile.resumes.trainer}
                download={profile.resumes.trainerFilename}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm md:text-base font-semibold transition-all duration-300 bg-transparent text-[var(--text)] border border-[var(--border)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                <FaDownload /> Trainer Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="glass h-10 w-10 sm:h-11 sm:w-11 rounded-full flex items-center justify-center hover:text-[var(--color-brand)]"
              >
                <FaGithub size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="glass h-10 w-10 sm:h-11 sm:w-11 rounded-full flex items-center justify-center hover:text-[var(--color-brand)]"
              >
                <FaLinkedin size={16} />
              </a>
              <span className="text-xs sm:text-sm text-[var(--text-muted)]">{profile.location}</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="order-1 lg:order-2 relative mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none"
          >
            <div className="relative">
              <div className="absolute -inset-3 sm:-inset-4 rounded-[2rem] bg-gradient-to-br from-[var(--color-brand)]/40 via-transparent to-sky-400/20 blur-xl" />
              <div className="relative glass rounded-[1.75rem] sm:rounded-[2rem] p-2.5 sm:p-3 overflow-hidden">
                <div className="relative aspect-[4/5] rounded-[1.35rem] sm:rounded-[1.6rem] overflow-hidden">
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="h-full w-full object-cover object-top"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white">
                    <p className="font-display text-lg sm:text-xl font-bold">5000+ Students</p>
                    <p className="text-[11px] sm:text-xs text-white/75 mt-1">
                      15+ Universities · 20+ Colleges
                    </p>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                      <div className="rounded-xl bg-white/10 backdrop-blur-sm px-1 py-2">
                        <p className="text-[10px] sm:text-xs font-bold">Director</p>
                        <p className="text-[9px] text-white/65">Skillsac</p>
                      </div>
                      <div className="rounded-xl bg-white/10 backdrop-blur-sm px-1 py-2">
                        <p className="text-[10px] sm:text-xs font-bold">CTO</p>
                        <p className="text-[9px] text-white/65">Payashost</p>
                      </div>
                      <div className="rounded-xl bg-white/10 backdrop-blur-sm px-1 py-2">
                        <p className="text-[10px] sm:text-xs font-bold">Trainer</p>
                        <p className="text-[9px] text-white/65">Freelance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
