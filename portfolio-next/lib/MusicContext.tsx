"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { routeToSection, sectionToSong } from "./songs";
import type { Song } from "./types";

type MusicCtx = {
  song: Song;
  section: Song["section"];
  playing: boolean;
  setPlaying: (v: boolean | ((p: boolean) => boolean)) => void;
  soundOn: boolean;
  setSoundOn: (v: boolean | ((p: boolean) => boolean)) => void;
  resumeOpen: boolean;
  openResume: () => void;
  closeResume: () => void;
  /** Direct ref to the HTMLAudioElement — read currentTime / duration from Player */
  audioRef: React.RefObject<HTMLAudioElement | null>;
  /** Seek to a 0–1 fraction of the track */
  seek: (fraction: number) => void;
  /** Web Audio AnalyserNode — present only after the user enables SFX */
  analyserRef: React.RefObject<AnalyserNode | null>;
};

const Ctx = createContext<MusicCtx | null>(null);

export function MusicProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "/";
  const section = routeToSection(pathname);
  const song = useMemo(() => sectionToSong(section), [section]);

  const [playing, setPlaying] = useState(true);
  const [soundOn, setSoundOn] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  // Create the audio element once on the client.
  useEffect(() => {
    const audio = new Audio();
    audio.preload = "metadata";
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Swap the src whenever the song changes (and re-trigger play if needed).
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !song.src) return;
    audio.src = song.src;
    audio.load();
    if (soundOn && playing) {
      audio.play().catch(() => {});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [song.id]);

  // Auto-restart the "playing" UI feel on route change.
  useEffect(() => {
    setPlaying(true);
  }, [section]);

  // Sync play/pause with the audio element whenever soundOn or playing changes.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (soundOn && playing) {
      // Browsers block autoplay without a prior user gesture — the catch
      // silently swallows the NotAllowedError so nothing explodes.
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [soundOn, playing]);

  // Wire up Web Audio API the first time the user enables SFX.
  // Must happen inside a user-gesture callback — the SFX toggle qualifies.
  useEffect(() => {
    if (!soundOn) return;
    const audio = audioRef.current;
    if (!audio || audioCtxRef.current) return; // already wired

    const CtxClass: typeof AudioContext = window.AudioContext ?? (window as any).webkitAudioContext;
    if (!CtxClass) return;

    const ctx = new CtxClass();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.5;

    const source = ctx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(ctx.destination);

    audioCtxRef.current = ctx;
    analyserRef.current = analyser;
  }, [soundOn]);

  // Resume a suspended context after tab switches or browser policy pauses.
  useEffect(() => {
    if (soundOn && audioCtxRef.current?.state === "suspended") {
      audioCtxRef.current.resume();
    }
  }, [soundOn, playing]);

  const seek = useCallback((fraction: number) => {
    const audio = audioRef.current;
    if (!audio || !isFinite(audio.duration)) return;
    audio.currentTime = fraction * audio.duration;
  }, []);

  const openResume = useCallback(() => setResumeOpen(true), []);
  const closeResume = useCallback(() => setResumeOpen(false), []);

  const value: MusicCtx = {
    song,
    section,
    playing,
    setPlaying,
    soundOn,
    setSoundOn,
    resumeOpen,
    openResume,
    closeResume,
    audioRef,
    seek,
    analyserRef,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useMusic(): MusicCtx {
  const v = useContext(Ctx);
  if (!v) throw new Error("useMusic must be used inside <MusicProvider>");
  return v;
}
