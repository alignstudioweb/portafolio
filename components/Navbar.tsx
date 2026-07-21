'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="brand-logo" aria-label="ALIGN STUDIO Home">
          <Image
            src="/assets/logo.png"
            alt="ALIGN STUDIO Logo"
            width={160}
            height={38}
            className="brand-logo-img"
            priority
          />
        </a>

        <div className="nav-actions">
          <button className="btn btn-primary" onClick={() => onOpenContact()}>
            <span>Comenzar un proyecto</span>
            <ArrowRight style={{ width: 18, height: 18 }} />
          </button>
        </div>
      </div>
    </header>
  );
};
