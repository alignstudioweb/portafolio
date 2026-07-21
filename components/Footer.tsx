'use client';

import React from 'react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-thin-container">
        
        <a href="#" className="footer-thin-brand" aria-label="ALIGN STUDIO Footer">
          <Image
            src="/assets/logo.png"
            alt="ALIGN STUDIO Logo"
            width={120}
            height={30}
            className="footer-logo-img"
          />
        </a>

        <div className="footer-thin-links">
          <a href="#sobre-nosotros" className="footer-thin-link">Nosotros</a>
          <a href="#servicios" className="footer-thin-link">Servicios</a>
          <a href="#portafolio" className="footer-thin-link">Portafolio</a>
          <a href="#proceso" className="footer-thin-link">Proceso</a>
          <a href="mailto:contacto@alignstudio.design" className="footer-thin-link">contacto@alignstudio.design</a>
        </div>

        <div className="footer-thin-copy">
          &copy; 2026 ALIGN STUDIO. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
};
