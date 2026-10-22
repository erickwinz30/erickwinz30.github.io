import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Facts } from "./components/Facts";
import { Principle } from "./components/Principle";
import { Bio } from "./components/Bio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CursorDot } from "./components/ui/CursorDot";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <CursorDot />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <Facts />
        <Principle />
        <Bio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
