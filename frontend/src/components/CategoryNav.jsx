import { useEffect, useState } from "react";
import { useLang } from "../data/i18n";
import HoursBadge from "./HoursBadge";

const CategoryNav = ({ categories }) => {
  const { lang, setLang, night } = useLang();
  const [active, setActive] = useState(categories[0]?.id || "burgers");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = active;
      for (const c of categories) {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top <= 140) current = c.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [active, categories]);

  const goTo = (id) => {
    if (window.__lenis) window.__lenis.scrollTo(`#${id}`, { offset: -72 });
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-testid="category-nav"
      className={`fixed top-0 inset-x-0 z-40 border-b border-olive/15 transition-colors duration-300 ${
        scrolled ? "bg-cream/95 backdrop-blur-md" : "bg-cream"
      }`}
    >
      <div className="flex items-center gap-4 md:gap-6 px-4 md:px-10 h-[64px]">
        <button
          data-testid="nav-logo"
          onClick={() => (window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" }))}
          className="shrink-0"
        >
          <img src={night ? "/images/logo-white.png" : "/images/logo-green.png"} alt="APERO" className="h-8 md:h-9 w-auto" />
        </button>
        <nav className="flex gap-5 md:gap-8 overflow-x-auto no-scrollbar ml-auto" style={{ scrollbarWidth: "none" }}>
          {categories.map((c) => (
            <button
              key={c.id}
              data-testid={`nav-link-${c.id}`}
              onClick={() => goTo(c.id)}
              className={`relative whitespace-nowrap text-[11px] md:text-xs tracking-[0.2em] uppercase py-2 transition-colors ${
                active === c.id ? "text-terra" : "text-olive/70 hover:text-olive"
              }`}
            >
              <span className="mr-1 text-[9px] align-super">{c.number}</span>
              {c.label}
              {active === c.id && (
                <span className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-terra" />
              )}
            </button>
          ))}
        </nav>
        <HoursBadge />
        <div className="flex items-center shrink-0 border-l border-olive/20 pl-3 md:pl-4" data-testid="lang-switcher">
          {["es", "en"].map((l) => (
            <button
              key={l}
              data-testid={`lang-toggle-${l}`}
              onClick={() => setLang(l)}
              className={`text-[10px] font-bold tracking-[0.15em] uppercase px-2 py-1.5 transition-colors ${
                lang === l ? "bg-olive text-cream" : "text-olive/50 hover:text-olive"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default CategoryNav;
