'use client';

import React from 'react';
import { Code2, Database, CreditCard, Store, Search, MessageSquareCode } from 'lucide-react';

export const AboutBento: React.FC = () => {
  const items = [
    {
      icon: Code2,
      title: 'Frontend de Alto Rendimiento',
      desc: 'Desarrollamos con React, Next.js y TailwindCSS para garantizar carga ultrarrápida, SEO perfecto y navegación fluida.'
    },
    {
      icon: Database,
      title: 'Backend Dynamic & Supabase',
      desc: 'Bases de datos PostgreSQL en Supabase, autenticación segura y paneles de administración dinámicos para catálogos.'
    },
    {
      icon: CreditCard,
      title: 'Integración de Cobros & Envíos',
      desc: 'Pasarelas nativas con MercadoPago (cuotas y saldo) y logística con Andreani, Correo Argentino o retiros.'
    },
    {
      icon: Store,
      title: 'Especialistas en Tienda Nube',
      desc: 'Puesta a punto express para emprendedores, diseño de banners institucionales y capacitación ejecutiva 1 a 1.'
    },
    {
      icon: Search,
      title: 'SEO Local & Google Business',
      desc: 'Posicionamiento estratégico en Google para destacar ante industrias, empresas y clientes de Rafaela y región.'
    },
    {
      icon: MessageSquareCode,
      title: 'Automatización & WhatsApp',
      desc: 'Formularios con alertas por e-mail y botones de consulta directa a WhatsApp pre-cargando la referencia de interés.'
    }
  ];

  return (
    <section className="about-section" id="sobre-nosotros">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="badge">NUESTRA PROPUESTA DE VALOR</span>
          <h2 className="section-title">Tecnología Moderna & Soluciones a la Medida de Tu Negocio</h2>
          <p className="section-subtitle">
            Combinamos ingeniería de software avanzada y visión comercial para transformar tu presencia en internet en un canal rentable.
          </p>
        </div>

        <div className="about-bento">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            const delayClass = `delay-${((index % 3) + 1) * 100}`;
            return (
              <div key={index} className={`about-bento-card reveal-up ${delayClass}`}>
                <div className="about-icon">
                  <IconComponent style={{ width: 26, height: 26 }} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
