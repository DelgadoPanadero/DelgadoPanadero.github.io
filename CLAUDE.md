# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal brand website for Ángel Delgado Panadero (AI & Data Consultant, Engineer, Researcher, Teacher) hosted at delgadopanadero.com via GitHub Pages.

**No build system.** This is a pure static site — plain HTML, CSS, and vanilla JS. There is no `npm install`, no bundler, no compilation step.


### i18n System (`js/i18n.js`)

Spanish is the default language baked into the HTML. English is applied at runtime by `i18n.js` translating elements via data attributes:

- `data-i18n="key"` — replaces `textContent`
- `data-i18n-html="key"` — replaces `innerHTML`
- `data-i18n-aria="key"` — replaces `aria-label`
- `data-i18n-alt="key"` — replaces `img[alt]`

Language preference persists in `localStorage` (`lang` key). Falls back to browser language detection.

**To add new translated text:** add the HTML element with a `data-i18n` attribute and a matching key in the `translations.en` object inside `i18n.js`. The Spanish text lives directly in `index.html`.

### Theme System

Light/dark mode toggled via a button. State persists in `localStorage` (`theme` key). `@media (prefers-color-scheme: dark)` is used as the default if no preference is stored. CSS custom properties (variables) drive all colors — dark mode overrides are defined under `[data-theme="dark"]`.

### Email Obfuscation

The contact email is not written in plain text anywhere. It is assembled at runtime from `data-u` (username) and `data-d` (domain) attributes on anchor elements to prevent bot scraping.

### CSS Design Tokens

Typography: **Inter** (body) + **Space Grotesk** (headings), loaded from Google Fonts.

Color semantics:
- Accent: purple (`--color-accent`)
- Engineer role: blue (`--color-professional`)
- Researcher role: green (`--color-researcher`)
- Teacher role: amber (`--color-teacher`)

Fluid typography uses `clamp()` throughout. All animations respect `prefers-reduced-motion`.

## Content Sections (index.html order)

1. `#inicio` — Hero with ticker animation and CTA
2. `#sobre-mi` — Career timeline as a "git graph" visual (5 pillars)
3. `#servicios` — Consulting offerings (3-column grid)
4. `#formacion` — Training modalities (Workshop, Course, Outreach)
5. `#contacto` — Contact links with floating action bubbles
