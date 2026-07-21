'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/types';

export const portfolioData: Project[] = [
  {
    id: 1,
    title: 'Apex Cloud SaaS Platform',
    category: 'desarrollo',
    categoryLabel: 'Desarrollo Web & SaaS',
    image: '/assets/portfolio_1.jpg',
    desc: 'Plataforma web de analítica en tiempo real para startups tecnológicas con arquitectura ultra rápida.',
    fullDesc: 'Apex Cloud es una plataforma diseñada con Next.js y TailwindCSS enfocada en velocidad y análisis de métricas en tiempo real. Incluye integración de base de datos distribuida, autenticación sin fricción y dashboards adaptativos de alta fidelidad.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Analytics']
  },
  {
    id: 2,
    title: 'Verve Luxury E-Commerce',
    category: 'diseno',
    categoryLabel: 'Diseño Web & E-Commerce',
    image: '/assets/portfolio_2.jpg',
    desc: 'Experiencia de compra minimalista de alta gama inspirada en el diseño nórdico.',
    fullDesc: 'Rediseño integral de e-commerce enfocado en la conversión premium. Diseñado con una interfaz fluida, animación de productos en 3D, checkout optimizado en 1-paso y sistema de recomendación inteligente.',
    tags: ['UI/UX', 'Shopify Plus', 'WebGL', 'Branding']
  },
  {
    id: 3,
    title: 'Krypton AI Workflow Engine',
    category: 'ia',
    categoryLabel: 'Inteligencia Artificial & Auto',
    image: '/assets/portfolio_3.jpg',
    desc: 'Sistema de automatización de flujos de trabajo con agentes IA visuales y procesamiento masivo.',
    fullDesc: 'Plataforma de automatización que permite a empresas conectar modelos LLM como OpenAI y Claude con sus bases de conocimientos internas mediante un editor de nodos interactivo y ejecuciones paralelas.',
    tags: ['OpenAI API', 'Node.js', 'Python', 'Automation']
  },
  {
    id: 4,
    title: 'Nexus Fintech Rebrand & Web',
    category: 'branding',
    categoryLabel: 'Branding & Web Strategy',
    image: '/assets/portfolio_4.jpg',
    desc: 'Sistema de identidad corporativa global y presencia digital interactiva para neobanco de inversión.',
    fullDesc: 'Desarrollo de estrategia de marca completa, sistema de diseño escalable, manual de marca interactivo y desarrollo web corporativo optimizado para conversión B2B.',
    tags: ['Branding', 'UI/UX', 'Vite', 'Design System']
  }
];

interface PortfolioGridProps {
  onOpenProjectModal: (project: Project) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onOpenProjectModal }) => {
  const [filter, setFilter] = useState<string>('todos');

  const filterButtons = [
    { label: 'Todos', key: 'todos' },
    { label: 'Desarrollo Web', key: 'desarrollo' },
    { label: 'Diseño Web & E-Commerce', key: 'diseno' },
    { label: 'IA & Automatización', key: 'ia' },
    { label: 'Branding', key: 'branding' }
  ];

  const filteredProjects = filter === 'todos'
    ? portfolioData
    : portfolioData.filter(p => p.category === filter);

  return (
    <section className="portfolio-section" id="portafolio">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="badge">PORTAFOLIO DESTACADO</span>
          <h2 className="section-title">Nuestros proyectos de exhibición</h2>
          <p className="section-subtitle">
            Explora los desarrollos y conceptos de interfaz creados por nuestro equipo.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="portfolio-filters reveal-up">
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              className={`filter-btn ${filter === btn.key ? 'active' : ''}`}
              onClick={() => setFilter(btn.key)}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => {
            const delayClass = `delay-${((index % 3) + 1) * 100}`;
            return (
              <div
                key={project.id}
                className={`portfolio-card reveal-up ${delayClass}`}
                onClick={() => onOpenProjectModal(project)}
              >
                <div className="portfolio-img-wrapper">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="portfolio-img"
                  />
                  <div className="portfolio-overlay">
                    <span style={{
                      background: 'var(--bg-primary)',
                      padding: '0.5rem 1rem',
                      borderRadius: '999px',
                      fontWeight: 700,
                      color: 'var(--color-align-royal)'
                    }}>
                      Ver detalle →
                    </span>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="portfolio-tag">{project.categoryLabel}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>{project.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
