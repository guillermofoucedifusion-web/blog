// ═══════════════════════════════════════════════════════════════
//  CONTENIDO.JS  ·  AQUÍ CAMBIAS TODO EL CONTENIDO DE LA WEB
//
//  REGLAS DE ORO (solo estas tres):
//   1. Cambia únicamente lo que está entre "comillas".
//   2. No borres comillas, comas, llaves { } ni corchetes [ ].
//   3. Cada elemento va entre llaves { } y termina con coma.
//
//  Idiomas:  _es = español   ·   _en = inglés
//  Archivos: súbelos a la carpeta "media" y escribe "media/nombre.pdf"
// ═══════════════════════════════════════════════════════════════

const SITIO = {

  // ── 1. DATOS GENERALES (portada y contacto) ──────────────────
  general: {
    nombre:   "Guillermo Fouce",
    cargo_es: "Psicólogo",
    cargo_en: "Psychologist",
    lema_es:  "Camet ipsun tecum lorex",
    lema_en:  "Ametic dolor tecum ipsin",
    bio_es:   "Lorempsur indoor sitamet dolux",
    bio_en:   "Loremsum outdoor ametic dolor",
    foto:     "media/foto facebook.jpeg",                       // ej: "media/foto.jpg"
    cv:       "",                       // ej: "media/curriculum.pdf"
    email:    "guillermofouce.difusion@gmail.com",
    color:    "#232a5c"                 // color principal de la web
  },

  // ── 2. REDES SOCIALES (una por línea) ────────────────────────
  redes: [
    { nombre: "LinkedIn",     enlace: "https://www.linkedin.com" },
    { nombre: "Instagram",    enlace: "https://www.instagram.com" },
    { nombre: "YouTube",      enlace: "https://www.youtube.com" },
    { nombre: "ResearchGate", enlace: "https://www.researchgate.net" }
  ],

  // ── 3. PUBLICACIONES: artículos y libros ─────────────────────
  publicaciones: [
    { etiqueta: "Libro", fecha: "2026-03",
      titulo_es: "Lorempsur indoor", titulo_en: "Loremsum outdoor",
      texto_es: "Sitamet dolux camet ipsun", texto_en: "Ametic dolor tecum ipsin",
      enlace: "https://www.ejemplo.com", archivo: "", imagen: "" },

    { etiqueta: "Artículo", fecha: "2025-11",
      titulo_es: "Tecum lorex", titulo_en: "Ipsin dolux",
      texto_es: "Dolux camet sitamet ipsun", texto_en: "Tecum ametic lorex dolor",
      enlace: "https://www.ejemplo.com", archivo: "", imagen: "" },

    { etiqueta: "Artículo", fecha: "2025-06",
      titulo_es: "Camet ipsun", titulo_en: "Sitamet lorex",
      texto_es: "Indoor lorempsur dolux tecum", texto_en: "Outdoor loremsum ipsin ametic",
      enlace: "https://www.ejemplo.com", archivo: "", imagen: "" }
  ],

  // ── 4. PRENSA ESCRITA ────────────────────────────────────────
  prensa: [
    { etiqueta: "Entrevista", fecha: "2026-01",
      titulo_es: "Dolux sitamet", titulo_en: "Ametic tecum",
      texto_es: "Lorex ipsun camet indoor", texto_en: "Dolor ipsin loremsum outdoor",
      enlace: "https://www.ejemplo.com", archivo: "", imagen: "" },

    { etiqueta: "Opinión", fecha: "2025-09",
      titulo_es: "Ipsun lorempsur", titulo_en: "Dolor camet",
      texto_es: "Tecum dolux sitamet lorex", texto_en: "Ipsin ametic loremsum tecum",
      enlace: "https://www.ejemplo.com", archivo: "", imagen: "" }
  ],

  // ── 5. VÍDEOS (enlace de YouTube o archivo .mp4 en media) ────
  videos: [
    { etiqueta: "Conferencia", fecha: "2026-02",
      titulo_es: "Indoor dolux", titulo_en: "Outdoor ametic",
      texto_es: "Camet lorex ipsun sitamet", texto_en: "Tecum dolor ipsin loremsum",
      enlace: "", archivo: "", imagen: "" },

    { etiqueta: "Entrevista", fecha: "2025-10",
      titulo_es: "Lorex tecum", titulo_en: "Ipsin camet",
      texto_es: "Sitamet ipsun dolux indoor", texto_en: "Loremsum ametic dolor outdoor",
      enlace: "", archivo: "", imagen: "" }
  ],

  // ── 6. PROPUESTAS Y COMENTARIOS ──────────────────────────────
  propuestas: [
    { etiqueta: "Propuesta", fecha: "2026-04",
      titulo_es: "Sitamet camet", titulo_en: "Lorex dolux",
      texto_es: "Ipsun tecum lorempsur dolux", texto_en: "Ametic ipsin outdoor camet",
      enlace: "", archivo: "", imagen: "" },

    { etiqueta: "Comentario", fecha: "2025-12",
      titulo_es: "Dolux ipsun", titulo_en: "Tecum sitamet",
      texto_es: "Camet indoor lorex ipsun", texto_en: "Dolor loremsum ipsin ametic",
      enlace: "", archivo: "", imagen: "" }
  ],

  // ── 7. TRAYECTORIA: formación, docencia, experiencia ─────────
  trayectoria: [
    { etiqueta: "Docencia", fecha: "2020",
      titulo_es: "Tecum ipsun", titulo_en: "Lorex sitamet",
      texto_es: "Dolux camet indoor tecum", texto_en: "Ametic dolor outdoor ipsin",
      enlace: "", archivo: "", imagen: "" },

    { etiqueta: "Formación", fecha: "2010",
      titulo_es: "Camet dolux", titulo_en: "Ipsin tecum",
      texto_es: "Lorempsur sitamet ipsun lorex", texto_en: "Loremsum ametic dolor camet",
      enlace: "", archivo: "", imagen: "" }
  ]
};
