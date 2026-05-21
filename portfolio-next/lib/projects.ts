import type { DevProject, DesignCase, MediaClip } from "./types";

export const DEV_STACK: Array<[string, string]> = [
  ["Flutter", "Dart"],
  ["Firebase", "Auth · FS"],
  ["React Native", "Cross-platform"],
  ["TypeScript", "Strict"],
  ["Figma", "Tokens"],
  ["MySQL", "PG · RLS"],
  ["GitHub", "CI · CD"],
  ["Vercel", "Edge"],
  ["Node", "REST · WS"],
];

export const DEV_PROJECTS: DevProject[] = [
  {
    name: "EchoNotes",
    tag: "Mobile · Flutter",
    desc: "Voice-first notebook with on-device transcription and BLE accessory sync.",
    year: "2025",
    stack: "Flutter · Firebase · Whisper",
  },
  {
    name: "Campusly",
    tag: "Mobile · Flutter",
    desc: "Student-org coordination app — events, attendance, points, push.",
    year: "2024",
    stack: "Flutter · Firebase",
  },
  {
    name: "Sari-Sari OS",
    tag: "Web · Next.js",
    desc: "Inventory & POS for neighborhood stores. Offline-first PWA.",
    year: "2024",
    stack: "Next.js · IndexedDB",
  },
];

export const DESIGN_CASES: DesignCase[] = [
  {
    name: "Loomstead",
    pre: "Case Study · 2025",
    tag: "Mobile banking",
    desc: "Rethinking transfers as a three-tap gesture. Reduced steps from 7 → 3, increased completion +38%.",
    role: "Lead designer",
    tools: "Figma · Rive",
    colors: ["#1a1814", "#c14b3d", "#f4efe6", "#d9a0a0"],
    wide: true,
  },
  {
    name: "Fern Library",
    pre: "Design System · 2024",
    tag: "Component library",
    desc: "A 240-component library + tokens powering 6 internal products.",
    role: "Systems",
    tools: "Figma · Tokens Studio",
    colors: ["#2d4030", "#a8b7a0", "#f1ede5"],
  },
  {
    name: "Tide",
    pre: "Concept · 2024",
    tag: "Calm habit tracker",
    desc: "Habit tracking that rewards rest. Weekly tides instead of streaks.",
    role: "Solo",
    tools: "Figma · After Effects",
    colors: ["#1c3a52", "#8fbcd4", "#f7f1e8"],
  },
];

export const DESIGN_PROCESS: Array<[string, string, string]> = [
  ["01", "Listen", "Interviews, journey mapping, asking the dumb questions."],
  ["02", "Frame", "Tighten the problem. Write the one-sentence brief."],
  ["03", "Sketch", "Twelve bad ideas before one good one."],
  ["04", "Prototype", "Hi-fi, animated, on a real device, in a real hand."],
  ["05", "Ship", "Measure, edit, ship again."],
];

export const MEDIA_CLIPS: MediaClip[] = [
  { num: "01", t: "Literary Editor — Ang Sidlakan", s: "Editor · Ongoing", pub: "Ang Sidlakan · DOrSU · 2025" },
  { num: "02", t: "Video Editor — Ang Sidlakan", s: "Editor · Ongoing", pub: "Ang Sidlakan · DOrSU · 2025" },
  { num: "03", t: "News Writer — Ang Sidlakan", s: "Writer", pub: "Ang Sidlakan · DOrSU · 2024" },
  { num: "04", t: "News Anchor — Ang Subang", s: "News Coverage", pub: "USC · DOrSU · 2023 — 2024" },
];
