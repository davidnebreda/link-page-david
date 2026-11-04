import React from 'react';
import { PROJECTS } from '../../data/linksData';
import { CodeIcon, ExternalLinkIcon, FilmIcon, PodcastIcon } from '../UI/Icons';
import './ProjectsSection.css';

const renderProjectIcon = (icon: string) => {
  switch (icon) {
    case 'film':
      return <FilmIcon size={26} />;
    case 'code':
      return <CodeIcon size={26} />;
    default:
      return <PodcastIcon size={26} />;
  }
};

export const ProjectsSection: React.FC = () => {
  return (
    <section className="section-card projects-section" id="proyectos" aria-labelledby="projects-heading">
      <div className="section-header">
        <div className="section-title-wrap">
          <div className="section-icon-badge">
            <PodcastIcon size={22} />
          </div>
          <div>
            <h2 id="projects-heading" className="section-title">
              Proyectos Destacados
            </h2>
            <p className="section-subtitle">
              Iniciativas de divulgación audiovisual, podcasting y tecnología
            </p>
          </div>
        </div>
      </div>

      <div className="projects-grid" role="list">
        {PROJECTS.map((project) => (
          <article key={project.id} className="project-card" role="listitem">
            <div className="project-card-header">
              <div className="project-icon-box" aria-hidden="true">
                {renderProjectIcon(project.icon)}
              </div>
              <span className="project-badge">{project.badge}</span>
            </div>

            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-footer">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn"
                title={`Visitar ${project.title}`}
              >
                <span>Conoce el proyecto</span>
                <ExternalLinkIcon size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

