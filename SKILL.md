---
name: mindbridge
description: >-
  Smart context-aware preview generator grounded in learning science. Analyzes
  recent conversation to determine the most relevant content, then generates an
  elegant preview (HTML, Markdown, or other formats) designed for rapid human
  comprehension. Triggered by: "/preview", "preview", "预览", "/html",
  "/learn", "/md".
---

# MindBridge Specification

The cognitive rendering specification for AI-generated content.

Every rule in this document is derived from one of 4 research-backed
frameworks. **Select and apply the frameworks that fit the content:**

| Content type | Primary frameworks | Why |
|---|---|---|
| Explaining a concept | Feynman + CLT | Needs analogies + chunking |
| Architecture / flow / comparison | Mayer + Progressive | Needs visuals + layered depth |
| Reference docs / API | Progressive + CLT | Expert audience, needs structure |
| Teaching a complex system | All four | Needs everything |
| Quick answer / fact | CLT only | Keep it short and chunked |

When unsure, default to **CLT + Feynman** (chunk well, explain clearly).

---

## Framework 1: Cognitive Load Theory (John Sweller)

Human working memory holds ~4 information chunks at a time. Content must
respect this biological limit.

### Rules

1. **Chunk** — Each section conveys ONE idea. If you need a second idea,
   start a new section.

2. **Reduce extraneous load** — Remove anything that doesn't directly help
   understanding. Every sentence earns its place. No decorative filler.

3. **Pre-train** — For complex topics, define key terms BEFORE the main
   explanation. Don't make the reader decode vocabulary while also trying
   to understand the concept.

4. **Maximize germane load** — Spend the reader's cognitive resources on
   actual learning (building mental models, making connections), not on
   decoding bad layout or parsing jargon.

---

## Framework 2: Feynman Technique (Richard Feynman)

If you can't explain it simply, you don't understand it well enough.

### Rules

1. **Plain language first** — Start with the simplest accurate explanation.
   No jargon without immediate definition. Adjust depth to the audience:
   - Beginner → analogy-heavy, step-by-step
   - Intermediate → balanced explanation + examples
   - Expert → concise, skip basics, focus on nuance and edge cases
   If unsure, default to intermediate.

2. **Analogy before abstraction** — Before showing the technical truth,
   give a real-world analogy.
   - ✅ "Think of Git branches like parallel universes where you can try
     different things without breaking the original."
   - ❌ "A branch is a movable pointer to a commit object."

3. **Expose the gap** — If something is counterintuitive, call it out:
   "You might expect X, but actually Y happens because…"

4. **Build up, don't dump** — Present ideas in the order they need to be
   understood, not in the order they were discussed or in order of
   importance.

---

## Framework 3: Mayer's Multimedia Learning (Richard Mayer)

People learn better from words + visuals than words alone — but only when
the combination follows specific rules.

### Rules

1. **Multimedia** — Pair text with relevant visuals (diagrams, tables,
   color-coding). Walls of text alone are always worse.

2. **Coherence** — Omit anything that doesn't directly support understanding.
   No decorative images, no tangential asides, no "fun facts" that distract.

3. **Signaling** — Use visual cues to direct attention to what matters:
   - **Bold** for the single most important phrase per paragraph
   - Callout boxes for "don't miss this" information
   - Icons/emoji sparingly as visual anchors (⚠️ warning, 💡 insight)

4. **Spatial contiguity** — Place explanatory text NEXT TO the thing it
   explains. Never make the reader scroll back and forth.

5. **Segmenting** — Let the reader control pacing. Use collapsible sections,
   clear section breaks, and layered depth.

6. **Personalization** — Write in conversational tone. Use "you", "we",
   "imagine…" — not formal academic prose.

---

## Framework 4: Progressive Disclosure (Nielsen Norman Group)

Show essential information first. Reveal complexity only when the reader
asks for it.

### Rules

1. **Layer 0 — Title** (2-second scan)
   Reader decides: "Is this for me?" One sentence, immediately clear.

2. **Layer 1 — Summary** (30-second read)
   Reader gets the full picture at a high level. 2-3 conversational
   sentences covering what, why, and a grounding analogy.

3. **Layer 2 — Sections** (self-paced reading)
   Each section is self-contained. Reader can read in any order.
   Content is chunked, with visual variety (don't use the same format
   for every section).

4. **Layer 3 — Details** (on-demand depth)
   Deep details live inside collapsible/expandable elements. Only shown
   when the reader actively wants them.

5. **Max depth: 3 levels.** Never hide information behind more than 3
   clicks or expansions.

---

## Content Structure

Choose the structure that fits the **user's intent**, not a fixed template:

### Structure A: Teaching (总分) — "explain X", "what is X"

