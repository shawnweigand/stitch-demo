# Design System Document

## 1. Overview & Creative North Star
**Creative North Star: The Alpine Editorial**

This design system is built to bridge the gap between rugged outdoor utility and high-end craftsmanship. Moving away from the generic "adventure gear" aesthetic, we embrace a "High-End Editorial" experience. The goal is to make the user feel like they are leafing through a premium, large-format photography journal.

We break the standard digital template through **intentional asymmetry**, where imagery often bleeds off the grid or overlaps content blocks, creating a sense of scale and immersion. High-impact typography acts as a structural element, not just a label. By prioritizing deep tonal layering over traditional borders, we create a UI that feels carved from the natural world—tactile, professional, and aspirational.

---

## 2. Colors
Our palette is rooted in the materials of the craft: leather, steel, and the deep tones of the Swedish wilderness.

### Surface Hierarchy & The "No-Line" Rule
To maintain an editorial feel, **1px solid borders are strictly prohibited** for sectioning. Boundaries must be defined through background color shifts or subtle tonal transitions.
- **Surface & Background:** Use `surface` (#faf9f9) as your primary canvas.
- **Tonal Nesting:** Create depth by nesting containers. A `surface-container-low` (#f4f3f3) section should sit on a `surface` background. For high-priority content like product highlights, use `surface-container-lowest` (#ffffff) to provide a "bright" lift.
- **Glass & Gradient:** For floating navigation or over-image labels, use **Glassmorphism**. Apply a semi-transparent `surface` color with a `backdrop-blur` of 12px. This ensures the rugged photography beneath remains visible but legible.
- **Signature Textures:** For primary CTAs, do not use flat fills. Utilize a subtle linear gradient from `primary` (#785834) to `primary_container` (#b08a62) at a 45-degree angle to mimic the natural sheen of treated leather.

---

## 3. Typography
The typography system uses a high-contrast pairing to balance technical precision with heritage storytelling.

* **Display & Headlines (Space Grotesk):** This is our "Impact" face. It should be used with tight letter-spacing and, in hero sections, at massive scales (`display-lg` at 3.5rem+). This conveys the "Rugged Professional" persona.
* **Title & Body (Inter):** Our workhorse. Chosen for its extreme legibility at all sizes. Use `title-lg` for editorial sub-headers to provide an authoritative, clean structure.
* **The Editorial Mix:** Use all-caps `label-md` with `0.1rem` letter spacing for category tags (e.g., "SKIER'S CHOICE") to create a premium, curated look inspired by print magazines.

---

## 4. Elevation & Depth
In this system, depth is organic, not artificial. We avoid "floating" objects in favor of "layered" objects.

* **The Layering Principle:** Depth is achieved by "stacking" the `surface-container` tiers. A `surface-container-highest` card should be placed over a `surface-container-low` section to create natural separation without the need for harsh lines.
* **Ambient Shadows:** If a card must float (e.g., a high-impact product hover), use a shadow with a blur of `24px` and a color of `on-surface` (#1a1c1c) at **4% opacity**. It should feel like a soft ambient occlusion, not a drop shadow.
* **The Ghost Border:** For accessibility on white backgrounds, use a `ghost-border`. This is the `outline-variant` (#d3c4b7) at **15% opacity**. It provides just enough "bite" to the edge without breaking the editorial flow.

---

## 5. Components

### Buttons
* **Primary:** A gradient fill from `primary` to `primary_container`. No border. Roundedness: `sm` (0.125rem) for a sharp, professional look.
* **Secondary:** `surface_container_highest` fill with `on_surface` text. Used for secondary actions in high-density areas.
* **Tertiary (Editorial Link):** `on_surface` text, all-caps, with a 2px underline in `primary_container` offset by `spacing-1`.

### Cards & Imagery
* **Hero Imagery:** Images should use a `xl` (0.75rem) corner radius when contained, or `none` when bleeding off the edge of the screen.
* **Content Separation:** Forbid divider lines. Use `spacing-12` or `spacing-16` to separate sections. If content feels too loose, shift the background color to `surface-container-low`.

### Input Fields & Controls
* **Inputs:** Use `surface-container-highest` with a `ghost-border`. On focus, the border opacity increases to 100% using the `primary` color.
* **Checkboxes/Radios:** Use `secondary` (#3a608d) for selected states to provide a subtle "Outdoor/Marine" accent against the leather-toned primary colors.

### Immersive Product Teasers (Custom Component)
A large-scale image block where the product imagery overlaps the headline typography. The text uses `display-lg` and is positioned at `z-index: 1`, with the product at `z-index: 2`, creating a 3D effect that breaks the flat plane of the screen.

---

## 6. Do's and Don'ts

### Do:
* **Do** use asymmetrical margins. For example, have text left-aligned with a `spacing-24` margin while images on the right bleed to the screen edge.
* **Do** use `surface-tint` (#785834) at low opacities for image overlays to create a cohesive brand warmth across varied photography.
* **Do** prioritize vertical white space. If in doubt, add more breathing room.

### Don't:
* **Don't** use 1px solid borders to separate sections or cards. It "boxes in" the brand and makes it feel like a standard e-commerce template.
* **Don't** use pure black (#000000) for text. Use `on-surface` (#1a1c1c) to maintain a soft, premium ink-on-paper feel.
* **Don't** use "standard" 4px or 8px shadows. They are too aggressive for this sophisticated, flat-layered aesthetic.