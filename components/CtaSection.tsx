'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';

interface CtaSectionProps {
  onOpenContact: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box reveal-up">
          <h2 className="cta-title">¿Listo para llevar tu negocio al siguiente nivel?</h2>
          <p className="cta-desc">
            Conversemos sobre tus ideas. Te ayudamos a construir la plataforma web que tu empresa merece.
          </p>
          <button className="btn btn-primary btn-lg" onClick={onOpenContact}>
            <span>Hablemos de tu proyecto</span>
            <MessageSquare style={{ width: 20, height: 20 }} />
          </button>
        </div>
      </div>
    </section>
  );
};
