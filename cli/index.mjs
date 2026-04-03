#!/usr/bin/env node

import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import { existsSync, mkdirSync, cpSync, readFileSync, writeFileSync, readdirSync } from 'fs';
import { homedir } from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PKG_ROOT = resolve(__dirname, '..');

const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const GREEN = '\x1b[32m';
const BLUE = '\x1b[34m';
const YELLOW = '\x1b[33m';
const DIM = '\x1b[2m';

function log(msg) { console.log(msg); }
function ok(msg) { log(`  ${GREEN}✓${RESET} ${msg}`); }
function info(msg) { log(`  ${BLUE}→${RESET} ${msg}`); }
function warn(msg) { log(`  ${YELLOW}!${RESET} ${msg}`); }

// Files to install
const CORE_FILES = ['SPEC.md', 'skills.md'];
const DOMAIN_FILES = ['domains/general/METHOD.md', 'domains/_template/METHOD.md'];
const TEMPLATE_FILES = ['templates/default.md', 'templates/_template.md'];
const ALL_FILES = [...CORE_FILES, ...DOMAIN_FILES, ...TEMPLATE_FILES];

function detectAgents() {
  const agents = [];
  const home = homedir();

  // Copilot CLI
  const copilotDir = join(home, '.copilot', 'skills');
  if (existsSync(join(home, '.copilot'))) {
    agents.push({ name: 'Copilot CLI', type: 'copilot', dir: copilotDir });
  }

  // Claude Code
  if (existsSync(join(home, '.claude')) || existsSync('.claude')) {
    agents.push({ name: 'Claude Code', type: 'claude', dir: null });
  }

  // Cursor
  if (existsSync('.cursorrules') || existsSync('.cursor')) {
    agents.push({ name: 'Cursor', type: 'cursor', dir: null });
  }

  return agents;
}

function installGlobal() {
  const home = homedir();
  const targetDir = join(home, '.mindbridge');

  log('');
  log(`${BOLD}Installing MindBridge to ~/.mindbridge/${RESET}`);
  log('');

  mkdirSync(join(targetDir, 'domains', 'general'), { recursive: true });
  mkdirSync(join(targetDir, 'domains', '_template'), { recursive: true });
  mkdirSync(join(targetDir, 'templates'), { recursive: true });

  for (const file of ALL_FILES) {
    const src = join(PKG_ROOT, file);
    const dst = join(targetDir, file);
    if (existsSync(src)) {
      cpSync(src, dst, { force: true });
      ok(file);
    }
  }

  return targetDir;
}

function installCopilot() {
  const home = homedir();
  const skillDir = join(home, '.copilot', 'skills', 'mindbridge');

  log('');
  log(`${BOLD}Installing MindBridge skill for Copilot CLI${RESET}`);
  log('');

  mkdirSync(skillDir, { recursive: true });

  // Build a combined SKILL.md for Copilot
  const spec = readFileSync(join(PKG_ROOT, 'SPEC.md'), 'utf8');
  const skills = readFileSync(join(PKG_ROOT, 'skills.md'), 'utf8');
  const method = readFileSync(join(PKG_ROOT, 'domains', 'general', 'METHOD.md'), 'utf8');
  const template = readFileSync(join(PKG_ROOT, 'templates', 'default.md'), 'utf8');

  const skillMd = `---
name: mindbridge
description: >-
  Smart context-aware preview generator grounded in learning science. Analyzes
  recent conversation to determine the most relevant content, then generates an
  elegant preview (HTML, Markdown, or other formats) designed for rapid human
  comprehension. Triggered by: "/preview", "preview", "预览", "/html",
  "/learn", "/md".
---

${spec}

---

${skills}

---

${method}

---

${template}
`;

  writeFileSync(join(skillDir, 'SKILL.md'), skillMd, 'utf8');
  ok('~/.copilot/skills/mindbridge/SKILL.md');

  // Also install to ~/.claude/skills/ for Claude Code / Copilot CLI global
  const claudeSkillDir = join(home, '.claude', 'skills', 'mindbridge');
  mkdirSync(claudeSkillDir, { recursive: true });
  writeFileSync(join(claudeSkillDir, 'SKILL.md'), skillMd, 'utf8');
  ok('~/.claude/skills/mindbridge/SKILL.md');

  return skillDir;
}

function installProject() {
  const targetDir = join(process.cwd(), 'mindbridge');

  log('');
  log(`${BOLD}Installing MindBridge to ./mindbridge/${RESET}`);
  log('');

  mkdirSync(join(targetDir, 'domains', 'general'), { recursive: true });
  mkdirSync(join(targetDir, 'domains', '_template'), { recursive: true });
  mkdirSync(join(targetDir, 'templates'), { recursive: true });

  for (const file of ALL_FILES) {
    const src = join(PKG_ROOT, file);
    const dst = join(targetDir, file);
    if (existsSync(src)) {
      cpSync(src, dst, { force: true });
      ok(file);
    }
  }

  return targetDir;
}

function showUsage() {
  log('');
  log(`${BOLD}MindBridge${RESET} — Bridge AI output and human understanding`);
  log('');
  log('Usage:');
  log(`  ${DIM}npx${RESET} mindbridge install          Install to ~/.mindbridge/ + detected agents`);
  log(`  ${DIM}npx${RESET} mindbridge install --copilot Install as Copilot CLI skill`);
  log(`  ${DIM}npx${RESET} mindbridge install --project Install to ./mindbridge/ in current project`);
  log(`  ${DIM}npx${RESET} mindbridge install --global  Install to ~/.mindbridge/ only`);
  log('');
}

// Main
const args = process.argv.slice(2);
const command = args[0];

if (command !== 'install') {
  showUsage();
  process.exit(0);
}

const flag = args[1];

log('');
log(`${BOLD}🧠 MindBridge Installer${RESET}`);
log(`${DIM}   Teaching AI to communicate the way human brains learn${RESET}`);

if (flag === '--copilot') {
  const dir = installCopilot();
  log('');
  ok(`${BOLD}Copilot CLI skill installed!${RESET}`);
  log(`  ${DIM}Use /preview, /learn, /html, /md in Copilot CLI${RESET}`);
} else if (flag === '--project') {
  const dir = installProject();
  log('');
  ok(`${BOLD}Installed to ${dir}${RESET}`);
  log(`  ${DIM}Your AI agent can now read these files from the project${RESET}`);
} else if (flag === '--global') {
  const dir = installGlobal();
  log('');
  ok(`${BOLD}Installed to ${dir}${RESET}`);
} else {
  // Default: install global + auto-detect agents
  const globalDir = installGlobal();

  const agents = detectAgents();

  if (agents.some(a => a.type === 'copilot')) {
    installCopilot();
  }

  log('');
  log(`${GREEN}${BOLD}Done!${RESET}`);
  log('');
  log(`  Files installed to: ${DIM}${globalDir}${RESET}`);

  if (agents.length > 0) {
    log(`  Detected agents: ${agents.map(a => a.name).join(', ')}`);
  }

  log('');
  log(`  ${BOLD}Quick start:${RESET}`);
  log(`  Feed ${BLUE}SPEC.md${RESET} and ${BLUE}skills.md${RESET} to your AI agent, then use:`);
  log(`    ${GREEN}/learn${RESET}  — AI teaches you anything`);
  log(`    ${GREEN}/html${RESET}   — Rich HTML preview`);
  log(`    ${GREEN}/md${RESET}     — Markdown output`);
  log('');
}
