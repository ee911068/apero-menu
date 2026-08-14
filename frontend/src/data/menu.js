export const CATEGORIES = [
  { id: "burgers", label: "Burgers", number: "01" },
  { id: "chicken", label: "Chicken", number: "02" },
  { id: "salsas", label: "Salsas", number: "03" },
  { id: "guarniciones", label: "Guarniciones", number: "04" },
  { id: "bebidas", label: "Bebidas", number: "05" },
  { id: "ninos", label: "Niños", number: "06" },
];

export const MENU = {
  burgers: [
    {
      id: "la-apera",
      name: "La Apera",
      price: "RD$ 400",
      description: "La insignia de la casa: pechuga crispy, salsa Apero, toques caramelizados y pan brioche artesanal.",
      image: "/images/la-apera.jpg",
      badge: "La favorita",
    },
  ],
  chicken: [
    {
      id: "crispy-tenders",
      name: "Crispy Tenders",
      price: "RD$ 450",
      description: "Tiras de pollo empanizadas a mano, extra crujientes, servidas con tostones y dos salsas de la casa.",
      image: "/images/crispy-tenders.jpg",
    },
    {
      id: "alitas-bbq",
      name: "Alitas BBQ",
      price: "RD$ 400",
      description: "Alitas bañadas en nuestra BBQ ahumada, acompañadas de tostones y aderezo de la casa.",
      image: "/images/alitas-bbq.jpg",
    },
    {
      id: "alitas-buffalo",
      name: "Alitas Buffalo",
      price: "RD$ 400",
      description: "El clásico picante de la barra: salsa buffalo, papas y aderezo fresco para bajar la llama.",
      image: "/images/alitas-buffalo.jpg",
      badge: "Picante",
    },
  ],
  salsas: [
    {
      id: "nuestras-salsas",
      name: "Nuestras Salsas",
      price: "RD$ 25 / 40 / 75",
      description: "Hechas para acompañar tus mejores momentos. Pequeña RD$ 25 · Mediana RD$ 40 · Grande RD$ 75.",
      image: "/images/salsas.jpg",
      extras: ["Buffalo · ¡picante!", "Honey Spicy", "Especial de Ajo Cilantro", "Mustard BBQ", "Mayo Picante"],
    },
  ],
  guarniciones: [
    {
      id: "tostones",
      name: "Tostones",
      price: "RD$ 75",
      description: "Plátano verde prensado y frito, dorado por fuera y suave por dentro.",
    },
    {
      id: "papas",
      name: "Papas",
      price: "RD$ 100",
      description: "Papas fritas de corte clásico, crocantes y sazonadas con la mezcla de la casa.",
    },
  ],
  bebidas: [
    {
      id: "jugos-naturales",
      name: "Jugos Naturales",
      price: "RD$ 100",
      description: "Fruta fresca del día, preparada al momento. Pregunta por los sabores disponibles.",
    },
    {
      id: "refrescos",
      name: "Refrescos 16 oz",
      price: "RD$ 50",
      description: "Bien fríos, como deben ser. El acompañante perfecto de cualquier tapa.",
    },
  ],
  ninos: [
    {
      id: "chicken-pops",
      name: "Chicken Pops",
      price: "RD$ 250",
      description: "Porción para niños: bocaditos de pollo crispy con papas y salsa suave.",
      image: "/images/chicken-pops.jpg",
      badge: "Kids",
    },
  ],
};
