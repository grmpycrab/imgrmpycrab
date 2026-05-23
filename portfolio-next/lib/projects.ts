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
    name: "Harmonica",
    link: "https://github.com/grmpycrab/Harmonica-v2",
    tag: "Mobile · Flutter",
    desc: "A personal music learning app for music theory learning. Features chord generation based on mood and genre.",
    year: "2026",
    stack: "Flutter · Firebase · Whisper",
  },
  {
    name: "TrekScan+",
    link: "https://github.com/grmpycrab/TrekScanPlus/tree/main/hamiguitan_trekscan_plus",
    tag: "Mobile · Flutter",
    desc: "Hamiguitan trail map and guidebook with offline maps, GPS tracking, and booking integration. Integrated with Hamiguitan Admin Dashboard for real-time updates and reporting.",
    year: "2024",
    stack: "Flutter · Firebase",
  },
  {
    name: "Admin Dashboard",
    link: "https://github.com/grmpycrab/TrekScanPlus/tree/main/Admin%20Dashboard/Mt.-Hamiguitan-TrekScan-Admin-Portal",
    tag: "Web · React Vite",
    desc: "Hamiguitan booking dashboard for staff — reservations, QR check-in, sales reports.",
    year: "2025",
    stack: "React · Vite · Firebase",
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
  { num: "01", t: "Unlinear: Beyond the Regular — Ang Sidlakan", s: "Editor · Ongoing", pub: "Ang Sidlakan · DOrSU · 2025", link: "https://www.facebook.com/share/p/1GuG497afg/" },
  { num: "02", t: "Sugilanon | 7.4 over 10 — Ang Sidlakan", s: "Editor · Ongoing", pub: "Ang Sidlakan · DOrSU · 2025", link: "https://www.facebook.com/share/p/1ZtRJrd4MB/" },
  { num: "03", t: "Think Pieces | in Silent Admiration — Ang Sidlakan", s: "Writer", pub: "Ang Sidlakan · DOrSU · 2025", link: "https://www.facebook.com/share/p/1EhQqnpaVn/" },
  { num: "04", t: "Unyield: Let the World See Us — Ang Sidlakan", s: "News Coverage", pub: "Ang Sidlakan · DOrSU · 2026", link: "https://www.facebook.com/share/p/1TTXrBqzvV/" },
  { num: "05", t: "Ghost Project: Thesis for Sale — Ang Sidlakan", s: "Anchor", pub: "Ang Sidlakan · DOrSU · 2025", link: "https://www.facebook.com/share/p/1HpGsaK81E/" },
];
