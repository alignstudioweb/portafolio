import React from 'react';
import {
  Building2,
  Car,
  ShoppingBag,
  Store,
  Bot,
  Search,
  Palette,
  Workflow
} from 'lucide-react';

export interface PackageItem {
  icon: React.ComponentType<{ style?: React.CSSProperties }>;
  badge: string;
  title: string;
  target: string;
  time: string;
  tech: string;
  features: string[];
}

export interface ComplementaryItem {
  icon: React.ComponentType<{ style?: React.CSSProperties }>;
  title: string;
  desc: string;
}

export const mainPackages: PackageItem[] = [
  {
    icon: Building2,
    badge: 'POPULAR EN INDUSTRIAS',
    title: 'Web Institucional / Muestra',
    target: 'Fábricas, pymes metalmecánicas, industrias, agroservicios y consultoras.',
    time: '3 a 5 días',
    tech: 'React / Next.js + Vercel + WhatsApp',
    features: [
      'Diseño responsive adaptado a celulares y PC',
      'Páginas: Inicio, Nosotros, Productos/Servicios, Certificaciones',
      'Formulario de contacto con notificación email & WhatsApp',
      'Optimización SEO Local & Google Business Profile'
    ]
  },
  {
    icon: Car,
    badge: 'GESTIÓN EN TIEMPO REAL',
    title: 'Catálogo Web (Con CMS / Supabase)',
    target: 'Concesionarias de autos/motos, inmobiliarias, showrooms y maquinaria agrícola.',
    time: '7 a 12 días',
    tech: 'Next.js + Supabase DB/Auth + Vercel',
    features: [
      'Catálogo público dinámico con buscador y filtros avanzados',
      'Ficha detallada por producto con galería e info técnica',
      'Panel de Administración (Backoffice) simple e intuitivo',
      'Botón de consulta a WhatsApp con referencia pre-cargada'
    ]
  },
  {
    icon: ShoppingBag,
    badge: 'ALTO RENDIMIENTO',
    title: 'E-Commerce Custom a Medida',
    target: 'Marcas consolidadas, distribuidoras mayoristas/minoristas y negocios en expansión.',
    time: '15 a 25 días',
    tech: 'Next.js + Node.js + Supabase + MercadoPago SDK',
    features: [
      'Carrito persistente y checkout optimizado para altas conversiones',
      'Integración nativa con MercadoPago (cuotas, saldo, tarjetas)',
      'Panel Admin avanzado: stock, gestión de pedidos y reportes',
      'Integración con envíos (Andreani / Correo Argentino / Retiro)'
    ]
  },
  {
    icon: Store,
    badge: 'INICIO RÁPIDO',
    title: 'Tienda Nube (Setup & Capacitación)',
    target: 'Tiendas de indumentaria, pequeños comercios y emprendimientos locales.',
    time: '2 a 4 días',
    tech: 'Tienda Nube + Dominio Propio + MercadoPago',
    features: [
      'Configuración y personalización estética de plantilla profesional',
      'Diseño gráfico de banners institucionales y promocionales',
      'Vinculación de dominio propio (.com.ar) y pasarelas de pago',
      'Carga inicial del catálogo + Capacitación ejecutiva 1 a 1'
    ]
  }
];

export const complementaryServices: ComplementaryItem[] = [
  {
    icon: Bot,
    title: 'Integraciones con IA',
    desc: 'Asistentes virtuales y agentes de Inteligencia Artificial para atención y ventas 24/7.'
  },
  {
    icon: Search,
    title: 'SEO Local & Posicionamiento',
    desc: 'Optimización técnica de motores de búsqueda para dominar en Rafaela y región.'
  },
  {
    icon: Palette,
    title: 'Branding e Identidad Digital',
    desc: 'Diseño de logotipos, manuales de marca y activos gráficos para máxima autoridad.'
  },
  {
    icon: Workflow,
    title: 'Automatización & WhatsApp API',
    desc: 'Conexión de tu sitio con bases de datos, pasarelas de cobro y flujos automáticos.'
  }
];
