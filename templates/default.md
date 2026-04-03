# Template: Default

The default output style for MindBridge content. Elegant, light, and
optimized for focused reading.

---

## Visual Identity

- **Feeling:** Like reading a well-typeset magazine article or essay.
  Clean, calm, intellectual.
- **Color scheme:** Light / warm tones. Never dark mode by default.

## Colors

| Role | Value | Usage |
|------|-------|-------|
| Background | `#FAFAF8` (warm off-white) | Page background |
| Surface | `#FFFFFF` | Cards, callouts, code blocks |
| Accent background | `#F0F7FC` | Introduction block, highlights |
| Text primary | `#2C3E50` | Headings, body text |
| Text secondary | `#5D6D7E` | Descriptions, secondary info |
| Text muted | `#95A5A6` | Timestamps, footnotes |
| Accent blue | `#3498DB` | Links, step numbers, key highlights |
| Accent orange | `#E67E22` | Warnings, quotes |
| Accent green | `#27AE60` | Success, positive callouts |
| Accent red | `#E74C3C` | Errors, danger callouts |
| Border | `#E8E8E4` | Subtle separators |

## Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Title (h1) | Georgia, serif | 2.4em | 700 |
| Section (h2) | Georgia, serif | 1.6em | 600 |
| Subsection (h3) | System sans-serif | 1.2em | 600 |
| Body | Segoe UI, system-ui, sans-serif | 1em | 400 |
| Code | Cascadia Code, Fira Code, Consolas | 0.9em | 400 |

## Layout

- Max content width: **780px**, centered
- Line height: **1.8** (generous for readability)
- Top padding: **60px**
- Section spacing: **48px** between major sections
- Paragraph spacing: **16px**

## Component Styles

### Introduction Block
- Light blue background (`#F0F7FC`)
- Left border: 3px solid accent blue
- Slightly larger font (1.15em)
- Conveys: "This is the gentle onramp"

### Cards
- White background with subtle border
- Light shadow on hover
- Used for parallel items

### Numbered Steps
- Circular blue number badge (accent blue, white text)
- White card per step
- Used for sequential processes

### Callout Boxes
- Left border: 4px colored by type (blue=info, orange=warn, green=success)
- Tinted background matching the border color
- Used for "don't miss this" information

### Collapsible Sections
- White card with bold summary text
- Click to expand details
- Used for optional depth (Progressive Disclosure Layer 3)

### Takeaway Block
- Dark gradient background (deep blue → accent blue)
- White text, slightly larger
- Highlighted keywords in gold (`#F9E79F`)
- Conveys: "Remember this above all else"

### Diagrams
- Centered, white card with subtle border
- Mermaid.js with theme colors matching the page
- Placed NEXT TO the text they illustrate

## Responsive

- Below 600px: single-column layout for cards and comparisons
- Title scales down to 1.8em
- Padding reduces to 32px 16px
