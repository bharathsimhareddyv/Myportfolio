import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { profile } from "../../data/profile";
import { navLinks } from "../../data/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] section-pad pt-14 pb-10">
      <div className="container-max grid gap-10 md:grid-cols-3">
        <div>
          <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-[var(--color-brand)]/30 mb-4">
            <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover object-top" />
          </div>
          <p className="font-display text-xl font-bold">{profile.name}</p>
          <p className="text-[var(--text-muted)] mt-2 text-sm leading-relaxed">
            Director · CTO · Freelance Technical Trainer · {profile.location}
          </p>
        </div>

        <div>
          <h3 className="font-display font-semibold mb-4">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm text-[var(--text-muted)]">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="hover:text-[var(--color-brand)] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold mb-4">Connect</h3>
          <div className="flex gap-3 mb-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="glass h-10 w-10 rounded-full flex items-center justify-center hover:text-[var(--color-brand)]"
            >
              <FaGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="glass h-10 w-10 rounded-full flex items-center justify-center hover:text-[var(--color-brand)]"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="glass h-10 w-10 rounded-full flex items-center justify-center hover:text-[var(--color-brand)]"
            >
              <FaEnvelope />
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              aria-label="Phone"
              className="glass h-10 w-10 rounded-full flex items-center justify-center hover:text-[var(--color-brand)]"
            >
              <FaPhoneAlt />
            </a>
          </div>
          <p className="text-sm text-[var(--text-muted)]">{profile.email}</p>
          <p className="text-sm text-[var(--text-muted)]">{profile.phone}</p>
        </div>
      </div>

      <div className="container-max mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between gap-3 text-xs text-[var(--text-muted)]">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p>Skillsac · Payashost · Freelance Trainer</p>
      </div>
    </footer>
  );
}
