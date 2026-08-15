import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X, Minus, Plus, Trash2, MessageCircle, MapPin, Bike } from "lucide-react";
import { useLang, TRAY_UI, SIDE_LABELS, waCartLink, priceValue } from "../data/i18n";

const Tray = () => {
  const { lang, cart, menu, setQty, removeItem } = useLang();
  const t = TRAY_UI[lang];
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(() => localStorage.getItem("apero-name") || "");
  const [mode, setMode] = useState("pickup");
  const [address, setAddress] = useState(() => localStorage.getItem("apero-address") || "");

  const onName = (e) => {
    setName(e.target.value);
    localStorage.setItem("apero-name", e.target.value);
  };
  const onAddress = (e) => {
    setAddress(e.target.value);
    localStorage.setItem("apero-address", e.target.value);
  };

  const allItems = Object.values(menu).flat();
  const rows = cart
    .map((c) => ({
      ...c,
      item: allItems.find((i) => i.id === c.id),
      sideLabel: c.side ? SIDE_LABELS[lang][c.side] : null,
    }))
    .filter((r) => r.item);
  const count = rows.reduce((s, r) => s + r.qty, 0);
  const total = rows.reduce((s, r) => s + priceValue(r.item.price) * r.qty, 0);

  return (
    <>
      <AnimatePresence>
        {rows.length > 0 && !open && (
          <motion.button
            key="pill"
            data-testid="tray-pill"
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 90, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[80] flex items-center gap-4 bg-olive text-cream pl-5 pr-6 py-3.5 shadow-2xl border border-cream/20"
          >
            <span className="relative">
              <ShoppingBag size={18} />
              <motion.span
                key={count}
                initial={{ scale: 0.4 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 min-w-[18px] min-h-[18px] flex items-center justify-center bg-terra text-cream text-[10px] font-bold rounded-full"
              >
                {count}
              </motion.span>
            </span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase">{t.tray}</span>
            <span className="font-display text-lg" data-testid="tray-total">RD$ {total}</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="tray-sheet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-end justify-center bg-olive/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 240, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full md:max-w-xl bg-cream text-olive border-t border-olive max-h-[80vh] flex flex-col"
            >
              <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-olive/15">
                <h3 className="font-display text-2xl md:text-3xl tracking-tight">{t.tray}</h3>
                <button
                  data-testid="tray-close"
                  onClick={() => setOpen(false)}
                  aria-label={t.keep}
                  className="w-9 h-9 flex items-center justify-center bg-olive text-cream hover:bg-terra transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="overflow-y-auto px-6 md:px-8">
                {rows.map(({ key, item, qty, sideLabel, sauce, note }) => (
                  <div key={key} data-testid={`tray-item-${key}`} className="flex items-center gap-4 py-4 border-b border-olive/10">
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-xl tracking-tight truncate">
                        {item.name}
                        {(sideLabel || sauce) && (
                          <span className="text-terra text-base"> · {[sideLabel, sauce].filter(Boolean).join(" · ")}</span>
                        )}
                      </p>
                      <p className="text-xs text-olive/60">{item.price}</p>
                      {note && <p className="text-xs italic text-olive/60 mt-1">“{note}”</p>}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        data-testid={`qty-minus-${key}`}
                        onClick={() => setQty(key, qty - 1)}
                        aria-label="Menos"
                        className="w-8 h-8 flex items-center justify-center border border-olive/30 hover:bg-olive hover:text-cream transition-colors"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="w-6 text-center text-sm font-bold">{qty}</span>
                      <button
                        data-testid={`qty-plus-${key}`}
                        onClick={() => setQty(key, qty + 1)}
                        aria-label="Más"
                        className="w-8 h-8 flex items-center justify-center border border-olive/30 hover:bg-olive hover:text-cream transition-colors"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                    <span className="w-20 text-right font-bold text-sm">RD$ {priceValue(item.price) * qty}</span>
                    <button
                      data-testid={`tray-remove-${key}`}
                      onClick={() => removeItem(key)}
                      aria-label="Quitar"
                      className="text-olive/40 hover:text-terra transition-colors"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="px-6 md:px-8 py-5 border-t border-olive/15 space-y-4">
                <input
                  data-testid="tray-customer-name"
                  value={name}
                  onChange={onName}
                  placeholder={t.namePlaceholder}
                  className="w-full bg-transparent border border-olive/25 px-4 py-3 text-sm focus:outline-none focus:border-terra"
                />
                <div className="grid grid-cols-2 gap-2" data-testid="tray-mode-picker">
                  {["pickup", "delivery"].map((m) => (
                    <button
                      key={m}
                      data-testid={`tray-mode-${m}`}
                      onClick={() => setMode(m)}
                      className={`flex items-center justify-center gap-2 py-3 text-[10px] font-bold tracking-[0.2em] uppercase border transition-colors ${
                        mode === m
                          ? "bg-olive text-cream border-olive"
                          : "border-olive/25 text-olive/60 hover:border-olive"
                      }`}
                    >
                      {m === "pickup" ? <MapPin size={13} /> : <Bike size={13} />}
                      {m === "pickup" ? t.pickup : t.delivery}
                    </button>
                  ))}
                </div>
                {mode === "delivery" && (
                  <textarea
                    data-testid="tray-address"
                    value={address}
                    onChange={onAddress}
                    placeholder={t.addressPlaceholder}
                    rows={2}
                    className="w-full bg-transparent border border-olive/25 px-4 py-3 text-sm focus:outline-none focus:border-terra resize-none"
                  />
                )}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-olive/60">{t.total}</span>
                  <span className="font-display text-3xl tracking-tight" data-testid="tray-sheet-total">RD$ {total}</span>
                </div>
                <a
                  data-testid="tray-send-whatsapp"
                  href={waCartLink(rows.map((r) => ({ item: r.item, qty: r.qty, side: r.sideLabel, sauce: r.sauce, note: r.note })), lang, { name: name.trim(), mode, address: address.trim() })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-terra text-cream py-4 text-xs font-bold tracking-[0.25em] uppercase hover:bg-olive transition-colors"
                >
                  <MessageCircle size={16} /> {t.send}
                </a>
                <button
                  data-testid="tray-keep"
                  onClick={() => setOpen(false)}
                  className="w-full text-[10px] tracking-[0.25em] uppercase text-olive/50 hover:text-olive transition-colors py-1"
                >
                  {t.keep}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Tray;
