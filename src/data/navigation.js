export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "developer-experience", label: "Developer" },
  { id: "trainer-experience", label: "Trainer" },
  { id: "projects", label: "Projects" },
  { id: "companies", label: "Clients" },
  { id: "gallery", label: "Trainings" },
  { id: "testimonials", label: "Feedback" },
  { id: "technologies", label: "Tech" },
  { id: "achievements", label: "Impact" },
  { id: "contact", label: "Contact" },
];

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
};
