import React from 'react';
import { SERVICES } from '../../data/linksData';
import type { ServiceItem } from '../../types';
import {
  AiIcon,
  DatabaseIcon,
  MarketingIcon,
  MobileIcon,
  ShieldIcon,
  SparklesIcon,
  WebIcon,
} from '../UI/Icons';
import './ServicesSection.css';

const renderServiceIcon = (icon: ServiceItem['icon']) => {
  switch (icon) {
    case 'web':
      return <WebIcon size={24} />;
    case 'shield':
      return <ShieldIcon size={24} />;
    case 'database':
      return <DatabaseIcon size={24} />;
    case 'marketing':
      return <MarketingIcon size={24} />;
    case 'ai':
      return <AiIcon size={24} />;
    case 'mobile':
      return <MobileIcon size={24} />;
    default:
      return <SparklesIcon size={24} />;
  }
};

export const ServicesSection: React.FC = () => {
  return (
    <section className="section-card services-section" id="servicios" aria-labelledby="services-heading">
      <div className="section-header">
        <div className="section-title-wrap">
          <div className="section-icon-badge">
            <WebIcon size={22} />
          </div>
          <div>
            <h2 id="services-heading" className="section-title">
              Servicios Profesionales
            </h2>
            <p className="section-subtitle">
              Soluciones integrales de ingeniería de software, seguridad y datos
            </p>
          </div>
        </div>
      </div>

      <div className="services-grid" role="list">
        {SERVICES.map((service) => (
          <div key={service.id} className="service-card" role="listitem">
            <div className="service-icon-box" aria-hidden="true">
              {renderServiceIcon(service.icon)}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>

            <div className="service-techs">
              {service.technologies.map((tech) => (
                <span key={tech} className="service-tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

