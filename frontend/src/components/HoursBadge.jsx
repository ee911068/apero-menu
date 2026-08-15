import { useEffect, useState } from "react";
import { useLang, HOURS, HOURS_UI } from "../data/i18n";

const HoursBadge = () => {
  const { lang } = useLang();
  const t = HOURS_UI[lang];
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  const open = now.getHours() >= HOURS.open && now.getHours() < HOURS.close;

  return (
    <div data-testid="hours-badge" className="hidden sm:flex items-center gap-2 shrink-0">
      <span className={`w-2 h-2 rounded-full animate-pulse ${open ? "bg-emerald-600" : "bg-terra"}`} />
      <span className="text-[10px] tracking-[0.15em] uppercase text-olive/70 whitespace-nowrap">
        {open ? t.open : `${t.closed} · ${t.opensAt} ${HOURS.open}:00`}
      </span>
    </div>
  );
};

export default HoursBadge;
