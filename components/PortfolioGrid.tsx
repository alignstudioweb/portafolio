'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Filter, ChevronDown } from 'lucide-react';
import { Project } from '@/types';

export const portfolioData: Project[] = [
  {
    id: 1,
    title: 'Portal Industrial & Metalmecánico Pyme',
    category: 'desarrollo',
    categoryLabel: 'Web Institucional / Muestra',
    image: '/assets/portfolio_1.jpg',
    desc: 'Sitio corporativo con catálogo de maquinaria, certificaciones de calidad y vías de contacto directo por WhatsApp.',
    fullDesc: 'Desarrollado para una importante pyme industrial con React, Next.js y TailwindCSS. Presenta capacidad de producción, certificaciones ISO, mapa de ubicación estratégica y canal directo de presupuestos.',
    tags: ['Web Institucional', 'Next.js', 'SEO Local', 'Pyme Metalmecánica']
  },
  {
    id: 2,
    title: 'Catálogo Autopatio & Inmobiliaria Dinámico',
    category: 'diseno',
    categoryLabel: 'Catálogo Web (Con CMS / Supabase)',
    image: '/assets/portfolio_2.jpg',
    desc: 'Catálogo de vehículos y propiedades con buscador inteligente, filtros avanzados y panel de administración en tiempo real.',
    fullDesc: 'Plataforma de gestión de activos desarrollada con Next.js y Supabase (PostgreSQL, Storage). Permite al equipo comercial actualizar inventario, subir galerías de fotos y recibir consultas pre-referenciadas por WhatsApp.',
    tags: ['Catálogo CMS', 'Supabase', 'Buscador Avanzado', 'WhatsApp API']
  },
  {
    id: 3,
    title: 'Plataforma E-Commerce & MercadoPago SDK',
    category: 'ia',
    categoryLabel: 'E-Commerce Custom a Medida',
    image: '/assets/portfolio_3.jpg',
    desc: 'Tienda transaccional con checkout optimizado, cobros automatizados con MercadoPago y gestión de envíos.',
    fullDesc: 'E-Commerce custom diseñado a la medida con Next.js, Node.js y Supabase. Cuenta con integración nativa de cuotas MercadoPago, control automático de stock y notificaciones de envío.',
    tags: ['E-Commerce', 'MercadoPago', 'Node.js', 'Control Stock']
  },
  {
    id: 4,
    title: 'Setup & Design Tienda Nube Express',
    category: 'branding',
    categoryLabel: 'Tienda Nube (Setup & Capacitación)',
    image: '/assets/portfolio_4.jpg',
    desc: 'Configuración estética, banners institucionales, pasarelas de pago y capacitación 1 a 1 para marca de indumentaria.',
    fullDesc: 'Puesta a punto completa en tiempo récord de 72 hs. Incluye vinculación de dominio .com.ar, configuración de cuotas sin interés y capacitación ejecutiva para gestión autónoma.',
    tags: ['Tienda Nube', 'Branding Banners', 'Setup Express', 'Capacitación 1a1']
  }
];

interface PortfolioGridProps {
  onOpenProjectModal: (project: Project) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onOpenProjectModal }) => {
  const [filter, setFilter] = useState<string>('todos');

  const filterButtons = [
    { label: 'Todos los Desarrollos', key: 'todos' },
    { label: 'Webs Institucionales', key: 'desarrollo' },
    { label: 'Catálogos Dinámicos', key: 'diseno' },
    { label: 'E-Commerce Custom', key: 'ia' },
    { label: 'Tienda Nube Setup', key: 'branding' }
  ];

  const filteredProjects = filter === 'todos'
    ? portfolioData
    : portfolioData.filter(p => p.category === filter);

  return (
    <section className="portfolio-section" id="portafolio">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="badge">CASOS DE ÉXITO & PORTAFOLIO</span>
          <h2 className="section-title">Proyectos Desarrollados por Nuestro Equipo</h2>
          <p className="section-subtitle">
            Ejemplos reales de soluciones web diseñadas para resolver necesidades comerciales e industriales.
          </p>
        </div>

        {/* Desktop Filter Segmented Bar */}
        <div className="portfolio-filters-desktop reveal-up" role="tablist" aria-label="Filtros de portafolio">
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              type="button"
              role="tab"
              aria-selected={filter === btn.key}
              className={`filter-btn ${filter === btn.key ? 'active' : ''}`}
              onClick={() => setFilter(btn.key)}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Mobile Dropdown Control */}
        <div className="portfolio-filters-mobile reveal-up">
          <div className="portfolio-dropdown-box">
            <Filter style={{ width: 18, height: 18, color: 'var(--color-align-royal)', flexShrink: 0 }} />
            <select
              className="portfolio-select-dropdown"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              aria-label="Filtrar proyectos de portafolio"
            >
              {filterButtons.map((btn) => (
                <option key={btn.key} value={btn.key}>
                  {btn.label}
                </option>
              ))}
            </select>
            <ChevronDown className="portfolio-dropdown-icon" style={{ width: 18, height: 18 }} />
          </div>
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
                      padding: '0.4rem 0.85rem',
                      borderRadius: '999px',
                      fontSize: '0.8rem',
                      fontWeight: 400,
                      color: 'var(--color-align-royal)'
                    }}>
                      Ver detalle del proyecto →
                    </span>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="portfolio-tag">{project.categoryLabel}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem', fontWeight: 300 }}>{project.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