1. **Title** — Core idea in one sentence (2-second scan)
2. **Introduction** — 2-3 sentences: what, why, analogy if abstract
3. **Structured Breakdown** — Sections (one idea each), mixed formats
4. **Visual Aids** — Diagrams next to the text they illustrate
5. **Examples** — Analogy → concrete instance → contrast
6. **Takeaway** — 1-2 sentences to remember tomorrow

### Structure B: Troubleshooting — "why does X", "X not working"

1. **Symptom** — What the user is seeing (validate understanding)
2. **Most likely cause** — Start with the most common reason
3. **Diagnosis** — How to confirm (commands, checks, logs)
4. **Fix** — Step-by-step solution with code
5. **Prevention** — How to avoid this in the future (optional)

### Structure C: Decision — "X vs Y", "which should I use"

1. **One-line recommendation** — Lead with the answer
2. **Comparison table** — Key dimensions side by side
3. **When to use each** — Concrete scenarios, not abstract criteria
4. **Trade-offs** — What you give up with each choice

### Structure D: Reference / Cheatsheet — "X commands", "X cheatsheet"

1. **Grouped by task** — Not alphabetical, but by what user wants to do
2. **Minimal explanation** — One-liner per item, copy-paste ready
3. **No introduction needed** — Jump straight into content

### Format palette

Use the format that best fits each section — mix freely:

- **Tables** — Comparisons, attribute listing
- **Steps** — Sequential processes
- **Cards/Lists** — Parallel items
- **Callout boxes** — Warnings, tips, key conclusions
- **Code blocks** — With syntax hints
- **Diagrams** — Flows, architecture (Mermaid syntax)
- **Collapsible sections** — Optional depth (HTML only)
- **Math** — Formulas and equations (KaTeX in HTML, inline in Markdown)

---

## Content Guidelines

- **Language** — Match the user's language. Chinese → Chinese. English →
  English.
- **Tone** — Conversational but precise. Like a great tech blog or a
  Feynman lecture.
- **No filler** — Every sentence teaches or orients. Delete anything
  that does neither.
- **No placeholders** — Every word is real content, never lorem ipsum.

---

## Quality Checklist

Before finalizing any output, verify:

| Check | Applies when |
|-------|-------------|
| Each section = one idea? | Always |
| Nothing extraneous? | Always |
| Depth matches audience level? | Always |
| Abstract concepts have concrete examples? | Teaching |
| Text paired with visuals where helpful? | Teaching, Decision |
| Visual cues guide attention to key points? | Always |
| Tone is conversational, not academic? | Always |
| Gist available in 30 seconds from top? | Always |
| Deep details are hidden/collapsible? | HTML output |
| Lead with the answer, not the background? | Troubleshooting, Decision |

---

# MindBridge Skills

Commands that users can type to trigger MindBridge behaviors.
Any AI agent reading this file should recognize and execute these commands.

---

## /learn

**Purpose:** Learn or understand something. AI chooses the best output
format automatically.

### When triggered

User types `/learn` followed by a topic, question, or concept.

Examples:
- `/learn how does TCP three-way handshake work`
- `/learn 什么是闭包`
- `/learn explain Git rebase vs merge`

### Behavior

1. **Determine the topic** from the user's input.

2. **Choose the content structure** that fits the user's intent
   (Teaching, Troubleshooting, Decision, or Reference).

3. **Select frameworks** from the decision table above based on
   content type.

4. **Organize content** following the chosen structure.

5. **Choose output format** automatically:
   - If the topic is visual/complex (architecture, flows, comparisons)
     → generate **HTML** and open in browser.
   - If the topic is straightforward or text-heavy
     → output directly in the conversation or generate **Markdown**.
   - When in doubt, prefer HTML — it supports richer presentation.

6. **Apply the quality checklist** before finalizing.

---

## /html

**Purpose:** Force HTML output. Generate a rich, styled HTML preview and
open it in the browser.

### When triggered

User types `/html` optionally followed by a topic or with no argument.

Examples:
- `/html` (preview whatever was just discussed)
- `/html the authentication flow we just designed`

### Behavior

1. **Determine what to render:**
   - If a topic is provided, use it.
   - If no topic, analyze recent conversation (last 3-5 turns) and
     preview the most relevant content:
     - Priority: user specifies > recent plan > recent design >
       recent code > recent concept > conversation summary.

2. **Organize content** following the appropriate content structure.

