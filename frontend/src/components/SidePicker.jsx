import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLang, TRAY_UI, SIDE_LABELS } from "../data/i18n";

const SIDES = [
  { id: "papas", image: "/images/papas.jpg" },
  { id: "tostones", image: "/images/tostones.jpg" },
];

const SidePicker = () => {
  const { lang, pickerItem, pickSide, closePicker } = useLang();
  const t = TRAY_UI[lang];

  return (
    <AnimatePresence>
      {pickerItem && (
        <motion.div
          data-testid="side-picker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-olive/85 backdrop-blur-sm"
          onClick={closePicker}
        >
          <motion.div
            initial={{ y: 60, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 60, scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-cream border border-olive p-8 md:p-10"
          >
            <button
              data-testid="side-picker-close"
              onClick={closePicker}
              aria-label="Cerrar"
              className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-olive text-cream hover:bg-terra transition-colors"
            >
              <X size={16} />
            </button>
            <p className="text-[10px] tracking-[0.3em] uppercase text-terra mb-2">{pickerItem.name}</p>
            <h3 className="font-display text-3xl md:text-4xl tracking-tighter mb-8">{t.pickSide}</h3>
            <div className="grid grid-cols-2 gap-4">
              {SIDES.map((s) => (
                <button
                  key={s.id}
                  data-testid={`side-option-${s.id}`}
                  onClick={() => pickSide(s.id)}
                  className="group border border-olive/20 overflow-hidden hover:border-terra transition-colors"
                >
                  <div className="h-28 md:h-36 overflow-hidden">
                    <img
                      src={s.image}
                      alt={SIDE_LABELS[lang][s.id]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <p className="py-3 text-center text-xs font-bold tracking-[0.2em] uppercase group-hover:text-terra transition-colors">
                    {SIDE_LABELS[lang][s.id]}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SidePicker;
