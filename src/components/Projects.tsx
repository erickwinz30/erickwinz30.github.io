import { Folder, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Attendance App",
    description:
      "A full-stack web application for employee attendance management using QR code technology. Features include real-time tracking and role-based access control (Employee, HRD, Scanner).",
    techStack: ["React", "Golang", "PostgreSQL"],
    githubLink: "https://github.com/erickwinz30/attendance-app-frontend",
    externalLink: "",
    image: "/assets/img/portfolio/attendance-app/home.png",
  },
  {
    title: "Simple Ecommerce",
    description:
      "A full-stack mobile e-commerce application for computer hardware products. Features include a shopping cart, Midtrans payment integration, and an admin dashboard.",
    techStack: ["Ionic", "Vue", "Firebase"],
    githubLink: "https://github.com/erickwinz30/computers-ecommerce-ionic",
    externalLink: "https://computers-ecommerce.web.app",
    image: "/assets/img/portfolio/ionic-ecommerce/iPhone-13-PRO-home.png",
  },
  {
    title: "Internal HR & Employee Onboarding System",
    description:
      "An exclusive internal tool for the HR department (Wingsfood Internship Project). Optimized the document collection workflow with a direct file upload interface and Excel-based autofill features.",
    techStack: ["Laravel", "ReactJS", "Firebase", "MySQL"],
    githubLink: "",
    externalLink: "",
    image: "",
  },
  {
    title: "Kenzou Drive Thru Car Wash",
    description:
      "A full-stack car wash management application for admins and members. Integrated gamification features to increase user engagement.",
    techStack: ["Laravel", "Blade", "MySQL"],
    githubLink: "",
    externalLink: "",
    image: "/assets/img/portfolio/kenzou-app-screenshot/customers-homepage.png",
  },
  {
    title: "Calculus - Calorie Tracking App",
    description:
      "Dicoding MSIB Capstone Project. Took full responsibility for database schema design, authentication, and back-end logic.",
    techStack: ["Laravel", "Blade", "MySQL"],
    githubLink: "https://github.com/erickwinz30/Calculus",
    externalLink: "",
    image: "/assets/img/portfolio/calculus-screenshot/homepage-view.png",
  },
  {
    title: "Warehouse Inventory",
    description:
      "A comprehensive Warehouse Inventory System to streamline stock tracking. Initially built with Laravel MVC architecture and later refactored the frontend using ReactJS.",
    techStack: ["ReactJS", "Firebase", "Laravel"],
    githubLink: "",
    externalLink: "",
    image: "/assets/img/portfolio/bfit-gudang-screenshot/home.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-accent text-2xl">04.</span> Featured Projects
          <div className="h-[1px] bg-gray-700 flex-grow ml-4 hidden md:block"></div>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl flex flex-col h-full border border-gray-800 hover:border-accent hover:-translate-y-2 transition-all duration-300 group shadow-lg overflow-hidden"
            >
              {project.image ? (
                <div className="relative h-48 sm:h-56 overflow-hidden bg-primary border-b border-gray-800">
                  <div className="absolute inset-0 bg-primary/50 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ) : null}

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-6">
                  {!project.image && (
                    <Folder size={36} className="text-accent" />
                  )}
                  {project.image && (
                    <span className="text-accent text-xs font-mono font-medium tracking-wider uppercase">
                      Featured Project
                    </span>
                  )}
                  <div className="flex items-center gap-4 ml-auto">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.externalLink && (
                      <a
                        href={project.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent transition-colors"
                        aria-label="External Link"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-800 border-opacity-50">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono text-gray-300 bg-primary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
