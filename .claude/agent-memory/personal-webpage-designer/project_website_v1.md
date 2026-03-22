---
name: Website v1 — design decisions and architecture
description: Design system, tech choices, influencer inspirations, and content structure for DelgadoPanadero.github.io v1
type: project
---

First full production build of DelgadoPanadero.github.io completed 2026-03-21.

**Files:** index.html, css/styles.css, js/script.js

**Design System:**
- Dark theme: bg #0a0a0f, elevated bg #111118, card bg #14141d
- Accent: Electric indigo/violet (#7c3aed / #a78bfa)
- Pillar colors: Professional #3b82f6, Researcher #10b981, Teacher #f59e0b
- Typography: Space Grotesk (display/headings) + Inter (body) via Google Fonts
- Fluid type scale using CSS clamp()

**Influencer inspirations cited:**
- Ali Abdaal: Clean educator aesthetic, course card layout pattern
- Naval Ravikant: Minimal, high-signal, dark palette, sparse whitespace
- Tobias van Schneider: Bold typographic personality, large ghost numbers on cards

**Sections:** Hero → About → Services/Consulting → Research → Teaching → Contact → Footer

**Key UX features:**
- Sticky nav with blur-backdrop on scroll (glassmorphism)
- Dot-grid hero background + ambient radial glow
- Animated dot pulse (eyebrow + availability indicator)
- Scrolling ticker strip (CSS marquee, no JS)
- Three-pillar cards with left colored border per pillar
- Service cards with large ghost numbers (01–04)
- IntersectionObserver-based active nav link highlighting
- Back-to-top button (visible after 400px scroll)
- AOS (Animate On Scroll) via CDN
- Mobile hamburger → X animation
- prefers-reduced-motion respected throughout
- Schema.org Person markup + full OG/Twitter card meta tags

**Why:** User wants GitHub Pages personal brand site targeting international positioning in English, business-first AI advisor framing. Site language: English.

**How to apply:** Any future redesigns or section additions should maintain the dark indigo palette, three-pillar structure, and business-first copy voice established here.
