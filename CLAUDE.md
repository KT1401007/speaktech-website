# SpeakTech Technologies — Claude Code Instructions

## Company
SpeakTech Technologies LLP — IT Consulting & Digital Marketing firm, Jaipur, Rajasthan.
Registered with Startup India and iStart (Government of Rajasthan).

## Design System
ALWAYS read DESIGN.md before writing any HTML or CSS.
- Primary color: #003f87 (Corporate Blue)
- Font: Inter (load from Google Fonts)
- Spacing base: 8px scale
- Border radius: 4px buttons/inputs, 8px cards
- Nav: sticky, backdrop-filter: blur(12px), semi-transparent white

## Hero Animation
The file js/hero-animation.js contains a canvas particle network animation.
- Canvas element must have id="hero-animation"
- It auto-initializes on load (calls init() at bottom of file)
- Do NOT modify the animation file — only reference it via script tag

## Pages to build
1. index.html (Home)
2. pages/services.html
3. pages/projects.html
4. pages/about.html
5. pages/contact.html

## Rules
- All styling goes in css/styles.css — no inline styles
- Use semantic HTML5 elements (nav, main, section, article, footer)
- Every page links to css/styles.css and js/main.js
- Internal links: from index use pages/xxx.html, from pages use ../index.html
- Mobile-first CSS with breakpoints at 768px and 1200px