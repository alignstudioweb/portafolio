'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { mainPackages, complementaryServices } from '@/lib/servicesData';

interface ServicesGridProps {
  onOpenContact: (serviceName: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenContact }) => {
  return (
    <section className="services-section" id="servicios">
      <div className="container">
        
        <div className="section-header reveal-up">
          <span className="badge">NUESTRA OFERTA COMERCIAL</span>
          <h2 className="section-title">Paquetes de Desarrollo Web & Soluciones Digitales</h2>
          <p className="section-subtitle">
            Propuestas estratégicas diseñadas a la medida de comercios, pymes e industrias del polo productivo.
          </p>
        </div>

        <div className="main-packages-grid">
          {mainPackages.map((pkg, index) => {
            const IconComp = pkg.icon;
            return (
              <div key={index} className="package-card reveal-up">
                <div>
                  <div className="package-card-header">
                    <div className="service-icon-box" style={{ margin: 0 }}>
                      <IconComp style={{ width: 26, height: 26 }} />
                    </div>
                    <span className="badge" style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem' }}>
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', fontWeight: 400, color: 'var(--color-align-royal)', marginBottom: '0.5rem' }}>
                    {pkg.title}
                  </h3>

                  <p style={{ fontSize: '0.825rem', fontWeight: 300, color: 'var(--text-muted)', marginBottom: '1.25rem', minHeight: '40px' }}>
                    <strong>Ideal para:</strong> {pkg.target}
                  </p>

                  <div className="package-time-badge">
                    <Clock style={{ width: 16, height: 16 }} />
                    <span>Desarrollo: {pkg.time}</span>
                  </div>

                  <ul className="package-feature-list">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="package-feature-item">
                        <CheckCircle style={{ width: 16, height: 16, color: 'var(--color-cyan-bright)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenContact(pkg.title)}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Solicitar Propuesta</span>
                  <ArrowRight style={{ width: 16, height: 16 }} />
                </button>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge" style={{ background: 'rgba(37, 99, 235, 0.06)' }}>SERVICIOS COMPLEMENTARIOS</span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 400, color: 'var(--color-align-royal)', marginTop: '0.5rem' }}>
              Servicios Especializados de Alto Valor
            </h3>
          </div>

          <div className="comp-services-grid">
            {complementaryServices.map((comp, cIdx) => {
              const CompIcon = comp.icon;
              return (
                <div
                  key={cIdx}
                  className="about-bento-card reveal-up"
                  style={{ padding: '1.5rem', cursor: 'pointer' }}
                  onClick={() => onOpenContact(comp.title)}
                >
                  <div className="about-icon" style={{ width: 44, height: 44, marginBottom: '1rem' }}>
                    <CompIcon style={{ width: 22, height: 22 }} />
                  </div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 400, color: 'var(--color-align-royal)', marginBottom: '0.4rem' }}>
                    {comp.title}
                  </h4>
                  <p style={{ fontSize: '0.825rem', fontWeight: 300, color: 'var(--text-muted)' }}>
                    {comp.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
