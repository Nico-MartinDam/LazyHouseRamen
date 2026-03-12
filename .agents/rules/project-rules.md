---
trigger: always_on
---

# Project Rules - LazyHomeWeb (Japanese Restaurant)

## Project Overview
- One-page website for a Japanese restaurant.
- Sections: Header (logo + social links), Hero, About Us, Gallery, Menu, Footer (Contact + Location + Social links).
- Languages: English (primary) + Thai (secondary). All visible text must be bilingual.
- Style: Japanese minimalism — clean whitespace, subtle asymmetry, natural textures, muted tones + accent colors from brandbook.

## Tech Stack
- HTML5 + CSS3 (custom properties) + Vanilla JS only.
- No frameworks unless the programmer agent explicitly justifies it.
- Menu data: loaded from menu.json generated from CSV via convert.js.
- No CMS. No WordPress.

## Folder Structure
LazyHomeWeb/
├── index.html
├── css/styles.css
├── js/main.js
├── menu/
│   ├── menu.json        (auto-generated, do not edit manually)
│   └── convert.js       (CSV → JSON converter script)
├── assets/
│   ├── images/
│   └── brandbook/       (reference only, do not publish)
└── .agents/

## Menu System
- Owner manages menu via Google Sheets or Excel (no coding knowledge).
- Exports as CSV → runs: node menu/convert.js → outputs menu.json.
- JSON structure: category, item_name_en, item_name_th, description_en, description_th, price, image (optional).
- JS fetches menu.json on page load and renders dynamically.

## Design Rules
- Maximum whitespace between sections. No cluttered layouts.
- Images: subtle blur or dark overlay for elegance.
- Typography: one serif (headings) + one sans-serif (body), both supporting Thai characters.
- Social links: header top-right + footer only.
- No popups, no cookie banners, no auto-play videos.
- No more than 3 fonts total.

## Language
- All user-facing text: English + Thai (side by side or toggle button).
- Code comments: English.
- Agent responses to me: Spanish.
