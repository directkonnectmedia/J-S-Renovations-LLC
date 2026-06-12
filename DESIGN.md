---
name: Heritage Craft
colors:
  surface: '#fff8f7'
  surface-dim: '#edd4d4'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f0'
  surface-container: '#ffe9e8'
  surface-container-high: '#fbe2e2'
  surface-container-highest: '#f5dddd'
  on-surface: '#251819'
  on-surface-variant: '#584141'
  inverse-surface: '#3b2d2d'
  inverse-on-surface: '#ffedec'
  outline: '#8c7071'
  outline-variant: '#e0bfbf'
  surface-tint: '#af2b3e'
  primary: '#570013'
  on-primary: '#ffffff'
  primary-container: '#800020'
  on-primary-container: '#ff828a'
  inverse-primary: '#ffb3b5'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e4e2e1'
  on-secondary-container: '#656464'
  tertiary: '#262728'
  on-tertiary: '#ffffff'
  tertiary-container: '#3c3d3d'
  on-tertiary-container: '#a8a8a8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b5'
  on-primary-fixed: '#40000b'
  on-primary-fixed-variant: '#8e0f28'
  secondary-fixed: '#e4e2e1'
  secondary-fixed-dim: '#c8c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#fff8f7'
  on-background: '#251819'
  surface-variant: '#f5dddd'
typography:
  display:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system embodies the reliability of high-end craftsmanship and the precision of modern architectural renovation. It targets homeowners seeking quality, transparency, and a premium experience. 

The visual style is **Corporate Modern** with a focus on **Minimalism**. It utilizes generous negative space to evoke a sense of order and luxury. The aesthetic avoids unnecessary decoration, instead relying on structural grid alignment, refined typography, and a "less is more" philosophy to build trust. The emotional response should be one of calm confidence—reassuring the client that their home is in expert hands.

## Colors

The palette is anchored by **Deep Metallic Burgundy**, used strategically to signify authority and premium quality. 

- **Primary:** Deep Burgundy (#800020) is reserved for primary actions, branding, and high-level accents.
- **Surface:** White (#FFFFFF) serves as the primary canvas to maintain a clean, airy feel. Light Gray (#F5F5F5) is used for secondary sections and background depth.
- **Typography & Accents:** Deep Charcoal (#333333) provides a softer, more sophisticated contrast than pure black for all body text and iconography.
- **Accents:** Subtle metallic gradients can be applied to primary buttons to give a hint of "machined" texture, moving from the primary hex to a slightly darker shade.

## Typography

The typography system uses a pairing of **Montserrat** for headlines and **Inter** for body copy. 

Montserrat provides an authoritative, geometric structure that mirrors blueprints and architectural layouts. Use tight letter-spacing on larger display sizes to maintain a "built" look. 

Inter is used for all functional and long-form text. It offers exceptional legibility at smaller sizes and a neutral tone that allows the brand's work imagery to remain the focal point. Labels should utilize uppercase styling and increased tracking to differentiate functional UI from narrative content.

## Layout & Spacing

This design system follows a **Fixed Grid** model for desktop to ensure a controlled, editorial reading experience, while transitioning to a fluid model for mobile.

- **Desktop (1280px+):** 12-column grid with 24px gutters and 64px outer margins. Large sections of "white space" should be left intentionally empty to allow content to breathe.
- **Tablet:** 8-column grid with 24px gutters and 40px margins.
- **Mobile:** 4-column grid with 16px gutters and 20px margins.

Vertical rhythm is strictly maintained using multiples of 8px. Large-scale photography and project galleries should often "break" the internal column grid to span 100% of the viewport width for maximum impact, while text content remains centered within the 1280px container.

## Elevation & Depth

To maintain a premium and professional feel, depth is communicated through **Tonal Layers** and **Low-contrast Outlines** rather than heavy shadows.

- **Level 0 (Base):** White (#FFFFFF) background.
- **Level 1 (Cards/Containers):** Light Gray (#F5F5F5) surfaces with a subtle 1px border (#E0E0E0).
- **Interactive States:** Use a very soft, highly diffused ambient shadow (0px 4px 20px rgba(0, 0, 0, 0.05)) only when a component is hovered or active.

Glassmorphism may be used sparingly for navigation bars (80% White background with a 12px backdrop blur) to maintain context of the underlying architectural photography.

## Shapes

The shape language is **Soft (0.25rem)**. This subtle rounding removes the clinical edge of sharp corners while maintaining a professional, structured appearance. 

- **Small Components:** Checkboxes and small buttons use a 4px (0.25rem) radius.
- **Large Components:** Cards and modals use an 8px (0.5rem) radius.
- **Iconography:** Use a "Medium" stroke weight with slightly rounded terminals to match the font characteristics of Inter.

## Components

- **Buttons:** Primary buttons are Deep Burgundy (#800020) with White text. They should feature a subtle linear gradient (Top: #800020, Bottom: #600018) to create a metallic, premium feel. Secondary buttons are outlined in Deep Charcoal (#333333).
- **Cards:** Selectable cards use the Level 1 elevation (F5F5F5 background). Upon selection, the border changes to 2px Deep Burgundy.
- **Input Fields:** Use a 1px Charcoal outline with a 40% opacity. Upon focus, the border becomes Deep Burgundy with no outer glow.
- **Chips:** Used for "Project Status" or "Service Type". These should be Light Gray with Charcoal text, using the smallest radius.
- **Lists:** Use custom bullet points in Deep Burgundy. Dividers should be 1px Light Gray (#E0E0E0) with generous vertical padding (24px+).
- **Progress Steppers:** Essential for "Renovation Phases". Use a thin Charcoal line with Burgundy nodes to indicate the current project stage.