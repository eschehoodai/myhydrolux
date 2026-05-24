---
name: Hydrolux Liquid Intelligence
colors:
  surface: '#0d150c'
  surface-dim: '#0d150c'
  surface-bright: '#323c31'
  surface-container-lowest: '#081008'
  surface-container-low: '#151e14'
  surface-container: '#192218'
  surface-container-high: '#232c22'
  surface-container-highest: '#2e372c'
  on-surface: '#dbe6d6'
  on-surface-variant: '#bbcbb7'
  inverse-surface: '#dbe6d6'
  inverse-on-surface: '#2a3328'
  outline: '#859582'
  outline-variant: '#3c4a3b'
  surface-tint: '#2ae461'
  primary: '#45f570'
  on-primary: '#003911'
  primary-container: '#0bd857'
  on-primary-container: '#00581e'
  inverse-primary: '#006e28'
  secondary: '#88d98d'
  on-secondary: '#003911'
  secondary-container: '#005b1f'
  on-secondary-container: '#81d186'
  tertiary: '#ffcf9c'
  on-tertiary: '#482900'
  tertiary-container: '#e5b27c'
  on-tertiary-container: '#674317'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6bff84'
  primary-fixed-dim: '#2ae461'
  on-primary-fixed: '#002107'
  on-primary-fixed-variant: '#00531c'
  secondary-fixed: '#a3f6a7'
  secondary-fixed-dim: '#88d98d'
  on-secondary-fixed: '#002107'
  on-secondary-fixed-variant: '#00531c'
  tertiary-fixed: '#ffddbb'
  tertiary-fixed-dim: '#f1bd86'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#623f13'
  background: '#0d150c'
  on-background: '#dbe6d6'
  surface-variant: '#2e372c'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  mono-data:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-padding-desktop: 40px
  container-padding-mobile: 20px
  gutter: 24px
  section-gap: 80px
---

## Brand & Style
The design system for Hydrolux evokes a sense of "technological purity." It targets high-net-worth individuals and tech-forward homeowners who view water filtration not as a utility, but as a premium wellness ritual. 

The visual style is **Glassmorphism mixed with High-Tech Minimalism**. It utilizes deep earthy obsidian surfaces to simulate sleek hardware interfaces, contrasted by "organic-digital" green accents that represent active filtration and vitality. The interface should feel like a high-end command center—precise, sterilized, and advanced. Backgrounds should utilize subtle radial gradients to prevent visual flatness, while frosted glass containers provide depth and a sense of "liquid" transparency.

## Colors
This design system utilizes a high-contrast dark palette with an earthy undertone to emphasize the "Vibrant Leaf" primary color.

- **Primary (#0BD857):** Used for "Active" states, pure water indicators, and primary calls to action. It represents biological health and digital precision.
- **Secondary (#388644):** A deep forest green used for secondary data visualizations and supportive UI elements to create a natural, sophisticated depth.
- **Neutral/Backgrounds:** #707A6D serves as the base "void," providing a muted, slate-green foundation for all surface containers.
- **Tertiary Accent:** #FFCA92 is used for highlighting mineral data and warning states, providing a warm contrast to the green-heavy palette.

## Typography
The typographic hierarchy balances the bold, geometric impact of **Montserrat** for branding and headers with the clinical legibility of **Inter** for data. **Geist** is introduced for technical labels and monospaced data readouts (e.g., pH levels, filter life percentages) to reinforce the "high-tech" developer-grade precision.

Headlines should be kept concise. Use `label-caps` for overlines to categorize information modules. All "data" points should use the `mono-data` style to ensure numbers align perfectly in dashboard views.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop (1200px max-width) to maintain the feel of a precision instrument panel. 

- **Desktop:** 12-column grid with 24px gutters. Content is centered with generous 80px gaps between major sections to allow the dark background to provide visual "breathing room."
- **Mobile:** 4-column fluid grid. Container padding reduces to 20px. 
- **Rhythm:** All margins and paddings must be multiples of 8px. Use "Airy" padding within glass containers (minimum 32px) to maintain the premium, high-end feel.

## Elevation & Depth
Depth is created through **Glassmorphism** rather than traditional shadows.

1.  **Base Layer:** Deep neutral-dark base derived from #707A6D.
2.  **Floating Containers:** Background blur (12px to 20px) with a semi-transparent fill of #1F211F at 60% opacity.
3.  **Border Treatment:** Instead of shadows, use 1px "inner-glow" borders. Use a top-left stroke of `rgba(255,255,255,0.1)` and a bottom-right stroke of `rgba(11,216,87,0.05)` to simulate a light source hitting glass.
4.  **Active Elevation:** When an element is focused or active, apply an external bloom (glow) using the primary color (#0BD857) with a 20px blur at 15% opacity.

## Shapes
The shape language is "Soft-Tech." We avoid fully circular "pill" shapes for buttons to maintain a more architectural, serious tone. 

- **Standard Radius:** 4px (Soft) for buttons and input fields to keep them feeling precise and engineered.
- **Large Radius:** 12px (rounded-xl) for main glass dashboard cards and modular sections. 
- **Interactive Elements:** Use hard edges for icons but soft-radius containers for the interaction hit states.

## Components
- **Buttons:** Primary buttons use a solid #0BD857 fill with black text for maximum contrast. Secondary buttons use the "glass" style with a 1px forest-green border.
- **Status Indicators:** Use a "pulsing" animation on small 8px circles for "Active Filtration" states.
- **Inputs:** Dark backgrounds with a 1px #388644 border. On focus, the border glows #0BD857.
- **Cards:** Glass containers with `backdrop-filter: blur(16px)`. Titles should be in Montserrat SemiBold.
- **Data Visualization:** Use thin, glowing lines for graphs. Fill areas under lines with a 5% opacity primary gradient.
- **Hardware Imagery:** Use high-contrast photography with "Chiaroscuro" lighting—deep shadows and bright specular highlights on chrome/water surfaces.
