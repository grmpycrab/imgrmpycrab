"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useMusic } from "@/lib/MusicContext";
import { SONGS } from "@/lib/songs";
import { Visualizer } from "./Visualizer";
import { I } from "./Icons";

function fmt(seconds: number): string {
  const s = Math.max(0, Math.floor(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

export function Player() {
  const router = useRouter();
  const { song, playing, setPlaying, soundOn, audioRef, seek, analyserRef } = useMusic();

  const [progress, setProgress] = useState(0);
  const [currentSec, setCurrentSec] = useState(0);

  // ── Real audio progress ──────────────────────────────────────────────────
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = () => {
      if (isFinite(audio.duration) && audio.duration > 0) {
        setProgress(audio.currentTime / audio.duration);
        setCurrentSec(audio.currentTime);
      }
    };
    const onEnded = () => {
      // advance to next track automatically
      const idx = SONGS.findIndex((s) => s.id === song.id);
      const next = SONGS[(idx + 1) % SONGS.length];
      router.push(next.section === "hub" ? "/" : "/" + next.section);
    };

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
    };
  }, [audioRef, song.id, router]);

  // ── Fake progress simulation (soundOn = false) ───────────────────────────
  useEffect(() => {
    if (soundOn) return; // real audio drives progress when sound is on
    if (!playing) return;
    const iv = setInterval(() => {
      setProgress((p) => {
        const n = p + 0.0018;
        return n >= 1 ? 0 : n;
      });
    }, 100);
    return () => clearInterval(iv);
  }, [playing, soundOn]);

  // Reset fake progress when the song changes
  useEffect(() => {
    setProgress(0);
    setCurrentSec(0);
  }, [song.id]);

  // ── Displayed time ───────────────────────────────────────────────────────
  const displayCurrent = soundOn ? fmt(currentSec) : (() => {
    const [m, s] = song.duration.split(":").map(Number);
    const total = m * 60 + s;
    return fmt(total * progress);
  })();

  // ── Navigation ───────────────────────────────────────────────────────────
  const idx = SONGS.findIndex((s) => s.id === song.id);
  const go = (delta: number) => {
    const next = SONGS[(idx + delta + SONGS.length) % SONGS.length];
    router.push(next.section === "hub" ? "/" : "/" + next.section);
  };

  // ── Seek ─────────────────────────────────────────────────────────────────
  const barRef = useRef<HTMLDivElement | null>(null);
  const onSeek: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!barRef.current) return;
    const r = barRef.current.getBoundingClientRect();
    const fraction = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    setProgress(fraction);
    seek(fraction); // no-op if no audio loaded
  };

  return (
    <div className="player" role="region" aria-label="Music player">
      <div className="player__meta">
        <div className="player__cover" />
        <div className="player__titles">
          <div className="t">
            {song.title} <span className="dim">— {song.sub}</span>
          </div>
          <div className="s">Track {song.no} · {song.bpm} BPM · K. H. Adol</div>
        </div>
      </div>

      <div className="player__center">
        <div className="player__controls">
          <button className="player__btn" onClick={() => go(-1)} aria-label="Previous">
            <I.prev />
          </button>
          <button
            className="player__btn player__btn--play"
            onClick={() => setPlaying((v) => !v)}
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? <I.pause /> : <I.play />}
          </button>
          <button className="player__btn" onClick={() => go(1)} aria-label="Next">
            <I.next />
          </button>
          <button className="player__btn" aria-label="Shuffle">
            <I.shuffle />
          </button>
        </div>
        <div className="player__progress">
          <span className="mono">{displayCurrent}</span>
          <div className="bar" ref={barRef} onClick={onSeek}>
            <div className="fill" style={{ right: `${(1 - progress) * 100}%` }} />
          </div>
          <span className="mono">{song.duration}</span>
        </div>
      </div>

      <div className="player__right">
        <Visualizer song={song} playing={playing} bars={28} height={28} analyserRef={analyserRef} />
        <button className="player__btn" aria-label="Open on Spotify">
          <I.ext />
        </button>
      </div>
    </div>
  );
}
