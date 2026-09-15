import { useEffect, useState } from "react";
import site from "../data/site";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto max-w-7xl transition-all duration-500 ${
          scrolled ? "pt-0" : "pt-1"
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-2xl border px-5 py-4 transition-all duration-500 ${
            scrolled
              ? "border-white/10 bg-black/70 shadow-2xl shadow-black/20 backdrop-blur-2xl"
              : "border-white/10 bg-black/25 backdrop-blur-xl"
          }`}
        >
          <a
            href="#top"
            onClick={closeMenu}
            className="group flex items-center gap-2"
          >
            <span className="text-lg font-black tracking-[-0.04em]">
              {site.name}
            </span>

            <span className="text-xl font-black text-cyan-400 transition-transform duration-300 group-hover:translate-y-[-2px]">
              .
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-cyan-300 md:block"
          >
            Let's talk ↗
          </a>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="rounded-xl border border-white/10 px-3 py-2 text-xs font-medium text-white/70 transition hover:border-white/30 hover:text-white md:hidden"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </nav>

        <div
          className={`overflow-hidden transition-all duration-500 md:hidden ${
            isOpen ? "mt-2 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-black/90 p-5 shadow-2xl backdrop-blur-2xl">
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-black"
              >
                Let's talk ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;