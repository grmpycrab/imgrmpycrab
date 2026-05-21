import type { Song } from "./types";

export const SONGS: Song[] = [
  {
    id: "hub",
    no: "00",
    title: "Side A / Side B",
    sub: "Overture",
    section: "hub",
    duration: "1:42",
    spotify: "https://open.spotify.com/track/13XwZe0nzKxtsSu8uLkeuP?si=f325a9cc5ae94e62",
    youtube: "https://youtube.com/@keyntharly_music",
    bpm: 84,
    seed: 0.51,
    palette: ["#e9d8a6", "#ff6a3d", "#0a0a0c"],
    src: "/audio/hub.mp3",
  },
  {
    id: "developer",
    no: "01",
    title: "Compile",
    sub: "Developer",
    section: "developer",
    duration: "3:48",
    spotify: "spotify:track:compile",
    youtube: "yt:compile",
    bpm: 128,
    seed: 0.18,
    palette: ["#00ff9f", "#00d4ff", "#05070a"],
    src: "/audio/developer.mp3",
  },
  {
    id: "design",
    no: "02",
    title: "Soft Edit",
    sub: "UI / UX",
    section: "design",
    duration: "4:22",
    spotify: "spotify:track:soft-edit",
    youtube: "yt:soft",
    bpm: 92,
    seed: 0.42,
    palette: ["#c14b3d", "#d9a0a0", "#f4efe6"],
    src: "/audio/design.mp3",
  },
  {
    id: "media",
    no: "03",
    title: "Press Run",
    sub: "Media · Journalism",
    section: "media",
    duration: "3:11",
    spotify: "spotify:track:press-run",
    youtube: "yt:press",
    bpm: 110,
    seed: 0.71,
    palette: ["#a02b1f", "#15110a", "#ece5d6"],
    src: "/audio/media.mp3",
  },
  {
    id: "research",
    no: "04",
    title: "Citations",
    sub: "Research",
    section: "research",
    duration: "5:06",
    spotify: "spotify:track:citations",
    youtube: "yt:citations",
    bpm: 76,
    seed: 0.33,
    palette: ["#5e1916", "#1f3a5f", "#f1ece1"],
    src: "/audio/research.mp3",
  },
];

export const routeToSection = (pathname: string): Song["section"] => {
  const seg = (pathname.replace(/^\//, "").split("/")[0] || "") as Song["section"];
  if (seg === "developer" || seg === "design" || seg === "media" || seg === "research") return seg;
  return "hub";
};

export const sectionToSong = (section: Song["section"]): Song =>
  SONGS.find((s) => s.section === section) ?? SONGS[0];
