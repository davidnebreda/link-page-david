import React from 'react';
import { BlogSection } from '../../components/Blog/BlogSection';
import { ContactSection } from '../../components/Contact/ContactSection';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { QuickNav } from '../../components/Navigation/QuickNav';
import { ProjectsSection } from '../../components/Projects/ProjectsSection';
import { ServicesSection } from '../../components/Services/ServicesSection';
import { SocialSection } from '../../components/Social/SocialSection';
import './HomeView.css';

const HomeView: React.FC = () => {
  return (
    <div className="homeview-wrapper">
      {/* Dynamic background lighting elements */}
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-glow glow-1"></div>
        <div className="ambient-glow glow-2"></div>
        <div className="ambient-glow glow-3"></div>
      </div>

      <div className="homeview-container">
        {/* Cabecera con foto, nombre y ocupación "Full Stack Developer" */}
        <Header />

        {/* Barra de navegación rápida y selector de tema */}
        <QuickNav />

        {/* Contenido principal con las 5 secciones requeridas */}
        <main className="homeview-main">
          {/* Sección 1: Blog con las 6 últimas entradas RSS */}
          <BlogSection />

          {/* Sección 2: Enlaces a Redes Sociales */}
          <SocialSection />

          {/* Sección 3: Proyectos (Curiocine y El mundo de Ada) */}
          <ProjectsSection />

          {/* Sección 4: Servicios profesionales */}
          <ServicesSection />

          {/* Sección 5: Formulario de contacto hacia dnebreda@blogdedavid.com */}
          <ContactSection />
        </main>
      </div>

      {/* Pie de página con enlaces y copyright */}
      <Footer />
    </div>
  );
};

export default HomeView;
