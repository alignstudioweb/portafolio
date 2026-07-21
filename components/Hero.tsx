'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, ArrowDown, Zap, ShieldCheck, Bot } from 'lucide-react';

interface HeroProps {
  onOpenContact: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-layout">
          
          {/* Hero Text */}
          <div className="hero-text-col reveal-up">
            <div className="badge">
              <span className="badge-dot"></span>
              <span>AGENCIA DIGITAL // ALTO IMPACTO</span>
            </div>

            <h1 className="hero-title">
              Agencia de <span className="text-gradient">Diseño & Desarrollo Web</span> Premium para Empresas.
            </h1>

            <p className="hero-subtitle">
              <span className="font-accent">
                &quot;En ALIGN STUDIO diseñamos y desarrollamos sitios web modernos, rápidos y estratégicos para empresas que buscan destacar en el mundo digital.&quot;
              </span>
            </p>

            <div className="hero-buttons">
              <button className="btn btn-primary btn-lg" onClick={() => onOpenContact()}>
                <span>Comenzar un proyecto</span>
                <Sparkles style={{ width: 20, height: 20 }} />
              </button>
              <a href="#portafolio" className="btn btn-secondary btn-lg">
                <span>Ver proyectos</span>
                <ArrowDown style={{ width: 18, height: 18 }} />
              </a>
            </div>

            {/* Feature Pills */}
            <div className="hero-features-list">
              <div className="hero-feature-item">
                <Zap className="hero-feature-icon" style={{ width: 18, height: 18 }} />
                <span>Velocidad Ultra Rápida</span>
              </div>
              <div className="hero-feature-item">
                <ShieldCheck className="hero-feature-icon" style={{ width: 18, height: 18 }} />
                <span>Diseño UI/UX Premium</span>
              </div>
              <div className="hero-feature-item">
                <Bot className="hero-feature-icon" style={{ width: 18, height: 18 }} />
                <span>Integración de IA</span>
              </div>
            </div>
          </div>

          {/* Hero Showcase */}
          <div className="hero-showcase reveal-up delay-200">
            <div className="hero-mockup-card">
              <div className="hero-status-tag">
                <span className="badge-dot" style={{ background: '#10B981' }}></span> Disponibles para proyectos
              </div>
              <Image
                src="/assets/hero_mockup.jpg"
                alt="ALIGN STUDIO - Agencia de Diseño y Desarrollo Web Mockup"
                width={600}
                height={420}
                className="hero-mockup-img"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
