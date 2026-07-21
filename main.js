/* ==========================================================================
   ALIGN STUDIO - Interactive JavaScript
   Updated with Cat Process Carousel, Simplified Navbar, Scroll Reveal, and Modals
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js-enabled');
  initNavbarScroll();
  initScrollReveal();
  initPortfolioFilter();
  initCatCarousel();
  initModals();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. Navbar Scroll Effect
   -------------------------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   2. Scroll Reveal Animations
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-up');
  
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   3. Portfolio Filtering & Modal
   -------------------------------------------------------------------------- */
const portfolioData = [
  {
    id: 1,
    title: "Apex Cloud SaaS Platform",
    category: "desarrollo",
    categoryLabel: "Desarrollo Web & SaaS",
    image: "assets/portfolio_1.jpg",
    desc: "Plataforma web de analítica en tiempo real para startups tecnológicas con arquitectura ultra rápida.",
    fullDesc: "Apex Cloud es una plataforma diseñada con Next.js y TailwindCSS enfocada en velocidad y análisis de métricas en tiempo real. Incluye integración de base de datos distribuida, autenticación sin fricción y dashboards adaptativos de alta fidelidad.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Analytics"]
  },
  {
    id: 2,
    title: "Verve Luxury E-Commerce",
    category: "diseno",
    categoryLabel: "Diseño Web & E-Commerce",
    image: "assets/portfolio_2.jpg",
    desc: "Experiencia de compra minimalista de alta gama inspirada en el diseño nórdico.",
    fullDesc: "Rediseño integral de e-commerce enfocado en la conversión premium. Diseñado con una interfaz fluida, animación de productos en 3D, checkout optimizado en 1-paso y sistema de recomendación inteligente.",
    tags: ["UI/UX", "Shopify Plus", "WebGL", "Branding"]
  },
  {
    id: 3,
    title: "Krypton AI Workflow Engine",
    category: "ia",
    categoryLabel: "Inteligencia Artificial & Auto",
    image: "assets/portfolio_3.jpg",
    desc: "Sistema de automatización de flujos de trabajo con agentes IA visuales y procesamiento masivo.",
    fullDesc: "Plataforma de automatización que permite a empresas conectar modelos LLM como OpenAI y Claude con sus bases de conocimientos internas mediante un editor de nodos interactivo y ejecuciones paralelas.",
    tags: ["OpenAI API", "Node.js", "Python", "Automation"]
  },
  {
    id: 4,
    title: "Nexus Fintech Rebrand & Web",
    category: "branding",
    categoryLabel: "Branding & Web Strategy",
    image: "assets/portfolio_4.jpg",
    desc: "Sistema de identidad corporativa global y presencia digital interactiva para neobanco de inversión.",
    fullDesc: "Desarrollo de estrategia de marca completa, sistema de diseño escalable, manual de marca interactivo y desarrollo web corporativo optimizado para conversión B2B.",
    tags: ["Branding", "UI/UX", "Vite", "Design System"]
  }
];

function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      renderPortfolio(filter);
    });
  });
}

function renderPortfolio(filter = 'todos') {
  const portfolioGrid = document.querySelector('.portfolio-grid');
  if (!portfolioGrid) return;

  const filteredItems = filter === 'todos' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);

  portfolioGrid.innerHTML = filteredItems.map(item => `
    <div class="portfolio-card reveal-up" onclick="openProjectModal(${item.id})">
      <div class="portfolio-img-wrapper">
        <img src="${item.image}" alt="${item.title}" class="portfolio-img" loading="lazy">
        <div class="portfolio-overlay">
          <span style="background:var(--bg-primary); padding:0.5rem 1rem; border-radius:999px; font-weight:700; color:var(--color-align-royal);">
            Ver detalle →
          </span>
        </div>
      </div>
      <div class="portfolio-content">
        <span class="portfolio-tag">${item.categoryLabel}</span>
        <h3 class="portfolio-title">${item.title}</h3>
        <p style="color:var(--text-muted); font-size:0.925rem;">${item.desc}</p>
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
  initScrollReveal();
}

/* --------------------------------------------------------------------------
   4. Proceso Carousel con Gatitos 🐱
   -------------------------------------------------------------------------- */
function initCatCarousel() {
  const track = document.getElementById('catCarouselTrack');
  const slides = document.querySelectorAll('.cat-slide');
  const prevBtn = document.getElementById('catPrevBtn');
  const nextBtn = document.getElementById('catNextBtn');
  const dotsContainer = document.getElementById('catCarouselDots');

  if (!track || !slides.length) return;

  let currentIndex = 0;
  const slideCount = slides.length;

  // Create dots
  dotsContainer.innerHTML = Array.from({ length: slideCount }).map((_, i) => 
    `<span class="cat-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`
  ).join('');

  const dots = dotsContainer.querySelectorAll('.cat-dot');

  const updateSlide = (index) => {
    currentIndex = (index + slideCount) % slideCount;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  };

  if (prevBtn) prevBtn.addEventListener('click', () => updateSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => updateSlide(currentIndex + 1));

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'));
      updateSlide(idx);
    });
  });

  // Auto slide every 6 seconds
  let autoTimer = setInterval(() => updateSlide(currentIndex + 1), 6000);

  const resetTimer = () => {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => updateSlide(currentIndex + 1), 6000);
  };

  if (prevBtn) prevBtn.addEventListener('click', resetTimer);
  if (nextBtn) nextBtn.addEventListener('click', resetTimer);
}

/* --------------------------------------------------------------------------
   5. Modals & Contact Form
   -------------------------------------------------------------------------- */
function initModals() {
  const closeBtns = document.querySelectorAll('[data-close-modal]');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) modal.classList.remove('active');
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  });
}

window.openContactModal = function(defaultService = '') {
  const modal = document.getElementById('contactModal');
  if (!modal) return;

  if (defaultService) {
    const serviceSelect = document.getElementById('modalService');
    if (serviceSelect) serviceSelect.value = defaultService;
  }

  modal.classList.add('active');
};

window.openProjectModal = function(projectId) {
  const item = portfolioData.find(p => p.id === projectId);
  if (!item) return;

  const modal = document.getElementById('projectModal');
  if (!modal) return;

  document.getElementById('modalProjectTag').textContent = item.categoryLabel;
  document.getElementById('modalProjectTitle').textContent = item.title;
  document.getElementById('modalProjectImg').src = item.image;
  document.getElementById('modalProjectDesc').textContent = item.fullDesc;
  
  const tagsContainer = document.getElementById('modalProjectTags');
  tagsContainer.innerHTML = item.tags.map(t => `<span class="badge">${t}</span>`).join('');

  modal.classList.add('active');
};

function initContactForm() {
  const form = document.getElementById('projectContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const modal = document.getElementById('contactModal');
    if (modal) modal.classList.remove('active');

    form.reset();
    showToast("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.querySelector('.toast-msg').textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}
