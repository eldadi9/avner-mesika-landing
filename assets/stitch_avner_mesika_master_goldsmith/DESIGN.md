---
name: Artisanal Heritage Luxe
colors:
  surface: '#fff8f4'
  surface-dim: '#e8d7c7'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e5'
  surface-container: '#fcebda'
  surface-container-high: '#f6e5d5'
  surface-container-highest: '#f0e0cf'
  on-surface: '#221a10'
  on-surface-variant: '#4c4637'
  inverse-surface: '#382f24'
  inverse-on-surface: '#ffeedd'
  outline: '#7e7665'
  outline-variant: '#cfc6b2'
  surface-tint: '#735c00'
  primary: '#574500'
  on-primary: '#ffffff'
  primary-container: '#735c00'
  on-primary-container: '#f6d676'
  inverse-primary: '#e3c466'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfdf'
  on-secondary-container: '#636262'
  tertiary: '#474743'
  on-tertiary: '#ffffff'
  tertiary-container: '#5f5e5a'
  on-tertiary-container: '#dbd8d3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe085'
  primary-fixed-dim: '#e3c466'
  on-primary-fixed: '#231b00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c6'
  on-secondary-fixed: '#1c1b1c'
  on-secondary-fixed-variant: '#474647'
  tertiary-fixed: '#e5e2dd'
  tertiary-fixed-dim: '#c9c6c1'
  on-tertiary-fixed: '#1c1c19'
  on-tertiary-fixed-variant: '#474743'
  background: '#fff8f4'
  on-background: '#221a10'
  surface-variant: '#f0e0cf'
  gold-leaf: '#d4af37'
  antique-parchment: '#fff8f4'
  warm-stone: '#efe0cf'
  burnished-gold: '#ffe088'
  atelier-shadow: '#382f24'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Manrope
    fontSize: 10px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0.2em
spacing:
  unit: 8px
  gutter: 24px
  margin-safe: 32px
  section-padding-mobile: 64px
  section-padding-desktop: 120px
---

## Brand & Style
The brand identity centers on "The Mark of the Hand," targeting a high-net-worth clientele seeking bespoke, heirloom-quality jewelry. The aesthetic is a sophisticated blend of **Minimalism** and **Tactile Luxury**, emphasizing heritage craftsmanship through high-quality photography and restrained UI.

The emotional response should be one of quiet confidence, timelessness, and extreme attention to detail. This is achieved through a "Museum Gallery" approach: generous whitespace, high-contrast serif typography for storytelling, and a warm, tonal color palette that mimics precious metals and natural stone textures.

## Colors
The palette is grounded in "Noble Metallics." The primary color is a deep, saturated gold used for key brand markers and icons. The background utilizes a range of "Antique Parchment" tones rather than pure white to evoke a sense of history and warmth.

- **Primary (Gold):** Used for brand-critical elements and active states.
- **Surface Tiers:** Use subtle shifts from `#fff8f4` (Base) to `#fbebda` (Container) to create depth without relying on shadows.
- **Typography:** The "on-surface" color is a rich charcoal-brown (`#221a10`), providing high legibility while appearing softer and more premium than pure black.

## Typography
The typographic system uses a "Transitional Serif x Modern Sans" pairing. **Playfair Display** handles all editorial and storytelling moments, often appearing in italics for philosophical quotes to emphasize the "handwritten" intent. 

**Manrope** provides a technical, clean counterpoint for functional text, labels, and navigation. 
- **Tracking:** Headings and labels use expanded tracking (0.1em to 0.2em) to mimic high-end jewelry engraving styles.
- **Scale:** Large display sizes are reserved for hero moments, while body text remains generously spaced for a relaxed reading experience.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop with a maximum content width, transitioning to a fluid container with generous margins on mobile.

- **Rhythm:** An 8px base unit drives all spacing. 
- **Verticality:** Sections are separated by large vertical paddings (64px mobile / 120px desktop) to create a sense of exclusivity and "breathing room."
- **Safe Zones:** A 32px horizontal margin is maintained for all text content to ensure the interface feels airy and un-cluttered.

## Elevation & Depth
Depth is created through **Tonal Layers** and **Glassmorphism** rather than traditional drop shadows.

- **Surfaces:** Use background color shifts (e.g., `surface-container-low` for secondary sections) to imply hierarchy.
- **Floating Elements:** The Header and Bottom Navigation use an 80% opacity blur (`backdrop-blur-md`) to maintain a connection with the imagery beneath.
- **Borders:** Thin, high-contrast outlines (`outline-variant`) are used for cards and form inputs, reinforcing the "technical drawing" or "architectural" aspect of goldsmithing.

## Shapes
The shape language is strictly **Sharp (0px)** for primary structural elements like buttons, cards, and input fields. This conveys precision, structural integrity, and architectural strength. 

Roundedness is only permitted for:
1. **Pills (Full):** Status indicators or very small accents (e.g., progress dots).
2. **User Avatars:** Circles to provide a soft, human contrast to the rigid geometry of the tools and gold.

## Components
- **Buttons:** 
  - *Primary:* Solid gold-leaf background, sharp corners, all-caps labels with high tracking. 
  - *Ghost:* 1px border matching the text color, no fill.
- **Inputs:** Underline-only style for a "sketchbook" feel, with active states transitioning to the primary gold.
- **Cards:** Flat, 1px bordered containers with no shadow. Content should be centered or use structured padding.
- **Bento Grid:** Use for services; alternating between full-bleed imagery and text-heavy cards to maintain visual interest.
- **Timeline:** A thin 1px vertical line with solid/hollow dots to denote process steps, using the primary gold for the active or current phase.