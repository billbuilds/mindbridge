---
name: mindbridge
description: >-
  Cognitive rendering engine that transforms AI explanations into
  visually clear, brain-friendly HTML. Use this skill whenever the
  user asks to explain, teach, or break down any concept — including
  "what is X", "explain X", "help me understand X", "I don't get X",
  or any request for a clearer explanation. Also triggers on
  "/mindbridge". When in doubt about whether to use this skill,
  use it — it makes any explanation better.
---

## Theories

MindBridge uses 8 theories in two tiers:

- **Core (always-on):** Apply to ALL content, every time.
- **Triggered:** Activate when specific conditions are met.

When unsure which theories apply, default to **CLT + Feynman + Mayer**.

---

## Core Theories (Always-On)

### 1. CLT — John Sweller

Working memory holds ~4 chunks. Respect this limit or lose the reader.

- Chunk: one idea per section.
- Cut the noise: every sentence earns its place.
- **Pre-train vocabulary** — Define key terms BEFORE using them. Don't
  force the reader to decode jargon AND learn concepts simultaneously.
- Maximize useful effort: brainpower goes to mental models, not to
  deciphering layout.

### 2. Feynman Technique — Richard Feynman

If you can't explain it simply, you don't understand it.

- Plain language first. No jargon without immediate definition.
- **Analogy before abstraction** — Real-world anchor first, technical
  truth second. AI tends to skip this — always provide an analogy.
- Expose the gap: "You might expect X, but Y happens because…"
- **Build up, don't dump** — Order by dependency (understand A before
  B), not by importance or chronology.
- **Adjust depth to audience:** beginner → analogy-heavy; intermediate
  → balanced; expert → concise + edge cases. Default to intermediate.

### 3. Mayer's Multimedia Learning — Richard Mayer

Words + visuals > words alone. But only when combined correctly.

- Pair text with visuals (diagrams, tables, color-coding). No text walls.
- Coherence: cut anything that doesn't help understanding.
- **Signaling** — Bold the key phrase per paragraph. Callout boxes for
  critical info. Icons sparingly (⚠️ 💡).
- **Spatial contiguity** — Explanation sits NEXT TO the thing it
  explains. Never make the reader scroll back and forth.
- Segmenting: reader controls pacing via collapsible sections and breaks.
- Conversational tone: "you", "we", "imagine…"

### 4. Gestalt Principles — Wertheimer, Koffka, Köhler

The eye organizes before the mind reads.

- **Proximity** — Related items close together, unrelated items far
  apart. This is the #1 most violated rule in AI output.
- Similarity: same category = same visual style.
- Continuity: guide the eye with arrows, lines, alignment.
- Figure-ground: key info pops via contrast or elevation.

### 5. Progressive Disclosure — Nielsen Norman Group

Show the essential first. Reveal complexity only when asked.

- Layer 0 — Title (2-second scan): "Is this for me?"
- Layer 1 — Summary (30-second read): what, why, analogy.
- Layer 2 — Sections (self-paced): self-contained, any reading order.
- Layer 3 — Details (on-demand): collapsible/expandable.
- **Max depth: 3 levels.** Never hide info behind more than 3 clicks.

---

## Triggered Theories (Conditional)

These activate only when their conditions are met. Check each one
before generating content.

### 6. Schema Theory — Bartlett / Piaget

New knowledge must attach to something the reader already knows.

**Activate when:** the conversation reveals the reader's existing
knowledge, OR when explaining a new technology by comparing it to
a familiar one.

- **Bridge from known to unknown** — "You already know X. Y is
  like X, except…" This is different from Feynman's analogies
  (everyday life → technical). Schema bridges technical → technical.
- When new info contradicts existing knowledge, call it out
  explicitly: "Unlike X, Y does NOT…"

### 7. Worked Example Effect — Sweller (extended)

For procedural content, studying a complete worked solution beats
attempting to solve it yourself.

**Activate when:** the reader needs to reproduce a process — writing
code, configuring something, following operational steps.

- **Show the complete path first** — Full working example with
  annotations explaining each step's reasoning, not just the code.
