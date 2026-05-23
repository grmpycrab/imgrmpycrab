export type Section = "hub" | "developer" | "design" | "media" | "research";

export type Song = {
  id: string;
  no: string;
  title: string;
  sub: string;
  section: Section;
  duration: string;
  spotify: string;
  youtube: string;
  bpm: number;
  seed: number;
  palette: [string, string, string];
  src?: string; // path under /public, e.g. "/audio/hub.mp3"
};

export type DevProject = {
  name: string;
  tag: string;
  desc: string;
  year: string;
  stack: string;
  link?: string; // full GitHub URL when it can't be derived from name
};

export type DesignCase = {
  name: string;
  pre: string;
  tag: string;
  desc: string;
  role: string;
  tools: string;
  colors: string[];
  wide?: boolean;
};

export type MediaClip = {
  num: string;
  t: string;
  s: string;
  pub: string;
  link?: string; // Facebook (or other) URL for this clip
};
