/**
 * ThinBaker — Personal Brand Website
 * JavaScript Interactions
 *
 * Features:
 *  - AOS (Animate On Scroll) initialization
 *  - Sticky nav: blur backdrop on scroll
 *  - Mobile navigation toggle (hamburger → X)
 *  - Active nav link highlighting via IntersectionObserver
 *  - Back-to-top button visibility
 *  - Footer dynamic copyright year
 *  - Graceful degradation for reduced-motion preferences
 */

(function () {
  'use strict';

  /* ----------------------------------------------------------------
     Helpers
  ---------------------------------------------------------------- */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------------
     1. AOS — Animate On Scroll
  ---------------------------------------------------------------- */
  function initAOS() {
    if (typeof AOS === 'undefined') return;

    AOS.init({
      duration:   650,
      easing:     'cubic-bezier(0.4, 0, 0.2, 1)',
      once:       true,
      offset:     60,
      disable:    prefersReducedMotion ? true : false,
    });
  }

  /* ----------------------------------------------------------------
     2. Navigation — scroll-aware backdrop blur
  ---------------------------------------------------------------- */
  function initNavScroll() {
    const nav = $('#nav');
    if (!nav) return;

    const SCROLL_THRESHOLD = 20;

    function onScroll() {
      if (window.scrollY > SCROLL_THRESHOLD) {
        nav.classList.add('is-scrolled');
      } else {
        nav.classList.remove('is-scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run on init
  }

  /* ----------------------------------------------------------------
     3. Mobile Navigation Toggle
  ---------------------------------------------------------------- */
  function initMobileNav() {
    const toggle = $('#navToggle');
    const menu   = $('#navMenu');
    if (!toggle || !menu) return;

    function getNavLabel(key) {
      if (window.translations && window.__currentLang) {
        const t = window.translations[window.__currentLang];
        if (t && t[key]) return t[key];
      }
      return key === 'nav_toggle_close' ? 'Cerrar menú de navegación' : 'Abrir menú de navegación';
    }

    function openMenu() {
      menu.classList.add('is-open');
      toggle.classList.add('is-active');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', getNavLabel('nav_toggle_close'));
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      menu.classList.remove('is-open');
      toggle.classList.remove('is-active');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', getNavLabel('nav_toggle_open'));
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.contains('is-open');
      isOpen ? closeMenu() : openMenu();
    });

    // Close when a nav link is clicked
    $$('.nav__link', menu).forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        closeMenu();
        toggle.focus();
      }
    });

    // Close when clicking outside the nav
    document.addEventListener('click', e => {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        closeMenu();
      }
    });
  }

  /* ----------------------------------------------------------------
     4. Active Navigation Link (IntersectionObserver)
  ---------------------------------------------------------------- */
  function initActiveNav() {
    const sections = $$('section[id]');
    const navLinks = $$('.nav__link[href^="#"]');
    if (!sections.length || !navLinks.length) return;

    // Map section IDs to nav links
    const linkMap = {};
    navLinks.forEach(link => {
      const id = link.getAttribute('href').slice(1);
      linkMap[id] = link;
    });

    function setActive(id) {
      navLinks.forEach(link => link.classList.remove('is-active'));
      if (linkMap[id]) linkMap[id].classList.add('is-active');
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    sections.forEach(section => observer.observe(section));
  }

  /* ----------------------------------------------------------------
     5. Back to Top Button
  ---------------------------------------------------------------- */
  function initBackToTop() {
    const btn = $('#backToTop');
    if (!btn) return;

    const SHOW_THRESHOLD = 400;

    function onScroll() {
      if (window.scrollY > SHOW_THRESHOLD) {
        btn.classList.add('is-visible');
      } else {
        btn.classList.remove('is-visible');
      }
    }

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ----------------------------------------------------------------
     6. Footer — dynamic copyright year
  ---------------------------------------------------------------- */
  function initCopyrightYear() {
    const el = $('#currentYear');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ----------------------------------------------------------------
     7. Smooth scroll for anchor links (polyfill for older Safari)
  ---------------------------------------------------------------- */
  function initSmoothScroll() {
    if (prefersReducedMotion) return;

    $$('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const id = anchor.getAttribute('href').slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Update URL hash without jump
        if (history.pushState) {
          history.pushState(null, null, `#${id}`);
        }
      });
    });
  }

  /* ----------------------------------------------------------------
     8. Active nav link CSS (add style for .is-active)
        We inject a small <style> so the CSS file stays clean
  ---------------------------------------------------------------- */
  function injectActiveNavStyle() {
    const style = document.createElement('style');
    style.textContent = `
      .nav__link.is-active {
        color: var(--color-text-primary);
        background: rgba(255, 255, 255, 0.06);
      }
      .nav__link--cta.is-active {
        background: var(--color-accent);
        color: #fff !important;
      }
    `;
    document.head.appendChild(style);
  }

  /* ----------------------------------------------------------------
     9. Theme Toggle (light / dark)
  ---------------------------------------------------------------- */
  function initThemeToggle() {
    const btn = $('#themeToggle');
    if (!btn) return;

    const STORAGE_KEY = 'dp-theme';
    const html = document.documentElement;

    // Apply saved preference on load (before paint)
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) html.setAttribute('data-theme', saved);

    function getEffectiveTheme() {
      const attr = html.getAttribute('data-theme');
      if (attr) return attr;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    btn.addEventListener('click', () => {
      const current = getEffectiveTheme();
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem(STORAGE_KEY, next);
    });
  }

  /* ----------------------------------------------------------------
     Init — run everything after DOM is ready
  ---------------------------------------------------------------- */
  function init() {
    injectActiveNavStyle();
    initThemeToggle();
    initAOS();
    initNavScroll();
    initMobileNav();
    initActiveNav();
    initBackToTop();
    initCopyrightYear();
    initSmoothScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

// Email obfuscation — assembled at runtime to avoid bot scraping
(function () {
  function assembleEmail(el) {
    if (!el) return;
    const email = el.dataset.u + '\u0040' + el.dataset.d;
    el.href = 'mailto:' + email;
    return email;
  }
  const email = assembleEmail(document.getElementById('email-link'));
  const display = document.getElementById('email-display');
  if (display && email) display.textContent = email;
  assembleEmail(document.getElementById('bubble-email-link'));
})();