- **Scaffold fading** — First example: fully annotated. Second:
  partial hints. Third: reader does it alone.
- **Expertise reversal** — For expert audiences, detailed
  walkthroughs become noise. Give only the delta (what's different
  from what they already know).

### 8. Narrative Theory — Jerome Bruner

Stories are remembered 6-7× better than raw facts.

**Activate when:** content involves a timeline, evolution, decision
history, or incident postmortem.

- Map to story structure: character (who) → conflict (problem) →
  resolution (solution + outcome).
- Don't force stories where they don't fit. API docs and
  cheatsheets don't need narratives.

---

## Content Structure

All output follows a **general → specific** (总分) structure:

1. **Title** — Core idea in one sentence. Scannable in 2 seconds.
2. **Summary** — 2-3 plain language sentences: what, why, and an
   analogy if the topic is abstract. Reader gets the full picture
   in 30 seconds.
3. **Breakdown** — Chunked sections, one idea each. Mix formats
   freely (tables, diagrams, code, callouts, steps, cards).
4. **Takeaway** — 1-2 sentences the reader will remember tomorrow.

Every abstract concept MUST have a concrete example within 3
paragraphs: analogy first → real instance → contrast if helpful.

### Format palette

Use whatever fits each section — mix freely:

- Tables — comparisons, attribute listing
- Steps — sequential processes
- Cards/Lists — parallel items
- Callout boxes — warnings, tips, key conclusions
- Code blocks — with language hints for syntax highlighting
- Diagrams — flows, architecture, relationships (Mermaid syntax)
- Collapsible sections — optional depth (HTML only)
- Math — formulas and equations (KaTeX in HTML)

---

## Command

### /mindbridge

Single entry point. Usage:

- `/mindbridge <topic>` — explain or teach a topic
- `/mindbridge` (no argument) — render the most relevant content
  from recent conversation

### Example

Input: `/mindbridge what is a database index`

Output: A self-contained HTML file with:
- **Title:** "Database Index — How Databases Find Your Data Fast"
- **Summary:** 2-3 sentences with an analogy ("like a book's table
  of contents — instead of reading every page, you jump straight
  to the right one")
- **Breakdown:** 3-4 sections — what it is, why it helps, when to
  use one, trade-offs — each with a visual (diagram or table)
- **Takeaway:** 1-2 memorable sentences

### Behavior

1. **Determine content.** If a topic is given, use it. If not,
   analyze the last 3-5 conversation turns and pick the most
   relevant content. Priority: user-specified > recent concept >
   recent discussion > conversation summary.

2. **Apply theories.** Always apply the 5 core theories. Check
   each triggered theory's activation condition.

3. **Generate HTML** — Read `templates/default.html` for the CSS
   and component styles, then generate a self-contained HTML file
   using those styles. The template is a style reference, not a
   fill-in-the-blanks form — write the full HTML yourself.

4. **Quality check** against the checklist before finalizing.

### HTML output

- Save to system temp directory: `mindbridge-{slug}.html`
- Open with default handler (`open` / `xdg-open` /
  `Start-Process`)
- Tell the user what was generated and where the file is.

---

## HTML Style

See `templates/default.html` for the complete template with CSS.

Summary: white background, `#111` text, gray scale, single accent
color `#2563EB`. Sans-serif throughout. 720px max width. No
shadows, no gradients, no decoration that doesn't serve
comprehension.

---

## Quality Checklist

Before outputting, verify these 6 things. If any answer is no, fix it.

1. Can a non-expert understand the summary without jargon?
2. Does every abstract concept have a concrete example nearby?
3. Is there at least one visual element (table, diagram, or
   structured layout) — no pure text walls?
4. Does each section stick to ONE idea?
5. Are related items visually grouped and unrelated items
   visually separated?
6. Could the reader get the gist from just the title + summary
   in under 30 seconds?

---

## Content Guidelines

- **Match language** — Chinese input → Chinese output. English →
  English.
- **Tone** — Conversational but precise. Like a great tech blog,
  not a textbook.
- **No filler** — Every sentence either teaches or orients. If it
  does neither, delete it.
- **No placeholders** — All content is real. Never use "insert X
  here" or dummy text.
