import React from 'react';
import { PERSONAL_INFO } from '../../data/linksData';
import { ArrowUpIcon, RssIcon } from '../UI/Icons';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-name">{PERSONAL_INFO.name}</span>
            <span className="footer-role">{PERSONAL_INFO.occupation}</span>
          </div>

          <button
            type="button"
            className="footer-top-btn"
            onClick={scrollToTop}
            aria-label="Volver arriba"
            title="Volver arriba"
          >
            <span>Subir</span>
            <ArrowUpIcon size={16} />
          </button>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {PERSONAL_INFO.name}. Todos los derechos reservados.
          </p>

          <div className="footer-links">
            <a
              href={PERSONAL_INFO.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Blog
            </a>
            <span className="footer-separator">·</span>
            <a
              href={PERSONAL_INFO.rssFeedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link rss-link"
            >
              <RssIcon size={13} />
              <span>RSS Feed</span>
            </a>
            <span className="footer-separator">·</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="footer-link">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

