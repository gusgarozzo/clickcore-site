// ============================================================
// CLICKCORE — CONSTANTES GLOBALES
// Todos los textos, precios y configuración en un solo lugar.
// ============================================================

// ── WhatsApp ────────────────────────────────────────────────
export const WHATSAPP_BASE = 'https://wa.me/542494004281';
export const WHATSAPP_DEFAULT = `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola Josefina, me interesa saber más sobre los servicios de Clickcore')}`;
export const WHATSAPP_CONSULTA = `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola Josefina, quiero agendar una consulta gratis')}`;
export const WHATSAPP_CITA = `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola Josefina, quiero programar una cita')}`;

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
  badgeIcon: 'Check',
  h1: 'Tenés algo valioso para ofrecer. Hagamos que más personas lo descubran.',
  h1Highlight: 'descubran',
  subtitle: 'Tu negocio puede crecer cuando la comunicación correcta se encuentra con las personas correctas.',
  description: 'En Clickcore desarrollamos estrategias digitales, campañas activas y herramientas comerciales para transformar el potencial de tu marca en mayores oportunidades.',
  ctaPrimary: 'Agendá tu consulta gratis',
  ctaSecondary: 'Ver servicios',
  floatingBadge: 'Resultados medibles cada mes',
  floatingBadgeIcon: 'TrendingUp',
} as const;

// ── Problema ────────────────────────────────────────────────
export const PROBLEM = {
  label: 'El problema que frenó tu crecimiento',
  h2: 'Tenés el valor.\nTe falta visibilidad estratégica.',
  h2Highlight: 'visibilidad estratégica',
  paragraphs: [
    'Muchos negocios tienen buenos productos, excelente atención y clientes que los recomiendan. Sin embargo, muchas personas que hoy están buscando exactamente lo que ofrecés todavía no te conocen o no llegaron a descubrir tu marca.',
    'Y muchas veces incluso tus propios clientes no se enteran de tus novedades, nuevos productos, promociones o servicios que también podrían volver a elegir.',
    'Necesitás una estrategia clara para ganar visibilidad, fortalecer el vínculo con tus clientes actuales y convertir oportunidades en ventas constantes.',
  ],
  cards: [
    {
      icon: 'Clock' as const,
      title: 'Falta de tiempo',
      text: 'No alcanza el tiempo para comunicar todo lo que tu negocio hace y ofrece.',
    },
    {
      icon: 'TrendingDown' as const,
      title: 'Campañas sin seguimiento',
      text: 'Las campañas se lanzan pero no se miden ni se optimizan para mejorar resultados.',
    },
    {
      icon: 'Palette' as const,
      title: 'Marca desactualizada',
      text: 'Una imagen que no refleja el valor real de tu negocio ni conecta con los clientes actuales.',
    },
  ],
  cta: 'Quiero crecer →',
} as const;

// ── Qué hacemos ─────────────────────────────────────────────
export const WHAT_WE_DO = {
  label: 'Nuestra propuesta',
  h2: 'No necesitás trabajar más.\nNecesitás comunicar mejor.',
  h2Highlight: 'comunicar mejor',
  paragraphs: [
    'Diseñamos sistemas simples para que tu negocio gane presencia, genere contactos y venda con más claridad.',
    'Combinamos estrategia, creatividad y herramientas digitales en acciones concretas orientadas a resultados.',
  ],
  chips: [
    { icon: 'Check', text: 'Redes sociales con enfoque comercial' },
    { icon: 'Check', text: 'Publicidad en plataformas clave' },
    { icon: 'Check', text: 'Automatización' },
    { icon: 'Check', text: 'Branding profesional' },
    { icon: 'Check', text: 'Soporte a ventas online y offline' },
  ],
} as const;

// ── Servicios: Redes Sociales ───────────────────────────────
export const SERVICE_REDES = {
  h3: '1. Gestión de Redes Sociales',
  h4: 'Tu marca activa, visible y conectada.',
  paragraph: 'Construimos una presencia que genere confianza y mantenga a tu negocio presente en la mente de tus clientes.',
  plans: {
    standard: {
      badge: 'Standard',
      price: '$300.000 / mes',
      description: 'Ideal para comenzar con una imagen profesional y presencia constante.',
      items: [
        '2 posteos semanales',
        'Historias activas',
        'Diseño de piezas',
        'Redacción estratégica',
        'Calendario mensual',
        'Seguimiento general',
      ],
      cta: 'Quiero este plan',
    },
    full: {
      badge: { icon: 'Star', text: 'Más popular' },
      price: '$350.000 / mes',
      description: 'Para marcas que quieren más movimiento, cercanía y contenido dinámico.',
      items: [
        'Todo lo del Plan Standard',
        '3 reels mensuales',
        'Ideas creativas continuas',
        'Cobertura de promociones',
        'Mayor interacción',
        'Reporte mensual',
      ],
      cta: 'Quiero crecer en redes',
    },
  },
} as const;

