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
import SidePicker from "./components/SidePicker";
import { MENU } from "./data/menu";
import { LangContext, UI, CATEGORIES_I18N, MENU_EN } from "./data/i18n";

const SIDE_CATEGORIES = ["burgers", "chicken"];

function App() {
  const [selected, setSelected] = useState(null);
  const [pickerItem, setPickerItem] = useState(null);
  const [lang, setLang] = useState(() => localStorage.getItem("apero-lang") || "es");
  const [cart, setCart] = useState([]);
  const [night] = useState(() => {
    const h = new Date().getHours();
    return h >= 18 || h < 6;
  });
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

  useEffect(() => {
    document.body.style.backgroundColor = night ? "#2F4F3E" : "#F2EFE7";
  }, [night]);

  const addItem = (id, side = null) =>
    setCart((c) => {
      const key = side ? `${id}__${side}` : id;
      const found = c.find((x) => x.key === key);
      return found
        ? c.map((x) => (x.key === key ? { ...x, qty: x.qty + 1 } : x))
        : [...c, { key, id, side, qty: 1 }];
    });
  const removeItem = (key) => setCart((c) => c.filter((x) => x.key !== key));
  const setQty = (key, qty) =>
    setCart((c) =>
      qty <= 0 ? c.filter((x) => x.key !== key) : c.map((x) => (x.key === key ? { ...x, qty } : x))
    );

  const needsSide = (item) => SIDE_CATEGORIES.some((c) => menu[c]?.some((i) => i.id === item.id));

  const requestAdd = (item) => {
    if (needsSide(item)) {
      setSelected(null);
      setPickerItem(item);
    } else {
      addItem(item.id);
    }
  };

  const pickSide = (side) => {
    if (pickerItem) addItem(pickerItem.id, side);
    setPickerItem(null);
  };

  return (
    <LangContext.Provider
      value={{
        lang, setLang, cart, addItem, removeItem, setQty, menu, night,
        requestAdd, pickerItem, pickSide, closePicker: () => setPickerItem(null),
      }}
    >
      <div className={`bg-cream text-olive min-h-screen ${night ? "night" : ""}`}>
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
        <SidePicker />
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
