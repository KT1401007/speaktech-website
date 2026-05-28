---
name: Precision Engineering
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#424752'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#727784'
  outline-variant: '#c2c6d4'
  surface-tint: '#115cb9'
  primary: '#003f87'
  on-primary: '#ffffff'
  primary-container: '#0056b3'
  on-primary-container: '#bbd0ff'
  inverse-primary: '#acc7ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#004858'
  on-tertiary: '#ffffff'
  tertiary-container: '#006176'
  on-tertiary-container: '#70ddff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#acc7ff'
  on-primary-fixed: '#001a40'
  on-primary-fixed-variant: '#004491'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#b4ebff'
  tertiary-fixed-dim: '#3cd7ff'
  on-tertiary-fixed: '#001f27'
  on-tertiary-fixed-variant: '#004e5f'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
  code:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
This design system is built on the pillars of **Professionalism, Scalability, and Technical Precision**. It is designed for a high-tech IT landscape where trust is paramount and clarity is a functional requirement. 

The aesthetic follows a **Modern Corporate** movement—a refined evolution of minimalist principles combined with subtle high-tech accents. It avoids unnecessary ornamentation, instead using purposeful white space, rigid grid alignment, and subtle gradients to suggest depth and innovation. The emotional response should be one of "reliable innovation"—the feeling that the underlying technology is complex and powerful, but the interface is effortlessly navigable.

## Colors
The palette is anchored by a commanding **Corporate Blue**, used for primary actions and brand identifiers. This is supported by a **Slate Secondary** that provides a sophisticated, neutral bridge between the brand color and the interface background.

A tertiary **High-Tech Cyan** is used sparingly as an accent for gradients or success states to inject a sense of "active" energy. The background utilizes a crisp white with a very light slate-gray for surface containers, ensuring a layered hierarchy that prevents the UI from feeling flat or "paper-thin."

## Typography
The typography system utilizes **Inter** exclusively to achieve a systematic, utilitarian aesthetic that remains highly readable at all scales. 

Headlines utilize a tighter letter-spacing and heavier weights to project authority. Body text is optimized for long-form reading with a generous 1.5–1.6 line-height. A dedicated uppercase label style is used for "metadata" or small headers to provide visual variety without introducing secondary font families.

## Layout & Spacing
This design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The spacing rhythm is based on an **8px linear scale**, ensuring mathematical harmony between all elements.

- **Desktop (1440px+):** 64px outside margins, 24px gutters.
- **Tablet (768px - 1439px):** 32px outside margins, 20px gutters.
- **Mobile (Up to 767px):** 16px outside margins, 16px gutters.

Horizontal sections should alternate between white and light gray (`#F8FAFC`) to define content blocks clearly without the need for heavy dividers.

## Elevation & Depth
Hierarchy is conveyed through a combination of **Tonal Layering** and **Subtle Ambient Shadows**. 

The design avoids heavy shadows. Instead, it uses a 1px border (`#E2E8F0`) as the primary container definition, supplemented by a very soft, diffused shadow (Blur: 10px, Y: 4px, Opacity: 4%) for elements that need to appear interactive, such as cards. 

A "High-Tech" depth effect is achieved through **Subtle Gradients**: primary buttons and header accents use a very slight linear gradient from the primary blue to a slightly darker shade, giving a tactile, polished feel that suggests quality.

## Shapes
The shape language is **Soft and Precise**. A 4px (0.25rem) base radius is applied to small components like buttons and inputs, while larger containers like cards use an 8px (0.5rem) radius.

This "Soft" approach maintains the professional, architectural feel of the IT industry—avoiding the overly playful nature of fully rounded "pill" shapes while remaining more approachable than sharp 90-degree corners.

## Components

### Sticky Navigation
The navigation bar must remain pinned to the top. It uses a `backdrop-filter: blur(12px)` with a semi-transparent white background (`rgba(255, 255, 255, 0.8)`). This allows the content to scroll underneath while maintaining legibility and a high-tech glass effect.

### Service & Project Cards
- **Service Cards:** Feature a top-aligned icon in the primary blue color, followed by a `headline-sm` and `body-sm` text. Use a 1px border. On hover, the border color shifts to the primary blue and the ambient shadow intensifies.
- **Project Cards:** Use a full-bleed image at the top with a content area below. Labels for "Industry" or "Technology Stack" should use the `label-md` style inside small gray chips.

### Form Elements
Inputs should have a white background, a 1px border (`#CBD5E1`), and a 4px border radius. The focus state uses a 2px primary blue border with a subtle outer glow. Placeholders should be in the secondary slate color at 50% opacity.

### Buttons
- **Primary:** Solid primary blue with a subtle gradient and white text.
- **Secondary:** Transparent background with a primary blue border and text.
- **Tertiary/Ghost:** No border or background, using primary blue text; reserved for low-priority actions like "Learn More" inside text blocks.