// ── Servicios: Publicidad Digital ───────────────────────────
export const SERVICE_ADS = {
  h3: '2. Publicidad Digital',
  h4: 'Llegá a las personas correctas en el momento indicado.',
  paragraph: 'Campañas pensadas para generar consultas, ventas y nuevas oportunidades.',
  plans: [
    {
      icon: 'Target' as const,
      name: 'Plan Base Meta Ads',
      price: '$200.000 / mes',
      description: 'Ideal para empezar a vender o captar consultas con campañas activas.',
      items: [
        '1 campaña en Meta Ads',
        'Hasta 2 conjuntos de anuncios',
        'Mix de creativos',
        'Segmentación de públicos',
        'Optimización continua',
        'Reporte mensual',
      ],
      cta: 'Quiero vender más',
    },
    {
      icon: 'Search' as const,
      name: 'Plan Premium Google Ads',
      price: '$250.000 / mes',
      description: 'Para aparecer cuando las personas buscan lo que ofrecés.',
      items: [
        'Campañas en Google Ads',
        'Palabras clave estratégicas',
        'Red de Display: múltiples formatos y sitios clave',
        'Configuración técnica',
        'Optimización continua',
        'Seguimiento de resultados',
        'Reporte detallado',
      ],
      cta: 'Quiero aparecer en Google',
    },
    {
      icon: 'BarChart2' as const,
      name: 'Plan Performance',
      price: 'A presupuestar',
      description: 'Para negocios con múltiples objetivos, productos o escalado continuo.',
      items: [
        'Combinación de varias campañas activas',
        'Test A/B',
        'Remarketing',
        'Escalado y análisis avanzado',
        'Reportes estratégicos',
      ],
      cta: 'Solicitar propuesta',
    },
  ],
} as const;

// ── Servicios: Plan Integral ────────────────────────────────
export const SERVICE_INTEGRAL = {
  badge: { icon: 'Star', text: 'PROMO DESTACADA' },
  h3: '3. Plan Integral',
  subtitle: 'Todo conectado para generar visibilidad, contactos y ventas.',
  price: '$400.000 / mes',
  description: 'La mejor opción para negocios que necesitan una solución clara y efectiva. Combinamos redes sociales + anuncios + estrategia integral en un solo plan.',
  includes: [
    'Gestión de redes sociales',
    '1 Campaña en Meta + 1 Campaña en Google (opcional)',
    'Diseño + estrategia + optimización',
    'Mensaje unificado en todos los canales',
  ],
  idealFor: [
    'Tener presencia digital ordenada',
    'Generar consultas inmediatas',
    'Crecer en redes de forma sostenida',
    'Delegar en profesionales',
  ],
  cta: 'Quiero crecer con estrategia',
} as const;

// ── Servicios Complementarios ───────────────────────────────
export const COMPLEMENTARY = {
  label: 'También hacemos',
  h2: 'Soluciones que potencian tu crecimiento según la etapa de tu negocio.',
  cards: [
    {
      icon: 'Layers' as const,
      title: 'Branding & Desarrollo',
      description: 'Una imagen profesional genera confianza desde el primer contacto. Creamos piezas visuales y digitales para que tu negocio se vea sólido y actualizado.',
      tags: ['Diseño de logo', 'Identidad visual', 'Presentaciones', 'Sitio web', 'Material comercial'],
      price: 'A presupuestar',
      cta: 'Potenciar mi marca →',
    },
    {
      icon: 'Heart' as const,
      title: 'Fidelización y Reactivación',
      description: 'Acercamos novedades a tus clientes actuales para mantener el vínculo activo y seguir vendiendo.',
      tags: ['Email marketing', 'WhatsApp Business', 'Promociones VIP', 'Cupones exclusivos', 'Lanzamientos', 'Recordatorios'],
      price: 'A presupuestar',
      cta: 'Quiero fidelizar clientes →',
    },
    {
      icon: 'ShoppingBag' as const,
      title: 'Soporte a Ventas',
      description: 'Sumamos herramientas promocionales que acompañan tus ventas.',
      tags: ['Catálogos impresos y digitales', 'QR para locales', 'Videos para pantallas', 'Material promocional', 'Eventos', 'Gigantografía LED'],
      price: 'A presupuestar',
      cta: 'Consultar opciones →',
    },
    {
      icon: 'Zap' as const,
      title: 'Automatización',
      description: 'Respondé mejor y más rápido sin sumar carga operativa. Automatizamos consultas frecuentes y ordenamos la comunicación cuando el volumen crece.',
      tags: ['Respuestas automáticas', 'Panel unificado de mensajes', 'Derivación a WhatsApp', 'Captura de datos'],
      price: 'Instalación desde $50.000',
      cta: 'Automatizar mi negocio →',
    },
  ],
} as const;

// ── Sobre Mí ────────────────────────────────────────────────
export const ABOUT = {
  label: 'Quién está detrás',
  h2: 'Estrategia digital con mirada humana.',
  badge: '+7 años de experiencia',
  badgeIcon: 'Target',
  paragraphs: [
    'Soy Josefina Arredondo y hace más de 7 años acompaño negocios que quieren activar su vidriera digital, ponerse al día con las redes y la tecnología, y llegar a más personas con publicidad.',
    'Brindo un acompañamiento personalizado, combinando estrategia, creatividad y herramientas digitales para convertir ideas en oportunidades visibles y reales.',
    'Cada marca tiene un valor único: su gente, su historia y lo que ofrece. El desafío está en comunicarlo de forma clara, auténtica y diferencial.',
  ],
  cta: 'Hablemos de tu negocio',
} as const;

// ── Contacto ────────────────────────────────────────────────
export const CONTACT = {
  label: 'Empecemos',
  h2: 'Agendá una reunión',
  paragraph: 'Queremos conocer tu negocio, detectar oportunidades y diseñar un plan acorde a tu etapa de crecimiento y objetivos.',
  cta: 'Programar una cita →',
} as const;

// ── Footer ──────────────────────────────────────────────────
export const FOOTER = {
  tagline: 'Impulsamos negocios con estrategia digital clara.',
  copyright: '© 2025 Clickcore · Todos los derechos reservados',
} as const;
