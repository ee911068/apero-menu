import { motion } from "framer-motion";

const Marquee = ({ text, dark = false, slow = false, className = "" }) => {
  const row = Array(6).fill(text);
  return (
    <div
      data-testid={dark ? "marquee-dark" : "marquee-light"}
      className={`overflow-hidden whitespace-nowrap border-y ${
        dark ? "bg-olive border-cream/20" : "bg-cream border-olive/20"
      } ${className}`}
    >
      <div className={`inline-flex ${slow ? "animate-marquee-slow" : "animate-marquee"}`}>
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0">
            {row.map((t, i) => (
              <span
                key={i}
                className={`font-display text-2xl md:text-4xl py-3 md:py-4 px-4 tracking-tight ${
                  dark
                    ? i % 2 === 0 ? "text-cream" : "text-outline-cream italic"
                    : i % 2 === 0 ? "text-olive" : "text-outline italic"
                }`}
              >
                {t} <span className="text-terra not-italic">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
