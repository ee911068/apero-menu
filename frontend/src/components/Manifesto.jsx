import { motion } from "framer-motion";
import { useLang, UI, MANIFESTO_I18N } from "../data/i18n";

const Manifesto = () => {
  const { lang } = useLang();
  const t = UI[lang];
  const chapters = MANIFESTO_I18N[lang];
  return (
  <section data-testid="manifesto-section" className="bg-olive text-cream px-6 md:px-14 lg:px-24 py-20 md:py-32">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-cream/60 mb-12"
    >
      {t.manifestoKicker}
    </motion.p>
    <div>
      {chapters.map((c, i) => (
        <motion.div
          key={c.n}
          data-testid={`manifesto-chapter-${c.n}`}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
          className="group grid md:grid-cols-[120px_1fr_1fr] items-baseline gap-3 md:gap-10 py-8 md:py-10 border-t border-cream/15 last:border-b"
        >
          <span className="font-display text-outline-cream text-3xl md:text-5xl">{c.n}</span>
          <h3 className="font-display text-4xl md:text-6xl tracking-tighter group-hover:italic group-hover:text-terra transition-all duration-300 group-hover:translate-x-3">
            {c.word}
          </h3>
          <p className="text-sm font-light text-cream/70 max-w-sm">{c.copy}</p>
        </motion.div>
      ))}
    </div>
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-16 md:mt-24 relative overflow-hidden"
    >
      <img src="/images/alitas-bbq.jpg" alt="Alitas BBQ Apero" className="w-full h-64 md:h-96 object-cover" />
      <p className="absolute bottom-4 left-4 md:bottom-8 md:left-8 font-display italic text-2xl md:text-4xl text-cream">
        {t.manifestoCaption}
      </p>
    </motion.div>
  </section>
  );
};

export default Manifesto;
