import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from './Icons';
import './ThemeToggle.css';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      type="button"
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
      title={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
    >
      <span className="theme-toggle-icon">
        {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
      </span>
      <span className="theme-toggle-text">
        {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
      </span>
    </button>
  );
};

