import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Plus } from "lucide-react";
import { waOrderLink } from "../data/menu";
import { useLang, UI, TRAY_UI } from "../data/i18n";

const ItemModal = ({ item, category, onClose }) => {
  const { lang, requestAdd } = useLang();
  const t = UI[lang];
  const tt = TRAY_UI[lang];
  return (
  <AnimatePresence>
    {item && (
      <motion.div
        data-testid="item-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-olive/85 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 80, scale: 0.95, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 80, scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto bg-cream border border-olive grid md:grid-cols-2"
        >
          <button
            data-testid="item-modal-close"
            onClick={onClose}
            className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center bg-olive text-cream hover:bg-terra transition-colors"
            aria-label={t.close}
          >
            <X size={18} />
          </button>

          <div className="relative h-64 md:h-auto md:min-h-[480px] bg-olive">
            {item.image ? (
              <motion.img
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/images/mascot.png" alt="Apero" className="w-40 opacity-90 invert brightness-200" />
              </div>
            )}
            {item.badge && (
              <span className="absolute bottom-4 left-4 bg-terra text-cream text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1.5">
                {item.badge}
              </span>
            )}
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-between gap-8">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-terra mb-3">
                {category?.label} · {t.chapter} {category?.number}
              </p>
              <h3 className="font-display text-4xl md:text-5xl tracking-tighter leading-[0.95] mb-5">{item.name}</h3>
              <p className="text-sm md:text-base font-light text-olive/80 leading-relaxed">{item.description}</p>
              {item.extras && (
                <ul className="mt-6 space-y-2" data-testid="item-modal-extras">
                  {item.extras.map((e) => (
                    <li key={e} className="flex items-center gap-3 text-sm border-b border-olive/15 pb-2">
                      <span className="w-1.5 h-1.5 bg-terra rotate-45" /> {e}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <div className="flex items-end justify-between border-t border-olive/20 pt-6">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-olive/60 mb-1">{t.price}</p>
                  <p className="font-display text-3xl md:text-4xl tracking-tight" data-testid="item-modal-price">{item.price}</p>
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-olive/50 text-right">
                  {t.footerTagline1}<br />{t.footerTagline2}
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <button
                  data-testid="item-modal-add"
                  onClick={() => requestAdd(item)}
                  className="w-full flex items-center justify-center gap-2 bg-olive text-cream py-4 text-xs font-bold tracking-[0.25em] uppercase hover:bg-terra transition-colors"
                >
                  <Plus size={16} /> {tt.add}
                </button>
                <a
                  data-testid="item-modal-whatsapp"
                  href={waOrderLink(item, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-olive/60 hover:text-terra transition-colors"
                >
                  <MessageCircle size={14} /> {tt.only}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
  );
};

export default ItemModal;
