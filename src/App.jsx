import { useState } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { CustomCursor, LoadingScreen } from "./components/ui/Effects";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { DeveloperExperience } from "./components/sections/DeveloperExperience";
import { TrainerExperience } from "./components/sections/TrainerExperience";
import { Projects } from "./components/sections/Projects";
import { Companies } from "./components/sections/Companies";
import { Technologies } from "./components/sections/Technologies";
import { Testimonials } from "./components/sections/Testimonials";
import { Gallery } from "./components/sections/Gallery";
import { Achievements } from "./components/sections/Achievements";
import { Contact } from "./components/sections/Contact";
import { profile } from "./data/profile";

export default function App() {
  const [booting, setBooting] = useState(true);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Helmet>
          <title>{profile.name} | Director, CTO & Technical Trainer</title>
          <meta
            name="description"
            content="Director at Skillsac, CTO at Payashost, and freelance technical trainer — 5000+ students across 15+ universities and 20+ colleges."
          />
        </Helmet>

        <LoadingScreen onDone={() => setBooting(false)} />
        <CustomCursor />

        <div className={`min-h-screen ${booting ? "overflow-hidden h-screen" : ""}`}>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <DeveloperExperience />
            <TrainerExperience />
            <Projects />
            <Companies />
            <Technologies />
            <Testimonials />
            <Gallery />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}
