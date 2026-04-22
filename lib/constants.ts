// ============================================================
// CLICKCORE — CONSTANTES GLOBALES v2
// Todos los textos, precios y configuración en un solo lugar.
// ============================================================

// ── WhatsApp ────────────────────────────────────────────────
export const WHATSAPP_BASE = 'https://wa.me/542494004281';
export const WHATSAPP_DIAGNOSTICO = `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola Josefina, quiero solicitar un diagnóstico gratuito')}`;
export const WHATSAPP_REUNION = `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola Josefina, quiero agendar una reunión')}`;
export const WHATSAPP_PLAN_REDES = `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola Josefina, quiero saber más sobre el Plan de Redes')}`;
export const WHATSAPP_INTEGRAL = `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola Josefina, quiero crecer con el Plan Integral')}`;
export const WHATSAPP_CAMPANAS = `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola Josefina, quiero trabajar mis campañas digitales')}`;
export const WHATSAPP_NEGOCIO = `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola Josefina, quiero hablar de mi negocio')}`;
export const WHATSAPP_CONSULTAR = `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola Josefina, quiero consultar sobre un servicio')}`;

// ── Contacto ────────────────────────────────────────────────
export const PHONE = '2494004281';
export const PHONE_LINK = 'tel:+542494004281';
export const EMAIL = 'clickcoregrwmarketing@gmail.com';
export const EMAIL_LINK = 'mailto:clickcoregrwmarketing@gmail.com';
export const INSTAGRAM_HANDLE = '@clickcore.ar';
export const INSTAGRAM_URL = 'https://www.instagram.com/clickcore.ar/';
export const SITE_URL = 'https://www.clickcore.com.ar';

// ── Navegación ──────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
] as const;

// ── Hero ────────────────────────────────────────────────────
export const HERO = {
  badge: 'Más de 7 años impulsando negocios',
  h1: 'Tenés algo valioso para ofrecer. Hagamos que más personas lo descubran.',
  h1Highlight: 'descubran',
  subtitle: 'Comunicación profesional, campañas activas y optimización continua para mejorar visibilidad, generar consultas y acompañar el crecimiento de tu negocio.',
  industries: 'Agro · Industria · Negocios · Tecnología · Servicios profesionales',
  ctaPrimary: 'Solicitar diagnóstico',
  ctaSecondary: 'Ver resultados',
  floatingBadge: 'Resultados medibles',
} as const;

// ── Marcas ──────────────────────────────────────────────────
export const BRANDS = {
  label: 'Confiaron en nosotros',
  h2: 'Marcas que confiaron en nosotros',
  subtitle: 'Empresas y negocios que trabajaron su comunicación y campañas con enfoque estratégico.',
} as const;

