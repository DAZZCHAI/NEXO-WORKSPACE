/* script.js — Nexo Workspace */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initStickyHeader();
  initScrollAnimations();
  initStaggerGrids();
  initSmoothScroll();
  initPricingTabs();
  initCounters();
  initPageReveal();

  if (document.getElementById('contact-form')) initContactForm();
});

/* ============================================================
   initNav — Navegación mobile
   ============================================================ */
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.querySelector('.nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('nav--open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav') && nav.classList.contains('nav--open')) {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('nav--open');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('nav--open');
      document.body.style.overflow = '';
      toggle.focus();
    }
  });

  document.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('nav--open');
      document.body.style.overflow = '';
    });
  });
}

/* ============================================================
   initStickyHeader — Header con cambio de estilo al scroll
   ============================================================ */
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('header--scrolled', window.scrollY > 60);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ============================================================
   initScrollAnimations — Animaciones al scroll con stagger
   ============================================================ */
function initScrollAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-animate]').forEach((el) => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = el.dataset.delay ? Number(el.dataset.delay) : 0;
        setTimeout(() => el.classList.add('is-visible'), delay);
        observer.unobserve(el);
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
}

/* ============================================================
   initStaggerGrids — Stagger automático para grids de cards
   ============================================================ */
function initStaggerGrids() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const grids = document.querySelectorAll(
    '.benefits__grid, .pricing__grid, .stats__grid'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const grid = entry.target;
        [...grid.children].forEach((child, i) => {
          const delay = i * 90;
          setTimeout(() => child.classList.add('is-visible'), delay);
        });
        observer.unobserve(grid);
      });
    },
    { threshold: 0.08 }
  );

  grids.forEach((grid) => {
    [...grid.children].forEach((child) => {
      child.setAttribute('data-animate', '');
    });
    observer.observe(grid);
  });
}

/* ============================================================
   initSmoothScroll — Scroll suave a anchors
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const headerHeight = document.querySelector('.header')?.offsetHeight ?? 0;
      const top =
        target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ============================================================
   initPageReveal — Animación de entrada del hero al cargar
   ============================================================ */
function initPageReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const targets = [
    '.hero__badge',
    '.hero__title',
    '.hero__subtitle',
    '.hero__actions',
    '.hero__microcopy',
    '.hero__social-proof',
    '.hero__image',
  ];

  targets.forEach((selector, i) => {
    const el = document.querySelector(selector);
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform =
      selector === '.hero__image' ? 'translateX(30px)' : 'translateY(24px)';
    el.style.transition = `opacity 0.65s ease ${i * 110}ms, transform 0.65s ease ${i * 110}ms`;

    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translate(0)';
      })
    );
  });
}

/* ============================================================
   initPricingTabs — Tabs de planes y precios
   ============================================================ */
function initPricingTabs() {
  const tabButtons = document.querySelectorAll('.pricing__tab');
  const tabPanels = document.querySelectorAll('.pricing__panel');

  if (!tabButtons.length || !tabPanels.length) return;

  function showTab(targetTab) {
    tabButtons.forEach((btn) => {
      const active = btn.dataset.tab === targetTab;
      btn.classList.toggle('pricing__tab--active', active);
      btn.setAttribute('aria-selected', String(active));
    });

    tabPanels.forEach((panel) => {
      if (panel.id === `tab-${targetTab}`) {
        panel.hidden = false;
        panel.classList.remove('pricing__panel--hidden');
      } else {
        panel.hidden = true;
        panel.classList.add('pricing__panel--hidden');
      }
    });
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => showTab(btn.dataset.tab));

    btn.addEventListener('keydown', (e) => {
      const tabs = [...tabButtons];
      const i = tabs.indexOf(btn);
      let next = null;
      if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
      else if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = tabs.length - 1;
      if (next !== null) {
        e.preventDefault();
        tabs[next].focus();
        showTab(tabs[next].dataset.tab);
      }
    });
  });

  // Mostrar el primer tab activo al cargar
  const firstActive = [...tabButtons].find(
    (btn) => btn.getAttribute('aria-selected') === 'true'
  ) || tabButtons[0];
  showTab(firstActive.dataset.tab);
}

/* ============================================================
   initCounters — Contadores animados en la sección de stats
   ============================================================ */
function initCounters() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const counters = document.querySelectorAll('.stat__number[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.target) || 0;
        const suffix = el.dataset.suffix ?? '';
        const duration = 1800;
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(ease * target) + suffix;
          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            el.textContent = target + suffix;
          }
        };

        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}

/* ============================================================
   initContactForm — Validación y envío del formulario
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const validators = {
    name: (v) => v.trim().length >= 2 || 'Ingresa tu nombre completo',
    email: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Ingresa un correo válido',
    phone: (v) =>
      /^[\d\s\-\+\(\)]{7,15}$/.test(v.trim()) ||
      'Ingresa un teléfono válido (mínimo 7 dígitos)',
    interest: (v) => v !== '' || 'Selecciona una opción',
    when: (v) => v !== '' || 'Selecciona cuándo podrías visitarnos',
  };

  function getErrorEl(input) {
    return form.querySelector(`#${input.id}-error`);
  }

  function validateField(input) {
    const rule = validators[input.name];
    if (!rule) return true;
    const result = rule(input.value);
    const group = input.closest('.form-group');
    const errorEl = getErrorEl(input);
    const isValid = result === true;
    group?.classList.toggle('form-group--error', !isValid);
    group?.classList.toggle('form-group--valid', isValid);
    if (errorEl) errorEl.textContent = isValid ? '' : result;
    input.setAttribute('aria-invalid', String(!isValid));
    return isValid;
  }

  form.querySelectorAll('input, textarea, select').forEach((input) => {
    let touched = false;

    input.addEventListener('blur', () => {
      touched = true;
      if (input.name in validators) validateField(input);
    });

    input.addEventListener('input', () => {
      if (touched && input.name in validators) validateField(input);
    });

    input.addEventListener('change', () => {
      if (input.tagName === 'SELECT') {
        touched = true;
        validateField(input);
      }
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fields = [...form.querySelectorAll('input, textarea, select')];
    const allValid = fields
      .filter((f) => f.name in validators)
      .every((f) => validateField(f));

    if (!allValid) {
      const firstError = form.querySelector(
        '.form-group--error input, .form-group--error select, .form-group--error textarea'
      );
      firstError?.focus();
      return;
    }

    const btn = form.querySelector('[type="submit"]');
    const successEl = document.getElementById('form-success');
    const originalText = btn.textContent;

    btn.disabled = true;
    btn.textContent = 'Enviando...';

    try {
      // Simulación de envío — reemplazar con endpoint real o Formspree
      await new Promise((resolve) => setTimeout(resolve, 1400));

      form.reset();

      fields.forEach((f) => {
        const group = f.closest('.form-group');
        group?.classList.remove('form-group--error', 'form-group--valid');
        f.removeAttribute('aria-invalid');
      });

      if (successEl) {
        successEl.hidden = false;
        successEl.focus();
        successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } catch {
      alert(
        'Hubo un error al enviar el formulario. Por favor intenta de nuevo o contáctanos al 477 198 5543.'
      );
    } finally {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  });
}