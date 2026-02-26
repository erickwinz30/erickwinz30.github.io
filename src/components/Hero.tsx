import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Abstract Background Decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 opacity-10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Hi, I'm <span className="text-accent">Erick Winata.</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-8">
          Fullstack Developer <span className="text-accent px-2">|</span>{" "}
          Information Systems Graduate
        </h2>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          A detail-oriented Information Systems graduate with a strong
          foundation in building scalable web applications. Experienced in
          optimizing internal systems and digitalizing manual processes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="group px-8 py-4 bg-accent text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-accent-hover transition-all w-full sm:w-auto hover:-translate-y-1 shadow-lg shadow-accent/25"
          >
            View Projects
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          <a
            href="/assets/CV_ATS_ErickWinata_English (11-1-2026).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-surface text-gray-200 border border-gray-700 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-all w-full sm:w-auto hover:-translate-y-1"
          >
            Download CV
            <Download
              size={20}
              className="group-hover:translate-y-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
