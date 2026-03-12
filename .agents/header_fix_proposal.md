# Proposed CSS and JS updates for Header Visibility

## Issue Analysis
The current header has a transparent background initially (`#site-header`). When the user scrolls down, the smart header script (`main.js`) hides the header (`header-hidden`), and when scrolling up, it shows it with a solid background (`header-solid`).
Since the new Hero image is somewhat similar in color/tone to the text, the links and logo in the transparent header can be hard to read at the very top of the page.
The user suggests potentially having two different text colors depending on whether the header is transparent or solid.

## Suggested Solution

1.  **Initial State (At Top):** The header text and icons should be light (white or very light grey) to contrast against the dark/mixed Hero image overlay. The logo should ideally be a light/white version if available, or we use CSS to invert/brightness-adjust the current one if it's dark. Let's assume the current `BrandmarkSVG.svg` works or we adjust it.
2.  **Scrolled State (Solid Header):** When the header becomes solid (scrolling up), the background is `#F7F5F0` (light cream `var(--color-bg)`). To maintain contrast, the text, icons, and logo *must* switch to the dark brand color (`var(--color-text)`, `#2C3643`).
3.  **Active Link Indicator:** The hover effect (red underline) remains, but the base text color changes between states.

## Implementation Details for the Frontend Dev

### 1. Update `css/styles.css`
We need to use CSS variables for the header text/icon colors, and change those variables based on the `.header-solid` class.

**Current:**
```css
#site-header { ... }
#site-header.header-solid {
    background-color: rgba(247, 245, 240, 0.95);
    /* ... */
}
.nav-link { color: inherit; /* implicitly var(--color-text) from body */ }
.mobile-menu-toggle { color: var(--color-text); }
.lang-toggle { color: var(--color-text); }
.social-link { color: var(--color-text); }
```

**Proposed Changes:**
Add CSS variables specifically for the header's adapting colors.

```css
/* Update Header Base to define local color variables */
#site-header {
    --header-text-color: var(--color-white); /* Light color for transparent state over dark hero */
    --header-icon-bg: rgba(255, 255, 255, 0.1); 
    
    /* existing properties... */
    color: var(--header-text-color); /* Apply base color to header itself */
}

/* Update Smart Header State */
#site-header.header-solid {
    background-color: rgba(247, 245, 240, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(44, 54, 67, 0.05);

    /* Switch to dark colors for light background */
    --header-text-color: var(--color-text); 
    --header-icon-bg: rgba(0, 0, 0, 0.03);
}

/* Update child elements to use the new variable instead of hardcoding var(--color-text) */
.mobile-menu-toggle {
    color: var(--header-text-color);
}

.nav-link {
    color: var(--header-text-color);
}

.lang-toggle {
    color: var(--header-text-color);
}

.social-link {
    color: var(--header-text-color);
    background: var(--header-icon-bg);
}

/* Optional: If the logo is an SVG or PNG that is too dark against the hero image, 
   we can use CSS filters to make it white when the header is transparent, 
   and normal when solid. */
#site-header:not(.header-solid) .header-logo {
    /* If original logo is dark, this makes it white. If it's already white, ignore this. */
    filter: brightness(0) invert(1); 
}
#site-header.header-solid .header-logo {
    filter: none;
}
```

### 2. Verify `js/main.js` (Smart Header logic)
The existing logic in `initSmartHeader()` is good:
- Top: removes `header-solid` and `header-hidden`.
- Scrolling Down: adds `header-hidden` (removes `header-solid`).
- Scrolling Up: adds `header-solid` (removes `header-hidden`).

No changes needed in JS, the CSS variable switch attached to `.header-solid` will handle everything gracefully.

### 3. Fixing the Desktop Hero Alignment
Just a quick note on the `styles.css` changes made previously. You added `display: flex` to `.hero-section`. However, I noticed you set `align-items: center` and `justify-content: center` to both `.hero-section` AND `.hero-content`. This is redundant but okay, however it keeps everything perfectly centered. The Design System mentions: "Content does not need to be precisely centered; it can be offset slightly for an editorial look." We can leave it centered for now as it's safer, but changing `.hero-content` `align-items` to `flex-start` and adding a max-width could give that asymmetrical editorial vibe later. For now, it's fine.
