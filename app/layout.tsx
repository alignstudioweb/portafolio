import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://alignstudio.design'),
  title: 'ALIGN STUDIO — Agencia de Diseño & Desarrollo Web Corporativo',
  description: 'En ALIGN STUDIO somos una agencia especializada en diseño y desarrollo web premium, tiendas online e-commerce e integración de Inteligencia Artificial para empresas y startups.',
  keywords: [
    'agencia diseño web',
    'desarrollo web corporativo',
    'diseño ui ux',
    'landing pages alta conversión',
    'desarrollo ecommerce',
    'integraciones ia',
    'agencia web empresas'
  ],
  authors: [{ name: 'ALIGN STUDIO' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://alignstudio.design/',
    title: 'ALIGN STUDIO — Agencia de Diseño & Desarrollo Web Corporativo',
    description: 'Diseñamos y desarrollamos sitios web modernos, rápidos y estratégicos enfocados en acelerar el crecimiento de tu marca.',
    images: [{ url: '/assets/hero_mockup.jpg', width: 1200, height: 630, alt: 'ALIGN STUDIO Mockup' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALIGN STUDIO — Agencia de Diseño & Desarrollo Web Corporativo',
    description: 'Diseñamos y desarrollamos sitios web modernos, rápidos y estratégicos enfocados en acelerar el crecimiento de tu marca.',
    images: ['/assets/hero_mockup.jpg']
  },
  icons: {
    icon: '/assets/logo.png'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  'name': 'ALIGN STUDIO',
  'image': '/assets/logo.png',
  'url': 'https://alignstudio.design/',
  'priceRange': '$$$',
  'description': 'Agencia especializada en diseño web, desarrollo web corporativo, UI/UX, e-commerce e integraciones con Inteligencia Artificial.'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&family=Outfit:wght@200;300;400;500&family=Plus+Jakarta+Sans:wght@200;300;400;500;600&family=Space+Grotesk:wght@300;400;500&family=Unbounded:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
