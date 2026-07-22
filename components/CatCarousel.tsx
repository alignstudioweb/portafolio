'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const CatCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      step: 'PASO // 01',
      title: '1. Primer Contacto & Briefing',
      desc: 'Analizamos los objetivos de tu negocio, requerimientos del catálogo o tienda y audiencia clave para seleccionar el paquete web ideal para tu empresa.',
      img: '/assets/cat_discovery.jpg',
      alt: 'Metodología ALIGN STUDIO - Paso 1: Briefing y Análisis de Requerimientos Comercial'
    },
    {
      step: 'PASO // 02',
      title: '2. Propuesta Comercial & Estrategia',
      desc: 'Diseñamos la estructura de contenidos, propuesta de presupuesto transparente, tiempos de entrega garantizados y plan de arquitectura técnica.',
      img: '/assets/cat_strategy.jpg',
      alt: 'Metodología ALIGN STUDIO - Paso 2: Propuesta Comercial y Estrategia UX'
    },
    {
      step: 'PASO // 03',
      title: '3. Desarrollo & Integración',
      desc: 'Construimos la plataforma con React, Next.js y Supabase/MercadoPago. Interfaz refinada, panel de administración intuitivo y velocidad ultra rápida.',
      img: '/assets/cat_design.jpg',
      alt: 'Metodología ALIGN STUDIO - Paso 3: Desarrollo Web, UI/UX y Panel Backend'
    },
    {
      step: 'PASO // 04',
      title: '4. Entrega, Salida a Producción & Capacitación',
      desc: 'Puesta en marcha del dominio (.com.ar), optimización SEO local, pruebas de pasarelas de pago y capacitación 1 a 1 para la gestión autónoma del sitio.',
      img: '/assets/cat_launch.jpg',
      alt: 'Metodología ALIGN STUDIO - Paso 4: Salida a Producción, SEO Local y Capacitación'
    }
  ];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section className="cat-process-section" id="proceso">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="badge">🐱 METODOLOGÍA // ALIGN STUDIO</span>
          <h2 className="section-title">Flujo de Trabajo Comercial & Desarrollo Paso a Paso</h2>
          <p className="section-subtitle">
            Transparencia total desde la toma de requerimientos hasta el lanzamiento y capacitación de tu equipo.
          </p>
        </div>

        <div className="cat-carousel-wrapper reveal-up">
          <div className="cat-carousel-track-container">
            <div
              className="cat-carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="cat-slide">
                  <div className="cat-slide-img-box">
                    <Image
                      src={slide.img}
                      alt={slide.alt}
                      width={400}
                      height={340}
                      className="cat-slide-img"
                    />
                  </div>
                  <div>
                    <span className="cat-slide-step-num">{slide.step}</span>
                    <h3 className="cat-slide-title">{slide.title}</h3>
                    <p className="cat-slide-desc">{slide.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cat-carousel-nav">
            <button className="cat-carousel-btn" onClick={handlePrev} aria-label="Anterior">
              <ArrowLeft style={{ width: 20, height: 20 }} />
            </button>

            <div className="cat-carousel-dots">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`cat-dot ${i === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>

            <button className="cat-carousel-btn" onClick={handleNext} aria-label="Siguiente">
              <ArrowRight style={{ width: 20, height: 20 }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
