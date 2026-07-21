'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const CatCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      step: 'PASO // 01',
      title: '1. Descubrimiento',
      desc: 'Analizamos los objetivos de tu negocio, tu audiencia clave y requerimientos técnicos para trazar la hoja de ruta perfecta para tu proyecto.',
      img: '/assets/cat_discovery.jpg',
      alt: 'Proceso de Desarrollo Web - Paso 1: Descubrimiento y Requerimientos'
    },
    {
      step: 'PASO // 02',
      title: '2. Estrategia',
      desc: 'Diseñamos la estructura de contenidos, los wireframes iniciales y el plan UX pensado en convertir a tus visitantes en clientes fieles.',
      img: '/assets/cat_strategy.jpg',
      alt: 'Proceso de Desarrollo Web - Paso 2: Estrategia de Contenidos y UX'
    },
    {
      step: 'PASO // 03',
      title: '3. Diseño',
      desc: 'Construimos la interfaz gráfica refinada con tipografías elegantes, animaciones fluidas y microinteracciones de nivel premium.',
      img: '/assets/cat_design.jpg',
      alt: 'Proceso de Diseño Web - Paso 3: Prototipado e Interfaz UI/UX'
    },
    {
      step: 'PASO // 04',
      title: '4. Desarrollo y Lanzamiento',
      desc: 'Programación limpia, optimización SEO de alta velocidad, pruebas finales y puesta en marcha oficial de tu nueva plataforma.',
      img: '/assets/cat_launch.jpg',
      alt: 'Proceso de Desarrollo Web - Paso 4: Programación, Optimización SEO y Lanzamiento'
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
          <span className="badge">🐱 METODOLOGÍA // ALIGN</span>
          <h2 className="section-title">Nuestro Proceso de Desarrollo Web Paso a Paso</h2>
          <p className="section-subtitle">
            Conoce cómo transformamos tu proyecto en una realidad digital de alto nivel.
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
