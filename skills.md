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
