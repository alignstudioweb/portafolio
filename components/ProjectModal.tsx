'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenContact
}) => {
  if (!project) return null;

  return (
    <div
      className={`modal-overlay ${project ? 'active' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card">
        <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">&times;</button>
        
        <span className="badge">{project.categoryLabel}</span>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 400, color: 'var(--color-align-royal)', margin: '0.75rem 0' }}>
          {project.title}
        </h3>

        <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.25rem', position: 'relative', height: 260 }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="600px"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
          {project.fullDesc}
        </p>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {project.tags.map((t, index) => (
              <span key={index} className="badge">{t}</span>
            ))}
          </div>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => {
            onClose();
            onOpenContact();
          }}
        >
          <span>Quiero un sitio como este</span>
          <ArrowRight style={{ width: 18, height: 18 }} />
        </button>
      </div>
    </div>
  );
};
