import { motion } from "framer-motion";

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  download,
  target,
  rel,
  disabled = false,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm md:text-base font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)] disabled:opacity-60 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-soft)] shadow-[0_10px_30px_-10px_rgba(255,107,0,0.55)]",
    secondary:
      "glass text-[var(--text)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]",
    ghost:
      "bg-transparent text-[var(--text)] border border-[var(--border)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;
  const Comp = href ? motion.a : motion.button;
  const shared = {
    className: classes,
    whileHover: disabled ? undefined : { y: -2, scale: 1.02 },
    whileTap: disabled ? undefined : { scale: 0.98 },
    ...props,
  };

  if (href) {
    return (
      <Comp href={href} download={download} target={target} rel={rel} onClick={onClick} {...shared}>
        {children}
      </Comp>
    );
  }

  return (
    <Comp type={type} onClick={onClick} disabled={disabled} {...shared}>
      {children}
    </Comp>
  );
}
