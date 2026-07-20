import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function useCounter(target, { duration = 2000, start = 0, enabled = true } = {}) {
  const [value, setValue] = useState(start);
  const frame = useRef(null);

  useEffect(() => {
    if (!enabled || typeof target !== "number") {
      setValue(target);
      return;
    }

    const startTime = performance.now();
    const from = start;

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (progress < 1) frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [target, duration, start, enabled]);

  return value;
}

export function useInViewOnce(options = { once: true, amount: 0.35 }) {
  const ref = useRef(null);
  const inView = useInView(ref, options);
  return [ref, inView];
}
