'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutBento } from '@/components/AboutBento';
import { ServicesGrid } from '@/components/ServicesGrid';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { CatCarousel } from '@/components/CatCarousel';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { ProjectModal } from '@/components/ProjectModal';
import { Toast } from '@/components/Toast';
import { Project } from '@/types';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Diseño Web');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenContact = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const handleSuccessForm = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <main>
      <Navbar onOpenContact={handleOpenContact} />
      <Hero onOpenContact={handleOpenContact} />
      <AboutBento />
      <ServicesGrid onOpenContact={handleOpenContact} />
      <PortfolioGrid onOpenProjectModal={handleOpenProject} />
      <CatCarousel />
      <CtaSection onOpenContact={handleOpenContact} />
      <Footer />

      <ContactModal
        isOpen={isContactOpen}
        selectedService={selectedService}
        onClose={handleCloseContact}
        onSuccess={handleSuccessForm}
      />

      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
        onOpenContact={() => handleOpenContact('Diseño Web')}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </main>
  );
}
