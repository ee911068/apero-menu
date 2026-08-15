import { useEffect, useState } from "react";
import { useLang, HOURS, HOURS_UI } from "../data/i18n";

const isOpenNow = (d) => {
  const h = d.getHours() + d.getMinutes() / 60;
  const today = HOURS[d.getDay()];
  if (today && h >= today.open && h < today.close) return true;
  const yesterday = HOURS[(d.getDay() + 6) % 7];
  return Boolean(yesterday && yesterday.close > 24 && h < yesterday.close - 24);
};

const nextOpening = (d) => {
  const h = d.getHours() + d.getMinutes() / 60;
  for (let i = 0; i < 8; i++) {
    const day = (d.getDay() + i) % 7;
    const w = HOURS[day];
    if (!w) continue;
    if (i === 0 && h >= w.open) continue;
    return { day, hour: w.open };
  }
  return null;
};

const fmtHour = (h) => `${h % 12 || 12}:00 ${h >= 12 && h < 24 ? "pm" : "am"}`;

const HoursBadge = () => {
  const { lang } = useLang();
  const t = HOURS_UI[lang];
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  const open = isOpenNow(now);
  const next = nextOpening(now);

  return (
    <div data-testid="hours-badge" className="hidden sm:flex items-center gap-2 shrink-0">
      <span className={`w-2 h-2 rounded-full animate-pulse ${open ? "bg-emerald-600" : "bg-terra"}`} />
      <span className="text-[10px] tracking-[0.15em] uppercase text-olive/70 whitespace-nowrap">
        {open
          ? t.open
          : next
            ? `${t.closed} · ${t.opensAt} ${t.days[next.day]} ${fmtHour(next.hour)}`
            : t.closed}
      </span>
    </div>
  );
};

export default HoursBadge;
