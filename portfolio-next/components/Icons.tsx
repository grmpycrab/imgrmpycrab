import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  className: "icn",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const I = {
  play: () => (
    <svg {...base}><path d="M7 5l12 7-12 7V5z" fill="currentColor" stroke="none" /></svg>
  ),
  pause: () => (
    <svg {...base}>
      <rect x="6" y="5" width="4" height="14" fill="currentColor" stroke="none" />
      <rect x="14" y="5" width="4" height="14" fill="currentColor" stroke="none" />
    </svg>
  ),
  prev: () => (
    <svg {...base}><path d="M6 5v14M19 5l-9 7 9 7V5z" fill="currentColor" stroke="none" /></svg>
  ),
  next: () => (
    <svg {...base}><path d="M18 5v14M5 5l9 7-9 7V5z" fill="currentColor" stroke="none" /></svg>
  ),
  arrow: () => (
    <svg {...base}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  ),
  ext: () => (
    <svg {...base}><path d="M14 4h6v6M20 4l-10 10M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" /></svg>
  ),
  volume: () => (
    <svg {...base}><path d="M4 9v6h4l5 4V5L8 9H4zM17 8c1.5 1.5 1.5 6.5 0 8M20 5c3 3 3 11 0 14" /></svg>
  ),
  mute: () => (
    <svg {...base}><path d="M4 9v6h4l5 4V5L8 9H4zM17 9l5 6M22 9l-5 6" /></svg>
  ),
  shuffle: () => (
    <svg {...base}><path d="M16 4h4v4M4 20l16-16M16 20h4v-4M4 4l5 5M14 14l6 6" /></svg>
  ),
  github: () => (
    <svg {...base}><path d="M9 19c-4 1-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C7.7 2.8 6.6 3.1 6.6 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 5.2 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></svg>
  ),
  doc: () => (
    <svg {...base}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6zM14 3v6h6M8 13h8M8 17h5" /></svg>
  ),
  download: () => (
    <svg {...base}><path d="M6 9V4h12v5M6 18H4v-7h16v7h-2M6 14h12v7H6v-7z" /></svg>
  ),
  close: () => (
    <svg {...base}><path d="M6 6l12 12M18 6L6 18" /></svg>
  ),
  menu: () => (
    <svg {...base}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
  ),
};
