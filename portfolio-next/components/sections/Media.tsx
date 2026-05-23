"use client";

import { MEDIA_CLIPS } from "@/lib/projects";

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
          I write, edit, and anchor for <strong>Ang Sidlakan Publication</strong> — the official student publication of <strong>Davao Oriental State University</strong>. From news coverage to literary editing to video work, I shape the stories that shape campus culture. This section collects clips, cuts, and columns I had a hand in shaping.
        </div>
      </div>

      <div className="editorial stagger">
        <div className="lede">
          <div className="lede__kicker">PUBLICATION · LITERARY EDITING</div>
          <div className="lede__h">Editing the campus voice, one column at a time.</div>
          <div className="lede__byline">BY <strong>K. H. ADOL</strong> · ANG SIDLAKAN PUBLICATION · 2025 — PRESENT</div>
          <div className="lede__art">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAngSidlakanPublication%2Fvideos%2F482236908214652%2F&show_text=false&width=560&t=0"
              width="96%"
              height="375"
              style={{ border: "none", display: "block" }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
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
            <div className="fb-post__art">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAngSidlakanPublication%2Fvideos%2F1301625988128812%2F&show_text=false&width=560&t=0"
                width="100%"
                height="280"
                style={{ border: "none", overflow: "hidden" }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <div className="sidebar__h">Selected Write-ups</div>
            <div className="clip-list">
              {MEDIA_CLIPS.map((c) => {
                const inner = (
                  <>
                    <div className="clip__num">{c.num}</div>
                    <div>
                      <div className="clip__t">{c.t}</div>
                      <div className="clip__s">{c.s}</div>
                    </div>
                    <div className="clip__pub">{c.pub}</div>
                  </>
                );
                return c.link ? (
                  <a className="clip" key={c.num} href={c.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>{inner}</a>
                ) : (
                  <div className="clip" key={c.num}>{inner}</div>
                );
              })}
            </div>
            <a
              href="https://www.facebook.com/AngSidlakanPublication"
              target="_blank"
              rel="noopener noreferrer"
              className="see-more"
            >
              See more — Ang Sidlakan Publication
            </a>
          </div>

          <div className="yt">
            <div className="yt__label">FACEBOOK · ANCHOR REEL — ANG SIDLAKAN</div>
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAngSidlakanPublication%2Fvideos%2F534166283094061%2F&show_text=false&width=560&t=0"
              width="100%"
              height="314"
              style={{ border: "none", display: "block" }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
