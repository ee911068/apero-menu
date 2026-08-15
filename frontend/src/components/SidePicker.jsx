import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import { useLang, TRAY_UI, SIDE_LABELS, SAUCE_OPTIONS, NOTE_CHIPS } from "../data/i18n";

const SIDES = [
  { id: "papas", image: "/images/papas.jpg" },
  { id: "tostones", image: "/images/tostones.jpg" },
];

const SidePicker = () => {
  const { lang, pickerItem, completePick, closePicker } = useLang();
  const t = TRAY_UI[lang];
  const [step, setStep] = useState(0);
  const [side, setSide] = useState(null);
  const [note, setNote] = useState("");

  useEffect(() => {
    setStep(0);
    setSide(null);
    setNote("");
  }, [pickerItem]);

  const current = pickerItem?.steps[step];
  const sauces = pickerItem ? SAUCE_OPTIONS[pickerItem.id] || [] : [];
  const titles = { side: t.pickSide, sauce: t.pickSauce, note: t.noteTitle };

  const advance = (chosenSide) => {
    setSide(chosenSide);
    if (step + 1 < pickerItem.steps.length) setStep(step + 1);
    else completePick(pickerItem.id, chosenSide, null, null);
  };

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

            <div className="flex items-center gap-3 mb-2">
              {step > 0 && (
                <button
                  data-testid="picker-back"
                  onClick={() => setStep(step - 1)}
                  aria-label="Volver"
                  className="w-8 h-8 flex items-center justify-center border border-olive/20 hover:bg-olive hover:text-cream transition-colors"
                >
                  <ArrowLeft size={14} />
                </button>
              )}
              <p className="text-[10px] tracking-[0.3em] uppercase text-terra">{pickerItem.name}</p>
            </div>
            <h3 className="font-display text-3xl md:text-4xl tracking-tighter mb-8">{titles[current]}</h3>

            {current === "side" && (
              <div className="grid grid-cols-2 gap-4">
                {SIDES.map((s) => (
                  <button
                    key={s.id}
                    data-testid={`side-option-${s.id}`}
                    onClick={() => advance(s.id)}
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
            )}

            {current === "sauce" && (
              <div className="space-y-2">
                {sauces.map((s) => (
                  <button
                    key={s}
                    data-testid={`sauce-option-${s.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => completePick(pickerItem.id, side, s, null)}
                    className="w-full flex items-center justify-between border border-olive/20 px-5 py-4 text-sm font-bold tracking-[0.12em] uppercase hover:bg-olive hover:text-cream transition-colors"
                  >
                    {s}
                    <span className="w-1.5 h-1.5 bg-terra rotate-45 shrink-0" />
                  </button>
                ))}
              </div>
            )}

            {current === "note" && (
              <div>
                <textarea
                  data-testid="note-input"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder={t.notePlaceholder}
                  rows={3}
                  className="w-full bg-transparent border border-olive/25 p-4 text-sm focus:outline-none focus:border-terra resize-none"
                />
                <div className="flex flex-wrap gap-2 mt-3">
                  {NOTE_CHIPS[lang].map((c, i) => (
                    <button
                      key={c}
                      data-testid={`note-chip-${i}`}
                      onClick={() => setNote(c)}
                      className="text-[10px] font-bold tracking-[0.1em] uppercase border border-olive/25 px-3 py-1.5 hover:border-terra hover:text-terra transition-colors"
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <button
                  data-testid="note-confirm"
                  onClick={() => completePick(pickerItem.id, side, null, note.trim() || null)}
                  className="mt-6 w-full flex items-center justify-center bg-olive text-cream py-4 text-xs font-bold tracking-[0.25em] uppercase hover:bg-terra transition-colors"
                >
                  {t.confirm}
                </button>
                <button
                  data-testid="note-skip"
                  onClick={() => completePick(pickerItem.id, side, null, null)}
                  className="mt-3 w-full text-[10px] tracking-[0.25em] uppercase text-olive/50 hover:text-olive transition-colors py-1"
                >
                  {t.noteSkip}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SidePicker;
