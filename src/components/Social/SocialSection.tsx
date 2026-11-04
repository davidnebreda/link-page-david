import React from 'react';
import { SOCIAL_LINKS } from '../../data/linksData';
import type { SocialLink } from '../../types';
import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  PatreonIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from '../UI/Icons';
import './SocialSection.css';

const renderSocialIcon = (icon: SocialLink['icon']) => {
  switch (icon) {
    case 'facebook':
      return <FacebookIcon size={22} />;
    case 'x':
      return <XIcon size={20} />;
    case 'youtube':
      return <YouTubeIcon size={22} />;
    case 'linkedin':
      return <LinkedInIcon size={20} />;
    case 'instagram':
      return <InstagramIcon size={22} />;
    case 'tiktok':
      return <TikTokIcon size={20} />;
    case 'patreon':
      return <PatreonIcon size={20} />;
    default:
      return null;
  }
};

export const SocialSection: React.FC = () => {
  return (
    <section className="section-card social-section" id="redes" aria-labelledby="social-heading">
      <div className="section-header">
        <div className="section-title-wrap">
          <div className="section-icon-badge">
            <LinkedInIcon size={22} />
          </div>
          <div>
            <h2 id="social-heading" className="section-title">
              Redes Sociales & Comunidad
            </h2>
            <p className="section-subtitle">
              Sígueme y conecta conmigo en mis diferentes canales y plataformas
            </p>
          </div>
        </div>
      </div>

      <div className="social-links-grid" role="list">
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.id}
            href={item.url.startsWith('http') ? item.url : `https://${item.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link-card social-${item.id}`}
            role="listitem"
            title={`Abrir perfil de ${item.name}`}
          >
            <div className="social-icon-wrapper" aria-hidden="true">
              {renderSocialIcon(item.icon)}
            </div>
            <div className="social-info">
              <div className="social-name-row">
                <span className="social-name">{item.name}</span>
                <span className="social-handle">{item.handle}</span>
              </div>
              <p className="social-desc">{item.description}</p>
            </div>
            <div className="social-arrow" aria-hidden="true">
              <ArrowRightIcon size={18} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

