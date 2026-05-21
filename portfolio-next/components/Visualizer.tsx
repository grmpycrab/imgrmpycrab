"use client";

import { useEffect, useRef } from "react";
import type { Song } from "@/lib/types";

type Props = {
  song: Song;
  playing: boolean;
  bars?: number;
  height?: number;
  analyserRef?: React.RefObject<AnalyserNode | null>;
};

export function Visualizer({ song, playing, bars = 36, height = 28, analyserRef }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const raf = useRef(0);
  const t = useRef(0);
  const dataArr = useRef<Uint8Array<ArrayBuffer> | null>(null);

  useEffect(() => {
    let last = performance.now();

    const tick = (now: number) => {
      const container = containerRef.current;
      if (!container) { raf.current = requestAnimationFrame(tick); return; }

      const analyser = analyserRef?.current;
      const out = new Array<number>(bars);

      if (analyser) {
        if (!dataArr.current || dataArr.current.length !== analyser.frequencyBinCount) {
          dataArr.current = new Uint8Array(analyser.frequencyBinCount) as Uint8Array<ArrayBuffer>;
        }
        analyser.getByteFrequencyData(dataArr.current);
        const usable = Math.floor(analyser.frequencyBinCount * 0.65);
        for (let i = 0; i < bars; i++) {
          const binIdx = Math.floor((i / bars) * usable);
          const v = dataArr.current[binIdx] / 255;
          out[i] = Math.max(3, v * height);
        }
      } else {
        const dt = (now - last) / 1000;
        last = now;
        if (playing) t.current += dt * (song.bpm / 60);
        const seed = song.seed * 6.28;
        for (let i = 0; i < bars; i++) {
          const p = i / bars;
          const bass = Math.pow(1 - p, 1.4) * (0.5 + 0.5 * Math.sin(t.current * 2 + seed));
          const mid =
            Math.exp(-Math.pow((p - 0.45) / 0.22, 2)) *
            (0.4 + 0.6 * Math.abs(Math.sin(t.current * 4 + i * 0.3 + seed)));
          const high =
            Math.pow(p, 1.6) * (0.3 + 0.7 * Math.abs(Math.sin(t.current * 7 + i * 0.7 + seed)));
          let v = bass * 0.9 + mid * 1.1 + high * 0.8;
          const beat = Math.max(0, 1 - Math.abs((t.current % 1) - 0.5) * 2);
          v += beat * (0.25 + 0.15 * Math.sin(i * 0.5));
          if (!playing) v *= 0.25;
          out[i] = Math.max(3, Math.min(height, v * height));
        }
      }

      const spans = container.children;
      for (let i = 0; i < Math.min(bars, spans.length); i++) {
        (spans[i] as HTMLSpanElement).style.height = out[i] + "px";
      }

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [song.seed, song.bpm, playing, bars, height, analyserRef]);

  return (
    <div className="viz" ref={containerRef} style={{ height, width: bars * 5 }} aria-hidden="true">
      {Array.from({ length: bars }, (_, i) => (
        <span key={i} style={{ height: 3 }} />
      ))}
    </div>
  );
}
