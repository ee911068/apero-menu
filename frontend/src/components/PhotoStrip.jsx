import { motion } from "framer-motion";

const PHOTOS = [
  "/images/la-apera.jpg",
  "/images/alitas-bbq.jpg",
  "/images/crispy-tenders.jpg",
  "/images/jugos.jpg",
  "/images/alitas-buffalo.jpg",
  "/images/tostones.jpg",
  "/images/chicken-pops.jpg",
  "/images/salsas.jpg",
  "/images/papas.jpg",
  "/images/refrescos.jpg",
];

const PhotoStrip = () => (
  <motion.div
    data-testid="hero-photo-strip"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    className="relative z-10 overflow-hidden py-3 -rotate-1"
  >
    <div className="flex w-max animate-marquee" style={{ animationDuration: "70s" }}>
      {[0, 1].map((half) => (
        <div key={half} className="flex shrink-0">
          {PHOTOS.map((p, i) => (
            <div
              key={`${p}-${i}`}
              className={`mx-2 md:mx-3 w-32 md:w-48 h-20 md:h-32 overflow-hidden border-2 border-olive/15 bg-olive/5 ${
                i % 2 === 0 ? "rotate-2" : "-rotate-2"
              }`}
            >
              <img
                src={p}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover animate-kenburns"
                style={{ animationDelay: `${i * 1.4}s` }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  </motion.div>
);

export default PhotoStrip;
