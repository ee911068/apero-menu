# PRD — APERO Menú Digital Interactivo

## Problem statement (original)
Generar un menú digital interactivo, responsive, basado 100% en la identidad visual de la marca APERO (Café Bar & Tapas). Mucho movimiento, pop-ups, ilustraciones, banners. Logo sin fondo, diseño premium, navegación interactiva, hover effects, animaciones suaves, menú por categorías, fotos elegantes. Preview funcional lista para usar.

## Respuestas del usuario (dirección creativa)
- Estilo: base de marca + propuestas creativas
- Sensación: divertido y dinámico
- Menú: solo visual (sin pedidos)
- Idioma: Español

## Personas
- Cliente del restaurante que escanea/visita el menú desde su celular
- Dueño de APERO que comparte el link del menú en redes

## Arquitectura
- Frontend React (única página inmersiva) — sin backend (contenido estático)
- framer-motion (reveal cinético, scroll-reveals, modal), lenis (scroll suave)
- Assets propios: logo verde/blanco con fondo eliminado (PNG con alpha), mascota line-art recortada del manual, 6 fotos de producto optimizadas en /public/images
- Paleta: #2F4F3E (verde oliva), #F2EFE7 (blanco leche), acento terracota #D35400
- Tipografías: Playfair Display + Montserrat (según manual)

## Implementado (2026-08-14/15)
- Ajustes del cliente (2026-08-15): tira de fotos del hero ELIMINADA (no le gustó); badge circular del hero solo dice "TE ESPERAN EN APERO"; descripciones actualizadas — Crispy Tenders: "5 tiras de pollo + papas o tostones + salsa de tu elección", Alitas BBQ/Buffalo: "6 alitas de pollo + papas o tostones + salsa de tu elección", Refrescos: "Bien fríos como deben ser, el acompañante perfecto para nuestros servicios" (ES y EN); footer © 2025
- Fotos propias en TODAS las categorías: Jugos Naturales, Refrescos 16 oz, Tostones y Papas ya tienen su foto real (ya no usan la mascota de placeholder)
- Pedido multi-platillo: botón "Añadir" en cada fila, bandeja flotante "Tu pedido" con cantidades, total y envío combinado por WhatsApp
- Idioma recordado: la elección ES/EN se guarda (localStorage) y persiste entre visitas
- Versión bilingüe ES/EN: interruptor ES|EN en la barra superior traduce todo al instante (hero, navegación, capítulos, platillos, pop-ups, manifiesto, footer, marquees y el mensaje de WhatsApp)
- Pedidos por WhatsApp: botón "PEDIR" en cada fila del menú y botón grande "Pedir por WhatsApp" en cada pop-up, abren wa.me/18296406701 con mensaje pre-llenado (nombre + precio del platillo)
- Hero cinético con reveal línea por línea enmascarado, mascota con parallax + flotación, badge circular giratorio "Te esperan en Apero"
- Navegación sticky por categorías con scrollspy y scroll suave (lenis)
- 6 capítulos del menú: Burgers, Chicken, Salsas, Guarniciones, Bebidas, Niños (precios RD$ exactos del PDF)
- Filas editoriales con hover (barrido verde) e imagen flotante que sigue el cursor (desktop)
- Pop-up de producto 50/50 foto/detalle con animación spring
- Marquees animados "Buena comida, buenos momentos" / "Te esperan en Apero"
- Manifiesto numerado (Moderna, Urbana, Divertida, Minimalista) + banner fotográfico
- Footer con Instagram @aperocafebar y WhatsApp 829-640-6701
- Textura de grano tipo "menú impreso", responsive móvil/desktop

## Verificado
- Desktop: hero, scrollspy, modal La Apera, footer
- Móvil (390px): hero, modal Nuestras Salsas con lista de salsas

## Backlog
- P0: —
- P1: botón de pedido por WhatsApp (el usuario eligió "solo visual" por ahora)
- P1: (fotos de bebidas y guarniciones — HECHO 2026-08-15)
- P2: modo nocturno verde oscuro
- P2: descargable HTML estático de un solo archivo
