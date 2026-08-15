import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useLang, UI, TRAY_UI } from "../data/i18n";

const MenuSection = ({ category, items, onSelect }) => {
  const { lang, requestAdd } = useLang();
  const t = UI[lang];
  const tt = TRAY_UI[lang];
  const ref = useRef(null);
  const [hovered, setHovered] = useState(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 22 });
  const sy = useSpring(my, { stiffness: 180, damping: 22 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <section
      id={category.id}
      ref={ref}
      onMouseMove={onMove}
      data-testid={`section-${category.id}`}
      className="relative px-6 md:px-14 lg:px-24 py-16 md:py-24 border-t border-olive/15"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-end gap-4 md:gap-8 mb-10 md:mb-16"
      >
        <span className="font-display text-6xl md:text-8xl text-outline leading-none">{category.number}</span>
        <div>
          <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-terra mb-1">{t.chapter} {category.number}</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-none">{category.label}</h2>
        </div>
      </motion.div>

      <div className="relative">
        <AnimatePresence>
          {hovered?.image && (
            <motion.img
              key={hovered.id}
              src={hovered.image}
              alt={hovered.name}
              initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              exit={{ opacity: 0, scale: 0.85, rotate: 6 }}
              transition={{ duration: 0.3 }}
              style={{ left: sx, top: sy }}
              className="pointer-events-none absolute z-20 hidden lg:block w-64 h-80 object-cover -translate-x-1/2 -translate-y-1/2 border-4 border-cream shadow-2xl"
            />
          )}
        </AnimatePresence>

        {items.map((item, i) => (
          <motion.div
            key={item.id}
            data-testid={`menu-item-${item.id}`}
            role="button"
            tabIndex={0}
            onClick={() => onSelect(item, category)}
            onKeyDown={(e) => e.key === "Enter" && onSelect(item, category)}
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            className="group relative w-full text-left border-b border-olive/20 overflow-hidden cursor-pointer"
          >
            <span className="absolute inset-0 bg-olive origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative z-10 grid grid-cols-[auto_1fr_auto] md:grid-cols-[64px_1fr_1fr_auto] items-center gap-4 md:gap-8 py-6 md:py-8 px-2 md:px-4">
              <span className="text-xs text-olive/50 group-hover:text-cream/60 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-2xl md:text-4xl tracking-tight group-hover:text-cream transition-colors flex items-center gap-3 flex-wrap">
                {item.name}
                {item.badge && (
                  <span className="text-[9px] md:text-[10px] font-sans font-bold tracking-[0.2em] uppercase bg-terra text-cream px-2 py-1 group-hover:bg-cream group-hover:text-olive transition-colors">
                    {item.badge}
                  </span>
                )}
              </span>
              <span className="hidden md:block text-sm font-light text-olive/70 group-hover:text-cream/80 transition-colors line-clamp-2">
                {item.description}
              </span>
              <span className="flex items-center gap-3 md:gap-4 font-bold text-sm md:text-lg tracking-wide group-hover:text-cream transition-colors">
                {item.price}
                <button
                  data-testid={`add-to-tray-${item.id}`}
                  onClick={(e) => { e.stopPropagation(); requestAdd(item); }}
                  aria-label={lang === "es" ? `Añadir ${item.name} al pedido` : `Add ${item.name} to order`}
                  className="flex items-center gap-1.5 bg-terra text-cream text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1.5 md:px-3 md:py-2 hover:bg-cream hover:text-olive transition-colors"
                >
                  <Plus size={14} /> <span className="hidden sm:inline">{tt.add}</span>
                </button>
                <ArrowUpRight size={18} className="hidden md:block opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-terra" />
              </span>
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
