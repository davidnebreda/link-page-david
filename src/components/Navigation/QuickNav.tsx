import React, { useEffect, useState } from 'react';
import { ThemeToggle } from '../UI/ThemeToggle';
import './QuickNav.css';

interface NavItem {
  id: string;
  label: string;
  icon?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'blog', label: 'Blog' },
  { id: 'redes', label: 'Redes' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'contacto', label: 'Contacto' },
];

export const QuickNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('blog');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
        Boolean
      ) as HTMLElement[];

      const offset = 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && scrollY >= sec.offsetTop - offset) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <nav className="quick-nav-wrapper" aria-label="Navegación rápida de secciones">
      <div className="quick-nav-bar">
        <ul className="quick-nav-list" role="tablist">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} role="presentation">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`quick-nav-link ${isActive ? 'active' : ''}`}
                  role="tab"
                  aria-selected={isActive}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="quick-nav-actions">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