// ── Paid Media ──────────────────────────────────────────────
export const PAID_MEDIA = {
  label: 'Especialización',
  h2: 'Publicidad digital con enfoque estratégico y optimización continua',
  subtitle: 'Aparecé cuando te buscan, impactá cuando navegan y trabajá tus campañas con una lógica clara, medible y en mejora constante.',
  cta: 'Quiero trabajar mis campañas',
  ctaNote: 'Trabajo personalizado y optimización continua.',
  blocks: [
    {
      id: 'search',
      pill: 'Google Search Ads',
      h3: 'Aparecé cuando te están buscando',
      paragraph: 'Captás clientes con intención real en el momento exacto en que necesitan tu producto o servicio.',
      highlight: 'Intención activa = más probabilidades de venta',
      image: '/images/search-ads.webp',
      imageAlt: 'Campaña de búsqueda en Google Ads - Clickcore',
      imageWidth: 1536,
      imageHeight: 1024,
      imageLeft: true,
      bg: 'white',
    },
    {
      id: 'pmax',
      pill: 'Google Performance Max',
      h3: 'Escalá tus resultados con automatización inteligente',
      paragraph: 'Google distribuye tus anuncios en todos sus canales para maximizar alcance, oportunidades y rendimiento.',
      highlight: 'Una sola campaña, múltiples canales, mejores resultados',
      image: '/images/pmax-ads.webp',
      imageAlt: 'Campaña Performance Max Google Ads - Clickcore',
      imageWidth: 1536,
      imageHeight: 1024,
      imageLeft: false,
      bg: 'light',
    },
    {
      id: 'display',
      pill: 'Google Display',
      h3: 'Tu marca presente en todo momento',
      paragraph: 'Impactás a tus potenciales clientes mientras navegan en sitios, apps y plataformas digitales.',
      highlight: 'Visibilidad constante que construye marca',
      image: '/images/display-ads.webp',
      imageAlt: 'Campaña Display Google Ads - Clickcore',
      imageWidth: 1536,
      imageHeight: 1024,
      imageLeft: true,
      bg: 'white',
    },
    {
      id: 'meta',
      pill: 'Meta Ads',
      h3: 'Llegá a las personas correctas en el momento ideal',
      paragraph: 'Segmentación avanzada y creatividad estratégica para generar interés, interacción y oportunidades reales.',
      highlight: 'Impacto, segmentación y remarketing en un solo ecosistema',
      image: '/images/meta-ads.webp',
      imageAlt: 'Campaña Meta Ads Facebook Instagram - Clickcore',
      imageWidth: 1536,
      imageHeight: 1024,
      imageLeft: false,
      bg: 'light',
    },
  ],
} as const;

// ── Resultados ──────────────────────────────────────────────
export const RESULTS = {
  label: 'Casos reales',
  h2: 'Resultados reales en campañas digitales',
  subtitle: 'Casos trabajados con enfoque en visibilidad, consultas y optimización.',
  cards: [
    {
      image: '/images/resultado-medicina-estetica.webp',
      imageAlt: 'Resultados campaña Meta Ads medicina estética - Clickcore',
      title: 'Campaña | Medicina estética',
      subtitle: 'Optimización de consultas y rendimiento',
      pill: 'Meta Ads',
    },
    {
      image: '/images/resultado-maquinas-corralon.webp',
      imageAlt: 'Resultados campaña Meta Ads máquinas de jardín - Clickcore',
      title: 'Campaña | Máquinas de jardín',
      subtitle: 'Generación de consultas comerciales',
      pill: 'Meta Ads',
    },
  ],
} as const;


// ── Cómo Trabajamos ─────────────────────────────────────────
export const HOW_WE_WORK = {
  label: 'El proceso',
  h2: 'Cómo trabajamos cada proyecto',
  subtitle: 'Cada negocio es distinto. Por eso trabajamos con un proceso claro y adaptado a cada caso.',
  steps: [
    {
      number: '01',
      icon: 'Search',
      title: 'Análisis',
      text: 'Entendemos el negocio, contexto y punto de partida.',
    },
    {
      number: '02',
      icon: 'Target',
      title: 'Estrategia',
      text: 'Definimos enfoque, campañas y objetivos.',
    },
    {
      number: '03',
      icon: 'Rocket',
      title: 'Implementación',
      text: 'Configuración y puesta en marcha de campañas.',
    },
    {
      number: '04',
      icon: 'BarChart2',
      title: 'Optimización',
      text: 'Ajustes constantes para mejorar rendimiento.',
    },
  ],
} as const;

