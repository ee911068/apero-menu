import { createContext, useContext } from "react";

export const LangContext = createContext({ lang: "es", setLang: () => {} });
export const useLang = () => useContext(LangContext);

export const UI = {
  es: {
    kicker: "Café Bar & Tapas — Menú digital",
    heroLines: ["BUENA", "COMIDA,"],
    heroOutline: "BUENOS",
    heroAccent: "momentos.",
    heroBadge: "TE ESPERAN EN APERO • ",
    heroDesc: "Experiencias gastronómicas modernas en un ambiente urbano, minimalista y acogedor. Desliza y descubre el menú.",
    scroll: "Desliza",
    chapter: "Capítulo",
    price: "Precio",
    order: "Pedir",
    orderWhats: "Pedir por WhatsApp",
    close: "Cerrar",
    manifestoKicker: "Manifiesto — Personalidad de marca",
    manifestoCaption: "Te esperan en Apero.",
    marquee1: "BUENA COMIDA, BUENOS MOMENTOS",
    marquee2: "TE ESPERAN EN APERO",
    footerAbout: "Más que un lugar para comer o tomar café: un punto de encuentro donde la buena comida, el diseño y la música crean momentos únicos.",
    footerFind: "Encuéntranos",
    footerDelivery: "Delivery & Pick up — Pide y retira",
    footerTagline1: "Buena comida,",
    footerTagline2: "buenos momentos.",
  },
  en: {
    kicker: "Café Bar & Tapas — Digital menu",
    heroLines: ["GOOD", "FOOD,"],
    heroOutline: "GOOD",
    heroAccent: "moments.",
    heroBadge: "TE ESPERAN EN APERO • ",
    heroDesc: "Modern dining experiences in an urban, minimalist and cozy setting. Scroll and discover the menu.",
    scroll: "Scroll",
    chapter: "Chapter",
    price: "Price",
    order: "Order",
    orderWhats: "Order on WhatsApp",
    close: "Close",
    manifestoKicker: "Manifesto — Brand personality",
    manifestoCaption: "See you at Apero.",
    marquee1: "GOOD FOOD, GOOD MOMENTS",
    marquee2: "SEE YOU AT APERO",
    footerAbout: "More than a place to eat or grab a coffee: a meeting point where good food, design and music create unique moments.",
    footerFind: "Find us",
    footerDelivery: "Delivery & Pick up — Order and collect",
    footerTagline1: "Good food,",
    footerTagline2: "good moments.",
  },
};

export const CATEGORIES_I18N = {
  es: [
    { id: "burgers", label: "Burgers", number: "01" },
    { id: "chicken", label: "Chicken", number: "02" },
    { id: "salsas", label: "Salsas", number: "03" },
    { id: "guarniciones", label: "Guarniciones", number: "04" },
    { id: "bebidas", label: "Bebidas", number: "05" },
    { id: "ninos", label: "Niños", number: "06" },
  ],
  en: [
    { id: "burgers", label: "Burgers", number: "01" },
    { id: "chicken", label: "Chicken", number: "02" },
    { id: "salsas", label: "Sauces", number: "03" },
    { id: "guarniciones", label: "Sides", number: "04" },
    { id: "bebidas", label: "Drinks", number: "05" },
    { id: "ninos", label: "Kids", number: "06" },
  ],
};

export const MANIFESTO_I18N = {
  es: [
    { n: "01", word: "MODERNA", copy: "Un menú que se siente de hoy: directo, fresco y sin pretensiones." },
    { n: "02", word: "URBANA", copy: "Sabor de barra y calle, servido con estética de galería." },
    { n: "03", word: "DIVERTIDA", copy: "Porque comer bien también es un juego: salsas, crunch y buena vibra." },
    { n: "04", word: "MINIMALISTA", copy: "Pocos elementos, muchos matices. Lo esencial, bien hecho." },
  ],
  en: [
    { n: "01", word: "MODERN", copy: "A menu that feels like today: direct, fresh and unpretentious." },
    { n: "02", word: "URBAN", copy: "Bar-and-street flavor served with gallery aesthetics." },
    { n: "03", word: "FUN", copy: "Because eating well is also a game: sauces, crunch and good vibes." },
    { n: "04", word: "MINIMAL", copy: "Few elements, many nuances. The essentials, done well." },
  ],
};

