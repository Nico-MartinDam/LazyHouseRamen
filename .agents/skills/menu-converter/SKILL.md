---
name: menu-converter
description: Converts the restaurant's CSV or Excel menu file into structured menu.json. Activate when the owner updates the menu or when menu.json needs to be regenerated.
---

# Skill: Menu Converter

## Purpose
The restaurant owner has no coding knowledge. They manage the menu in Google Sheets or Excel.
This skill handles the full pipeline: CSV input → validated menu.json output.

## Input Format (CSV columns)
category, item_name_en, item_name_th, description_en, description_th, price, image_filename

## Output Format (menu.json)
{
  "categories": [
    {
      "name_en": "Sushi",
      "name_th": "ซูชิ",
      "items": [
        {
          "name_en": "Salmon Nigiri",
          "name_th": "ซัลมอน นิกิริ",
          "description_en": "Fresh Atlantic salmon on seasoned rice.",
          "description_th": "ปลาแซลมอนแอตแลนติกสดบนข้าวปรุงรส",
          "price": "180",
          "image": "salmon-nigiri.jpg"
        }
      ]
    }
  ]
}

## Script Location
menu/convert.js (Node.js)

## How to Run
node menu/convert.js

## Validation Rules
- All 5 text fields must be present (name_en, name_th, description_en, description_th required).
- Price must be a number string, no currency symbols.
- image_filename is optional — if empty, render item without image.
- If any row is invalid, log a warning but continue processing.
- Group all items by category, preserving CSV row order.
