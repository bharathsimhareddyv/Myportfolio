import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMoon, HiOutlineSun, HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useTheme } from "../../context/ThemeContext";
import { navLinks } from "../../data/navigation";
import { profile } from "../../data/profile";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container-max px-5 sm:px-8 lg:px-12 xl:px-20 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="h-9 w-9 sm:h-10 sm:w-10 rounded-full overflow-hidden ring-2 ring-[var(--color-brand)]/40">
            <img
              src={profile.photo}
              alt={profile.shortName}
              className="h-full w-full object-cover object-top"
            />
          </span>
          <span className="hidden sm:block font-display font-bold text-sm tracking-wide group-hover:text-[var(--color-brand)] transition-colors">
            {profile.shortName}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="px-3 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--color-brand)] transition-colors rounded-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="glass h-10 w-10 rounded-full flex items-center justify-center text-[var(--text)] hover:text-[var(--color-brand)]"
          >
            {theme === "dark" ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
          </button>
          <button
            type="button"
            aria-label="Open menu"
            className="lg:hidden glass h-10 w-10 rounded-full flex items-center justify-center"
            onClick={() => setOpen(true)}
          >
            <HiOutlineMenuAlt3 size={20} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden bg-[var(--bg)]/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex justify-end p-5">
              <button
                type="button"
                aria-label="Close menu"
                className="glass h-10 w-10 rounded-full flex items-center justify-center"
                onClick={() => setOpen(false)}
              >
                <HiOutlineX size={20} />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-4 pt-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i }}
                  className="font-display text-2xl font-semibold hover:text-[var(--color-brand)]"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
