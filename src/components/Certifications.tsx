import { Award } from "lucide-react";

const certificationsList = [
  { name: "MongoDB for SQL Experts", issuer: "MongoDB" },
  { name: "Front-End Web Developer Expert", issuer: "Dicoding Indonesia" },
  { name: "React Web Application Development", issuer: "Dicoding Indonesia" },
  { name: "Generative AI & AI Fundamentals", issuer: "Dicoding Indonesia" },
  { name: "Back-End Web Development (Node.js)", issuer: "Dicoding Indonesia" },
  { name: "Git & GitHub Fundamentals", issuer: "Dicoding Indonesia" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 lg:px-8 bg-surface">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center justify-center gap-4 text-center">
          <span className="text-accent text-2xl">05.</span> Certifications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificationsList.map((cert, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row md:items-center gap-4 p-5 bg-primary border border-gray-800 rounded-lg hover:border-accent hover:bg-primary/80 transition-all duration-300"
            >
              <div className="bg-surface p-3 rounded-full text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all w-fit">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-200 group-hover:text-accent transition-colors">
                  {cert.name}
                </h4>
                <p className="text-sm text-gray-500 font-medium">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
