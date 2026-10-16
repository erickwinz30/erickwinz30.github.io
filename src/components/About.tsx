const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center md:text-left flex items-center gap-4">
          <span className="text-accent text-2xl">01.</span> About Me
          <div className="h-[1px] bg-gray-700 flex-grow ml-4 hidden md:block"></div>
        </h3>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-2/5 flex justify-center relative group">
            <div className="absolute inset-0 bg-accent rounded-2xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 -z-10"></div>
            <div className="relative overflow-hidden rounded-2xl border-2 border-accent/20 bg-primary w-64 h-64 md:w-80 md:h-80 shadow-2xl">
              <img
                src="/assets/profile_erick.png"
                alt="Erick Winata"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I am a{" "}
                <span className="text-gray-200 font-medium">
                  Full-Stack & AI Automation Engineer
                </span>{" "}
                and an Information Systems graduate from{" "}
                <span className="text-accent">
                  <a
                    href="https://dinamika.ac.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dinamika University (STIKOM Surabaya)
                  </a>
                </span>
                .
              </p>
              <p>
                Experienced in building scalable web applications and multi-tenant AI automation systems. Proficient in{" "}
                <span className="text-gray-200">Go (Golang), PHP (Laravel), and modern JavaScript (React, Vue.js, TypeScript)</span>
                . Passionate about designing robust backend architectures and AI-driven conversational workflows.
              </p>
              <p>
                Accustomed to handling the entire Software Development Life
                Cycle <span className="text-accent">(SDLC)</span>, leveraging{" "}
                <span className="text-gray-200">AI-assisted engineering</span> to accelerate delivery while ensuring strict system design and data integrity.
              </p>
            </div>

            <div className="mt-8">
              <div className="inline-flex items-center gap-2 text-green-400 px-4 py-2 bg-green-400/10 border border-green-500/30 rounded-full text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Open to new opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
