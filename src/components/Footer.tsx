import { contact } from "../data/content";

export const Footer = () => {
  return (
    <footer className="px-6 py-8 lg:px-10">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 text-[11px] uppercase tracking-[0.16em] text-muted-foreground md:flex-row md:items-center md:justify-between">
        <span className="font-display text-sm font-semibold tracking-[-0.01em] text-foreground">
          ERICK WINATA
        </span>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={`mailto:${contact.email}`}
            className="transition-colors hover:text-primary"
          >
            {contact.email}
          </a>
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            WhatsApp
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            GitHub
          </a>
          <span className="normal-case">
            © 2026 Erick Winata · Built with Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
