/**
 * DelgadoPanadero — Bilingual Support (Spanish / English)
 *
 * Spanish text lives in the HTML — it is the source of truth.
 * English translations are defined below and applied at runtime.
 * Switching back to Spanish restores the original DOM values from cache.
 *
 * Usage:
 *   data-i18n="key"       → sets element.textContent
 *   data-i18n-html="key"  → sets element.innerHTML  (for inline markup)
 *   data-i18n-aria="key"  → sets element.aria-label attribute
 *   data-i18n-alt="key"   → sets element.alt attribute
 */

const translations = {
  en: {
    /* ── Navigation ───────────────────────────────────────────── */
    nav_logo_aria:        'DelgadoPanadero — go to top',
    nav_about:            'About',
    nav_services:         'Consulting',
    nav_teaching:         'Training',
    nav_theme_aria:       'Toggle light/dark mode',
    nav_lang_aria:        'Switch language to Spanish',
    nav_lang_label:       'ES',
    nav_toggle_open:      'Open navigation menu',
    nav_toggle_close:     'Close navigation menu',

    /* ── Hero ─────────────────────────────────────────────────── */
    hero_aria:            'Introduction',
    hero_eyebrow:         'The AI advisor and engineer you were looking for',
    hero_headline:        'I build <span class="hero__headline-accent">AI solutions</span> and help you <span class="hero__headline-accent">do the same.</span>',
    hero_subheadline:     'My name is <strong>Ángel</strong>, I\'m an AI engineer, researcher and educator. I\'ve spent over 10 years helping companies.',
    hero_cta_company:     'Are you a company?',
    hero_cta_learn:       'Want to learn?',
    hero_linkedin_aria:   'LinkedIn profile',
    hero_github_aria:     'GitHub profile',
    hero_scholar_aria:    'Google Scholar profile',
    hero_twitter_aria:    'Twitter/X profile',
    hero_badge:           'Business-Driven AI',
    hero_photo_alt:       'Ángel Delgado Panadero — AI & Data Consultant',

    /* ── Ticker ───────────────────────────────────────────────── */
    ticker_1:  'AI Strategy',
    ticker_2:  'Data Architecture',
    ticker_3:  'Machine Learning',
    ticker_4:  'NLP & LLMs',
    ticker_5:  'MLOps',
    ticker_6:  'Model Explainability',
    ticker_7:  'GenAI Advisory',
    ticker_8:  'AI Education',

    /* ── About ────────────────────────────────────────────────── */
    about_eyebrow:         'About me',
    about_heading:         'How I came to bridge <span class="accent">science and practice.</span>',
    git_title_architect:   'AI Solutions Architect',
    git_desc_architect:    'Advising Ibex35 companies and SMEs on adopting AI into their business processes.',
    git_title_teacher:     'Data & AI Lecturer',
    git_desc_teacher:      'Associate lecturer in master\'s programmes at <strong>UNIR</strong>, <strong>EAE Business School</strong> and <strong>UAM</strong>.',
    git_title_researcher:  'Independent Researcher',
    git_desc_researcher:   'New AI algorithms, mainly focused on explainability and ensemble methods.',
    git_title_engineer:    'AI Engineer',
    git_desc_engineer:     'Building resilient data and AI applications following best practices in software engineering and deployment.',
    git_title_physicist:   'Physicist',
    git_desc_physicist:    'The habit of going back to first principles before jumping to solutions.',
    about_github_text:     'All my projects and research are open source:',

    /* ── Services ─────────────────────────────────────────────── */
    services_eyebrow:      'Consulting',
    services_heading:      'How I can help <span class="accent">your company.</span>',
    svc1_title:            'AI Strategy & Technical Design',
    svc1_desc:             'Many companies want to start integrating AI into their business processes but don\'t know where to begin. Through dynamics and workshops I help you define a risk-free plan.',
    svc1_tags_aria:        'Service keywords',
    svc1_tag1:             'Technology assessment',
    svc1_tag2:             'Use-case ideation',
    svc1_tag3:             'Service design',
    svc1_tag4:             'Technology strategy',
    svc1_tag5:             'Application modernisation',
    svc2_title:            'AI Application Development',
    svc2_desc:             'You\'ve identified a problem or use case, don\'t have a tech background and need someone to build it. I help you design a solution, implement it and deliver it working.',
    svc2_tags_aria:        'Service keywords',
    svc2_tag1:             'Logistics automation',
    svc2_tag2:             'Booking / sales chatbot',
    svc2_tag3:             'Social-media integrated CRM',
    svc2_tag4:             'Ticket digitisation',
    svc2_tag5:             'Stock & sales optimisation',
    svc3_title:            'Collaboration & Technical Assistance',
    svc3_desc:             'You already have a tech team and would like me to collaborate with them — helping them with technologies they don\'t know or developing alongside them, adapting to your roadmap and methodology.',
    svc3_tags_aria:        'Service keywords',
    svc3_tag1:             'Upskilling',
    svc3_tag2:             'ETL & Databases',
    svc3_tag3:             'Machine Learning & MLOps',
    svc3_tag4:             'GenAI Applications',
    svc3_tag5:             'Data & AI Architecture',
    services_cta_text:     'Shall we talk about how AI can make a difference in your organisation?',
    services_cta_btn:      'Get in touch',

    /* ── Teaching ─────────────────────────────────────────────── */
    teaching_eyebrow:      'Training',
    teaching_heading:      'How I can <span class="accent accent--teacher">help you.</span>',
    teaching_subheading:   'Have you ever felt that AI was too hard for you? It\'s not true — let me show you.',
    tch1_badge:            'Workshop',
    tch1_title:            'Programming with AI',
    tch1_desc:             'Learn by doing. Hands-on workshops to use AI as a daily work tool — no programming background required.',
    tch1_link:             'Request workshop',
    tch2_badge:            'Course',
    tch2_title:            'Data / AI Engineer',
    tch2_desc:             'Group training for technical and non-technical audiences. From data fundamentals to models in production. Delivered at <strong>UNIR</strong>, <strong>EAE Business School</strong> and <strong>UAM</strong>.',
    tch2_link:             'View materials on GitHub',
    tch3_badge:            'Outreach',
    tch3_title:            'AI for Everyone',
    tch3_desc:             'Talks, articles and open content to bring artificial intelligence closer to everyone — with rigour, without unnecessary jargon.',
    tch3_link:             'Explore on GitHub',
    teaching_cta_text:     'Interested in personalised training for yourself or your team?',
    teaching_cta_btn:      'Let\'s talk',

    /* ── Contact ──────────────────────────────────────────────── */
    contact_eyebrow:         'Contact',
    contact_heading:         'Why not drop me a line and <span class="accent">we talk?</span>',
    contact_subheading:      'Advisory, collaboration, or just a conversation about AI.',
    contact_email_label:     'Send an email',
    contact_linkedin_label:  'Connect on LinkedIn',
    contact_linkedin_sub:    'Best channel for professional enquiries',
    contact_twitter_label:   'Follow on X / Twitter',
    contact_twitter_sub:     'Thoughts on AI, data and technology',
    contact_location_label:  'Location',
    contact_location:        'Madrid, Spain',
    contact_availability:    'Available for consulting',
    contact_quote:           '«It\'s about solving problems — AI is secondary. The most important thing is understanding the problem»',

    /* ── Footer ───────────────────────────────────────────────── */
    footer_tagline:          'AI &amp; Data Consultant · Researcher · Teacher · Madrid',
    footer_nav_aria:         'Footer navigation',
    footer_about:            'About',
    footer_services:         'Consulting',
    footer_teaching:         'Training',
    footer_copy:             'All rights reserved.',

    /* ── Floating bubbles ─────────────────────────────────────── */
    bubble_chat_aria:        'Send email',
    bubble_chat_text:        'Drop me a message if you have questions...',
    bubble_cal_aria:         'Book a meeting on Calendly',
    bubble_cal_text:         '...or let\'s schedule a meeting. No strings attached!',

    /* ── Back to top ──────────────────────────────────────────── */
    back_to_top_aria:        'Back to top',

    /* ── Nav / main aria ──────────────────────────────────────── */
    nav_aria:                'Main navigation',
    hero_section_aria:       'Introduction',
  },
};

