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