3. **Generate a self-contained HTML file:**
   - All CSS inline.
   - Mermaid.js via CDN for diagrams.
   - KaTeX via CDN for math formulas.
   - Highlight.js via CDN for code blocks.
   - Light, elegant theme: warm off-white background (#FAFAF8),
     serif titles (Georgia), sans-serif body (system-ui), generous
     whitespace, line-height 1.8, max-width 780px.
   - Must include `<meta charset="UTF-8">` for CJK support.

4. **Save and open:**
   - Save to system temp directory: `preview-{topic-slug}.html`
   - Open with default browser:
     - Windows: `Start-Process "$env:TEMP\preview-{slug}.html"`
     - macOS: `open /tmp/preview-{slug}.html`
     - Linux: `xdg-open /tmp/preview-{slug}.html`

5. Tell the user what was previewed and where the file is saved.

---

## /md

**Purpose:** Force Markdown output. Generate a well-structured Markdown
document.

### When triggered

User types `/md` optionally followed by a topic or with no argument.

Examples:
- `/md` (render whatever was just discussed)
- `/md summarize the deployment strategy`

### Behavior

1. **Determine what to render** (same logic as /html).

2. **Organize content** following the appropriate content structure.

3. **Generate a Markdown file:**
   - Standard GFM (GitHub Flavored Markdown).
   - Use `#` headers for layer hierarchy.
   - Use `> **💡 Key insight:** …` for callouts.
   - Use pipe tables for comparisons.
   - Use ` ```mermaid ``` ` for diagrams.
   - Use ` ```language ``` ` for code with syntax hints.
   - Since Markdown lacks collapsible sections, use clear sub-headers
     like "### Deep Dive: …" so readers can skip.

4. **Save and open:**
   - Save to system temp directory: `preview-{topic-slug}.md`
   - Open with default handler:
     - Windows: `Start-Process "$env:TEMP\preview-{slug}.md"`
     - macOS: `open /tmp/preview-{slug}.md`
     - Linux: `xdg-open /tmp/preview-{slug}.md`

5. Tell the user what was rendered and where the file is saved.

---

## /preview

**Purpose:** Context-aware preview. Equivalent to `/html` with no argument —
analyzes recent conversation and generates a preview of the most relevant
content.

### When triggered

User types `/preview`, `preview`, or `预览`.

### Behavior

Same as `/html` with no argument:
1. Analyze recent conversation (last 3-5 turns)
2. Identify the most relevant content to preview
3. Generate HTML and open in browser

---

## Notes for AI Agents

- These commands work alongside normal conversation. Users may type them
  at any point.
- All specification, frameworks, content structures, and styling rules
  are defined in this file.
- Match the user's language (Chinese input → Chinese output, etc.).
- Every piece of content must be real — never use placeholders or filler.

---

# Learning Principles

Cognitive techniques to apply when generating educational content.

---

## When Teaching a Concept

1. **Concrete before abstract** — Show a real example BEFORE the
   definition. The brain anchors abstract ideas to tangible experiences.

2. **Ask "why" and "how"** — Don't leave facts hanging. After stating
   a principle, immediately explain why it's true or how it works.

3. **Dual code** — Pair every major concept with a visual (diagram,
   table, chart). Text + visual creates two retrieval paths.

4. **Expose counterintuition** — If something is surprising, call it
   out: "You might expect X, but actually Y happens because…"

5. **Build up, don't dump** — Present ideas in the order they need to
   be understood, not in order of importance.

---

# HTML Output Style

Style rules for HTML output. Ignore this section for Markdown output.

---

## Visual Identity

- **Feeling:** Clean, calm, intellectual. Like a well-typeset article.
- **Color scheme:** Light / warm tones.

## Colors

| Role | Value | Usage |
|------|-------|-------|
| Background | `#FAFAF8` | Page background |
| Surface | `#FFFFFF` | Cards, callouts, code blocks |
| Accent background | `#F0F7FC` | Introduction block |
| Text primary | `#2C3E50` | Headings, body text |
| Text secondary | `#5D6D7E` | Descriptions |
| Accent blue | `#3498DB` | Links, highlights |
| Accent orange | `#E67E22` | Warnings |
| Accent green | `#27AE60` | Success |
| Accent red | `#E74C3C` | Errors |
| Border | `#E8E8E4` | Separators |

## Typography

| Element | Font | Size |
|---------|------|------|
| Title (h1) | Georgia, serif | 2.4em |
| Section (h2) | Georgia, serif | 1.6em |
| Body | system-ui, sans-serif | 1em |
| Code | Cascadia Code, Fira Code, Consolas | 0.9em |

## Layout

- Max width: **780px**, centered
- Line height: **1.8**
- Section spacing: **48px**
- `<meta charset="UTF-8">` required for CJK

## CDN Dependencies

- **Mermaid.js** — Diagrams
- **Highlight.js** — Code syntax highlighting
- **KaTeX** — Math formulas (`$inline$` and `$$block$$`)

## Key Components

- **Introduction Block** — `#F0F7FC` background, left blue border
- **Cards** — White, subtle border, hover shadow
- **Numbered Steps** — Blue circular badge per step
- **Callout Boxes** — Left colored border (blue/orange/green/red)
- **Collapsible Sections** — Click to expand (Layer 3 depth)
- **Takeaway Block** — Dark gradient, white text, gold highlights

## Responsive

- Below 600px: single-column, reduced padding, smaller title
