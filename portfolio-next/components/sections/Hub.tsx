"use client";

import { useRouter } from "next/navigation";
import { useMusic } from "@/lib/MusicContext";
import { SONGS } from "@/lib/songs";
import { SOCIALS } from "@/lib/socials";
import { Visualizer } from "../Visualizer";
import { I } from "../Icons";

export function Hub() {
  const router = useRouter();
  const { song, playing, analyserRef } = useMusic();

  return (
    <div className="page page-enter" data-screen-label="00 Hub">
      <div className="hub">
        <div className="sleeve sleeve--photo">
          <div className="sleeve__photo" aria-hidden="true" />
          <div className="sleeve__head">
            <div className="meta">
              <div><strong>SIDE A / SIDE B</strong></div>
              <div className="faint" style={{ marginTop: 4 }}>A multidisciplinary record</div>
            </div>
            <div className="sleeve__sticker">LP · 2026</div>
          </div>
          <div className="sleeve__title-wrap" style={{ position: "relative", zIndex: 2 }}>
            <div className="sleeve__title">
              Keynt <em>Harly</em> Adol
            </div>
            <div className="sleeve__sub" style={{ marginTop: 14 }}>
              <span>Developer</span><span>Designer</span><span>Artist</span><span>Researcher</span>
            </div>
          </div>
          <div className="sleeve__foot" style={{ position: "relative", zIndex: 2 }}>
            <div className="sleeve__catnum">KHA-2026 · 4 TRACKS · 16:27</div>
            <Visualizer song={song} playing={playing} bars={20} height={22} analyserRef={analyserRef} />
          </div>
        </div>

        <div className="hub__right">
          <div className="hub__hello">
            <div className="eyebrow">Press play to begin</div>
            <div className="who">
              A portfolio that plays like an <span>album.</span>
            </div>
            <div className="desc">
              Four tracks, four identities. Each song below opens a different room — the
              developer&apos;s workshop, the designer&apos;s studio, the newsroom, the lab. The
              music changes. The room changes. I&apos;m the same.
            </div>
          </div>

          <div className="tracklist">
            {SONGS.filter((s) => s.id !== "hub").map((s) => {
              const go = () => router.push("/" + s.section);
              return (
                <div
                  key={s.id}
                  className="tracklist__row"
                  onClick={go}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && go()}
                >
                  <div className="tracklist__num">{s.no}</div>
                  <div className="tracklist__title">
                    <div className="t">{s.title} <em>· {s.sub}</em></div>
                    <div className="s">{s.bpm} BPM · A. KEY · ORIGINAL</div>
                  </div>
                  <div className="tracklist__dur">{s.duration}</div>
                  <div className="tracklist__arrow"><I.arrow /></div>
                </div>
              );
            })}
          </div>

          <div className="socials">
            <span>FIND THE ARTIST</span>
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href}>{s.label} ↗</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