// Expose translations so other scripts (e.g. script.js) can read them
window.translations = translations;

/* ----------------------------------------------------------------
   Cache — stores original Spanish values from the HTML
---------------------------------------------------------------- */
const originalCache = { text: {}, html: {}, aria: {}, alt: {} };

function cacheOriginals() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    originalCache.text[key] = el.textContent;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    originalCache.html[key] = el.innerHTML;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    originalCache.aria[key] = el.getAttribute('aria-label') || '';
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    originalCache.alt[key] = el.getAttribute('alt') || '';
  });

  // Cache lang-toggle button state (ES label shown when in Spanish)
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    originalCache._langToggleAria  = langToggle.getAttribute('aria-label') || '';
    const labelEl = langToggle.querySelector('.lang-toggle__label');
    originalCache._langToggleLabel = labelEl ? labelEl.textContent : '';
  }

  // Cache hamburger aria-label
  const navToggle = document.getElementById('navToggle');
  if (navToggle) {
    originalCache._navToggleOpen  = navToggle.getAttribute('aria-label') || '';
  }
}

/* ----------------------------------------------------------------
   Core apply function
---------------------------------------------------------------- */
function applyLang(lang) {
  document.documentElement.lang = lang;
  window.__currentLang = lang;

  if (lang === 'es') {
    // Restore original HTML values
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (originalCache.text[key] !== undefined) el.textContent = originalCache.text[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (originalCache.html[key] !== undefined) el.innerHTML = originalCache.html[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (originalCache.aria[key] !== undefined) el.setAttribute('aria-label', originalCache.aria[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      if (originalCache.alt[key] !== undefined) el.setAttribute('alt', originalCache.alt[key]);
    });

    // Restore lang-toggle to show "EN"
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
      langToggle.setAttribute('aria-label', originalCache._langToggleAria || '');
      const labelEl = langToggle.querySelector('.lang-toggle__label');
      if (labelEl) labelEl.textContent = originalCache._langToggleLabel || 'EN';
    }

  } else {
    // Apply English translations
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      if (t[key] !== undefined) el.setAttribute('alt', t[key]);
    });

    // Update lang-toggle to show "ES"
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
      langToggle.setAttribute('aria-label', t['nav_lang_aria']);
      const labelEl = langToggle.querySelector('.lang-toggle__label');
      if (labelEl) labelEl.textContent = t['nav_lang_label'];
    }
  }

  // Keep mobile hamburger aria-label in sync
  const navToggle = document.getElementById('navToggle');
  if (navToggle) {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    const closeLabel = lang === 'es'
      ? (originalCache._navToggleClose || 'Cerrar menú de navegación')
      : translations.en['nav_toggle_close'];
    const openLabel = lang === 'es'
      ? (originalCache._navToggleOpen || 'Abrir menú de navegación')
      : translations.en['nav_toggle_open'];
    navToggle.setAttribute('aria-label', isOpen ? closeLabel : openLabel);
  }
}

/* ----------------------------------------------------------------
   Language toggle button wiring
---------------------------------------------------------------- */
function initLangToggle() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const current = window.__currentLang || 'es';
    const next = current === 'es' ? 'en' : 'es';
    localStorage.setItem('lang', next);
    applyLang(next);
  });
}

/* ----------------------------------------------------------------
   Boot
---------------------------------------------------------------- */
(function () {
  const saved   = localStorage.getItem('lang');
  const browser = navigator.language && navigator.language.startsWith('en') ? 'en' : 'es';
  const lang    = saved || browser;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      cacheOriginals();
      applyLang(lang);
      initLangToggle();
    });
  } else {
    cacheOriginals();
    applyLang(lang);
    initLangToggle();
  }
})();
