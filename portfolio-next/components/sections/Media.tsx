"use client";

import { MEDIA_CLIPS } from "@/lib/projects";
import { I } from "../Icons";

export function Media() {
  return (
    <div className="page page-enter" data-screen-label="03 Media">
      <div className="masthead">
        <div>EST. 2023</div>
        <div className="title">Ang Sidlakan · Selected</div>
        <div>DOrSU PRESS · VOL. III</div>
      </div>
      <div className="section-head">
        <div>
          <div className="section-head__eyebrow">
            <span className="pill">TRACK 03</span>
            <span>PRESS RUN — 110 BPM</span>
            <span className="faint">Words, voice, and a steady camera</span>
          </div>
          <h1 className="section-head__title">Press <em>run.</em></h1>
        </div>
        <div className="section-head__lead">
          I write, I anchor, I edit. Literary editing and video work at <strong>Ang Sidlakan
          Publication</strong>; news anchoring with the University Student Council&apos;s <em>Ang Subang</em>.
        </div>
      </div>

      <div className="editorial stagger">
        <div className="lede">
          <div className="lede__kicker">PUBLICATION · LITERARY EDITING</div>
          <div className="lede__h">Editing the campus voice, one column at a time.</div>
          <div className="lede__byline">BY <strong>K. H. ADOL</strong> · ANG SIDLAKAN PUBLICATION · 2025 — PRESENT</div>
          <div className="lede__art">
            <span className="play-pill"><I.play /> SELECTED VIDEO CUT · 04:12</span>
          </div>
          <div className="lede__cols">
            <p>I&apos;ve been part of Ang Sidlakan since 2024 — first as a news writer covering the campus beat, then moving into literary editing and video work in 2025. The newsroom is small and the deadlines are real.</p>
            <p>My job is to make the writing sound like the writer, not like an institution. We sweat headlines. We sweat decks. We sweat whether a comma earns its place.</p>
            <p>Outside the page, I&apos;ve anchored live broadcasts for the University Student Council — campus elections, town halls, and the kind of long sessions that test your voice and your shoes.</p>
            <p>This section collects the work I&apos;m proud of: clips, cuts, and columns I had a hand in shaping.</p>
          </div>
        </div>

        <aside className="sidebar">
          <div className="fb-post">
            <div className="fb-post__h">
              <div className="avatar" />
              <div>
                <div className="who">Ang Sidlakan Publication</div>
                <div className="when">RECENT · PUBLIC</div>
              </div>
            </div>
            <div className="fb-post__body">
              Featured cut edited by <strong>K. H. Adol</strong> — campus literary feature, with photography and a short companion video. Drop the real Facebook embed snippet here.
            </div>
            <div className="fb-post__art">[ FACEBOOK POST EMBED — paste real share ]</div>
            <div className="fb-post__foot">
              <span>♥ — · — SHARES</span>
              <span>ANG SIDLAKAN · 2025</span>
            </div>
          </div>

          <div>
            <div className="sidebar__h">Selected clips</div>
            <div className="clip-list">
              {MEDIA_CLIPS.map((c) => (
                <div className="clip" key={c.num}>
                  <div className="clip__num">{c.num}</div>
                  <div>
                    <div className="clip__t">{c.t}</div>
                    <div className="clip__s">{c.s}</div>
                  </div>
                  <div className="clip__pub">{c.pub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="yt">
            <div className="yt__label">YOUTUBE · ANCHOR REEL — ANG SUBANG</div>
            <button className="yt__play" aria-label="Play"><I.play /></button>
          </div>
        </aside>
      </div>
    </div>
  );
}
