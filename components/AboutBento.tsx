'use client';

import React from 'react';
import { Compass, Code2, Layout, Palette, Workflow, Cpu } from 'lucide-react';

export const AboutBento: React.FC = () => {
  const items = [
    {
      icon: Compass,
      title: 'Diseño Estratégico',
      desc: 'Capturamos la atención de tus clientes ideales mediante una estructura clara, limpia y enfática en la conversión.'
    },
    {
      icon: Code2,
      title: 'Desarrollo Web',
      desc: 'Código limpio de última generación. Sitios web rápidos, seguros, responsivos y preparados para escalar.'
    },
    {
      icon: Layout,
      title: 'UI / UX de Vanguardia',
      desc: 'Interfaces dinámicas y elegantes inspiradas en Apple y Vercel, ofreciendo navegación fluida e intuitiva.'
    },
    {
      icon: Palette,
      title: 'Branding',
      desc: 'Identidades visuales inolvidables. Logotipos, paletas cromáticas y guías de estilo con personalidad propia.'
    },
    {
      icon: Workflow,
      title: 'Automatización',
      desc: 'Conectamos tu web con sistemas de pago, agendamiento y bases de datos para automatizar tus operaciones.'
    },
    {
      icon: Cpu,
      title: 'Inteligencia Artificial',
      desc: 'Agentes virtuales y soluciones inteligentes adaptadas a la medida de los objetivos de tu empresa.'
    }
  ];

  return (
    <section className="about-section" id="sobre-nosotros">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="badge">SOBRE NOSOTROS</span>
          <h2 className="section-title">Diseño web estratégico e ingeniería digital a la medida</h2>
          <p className="section-subtitle">
            Unimos creatividad avanzada y tecnología moderna para transformar la presencia de tu marca en un motor de ventas.
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
