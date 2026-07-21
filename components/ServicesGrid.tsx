'use client';

import React from 'react';
import { Monitor, Code, Rocket, Layers, Sparkle, Search, RefreshCw, Bot, ShoppingBag, ArrowRight } from 'lucide-react';

interface ServicesGridProps {
  onOpenContact: (serviceName: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenContact }) => {
  const services = [
    { icon: Monitor, title: 'Diseño Web', desc: 'Maquetación web minimalista y moderna orientada a comunicar autoridad y elegancia.' },
    { icon: Code, title: 'Desarrollo Web', desc: 'Programación rápida y confiable para portales corporativos, plataformas y aplicaciones web.' },
    { icon: Rocket, title: 'Landing Pages', desc: 'Páginas de aterrizaje de alta conversión para lanzamientos y campañas publicitarias.' },
    { icon: Layers, title: 'UI / UX', desc: 'Prototipado interactivo, arquitectura de información y testeos de usabilidad.' },
    { icon: Sparkle, title: 'Branding', desc: 'Creación de identidad visual completa: logotipos, paletas de color y activos digitales.' },
    { icon: Search, title: 'SEO', desc: 'Optimización técnica para posicionar tu negocio en los primeros lugares de búsqueda.' },
    { icon: RefreshCw, title: 'Automatización', desc: 'Flujos automáticos para captura de prospectos y conexión con tus herramientas de trabajo.' },
    { icon: Bot, title: 'Integraciones con IA', desc: 'Implementación de asistentes inteligentes y modelos de IA en tu sitio web.' },
    { icon: ShoppingBag, title: 'E-Commerce', desc: 'Tiendas online seguras y optimizadas para ventas rápidas con pasarelas de pago.' }
  ];

  return (
    <section className="services-section" id="servicios">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="badge">NUESTROS SERVICIOS</span>
          <h2 className="section-title">Servicios de Desarrollo Web, UI/UX e Integración de IA</h2>
          <p className="section-subtitle">
            Soluciones integrales diseñadas con estándares internacionales de usabilidad y rendimiento.
          </p>
        </div>

        <div className="services-grid">
          {services.map((srv, index) => {
            const IconComponent = srv.icon;
            const delayClass = `delay-${((index % 3) + 1) * 100}`;
            return (
              <div key={index} className={`service-card reveal-up ${delayClass}`}>
                <div>
                  <div className="service-icon-box">
                    <IconComponent style={{ width: 24, height: 24 }} />
                  </div>
                  <h3>{srv.title}</h3>
                  <p>{srv.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenContact(srv.title)}
                  className="service-link"
                >
                  Solicitar servicio <ArrowRight style={{ width: 16, height: 16 }} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
