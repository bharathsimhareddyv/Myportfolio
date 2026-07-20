import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMotion";

export function CustomCursor() {
  const isTouch = useMediaQuery("(pointer: coarse)");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const enabled = !isTouch && !isMobile;

  useEffect(() => {
    if (!enabled) return;

    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => {
      const t = e.target;
      const interactive =
        t.closest("a, button, [role='button'], input, textarea, select, .cursor-grow") != null;
      setHovering(interactive);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9999] mix-blend-difference"
        animate={{
          x: pos.x - (hovering ? 22 : 6),
          y: pos.y - (hovering ? 22 : 6),
          width: hovering ? 44 : 12,
          height: hovering ? 44 : 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.4 }}
        style={{
          borderRadius: "999px",
          background: "var(--cursor)",
        }}
      />
      <motion.div
        className="pointer-events-none fixed z-[9998] border border-[var(--cursor)] rounded-full"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          opacity: hovering ? 0 : 0.45,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 24 }}
        style={{ width: 40, height: 40 }}
      />
    </>
  );
}

export function LoadingScreen({ onDone }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
      onDone?.();
    }, 1800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[var(--color-ink)] text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.div
            className="font-display text-5xl md:text-6xl font-extrabold text-[var(--color-brand)] mb-8 tracking-tight"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            BSR
          </motion.div>
          <motion.div
            className="h-1 w-40 rounded-full overflow-hidden bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="h-full bg-[var(--color-brand)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
          <p className="mt-4 text-xs tracking-[0.3em] uppercase text-white/50">Loading</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
