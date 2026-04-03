# MindBridge

**Bridge the gap between AI output and human understanding.**

AI generates information at superhuman speed and density. Human brains are
biological — they can only absorb information through specific cognitive
patterns. MindBridge solves this mismatch.

## The Problem

When AI explains something complex, it often dumps a wall of text that's
technically correct but cognitively overwhelming. The bottleneck is not the
AI — it's the human brain.

## The Solution

MindBridge is a collection of **markdown files** that teach AI agents how to
communicate in ways that align with how human brains actually learn. It's
built on 4 research-backed learning science frameworks:

| Framework | Researcher | Core Idea |
|-----------|------------|-----------|
| Cognitive Load Theory | John Sweller | Working memory holds ~4 chunks. Don't overload it. |
| Feynman Technique | Richard Feynman | If you can't explain it simply, you don't understand it. |
| Multimedia Learning | Richard Mayer | Words + visuals > words alone (with rules). |
| Progressive Disclosure | Nielsen Norman Group | Show essentials first, details on demand. |

## How It Works

MindBridge is **zero-code, zero-dependency, zero-install**. It's just
markdown files that any AI agent can read.

```
You + AI Agent
      │
      │  Feed these markdown files to your agent:
      │
      ├── SPEC.md              → How to structure content for human brains
      ├── domains/general/     → Universal learning methods
      ├── templates/default.md → Output style guide
      └── skills.md            → Commands: /learn, /html, /md
```

### Quick Start

1. Copy `SPEC.md` and `skills.md` into your AI agent's context
2. Use the commands:

| Command | What it does |
|---------|-------------|
| `/learn` | AI teaches you using the best format for the content |
| `/html` | Generate a rich HTML preview and open in browser |
| `/md` | Generate a Markdown document |

Works with **any AI agent** — GitHub Copilot CLI, Claude Code, Cursor,
ChatGPT, or anything that reads text.

## Project Structure

```
mindbridge/
├── README.md                    # You are here
├── SPEC.md                      # Core specification (4 frameworks)
├── skills.md                    # Command router (/learn, /html, /md)
├── domains/
│   ├── general/METHOD.md        # Universal learning methods
│   └── _template/METHOD.md      # Template for contributors
├── templates/
│   ├── default.md               # Default output style
│   └── _template.md             # Template for contributors
└── examples/                    # Before/after demos
```

## Contributing

MindBridge is **100% markdown**. Anyone can contribute — no coding required.

### Add a Learning Domain

1. Copy `domains/_template/METHOD.md`
2. Fill in the research basis and learning principles for your domain
3. Submit a PR

### Add an Output Template

1. Copy `templates/_template.md`
2. Describe the visual style and layout rules
3. Submit a PR

## Philosophy

- **Human brain is the bottleneck, not AI.** Design for the reader.
- **Research-backed, not opinion-based.** Every principle cites a framework.
- **Zero dependencies.** Just markdown. Any AI can read it.
- **Community-driven domains.** Experts contribute how their field is best learned.

## License

MIT
