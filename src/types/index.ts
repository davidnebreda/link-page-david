export interface BlogPost {
  title: string;
  link: string;
  pubDate?: string;
  category?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  handle: string;
  icon: 'facebook' | 'x' | 'youtube' | 'linkedin' | 'instagram' | 'tiktok' | 'patreon';
  color: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  url: string;
  badge: string;
  description: string;
  tags: string[];
  icon: 'film' | 'code' | 'podcast';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: 'web' | 'shield' | 'database' | 'marketing' | 'ai' | 'mobile';
  technologies: string[];
}

export interface ContactFormData {
  nombre: string;
  asunto: string;
  email: string;
  mensaje: string;
}

export interface FormErrors {
  nombre?: string;
  asunto?: string;
  email?: string;
  mensaje?: string;
}

