import React from "react";
import {
  Code2,
  Monitor,
  Server,
  Bot,
  Database,
  GitBranch,
  Workflow,
  Sparkles,
  PhoneCall,
  MessageSquare,
  Layers,
} from "lucide-react";

interface SkillItem {
  name: string;
  icon?: string;
  iconElement?: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

const Skills = () => {
  const skillsData: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code2 className="text-accent mb-4" size={32} />,
      skills: [
        { name: "Go (Golang)", icon: "devicon-go-original-wordmark" },
        { name: "PHP", icon: "devicon-php-plain" },
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "TypeScript", icon: "devicon-typescript-plain" },
        { name: "SQL", icon: "devicon-azuresqldatabase-plain" },
      ],
    },
    {
      title: "Front-end Development",
      icon: <Monitor className="text-accent mb-4" size={32} />,
      skills: [
        { name: "React", icon: "devicon-react-original" },
        { name: "Vue.js", icon: "devicon-vuejs-plain" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
        { name: "HTML5", icon: "devicon-html5-plain" },
        { name: "CSS3", icon: "devicon-css3-plain" },
      ],
    },
    {
      title: "Back-end & Architecture",
      icon: <Server className="text-accent mb-4" size={32} />,
      skills: [
        { name: "Go / Chi / Huma", icon: "devicon-go-original" },
        { name: "Laravel", icon: "devicon-laravel-original" },
        { name: "Node.js", icon: "devicon-nodejs-plain-wordmark" },
        { name: "RESTful API", icon: "devicon-express-original" },
        { name: "State Machines & Queues", iconElement: <Layers size={22} /> },
      ],
    },
    {
      title: "AI & Workflow Automation",
      icon: <Bot className="text-accent mb-4" size={32} />,
      skills: [
        { name: "n8n (Workflow Automation)", iconElement: <Workflow size={22} /> },
        { name: "OpenAI API (LLMs & Embeddings)", iconElement: <Sparkles size={22} /> },
        { name: "RAG & pgvector", icon: "devicon-postgresql-plain" },
        { name: "Retell AI (Voice AI)", iconElement: <PhoneCall size={22} /> },
        { name: "WhatsApp Business API", iconElement: <MessageSquare size={22} /> },
      ],
    },
    {
      title: "Database Management",
      icon: <Database className="text-accent mb-4" size={32} />,
      skills: [
        { name: "PostgreSQL & pgvector", icon: "devicon-postgresql-plain" },
        { name: "Redis & Asynq", icon: "devicon-redis-plain" },
        { name: "MySQL", icon: "devicon-mysql-original" },
        { name: "SQLite", icon: "devicon-sqlite-plain" },
        { name: "Firebase", icon: "devicon-firebase-plain" },
      ],
    },
    {
      title: "Tools & Methods",
      icon: <GitBranch className="text-accent mb-4" size={32} />,
      skills: [
        { name: "Docker", icon: "devicon-docker-plain" },
        { name: "Git/GitHub", icon: "devicon-github-original" },
        { name: "AI-Assisted (Vibe Coding)", iconElement: <Bot size={22} /> },
        {
          name: "UML (draw.io/Lucidchart)",
          icon: "devicon-unifiedmodelinglanguage-plain",
        },
        { name: "SDLC (Waterfall/Prototyping)", icon: "devicon-jira-plain" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4 justify-end md:justify-start">
          <span className="text-accent text-2xl md:hidden">02.</span>
          <span className="hidden md:inline text-accent text-2xl">
            02.
          </span>{" "}
          Technical Skills
          <div className="h-[1px] bg-gray-700 flex-grow ml-4 hidden md:block"></div>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-surface border border-gray-800 rounded-xl p-8 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all group duration-300 hover:-translate-y-1"
            >
              <div className="group-hover:scale-110 transition-transform origin-left w-fit cursor-default">
                {category.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                {category.title}
              </h4>
              <ul className="space-y-3 mt-2">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-400 group/item cursor-default p-2 -mx-2 rounded-xl hover:bg-white/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-transparent translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-700 pointer-events-none"></div>
                    {skill.iconElement ? (
                      <div className="mr-4 text-gray-500 group-hover/item:text-accent group-hover/item:scale-125 transition-all duration-300 relative z-10 flex items-center justify-center w-6 h-6">
                        {skill.iconElement}
                      </div>
                    ) : (
                      <i
                        className={`${skill.icon} text-2xl mr-4 text-gray-500 group-hover/item:text-accent group-hover/item:scale-125 group-hover/item:rotate-3 transition-all duration-300 relative z-10`}
                        title={skill.name}
                      ></i>
                    )}
                    <span className="group-hover/item:text-white group-hover/item:translate-x-1 transition-all duration-300 relative z-10 font-medium">
                      {skill.name}
                    </span>
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

export default Skills;
