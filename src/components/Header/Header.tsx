import React, { useState } from 'react';
import profilePhoto from '../../assets/profile.jpg';
import { PERSONAL_INFO } from '../../data/linksData';
import { MapPinIcon, SparklesIcon, UserIcon } from '../UI/Icons';
import './Header.css';

export const Header: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <header className="header-container" id="top">
      <div className="header-avatar-wrapper">
        <div className="header-avatar-glow"></div>
        <div className="header-avatar-ring">
          {!imgError ? (
            <img
              src={profilePhoto}
              alt={`Foto de ${PERSONAL_INFO.name}`}
              className={`header-avatar-img ${imgLoaded ? 'loaded' : ''}`}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
              loading="eager"
              width="128"
              height="128"
            />
          ) : (
            <div className="header-avatar-fallback" aria-label="Avatar de David">
              <UserIcon size={56} />
            </div>
          )}
          <span className="header-status-indicator" title="Disponible para nuevos proyectos" aria-label="Disponible">
            <span className="status-ping"></span>
            <span className="status-dot"></span>
          </span>
        </div>
      </div>

      <div className="header-content">
        <div className="header-availability-badge">
          <SparklesIcon size={14} className="sparkle-icon" />
          <span>{PERSONAL_INFO.availability}</span>
        </div>

        <h1 className="header-name">
          {PERSONAL_INFO.name}
        </h1>

        <div className="header-role-wrapper">
          <span className="header-role-badge">
            {PERSONAL_INFO.occupation}
          </span>
        </div>

        <p className="header-tagline">
          {PERSONAL_INFO.tagline}
        </p>

        <p className="header-bio">
          {PERSONAL_INFO.bio}
        </p>

        <div className="header-meta">
          <span className="header-meta-item">
            <MapPinIcon size={14} />
            <span>{PERSONAL_INFO.location}</span>
          </span>
        </div>
      </div>
    </header>
  );
};

