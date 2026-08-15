import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLang, UI } from "../data/i18n";
import PhotoStrip from "./PhotoStrip";

const line = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: "0%",
    transition: { delay: 0.35 + i * 0.13, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  const { lang } = useLang();
  const t = UI[lang];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mascotY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-cream pt-24"
    >
      <div className="absolute top-24 right-6 md:right-16 z-10 animate-spin-slow hidden sm:block">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <defs>
            <path id="circlePath" d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" />
          </defs>
          <text className="fill-olive" style={{ fontSize: "11.5px", letterSpacing: "3px", fontFamily: "Montserrat" }}>
            <textPath href="#circlePath">{t.heroBadge}</textPath>
          </text>
          <circle cx="60" cy="60" r="5" className="fill-terra" />
        </svg>
      </div>

      <motion.div style={{ y: textY }} className="relative z-10 px-6 md:px-14 lg:px-24 mt-6 md:mt-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-xs md:text-sm tracking-[0.35em] uppercase mb-6 text-olive/70"
          data-testid="hero-kicker"
        >
          {t.kicker}
        </motion.p>

        <h1 className="font-display tracking-tighter leading-[0.9] text-[15vw] md:text-[11vw]">
          {t.heroLines.map((txt, i) => (
            <span key={txt} className="block overflow-hidden">
              <motion.span custom={i} variants={line} initial="hidden" animate="show" className="block">
                {txt}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <motion.span custom={2} variants={line} initial="hidden" animate="show" className="block">
              <span className="text-outline">{t.heroOutline}</span>{" "}
              <em className="text-terra">{t.heroAccent}</em>
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-8 max-w-md text-sm md:text-base font-light text-olive/80"
          data-testid="hero-description"
        >
          {t.heroDesc}
        </motion.p>
      </motion.div>

      <PhotoStrip />

      <motion.div
        style={{ y: mascotY }}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute bottom-32 right-2 md:right-24 md:bottom-48 w-36 md:w-56 z-0 hidden md:block"
      >
        <img src="/images/mascot.png" alt="Ilustración Apero" className="w-full animate-float" data-testid="hero-mascot" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="relative z-10 flex items-center justify-between px-6 md:px-14 lg:px-24 pb-6"
      >
        <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase" data-testid="hero-scroll-hint">
          <ArrowDown size={14} className="animate-bounce" /> {t.scroll}
        </div>
        <p className="text-xs tracking-[0.25em] uppercase text-olive/60 hidden md:block">@aperocafebar</p>
      </motion.div>
    </section>
  );
};

export default Hero;