export const MENU_EN = {
  burgers: [
    {
      id: "la-apera",
      name: "La Apera",
      price: "RD$ 400",
      description: "The house signature: crispy chicken breast, Apero sauce, caramelized touches and an artisan brioche bun.",
      image: "/images/la-apera.jpg",
      badge: "The favorite",
    },
  ],
  chicken: [
    {
      id: "crispy-tenders",
      name: "Crispy Tenders",
      price: "RD$ 450",
      description: "5 chicken strips + fries or tostones + sauce of your choice.",
      image: "/images/crispy-tenders.jpg",
    },
    {
      id: "alitas-bbq",
      name: "BBQ Wings",
      price: "RD$ 400",
      description: "6 chicken wings + fries or tostones + sauce of your choice.",
      image: "/images/alitas-bbq.jpg",
    },
    {
      id: "alitas-buffalo",
      name: "Buffalo Wings",
      price: "RD$ 400",
      description: "6 chicken wings + fries or tostones + sauce of your choice.",
      image: "/images/alitas-buffalo.jpg",
      badge: "Spicy",
    },
  ],
  salsas: [
    {
      id: "nuestras-salsas",
      name: "Our Sauces",
      price: "RD$ 25 / 40 / 75",
      description: "Made to go with your best moments. Small RD$ 25 · Medium RD$ 40 · Large RD$ 75.",
      image: "/images/salsas.jpg",
      extras: ["Buffalo · spicy!", "Honey Spicy", "Garlic Cilantro Special", "Mustard BBQ", "Spicy Mayo"],
    },
  ],
  guarniciones: [
    {
      id: "tostones",
      name: "Tostones",
      price: "RD$ 75",
      description: "Green plantain, pressed and fried — golden outside, soft inside.",
      image: "/images/tostones.jpg",
    },
    {
      id: "papas",
      name: "Fries",
      price: "RD$ 100",
      description: "Classic-cut fries, crispy and seasoned with the house blend.",
      image: "/images/papas.jpg",
    },
  ],
  bebidas: [
    {
      id: "jugos-naturales",
      name: "Fresh Juices",
      price: "RD$ 100",
      description: "Fresh fruit of the day, made to order. Ask for the available flavors.",
      image: "/images/jugos.jpg",
    },
    {
      id: "refrescos",
      name: "Soft Drinks 16 oz",
      price: "RD$ 50",
      description: "Ice cold, as they should be — the perfect companion to our dishes.",
      image: "/images/refrescos.jpg",
    },
  ],
  ninos: [
    {
      id: "chicken-pops",
      name: "Chicken Pops",
      price: "RD$ 250",
      description: "Kids' portion: crispy chicken bites with fries and a mild sauce.",
      image: "/images/chicken-pops.jpg",
      badge: "Kids",
    },
  ],
};

export const TRAY_UI = {
  es: {
    add: "Añadir",
    tray: "Tu pedido",
    total: "Total",
    send: "Enviar pedido por WhatsApp",
    keep: "Seguir explorando",
    only: "Pedir solo esto por WhatsApp",
    pickSide: "Elige tu guarnición",
    pickSauce: "Elige tu salsa",
    noteTitle: "¿Alguna nota para la cocina?",
    notePlaceholder: "Ej.: sin pepinillos…",
    noteSkip: "Continuar sin nota",
    confirm: "Añadir al pedido",
  },
  en: {
    add: "Add",
    tray: "Your order",
    total: "Total",
    send: "Send order via WhatsApp",
    keep: "Keep exploring",
    only: "Order just this via WhatsApp",
    pickSide: "Choose your side",
    pickSauce: "Choose your sauce",
    noteTitle: "Any note for the kitchen?",
    notePlaceholder: "E.g.: no pickles…",
    noteSkip: "Continue without note",
    confirm: "Add to order",
  },
};

export const SIDE_LABELS = {
  es: { papas: "Papas", tostones: "Tostones" },
  en: { papas: "Fries", tostones: "Tostones" },
};

export const SAUCE_OPTIONS = {
  "alitas-bbq": ["Buffalo", "BBQ"],
  "alitas-buffalo": ["Buffalo", "BBQ"],
  "crispy-tenders": ["Honey Spicy Mayo", "Ranch Apero", "Miel Picante", "Salsa de Ajo y Cilantro"],
};

export const NOTE_CHIPS = {
  es: ["Sin mermelada de cebolla y tocino", "Sin pepinillos", "Sin cole slaw"],
  en: ["No onion-bacon jam", "No pickles", "No coleslaw"],
};

export const HOURS = {
  0: { open: 12, close: 25 },
  5: { open: 18, close: 24 },
  6: { open: 12, close: 25 },
};

export const HOURS_UI = {
  es: { open: "Abierto ahora", closed: "Cerrado", opensAt: "abre", days: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"] },
  en: { open: "Open now", closed: "Closed", opensAt: "opens", days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] },
};

const WA_NUMBER_URL = "https://wa.me/18296406701";

export const priceValue = (price) => Number(String(price).match(/\d+/)?.[0] || 0);

export const waCartLink = (rows, lang = "es") => {
  const lines = rows.map(({ item, qty, side, sauce, note }) => {
    const opts = [side, sauce].filter(Boolean).join(" · ");
    let line = `• ${qty}× ${item.name}${opts ? ` (${opts})` : ""} — ${item.price}`;
    if (note) line += `\n  ${lang === "es" ? "Nota" : "Note"}: ${note}`;
    return line;
  });
  const total = rows.reduce((s, { item, qty }) => s + priceValue(item.price) * qty, 0);
  const msg =
    lang === "es"
      ? `Hola APERO, quiero pedir:\n${lines.join("\n")}\nTotal: RD$ ${total}. ¡Gracias!`
      : `Hi APERO, I'd like to order:\n${lines.join("\n")}\nTotal: RD$ ${total}. Thanks!`;
  return `${WA_NUMBER_URL}?text=${encodeURIComponent(msg)}`;
};
