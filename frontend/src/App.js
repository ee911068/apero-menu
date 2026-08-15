import { useEffect, useState } from "react";
import Lenis from "lenis";
import CategoryNav from "./components/CategoryNav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import MenuSection from "./components/MenuSection";
import ItemModal from "./components/ItemModal";
import Manifesto from "./components/Manifesto";
import Footer from "./components/Footer";
import Tray from "./components/Tray";
import { MENU } from "./data/menu";
import { LangContext, UI, CATEGORIES_I18N, MENU_EN } from "./data/i18n";

function App() {
  const [selected, setSelected] = useState(null);
  const [lang, setLang] = useState(() => localStorage.getItem("apero-lang") || "es");
  const [cart, setCart] = useState([]);
  const t = UI[lang];
  const categories = CATEGORIES_I18N[lang];
  const menu = lang === "es" ? MENU : MENU_EN;

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => { lenis.raf(time); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); window.__lenis = null; };
  }, []);

  useEffect(() => {
    if (selected) window.__lenis?.stop();
    else window.__lenis?.start();
  }, [selected]);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("apero-lang", lang);
  }, [lang]);

  const addItem = (id) =>
    setCart((c) => {
      const found = c.find((x) => x.id === id);
      return found
        ? c.map((x) => (x.id === id ? { ...x, qty: x.qty + 1 } : x))
        : [...c, { id, qty: 1 }];
    });
  const removeItem = (id) => setCart((c) => c.filter((x) => x.id !== id));
  const setQty = (id, qty) =>
    setCart((c) =>
      qty <= 0 ? c.filter((x) => x.id !== id) : c.map((x) => (x.id === id ? { ...x, qty } : x))
    );

  return (
    <LangContext.Provider value={{ lang, setLang, cart, addItem, removeItem, setQty, menu }}>
      <div className="bg-cream text-olive min-h-screen">
        <div className="grain-overlay" />
        <CategoryNav categories={categories} />
        <main>
          <Hero />
          <Marquee text={t.marquee1} />
          {categories.map((cat) => (
            <MenuSection
              key={cat.id}
              category={cat}
              items={menu[cat.id]}
              onSelect={(item, category) => setSelected({ item, category })}
            />
          ))}
          <Manifesto />
          <Marquee text={t.marquee2} dark slow />
        </main>
        <Footer />
        <Tray />
        <ItemModal
          item={selected?.item}
          category={selected?.category}
          onClose={() => setSelected(null)}
        />
      </div>
    </LangContext.Provider>
  );
}

export default App;
