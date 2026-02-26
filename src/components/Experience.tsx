import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "Jul 2025 - Oct 2025",
    role: "IT Programmer (Internship)",
    company: "PT. Prakarsa Alam Segar (Wings Food) - Bekasi",
    descriptions: [
      "Identified and resolved critical bugs in the HR system infrastructure.",
      "Led the digital migration of the recruitment process from Google Drive to a centralized internal system.",
      "Developed a real-time monitoring dashboard using React.js and Firebase to track the status of applicant documents.",
    ],
  },
  {
    period: "Feb 2023 - Jul 2023",
    role: "Back-End Developer (MSIB Participant)",
    company: "Dicoding Indonesia - Remote",
    descriptions: [
      "Mastered professional development workflows including RESTful API architecture, Node.js, and Git.",
    ],
  },
  {
    period: "Feb 2023 - Mar 2023",
    role: "IT Support Technician (Internship)",
    company: "Bfit Indonesia - East Surabaya",
    descriptions: [
      "Handled first-level technical support for hardware and software issues.",
      "Rebuilt and refactored the warehouse inventory system from Laravel Blade to Vue.js to make it more dynamic.",
      "Implemented the Safety Stock method to optimize stock tracking.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 lg:px-8 bg-surface">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-16 flex items-center gap-4">
          <span className="text-accent text-2xl">03.</span> Experience
          <div className="h-[1px] bg-gray-700 flex-grow ml-4 hidden md:block"></div>
        </h3>

        <div className="relative border-l border-gray-700 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-1.5 h-[10px] w-[10px] rounded-full bg-accent ring-4 ring-primary shadow-[0_0_10px_rgba(59,130,246,0.6)] group-hover:scale-150 group-hover:bg-white transition-all duration-300"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h4 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
                  {exp.role}
                </h4>
                <div className="flex items-center text-accent text-sm font-mono bg-accent/10 px-3 py-1 rounded-full w-fit">
                  <Briefcase size={14} className="mr-2" />
                  {exp.period}
                </div>
              </div>

              <h5 className="text-lg text-gray-300 mb-4 font-medium">
                {exp.company}
              </h5>

              <ul className="space-y-3 text-gray-400">
                {exp.descriptions.map((desc, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-accent mr-3 mt-1.5 text-xs">▹</span>
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
