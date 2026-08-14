import { useEffect, useState } from "react";
import Lenis from "lenis";
import CategoryNav from "./components/CategoryNav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import MenuSection from "./components/MenuSection";
import ItemModal from "./components/ItemModal";
import Manifesto from "./components/Manifesto";
import Footer from "./components/Footer";
import { CATEGORIES, MENU } from "./data/menu";

function App() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); window.__lenis = null; };
  }, []);

  useEffect(() => {
    if (selected) window.__lenis?.stop();
    else window.__lenis?.start();
  }, [selected]);

  return (
    <div className="bg-cream text-olive min-h-screen">
      <div className="grain-overlay" />
      <CategoryNav />
      <main>
        <Hero />
        <Marquee text="BUENA COMIDA, BUENOS MOMENTOS" />
        {CATEGORIES.map((cat) => (
          <MenuSection
            key={cat.id}
            category={cat}
            items={MENU[cat.id]}
            onSelect={(item, category) => setSelected({ item, category })}
          />
        ))}
        <Manifesto />
        <Marquee text="TE ESPERAN EN APERO" dark slow />
      </main>
      <Footer />
      <ItemModal
        item={selected?.item}
        category={selected?.category}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}

export default App;
