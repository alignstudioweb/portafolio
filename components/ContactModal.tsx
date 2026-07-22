'use client';

import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { ContactFormData, ApiResponse } from '@/types';

interface ContactModalProps {
  isOpen: boolean;
  selectedService: string;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  selectedService,
  onClose,
  onSuccess
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: 'Web Institucional / Muestra',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data: ApiResponse = await response.json();

      if (response.ok && data.success) {
        onClose();
        setFormData({ name: '', email: '', service: 'Web Institucional / Muestra', message: '' });
        onSuccess(data.message);
      } else {
        setErrorMsg(data.message || 'Error al enviar el mensaje.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Error de conexión con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? 'active' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card">
        <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">&times;</button>
        
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span className="badge">Solicitud de Presupuesto</span>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--color-align-royal)', marginTop: '0.5rem' }}>
            Conversemos sobre tu proyecto
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Te enviamos una propuesta detallada en menos de 24 horas.</p>
        </div>

        {errorMsg && (
          <div style={{ padding: '0.75rem', background: '#FEE2E2', color: '#991B1B', borderRadius: 'var(--radius-md)', marginBottom: '1rem', fontSize: '0.875rem' }}>
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="modalName">Nombre completo o Empresa</label>
            <input
              type="text"
              id="modalName"
              className="form-input"
              placeholder="Ej: Industrias Metalúrgicas S.A. / Juan Pérez"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="modalEmail">Correo electrónico de contacto</label>
            <input
              type="email"
              id="modalEmail"
              className="form-input"
              placeholder="contacto@tuempresa.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="modalService">Paquete o Servicio de Interés</label>
            <select
              id="modalService"
              className="form-select"
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="Web Institucional / Muestra">1. Web Institucional / Muestra (Fábricas / Pymes)</option>
              <option value="Catálogo Web (Con CMS / Supabase)">2. Catálogo Web Dinámico (Concesionarias / Inmobiliarias)</option>
              <option value="E-Commerce Custom a Medida">3. E-Commerce Custom a Medida (MercadoPago + Node)</option>
              <option value="Tienda Nube (Setup & Capacitación)">4. Tienda Nube Express (Setup & Capacitación 1a1)</option>
              <option value="Integraciones con IA">Integraciones con Inteligencia Artificial</option>
              <option value="SEO Local & Posicionamiento">SEO Local & Google Business Profile</option>
              <option value="Branding e Identidad Digital">Branding e Identidad Visual Digital</option>
              <option value="Automatización & WhatsApp API">Automatización de Procesos & WhatsApp API</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="modalMsg">Detalles del requerimiento</label>
            <textarea
              id="modalMsg"
              className="form-textarea"
              placeholder="Cuéntanos brevemente sobre los objetivos, catálogo o funcionalidades que necesitas..."
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={loading}
            style={{ width: '100%', marginTop: '0.75rem', opacity: loading ? 0.7 : 1 }}
          >
            <span>{loading ? 'Enviando solicitud...' : 'Enviar Solicitud de Presupuesto'}</span>
            <Send style={{ width: 18, height: 18 }} />
          </button>
        </form>
      </div>
    </div>
  );
};
