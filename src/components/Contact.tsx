import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 px-6 lg:px-8 border-t border-gray-800"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-sm font-mono text-accent mb-4 tracking-wider">
          06. What's Next?
        </h3>
        <h4 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's Connect!
        </h4>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Interested in collaborating or have a suitable career opportunity? I
          am very open to discussing with you. Reach out to me via email or
          social media below.
        </p>

        <a
          href="mailto:erickwinz1008@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-colors"
        >
          <Send size={20} />
          Send Email
        </a>

        <div className="mt-20 flex justify-center divide-x divide-gray-800">
          <div className="px-6 flex flex-col items-center group">
            <Mail
              className="text-gray-500 mb-3 group-hover:text-accent transition-colors"
              size={24}
            />
            <span className="text-sm text-gray-400 cursor-copy hover:text-gray-200">
              erickwinz1008@gmail.com
            </span>
          </div>
          <div className="px-6 flex flex-col items-center group">
            <Phone
              className="text-gray-500 mb-3 group-hover:text-accent transition-colors"
              size={24}
            />
            <span className="text-sm text-gray-400 text-center">
              +62 851-5543-1948
            </span>
          </div>
          <div className="px-6 flex flex-col items-center group hidden md:flex">
            <MapPin
              className="text-gray-500 mb-3 group-hover:text-accent transition-colors"
              size={24}
            />
            <span className="text-sm text-gray-400 text-center">
              East Surabaya
              <br />
              Indonesia
            </span>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center gap-6">
          <a
            href="https://linkedin.com/in/erick-winata-b59581235/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent transition-colors hover:-translate-y-1 transform duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com/erickwinz30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent transition-colors hover:-translate-y-1 transform duration-300"
            aria-label="GitHub Profile"
          >
            <Github size={28} />
          </a>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-24 mb-6">
        <p className="text-sm text-gray-600 font-mono flex items-center justify-center gap-2">
          © 2026 Erick Winata. Built with Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default Contact;
