# Lazy Home Web — Design System

## 1. Color Palette

Based on the brandbook and aesthetic goals (Japanese minimalism, wabi-sabi), we use a restrained palette consisting of natural tones and specific brand accent colors extracted from the logo.

| Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Background (Light)** | `#F7F5F0` | Primary background color (warm off-white/cream) to provide generous, soft negative space (ma). |
| **Text (Dark)** | `#2C3643` | Primary text color (slate/navy dark grey from "LAZY HOUSE" text) for high contrast but softer than pure black. |
| **Accent Red** | `#D92D27` | Primary accent from the logo. Used sparingly for critical CTAs or subtle highlights. |
| **Accent Orange** | `#E3832D` | Secondary accent from the "KHANOM" tag. Used for hover states or active tab indicators. |
| **Muted Green** | `#8F9779` | Natural, wabi-sabi accent (sage/olive). Used for secondary backgrounds, borders, or alternating sections. |

**CSS Custom Properties:**
```css
:root {
  --color-bg: #F7F5F0;
  --color-text: #2C3643;
  --color-accent-red: #D92D27;
  --color-accent-orange: #E3832D;
  --color-muted-green: #8F9779;
  --color-white: #FFFFFF;
}
```

## 2. Typography

We will use a maximum of 3 fonts to maintain clean hierarchy and support both English and Thai elegantly.

1. **Heading Font (Display/English): `Caveat Brush`**
   - *Usage:* Only for main, short, impactful English headings (e.g., Hero title, large section titles). Provides strong brand identity and connects with social media style.
2. **Primary Serif Font: `Noto Serif` / `Noto Serif Thai`**
   - *Usage:* Secondary headings and elegant bilingual text. Gives a refined, sophisticated Japanese restaurant feel.
3. **Primary Sans-Serif Font: `Arial Unicode MS` (or modern alternative like `Noto Sans Thai`)**
   - *Usage:* All body copy, menu item descriptions, button text. Highly legible, clean, and fully supports Thai characters without layout breaking.

**CSS Custom Properties:**
```css
:root {
  --font-display: 'Caveat Brush', cursive, sans-serif;
  --font-heading: 'Noto Serif', 'Noto Serif Thai', serif;
  --font-body: 'Arial Unicode MS', 'Noto Sans Thai', sans-serif;
}
```

## 3. Spacing Scale

To enforce "ma" (empty space), we use a robust spacing scale.

**CSS Custom Properties:**
```css
:root {
  --space-xs: 0.5rem;    /* 8px - Micro spacing (between icons and text) */
  --space-sm: 1rem;      /* 16px - Base padding */
  --space-md: 2rem;      /* 32px - Component spacing */
  --space-lg: 4rem;      /* 64px - Section inner padding */
  --space-xl: 8rem;      /* 128px - Major section dividers */
  --space-section: 12rem; /* 192px - Extreme spacing between distinct sections (inspired by The Largo) */
}
```

## 4. Section Layouts & Patterns (Mobile First)

Inspired by high-end editorial sites (like *The Largo*), layouts strongly favor **asymmetry** and **extreme negative space** over rigid, centered blocks.

### Header
- **Mobile:** Sticky top, very thin (max 80px). Logo (color version) centered. Hamburger menu icon on the right. 
- **Desktop:** Thin and fixed. Navigation anchors use high tracking/letter-spacing (e.g., `0.15em`) for an airy, premium feel. Transparent background that transitions to solid `--color-bg` on scroll. No heavy drop shadows.

### Hero
- **Mobile:** Full viewport height (`100vh`). High-quality background image with a dark subtle overlay. Centered text: `Caveat Brush` title.
- **Desktop:** Same structure. Typography is oversized and acts as a graphic element. Content does not need to be precisely centered; it can be offset slightly for an editorial look.

### About Us
- **Mobile:** Stacked layout. Content box with off-white background slightly overlapping an atmospheric image below it. 
- **Desktop:** 2-column asymmetric layout. Image on the left (e.g., 40% width), text block on the right (e.g., 40% width) separated by massive spacing (`--space-xl`). Elements should intentionally misalign vertically to break the grid.

### Gallery
- **Mobile:** Single column masonry grid. Images have zero border-radius.
- **Desktop:** Asymmetric masonry grid. Images mix full-width cinematic shots with smaller offset details. Natural textures, no heavy shadows or borders. The gap between images is substantial or entirely absent (flush edges) depending on the compositional rhythm.

### Menu
- **Mobile:** Sticky category tabs (horizontal scroll) at the top of the section. Below, a list of items. Item layout: Title EN (Sans-serif bold) / Title TH (Serif italic) on the left, Price on the right. Description below in grey. Optional small square thumbnail on the far right.
- **Desktop:** 2-column layout for menu items. Category selector as a sticky sidebar on the left.

### Footer
- **Mobile:** Stacked. Brand logo (B&W version) at top. Contact info (phone, address). Google Maps embedded square. Social media icons row. Copyright.
- **Desktop:** 3-column grid. Left: Logo and short bio. Middle: Contact and address. Right: Map and social links.

## 5. Micro-interactions

Respecting Japanese minimalism and high-end editorial design, interactions must be unhurried, purposeful, and fluid.
- **Hover on Buttons/Links:** Very slow transition (`0.4s ease-in-out`). Instead of heavy drop-shadows, use subtle opacity changes or a delicate `--color-accent-red` underline.
- **Scroll Reveal (Fade Up):** All major content blocks (text, images) must use a smooth entrance animation as they scroll into view (`fade-in` + `translateY(30px)` to `0`). This is critical for the premium feel.
- **Images:** Natural and organic. On hover (desktop), they can transition to full saturation or feature a microscopic, slow scale effect (`1.02`).

## 6. Required Assets

| Asset Description | Filename | Format | Minimum Size |
| :--- | :--- | :--- | :--- |
| Primary Logo (Color) | `logo-color.png` (Extract from Brandbook) | PNG / SVG | 500x500px |
| Secondary Logo (B&W) | `logo-bw.png` (Extract from Brandbook) | PNG / SVG | 500x500px |
| Hero Background | `hero-bg.jpg` | WebP or JPG | 1920x1080px |
| About Us Image | `about-us.jpg` | WebP or JPG | 1000x1200px (Portrait) |
| Gallery Images (x4-6) | `gallery-1.jpg` to `gallery-6.jpg` | WebP or JPG | 1080x1080px (Square/Mixed) |
| Menu Item Thumbnails | `[item-name].jpg` | WebP or JPG | 400x400px (Square) |