// ── Contenido ───────────────────────────────────────────────
export const CONTENT = {
  label: 'Contenido',
  h2: 'Contenido y comunicación para potenciar tu presencia digital',
  subtitle: 'Tu marca activa, clara y alineada con lo que querés comunicar.',
  paragraphs: [
    'Trabajamos con una propuesta ágil y un plan mensual de contenidos, pensado para mantener tu comunicación ordenada, coherente y activa.',
    'Sumamos reels de forma simple: con un método paso a paso para realizarlos en poco tiempo, y podamos generar contenido de interacción cada semana sin complicarte.',
    'Nosotros definimos la estrategia y organización. Vos solo necesitás revisar y validar el contenido.',
    'No trabajamos con gestión diaria de contenidos, sino con planificación mensual y seguimiento organizado.',
  ],
  planRedes: {
    badge: 'Recomendado',
    name: 'Plan de Redes',
    price: '$350.000 / mes',
    description: 'Presencia activa, contenido dinámico y comunicación clara para que tu marca se vea profesional y en movimiento.',
    items: [
      '2 posteos semanales',
      'Historias activas',
      '3 a 4 reels mensuales',
      'Diseño de piezas',
      'Redacción estratégica',
      'Calendario de contenidos',
      'Ideas creativas',
      'Cobertura de promociones',
      'Seguimiento general',
    ],
    idealFor: 'Negocios que quieren presencia constante y contenido dinámico sin complicarse en la gestión diaria.',
    cta: 'Quiero este plan',
  },
  planIntegral: {
    badge: 'Todo en uno',
    name: 'Plan Integral',
    price: '$400.000 / mes',
    description: 'La mejor opción para negocios que necesitan una solución clara y efectiva. Combinamos redes sociales + campañas + estrategia integral en un solo plan.',
    items: [
      'Plan de Redes completo',
      '1 Campaña en Meta Ads',
      'Diseño + estrategia + optimización',
      'Mensaje unificado en todos los canales',
    ],
    cta: 'Quiero crecer con estrategia',
  },
} as const;

// ── Servicios Complementarios ───────────────────────────────
export const COMPLEMENTARY = {
  label: 'También hacemos',
  h2: 'Servicios complementarios',
  subtitle: 'Herramientas que acompañan y potencian el trabajo digital.',
  cards: [
    {
      icon: 'Compass' as const,
      title: 'Estrategia digital',
      description: 'Definimos el enfoque de comunicación más adecuado para tu negocio, objetivos y momento.',
      cta: 'Consultar',
    },
    {
      icon: 'Layout' as const,
      title: 'Landing pages',
      description: 'Páginas de destino diseñadas para convertir visitas en consultas o ventas.',
      cta: 'Consultar',
    },
    {
      icon: 'Paintbrush' as const,
      title: 'Creatividades para campañas',
      description: 'Piezas visuales pensadas para rendir en plataformas digitales y captar atención.',
      cta: 'Consultar',
    },
    {
      icon: 'MessageSquare' as const,
      title: 'Asesoría y seguimiento',
      description: 'Acompañamiento continuo para que cada decisión esté respaldada por datos y estrategia.',
      cta: 'Consultar',
    },
  ],
} as const;

// ── Sobre Mí ────────────────────────────────────────────────
export const ABOUT = {
  label: 'Quién está detrás',
  h2: 'Estrategia digital con mirada humana.',
  badge: '+7 años de experiencia',
  paragraphs: [
    'Soy Josefina Arredondo y hace más de 7 años trabajo con negocios que buscan ordenar su comunicación y actualizar su presencia digital. Me especializo en campañas como Paid Media - trafficker digital, desarrollando estrategias enfocadas en visibilidad y crecimiento.',
    'Acompaño cada proyecto de forma personalizada, combinando estrategia, creatividad y herramientas digitales para transformar ideas en oportunidades visibles, trabajando siempre con un enfoque claro, ordenado y en mejora continua.',
    'Cada marca tiene un valor único: su historia, su gente y lo que ofrece. El desafío está en comunicarlo de forma clara, auténtica y diferencial.',
  ],
  cta: 'Hablemos de tu negocio',
} as const;

// ── Contacto ────────────────────────────────────────────────
export const CONTACT = {
  label: 'Empecemos',
  h2: 'Agendá una reunión',
  subtitle: 'Analizamos tu negocio y definimos un enfoque claro para la comunicación de forma estratégica.',
  cta: 'Agendar reunión',
} as const;

// ── Footer ──────────────────────────────────────────────────
export const FOOTER = {
  tagline: 'Impulsamos negocios con estrategia digital clara.',
  copyright: '© 2025 Clickcore · Todos los derechos reservados',
} as const;
