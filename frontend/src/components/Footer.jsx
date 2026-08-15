import { Instagram, Phone, MapPin } from "lucide-react";
import { useLang, UI } from "../data/i18n";

const Footer = () => {
  const { lang } = useLang();
  const t = UI[lang];
  return (
  <footer data-testid="footer" className="bg-olive text-cream border-t border-cream/15">
    <div className="px-6 md:px-14 lg:px-24 py-16 md:py-24 grid md:grid-cols-3 gap-12">
      <div>
        <img src="/images/logo-white.png" alt="APERO Café Bar & Tapas" className="h-12 md:h-14 w-auto mb-6" />
        <p className="text-sm font-light text-cream/70 max-w-xs">
          {t.footerAbout}
        </p>
      </div>
      <div>
        <p className="text-[10px] tracking-[0.3em] uppercase text-cream/50 mb-5">{t.footerFind}</p>
        <ul className="space-y-4 text-sm">
          <li>
            <a
              data-testid="footer-instagram"
              href="https://instagram.com/aperocafebar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-terra transition-colors group"
            >
              <Instagram size={16} className="text-terra" /> @aperocafebar
              <span className="h-[1px] flex-1 bg-cream/10 group-hover:bg-terra/40 transition-colors" />
            </a>
          </li>
          <li>
            <a
              data-testid="footer-whatsapp"
              href="https://wa.me/18296406701"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-terra transition-colors group"
            >
              <Phone size={16} className="text-terra" /> 829-640-6701
              <span className="h-[1px] flex-1 bg-cream/10 group-hover:bg-terra/40 transition-colors" />
            </a>
          </li>
          <li className="flex items-center gap-3 text-cream/70">
            <MapPin size={16} className="text-terra" /> {t.footerDelivery}
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-between gap-8">
        <p className="font-display italic text-3xl md:text-4xl leading-tight">
          {t.footerTagline1}<br />{t.footerTagline2}
        </p>
        <p className="text-[10px] tracking-[0.25em] uppercase text-cream/40">
          © 2025 APERO Café Bar &amp; Tapas
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
