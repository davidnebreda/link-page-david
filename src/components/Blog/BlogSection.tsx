import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../../data/linksData';
import { fetchLatestBlogPosts } from '../../services/rssService';
import type { BlogPost } from '../../types';
import { ArrowRightIcon, ExternalLinkIcon, RefreshIcon, RssIcon } from '../UI/Icons';
import './BlogSection.css';

export const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLive, setIsLive] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('');

  const loadPosts = async () => {
    setIsLoading(true);
    try {
      const result = await fetchLatestBlogPosts();
      setPosts(result.posts.slice(0, 6));
      setIsLive(result.isLive);
      if (result.error) {
        setStatusMessage(result.error);
      } else {
        setStatusMessage('Feed actualizado');
      }
    } catch {
      setStatusMessage('Mostrando últimas publicaciones');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <section className="section-card blog-section" id="blog" aria-labelledby="blog-heading">
      <div className="section-header">
        <div className="section-title-wrap">
          <div className="section-icon-badge">
            <RssIcon size={22} />
          </div>
          <div>
            <h2 id="blog-heading" className="section-title">
              Últimas entradas del Blog
            </h2>
            <p className="section-subtitle">
              Artículos y podcasts sobre desarrollo, ciberseguridad e IA
            </p>
          </div>
        </div>

        <div className="blog-status-badge">
          <button
            type="button"
            className="blog-refresh-btn"
            onClick={loadPosts}
            disabled={isLoading}
            aria-label="Actualizar entradas del feed RSS"
            title="Recargar feed"
          >
            <RefreshIcon size={14} className={isLoading ? 'spinning' : ''} />
            <span>{isLive ? 'En vivo' : 'Feed RSS'}</span>
          </button>
        </div>
      </div>

      {isLoading && posts.length === 0 ? (
        <div className="blog-skeleton-list" aria-busy="true">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="blog-skeleton-item"></div>
          ))}
        </div>
      ) : (
        <ul className="blog-posts-list" role="list">
          {posts.map((post, index) => (
            <li key={post.link || index} className="blog-post-item">
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-post-link"
                title={`Leer "${post.title}"`}
              >
                <div className="blog-post-index" aria-hidden="true">
                  0{index + 1}
                </div>
                <div className="blog-post-info">
                  <h3 className="blog-post-title">{post.title}</h3>
                  {post.pubDate && (
                    <span className="blog-post-date">{post.pubDate}</span>
                  )}
                </div>
                <div className="blog-post-icon" aria-hidden="true">
                  <ExternalLinkIcon size={16} />
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}

      {statusMessage && !isLive && (
        <p className="blog-sync-note" role="status">
          <span className="sync-dot"></span> {statusMessage}
        </p>
      )}

      {/* Button to blogdedavid.com as requested in PDF specifications */}
      <div className="blog-cta-wrapper">
        <a
          href={PERSONAL_INFO.blogUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="blog-visit-btn"
        >
          <span>Visitar el blog en {PERSONAL_INFO.blogUrl.replace('https://', '')}</span>
          <ArrowRightIcon size={18} />
        </a>
      </div>
    </section>
  );
};

