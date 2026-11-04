import type { BlogPost, ProjectItem, ServiceItem, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: 'David Nebreda Santos',
  displayName: 'David Nebreda',
  occupation: 'Full Stack Developer',
  tagline: 'Desarrollo Web · Ciberseguridad · Cloud · Inteligencia Artificial',
  bio: 'Apasionado por la tecnología, el software libre, la ciberseguridad y la divulgación técnica a través de podcasts y artículos.',
  email: 'dnebreda@blogdedavid.com',
  blogUrl: 'https://blogdedavid.com',
  rssFeedUrl: 'https://blogdedavid.com/rss/blogdedavid.rss',
  location: 'Madrid, España',
  availability: 'Disponible para proyectos & colaboraciones',
};

// 6 latest entries seeded from https://blogdedavid.com/rss/blogdedavid.rss
export const FALLBACK_BLOG_POSTS: BlogPost[] = [
  {
    title: 'Podcast: Flask Python | El Mundo de Ada',
    link: 'https://blogdedavid.com/podcast-flask-python-el-mundo-de-ada/',
    pubDate: '18 Oct 2026',
    category: 'Podcast',
  },
  {
    title: '05 – Node.js | El Mundo de Ada',
    link: 'https://blogdedavid.com/05-node-js-el-mundo-de-ada/',
    pubDate: '3 Oct 2026',
    category: 'Podcast',
  },
  {
    title: 'Nuevo Podcast: 04-Smart Contracts | El Mundo de Ada',
    link: 'https://blogdedavid.com/nuevo-podcast-04-smart-contracts-el-mundo-de-ada/',
    pubDate: '3 Oct 2026',
    category: 'Podcast',
  },
  {
    title: 'Nuevo Podcast: 03-El poder de Ethereum | El mundo de Ada',
    link: 'https://blogdedavid.com/nuevo-podcast-03-el-poder-de-ethereum-el-mundo-de-ada/',
    pubDate: '30 Ago 2026',
    category: 'Podcast',
  },
  {
    title: 'Podcast: 02-React.js | El Mundo de Ada',
    link: 'https://blogdedavid.com/podcast-02-react-js-el-mundo-de-ada/',
    pubDate: '21 Ago 2026',
    category: 'Podcast',
  },
  {
    title: 'Nuevo Proyecto: El Mundo de Ada | Podcast de Desarrollo Web',
    link: 'https://blogdedavid.com/nuevo-proyecto-el-mundo-de-ada-podcast-de-desarrollo-web/',
    pubDate: '16 Ago 2026',
    category: 'Podcast',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/unasemanaenbeta',
    handle: '@unasemanaenbeta',
    icon: 'facebook',
    color: '#1877F2',
    description: 'Comunidad y novedades de Una Semana en Beta',
  },
  {
    id: 'x',
    name: 'X (Twitter)',
    url: 'https://x.com/davidnebreda',
    handle: '@davidnebreda',
    icon: 'x',
    color: '#000000',
    description: 'Opiniones tech, desarrollo web y actualidad digital',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://www.youtube.com/@unasemanaenbeta',
    handle: '@unasemanaenbeta',
    icon: 'youtube',
    color: '#FF0000',
    description: 'Vídeos, directos y tutoriales tecnológicos',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/davidnebreda',
    handle: 'davidnebreda',
    icon: 'linkedin',
    color: '#0A66C2',
    description: 'Perfil profesional, trayectoria y colaboraciones',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/unasemanaenbeta/',
    handle: '@unasemanaenbeta',
    icon: 'instagram',
    color: '#E4405F',
    description: 'Contenido visual, detrás de cámaras y podcasts',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    url: 'https://www.tiktok.com/@davidnebredatech',
    handle: '@davidnebredatech',
    icon: 'tiktok',
    color: '#00F2FE',
    description: 'Píldoras rápidas de programación y trucos tech',
  },
  {
    id: 'patreon',
    name: 'Patreon',
    url: 'https://www.patreon.com/c/UnaSemanaenBeta',
    handle: 'UnaSemanaenBeta',
    icon: 'patreon',
    color: '#FF424D',
    description: 'Apoya el proyecto y accede a contenido exclusivo',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'curiocine',
    title: 'Curiocine',
    url: 'https://curiocinepod.com/',
    badge: 'Podcast de Cine',
    description:
      'Un podcast apasionante sobre cine, curiosidades cinematográficas, anécdotas de rodaje y análisis de grandes obras del séptimo arte.',
    tags: ['Podcast', 'Cine', 'Audio', 'Entretenimiento'],
    icon: 'film',
  },
  {
    id: 'el-mundo-de-ada',
    title: 'El mundo de Ada',
    url: 'https://blogdedavid.com/el-mundo-de-ada/',
    badge: 'Podcast & Tech',
    description:
      'Espacio dedicado a la divulgación de desarrollo web, ciberseguridad, Python, blockchain, smart contracts e inteligencia artificial.',
    tags: ['Desarrollo Web', 'Python', 'Web3', 'Tecnología'],
    icon: 'code',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web',
    title: 'Desarrollo web',
    description:
      'Creación de sitios y aplicaciones web modernas, rápidas y responsivas. SPAs, arquitecturas frontend robustas con React/TypeScript y backends seguros.',
    icon: 'web',
    technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'REST APIs', 'CSS3 / UI'],
  },
  {
    id: 'cybersecurity',
    title: 'Ciberseguridad',
    description:
      'Análisis de vulnerabilidades, auditorías de seguridad, protección frente a ataques de ingeniería social y estrategias defensivas (Red Team / Blue Team).',
    icon: 'shield',
    technologies: ['Auditoría Web', 'Ingeniería Social', 'Defensa Proactiva', 'Hardening'],
  },
  {
    id: 'databases',
    title: 'Gestión de bases de datos',
    description:
      'Diseño, modelado y optimización de bases de datos relacionales y no relacionales. Consultas eficientes, integridad de datos y escalabilidad.',
    icon: 'database',
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Modelado Relacional', 'Optimización SQL'],
  },
  {
    id: 'marketing',
    title: 'Marketing digital',
    description:
      'Estrategias de posicionamiento SEO, optimización de velocidad de carga (Core Web Vitals), creación de contenido técnico y presencia digital.',
    icon: 'marketing',
    technologies: ['SEO Técnico', 'Core Web Vitals', 'Estrategia de Contenidos', 'Analítica'],
  },
  {
    id: 'ai',
    title: 'Inteligencia artificial',
    description:
      'Integración de modelos de lenguaje (LLMs), visión artificial, automatización de flujos con agentes inteligentes y soluciones asistidas por IA.',
    icon: 'ai',
    technologies: ['Integración LLM', 'Automatización', 'Agentes Autónomos', 'Prompt Engineering'],
  },
  {
    id: 'mobile',
    title: 'Desarrollo móvil',
    description:
      'Diseño e implementación de interfaces móviles adaptables, progressive web apps (PWAs) y experiencias fluidas optimizadas para cualquier pantalla.',
    icon: 'mobile',
    technologies: ['Responsive Design', 'PWAs', 'Mobile First', 'Optimización Táctil'],
  },
];

