import { ArrowUpRight, MessageCircle } from "lucide-react";
import { contact } from "../data/content";

export const Contact = () => {
  return (
    <section id="contact" className="bg-primary px-6 py-20 text-primary-foreground lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
        <div>
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-primary-foreground/70">
            Contact
          </p>
          <h2 className="text-[clamp(34px,5vw,72px)] font-semibold leading-[0.98] tracking-[-0.03em]">
            Let's talk about the problem.
          </h2>
        </div>

        <div className="flex flex-col justify-end">
          <p className="max-w-md text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            Hiring, or have a project in mind? Tell me the role, the scope, and
            the constraint that matters most. A short note is enough.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-foreground px-6 py-3.5 text-sm font-medium text-primary transition-transform hover:-translate-y-0.5"
            >
              {contact.email}
              <ArrowUpRight size={16} />
            </a>
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 border-t border-primary-foreground/20 pt-6">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
            >
              LinkedIn
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
            >
              GitHub
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-1.5 text-[11px] uppercase tracking-[0.14em] text-primary-foreground/70">
            <span>{contact.phone}</span>
            <span>{contact.location}</span>
            <span>{contact.availability}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
