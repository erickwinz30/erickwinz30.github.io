import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { contact, navLinks } from "../data/content";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusables: HTMLElement[] = [
        menuButtonRef.current,
        ...Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled])',
          ),
        ),
      ].filter((element): element is HTMLElement => element !== null);

      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    dialogRef.current?.querySelector<HTMLElement>("a[href]")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[72px] transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="relative z-50 mx-auto flex h-full max-w-[1280px] items-center justify-end px-6 lg:px-10"
      >
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Let's talk
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-primary-foreground"
          >
            Let's talk
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center text-foreground"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          ref={dialogRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-40 flex flex-col bg-background px-6 pb-10 pt-28 md:hidden"
        >
          <div className="flex flex-1 flex-col justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="font-display text-5xl font-semibold tracking-[-0.02em] text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="space-y-4 border-t border-border pt-6">
            <a
              href="#contact"
              onClick={closeMenu}
              className="block font-display text-2xl text-primary"
            >
              Let's talk
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="block text-sm text-muted-foreground"
            >
              {contact.email}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
