import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { profile } from "../../data/profile";
import { emailjsConfig } from "../../data/navigation";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const configured =
      emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey;

    if (!configured) {
      const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
        form.subject || "Portfolio Inquiry"
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      )}`;
      window.location.href = mailto;
      setStatus({
        type: "info",
        message:
          "EmailJS keys not configured — opened your mail client instead. Add VITE_EMAILJS_* keys in .env for in-app sending.",
      });
      return;
    }

    try {
      setLoading(true);
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        emailjsConfig.publicKey
      );
      setStatus({ type: "success", message: "Message sent successfully." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        message: "Unable to send right now. Please email directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "w-full rounded-2xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--color-brand)]/50 bg-transparent text-[var(--text)] placeholder:text-[var(--text-muted)]";

  return (
    <section id="contact" className="section-pad gradient-mesh">
      <div className="container-max">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build or train together"
          description="Reach out for development collaborations, corporate training, or academic workshops."
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:text-[var(--color-brand)] transition-colors"
            >
              <FaEnvelope className="text-[var(--color-brand)]" />
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">Email</p>
                <p className="font-medium text-sm break-all">{profile.email}</p>
              </div>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:text-[var(--color-brand)] transition-colors"
            >
              <FaPhoneAlt className="text-[var(--color-brand)]" />
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">Phone</p>
                <p className="font-medium text-sm">{profile.phone}</p>
              </div>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:text-[var(--color-brand)] transition-colors"
            >
              <FaLinkedin className="text-[var(--color-brand)]" />
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">LinkedIn</p>
                <p className="font-medium text-sm">linkedin.com/in/bharath-reddy-881375342</p>
              </div>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:text-[var(--color-brand)] transition-colors"
            >
              <FaGithub className="text-[var(--color-brand)]" />
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">GitHub</p>
                <p className="font-medium text-sm">github.com/bharathreddy20031910</p>
              </div>
            </a>
            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <FaMapMarkerAlt className="text-[var(--color-brand)]" />
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">Location</p>
                <p className="font-medium text-sm">{profile.location}</p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="glass rounded-3xl p-6 md:p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                className={fieldClass}
              />
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="Your email"
                className={fieldClass}
              />
            </div>
            <input
              name="subject"
              value={form.subject}
              onChange={onChange}
              placeholder="Subject"
              className={fieldClass}
            />
            <textarea
              required
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Your message"
              rows={6}
              className={`${fieldClass} resize-none`}
            />
            <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
            {status.message && (
              <p
                className={`text-sm ${
                  status.type === "success"
                    ? "text-emerald-500"
                    : status.type === "error"
                      ? "text-red-400"
                      : "text-[var(--text-muted)]"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
