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
frameworks. When generating content, apply ALL of them simultaneously.

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

1. **Plain language first** — Every concept starts with an explanation a
   smart 12-year-old could follow. No jargon without immediate definition.

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

## Content Structure (总分)

Every piece of content follows a **General → Specific** (总分) structure:

### 1. Title
A single sentence capturing the core idea. Scannable in 2 seconds.

### 2. Introduction
2–3 sentences in plain language:
- What this is about
- Why it matters
- A grounding analogy if the topic is abstract

If key terms are needed, define them here (Pre-training).

### 3. Structured Breakdown
Break into clearly separated sections. Choose the format that best fits
each section — mix and match freely:

- **Cards/Lists** — Parallel items, feature comparisons
- **Tables** — Parameter comparison, attribute listing
- **Steps** — Processes, workflows, ordered procedures
- **Collapsible sections** — Deep details, FAQ, optional depth
- **Callout boxes** — Key conclusions, warnings, tips
- **Quotes** — Principles, definitions, expert opinions
- **Side-by-side** — Before/after, comparison
- **Code blocks** — Code examples with syntax hints
- **Diagrams** — Flows, architecture, relationships (Mermaid syntax)

### 4. Visual Aids
When content involves processes, architecture, or relationships, use
diagrams. Place them NEXT TO the text they illustrate.

### 5. Examples
Every abstract concept MUST have a concrete example within 3 paragraphs:
1. Real-world analogy first ("Think of it like…")
2. Concrete instance (actual code, config, data)
3. Contrast if helpful ("Without this → X. With this → Y.")

### 6. Takeaway
1–2 sentences the reader will remember tomorrow. The "if you forget
everything else, remember this" moment.

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

| ✅ | Framework | Check |
|----|-----------|-------|
| | CLT | Each section = one idea? |
| | CLT | Nothing extraneous? |
| | Feynman | A non-expert could understand every section? |
| | Feynman | Every abstract concept has a concrete example? |
| | Mayer | Text paired with visuals where helpful? |
| | Mayer | Visual cues guide attention to key points? |
| | Mayer | Tone is conversational, not academic? |
| | Progressive | Gist available in 30 seconds from title + intro? |
| | Progressive | Deep details are hidden/collapsible? |
| | All | Takeaway would stick with the reader tomorrow? |


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

2. **Load the learning method:**
   - Check if a domain-specific `METHOD.md` exists for this topic.
   - If not, use `domains/general/METHOD.md`.

3. **Organize content** following `SPEC.md`:
   - Title (2-second scan)
   - Introduction (30-second plain language summary with analogy)
   - Structured breakdown (mix of formats, chunked, one idea per section)
   - Visual aids (diagrams if the topic involves processes/relationships)
   - Concrete examples (analogy → real instance → contrast)
   - Takeaway (1-2 memorable sentences)

4. **Choose output format** automatically:
   - If the topic is visual/complex (architecture, flows, comparisons)
     → generate **HTML** and open in browser.
   - If the topic is straightforward or text-heavy
     → output directly in the conversation or generate **Markdown**.
   - When in doubt, prefer HTML — it supports richer presentation.

5. **Apply the quality checklist** from SPEC.md before finalizing.

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

2. **Organize content** following `SPEC.md` (总分 structure).

3. **Generate a self-contained HTML file:**
   - All CSS inline.
   - Mermaid.js via CDN for diagrams.
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

2. **Organize content** following `SPEC.md` (总分 structure).

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

## Notes for AI Agents

- These commands work alongside normal conversation. Users may type them
  at any point.
- Always reference `SPEC.md` for content organization rules.
- Always reference `domains/*/METHOD.md` for domain-specific learning
  strategies when applicable.
- Always reference `templates/default.md` for output styling guidance.
- Match the user's language (Chinese input → Chinese output, etc.).
- Every piece of content must be real — never use placeholders or filler.


---

# Domain: General Learning

Universal learning methods backed by neuroscience and cognitive psychology.
These apply to ANY subject. Domain-specific methods (in other METHOD.md
files) build on top of these.

---

## Research Basis

| Method | Researcher | Key Finding |
|--------|------------|-------------|
| Spaced Repetition | Hermann Ebbinghaus | Memory decays exponentially; reviewing at increasing intervals fights the forgetting curve |
| Active Recall | Roediger & Karpicke | Testing yourself is 50% more effective than re-reading |
| Interleaving | Kornell & Bjork | Mixing different topics/types improves discrimination and transfer |
| Elaborative Interrogation | Pressley et al. | Asking "why?" and "how?" deepens encoding |
| Concrete Examples | Rawson et al. | Abstract concepts + concrete examples → 2x better retention |
| Dual Coding | Allan Paivio | Verbal + visual encoding creates two retrieval paths |
| Desirable Difficulty | Robert Bjork | Harder (but achievable) practice → stronger long-term retention |

---

## Core Principles

### 1. Retrieve, Don't Re-read

The act of pulling information FROM memory strengthens it far more than
pushing information INTO memory.

**AI instruction:** After explaining a concept, pose a question that
forces the learner to recall what was just taught. Don't immediately
provide the answer.

### 2. Space It Out

One intense session is far less effective than multiple short exposures
spread over time.

**AI instruction:** When teaching a multi-part topic, explicitly tell
the learner what to revisit and when. Suggest a review schedule.

### 3. Interleave Topics

Don't teach A-A-A-B-B-B. Teach A-B-A-B-A-B. Mixing forces the brain
to discriminate between concepts, which strengthens understanding.

**AI instruction:** When explaining related concepts, alternate between
them rather than exhausting one before starting another.

### 4. Ask "Why" and "How"

Simply stating a fact is shallow encoding. Asking "why is this true?"
or "how does this connect to X?" creates deeper memory traces.

**AI instruction:** After stating a principle, immediately follow with
"Why? Because…" or "How does this work? …" Don't leave facts hanging.

### 5. Concrete Before Abstract

The brain anchors abstract concepts to concrete experiences. Always
ground theory in a tangible example first.

**AI instruction:** Never introduce an abstract concept without first
showing a concrete instance. The example comes BEFORE the definition.

### 6. Dual Code Everything

When information is encoded both verbally and visually, it creates two
independent retrieval paths — making recall significantly more reliable.

**AI instruction:** Pair every major concept with a visual representation
(diagram, table, chart, or structured layout). Text alone is always
suboptimal.

### 7. Make It Hard (But Not Too Hard)

Easy tasks feel productive but don't build durable memory. Tasks that
require effort (but are achievable) create stronger learning.

**AI instruction:** Don't over-simplify. After the initial gentle
explanation, present the concept with increasing complexity. Challenge
the learner slightly beyond their comfort zone.

---

## AI Instructions Summary

When teaching ANY topic using this method:

1. Start with a **concrete example** (not a definition)
2. Explain the underlying **"why"** and **"how"**
3. Pair text with **visuals** (diagrams, tables, structured layouts)
4. After explaining, **ask a recall question** before moving on
5. When covering multiple concepts, **interleave** them
6. At the end, provide a **spaced repetition schedule** for review
7. Gradually **increase difficulty** — don't stay at the beginner level


---

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

