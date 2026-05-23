"use client";

import { DEV_PROJECTS, DEV_STACK } from "@/lib/projects";
import { I } from "../Icons";

export function Developer() {
  return (
    <div className="page page-enter" data-screen-label="01 Developer">
      <div className="section-head">
        <div>
          <div className="section-head__eyebrow">
            <span className="pill">TRACK 01</span>
            <span>COMPILE — 128 BPM</span>
            <span className="faint">$ whoami → developer</span>
          </div>
          <h1 className="section-head__title">com<em>pile</em>()</h1>
        </div>
        <div className="section-head__lead">
          I build mobile and web products from the model up — Flutter on the front,
          Firebase on the back, Next.js when the page should be public. I like shipping
          small things that don&apos;t break.
        </div>
      </div>

      <div className="dev-grid stagger">
        <div className="terminal">
          <div className="terminal__bar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="name">~/keynt/identity — zsh</span>
          </div>
          <div className="terminal__body">
            <div className="term-line"><span className="term-prompt">@grmpycrab</span> <span className="term-out">~ %</span> <span className="term-cmd">cat about.dev</span></div>
            <div className="term-line term-out">name        : Keynt Harly Adol</div>
            <div className="term-line term-out">role        : Mobile + Full-stack engineer</div>
            <div className="term-line term-out">primary     : Flutter / Dart</div>
            <div className="term-line term-out">secondary   : TypeScript, React, Next.js, Node</div>
            <div className="term-line term-out">infra       : Firebase, Vercel, Cloudflare</div>
            <div className="term-line term-out">currently   : open to internships &amp; collabs</div>
            <br />
            <div className="term-line"><span className="term-prompt">@grmpycrab</span> <span className="term-out">~ %</span> <span className="term-cmd">ls projects/</span></div>
            <div className="term-line term-out">  harmonica/  TrekScan+/  Hamiguitan Admin Dashboard/  side-quests/</div>
            <br />
            <div className="term-line"><span className="term-prompt">keynt@studio</span> <span className="term-out">~ %</span> <span className="term-cmd">tail -f deploy.log</span></div>
            <div className="term-line term-out">[14:02] harmonica  ✓ 1.0.0 → testflight</div>
            <div className="term-line term-out">[14:18] TrekScan+   ✓ android beta · 43 users</div>
            <div className="term-line term-out">[14:31] Hamiguitan Admin Dashboard  ✓ firebase deployed</div>
            <br />
            <div className="term-line"><span className="term-prompt">keynt@studio</span> <span className="term-out">~ %</span> <span className="term-caret" /></div>
          </div>
        </div>

        <div className="card stack-card">
          <div className="card__head">
            <div className="card__tag">/stack — daily drivers</div>
            <div className="card__tag" style={{ color: "var(--accent)" }}>{DEV_STACK.length} tools</div>
          </div>
          <div className="card__title">Hands-on with</div>
          <div className="card__desc">Languages, frameworks, and infra I reach for first. The rest, I learn for the job.</div>
          <div className="stack">
            {DEV_STACK.map(([k, v]) => (
              <div className="stack__chip" key={k}>
                <span>{k}</span>
                <em style={{ fontStyle: "normal", color: "var(--fg-dim)" }}>{v}</em>
              </div>
            ))}
          </div>
        </div>

        {DEV_PROJECTS.map((p) => (
          <div className="card project-card" key={p.name}>
            <div>
              <div className="project-card__viz" />
              <div className="card__head">
                <div className="card__tag">{p.tag}</div>
                <div className="card__tag" style={{ color: "var(--accent)" }}>{p.year}</div>
              </div>
              <div className="card__title">{p.name}</div>
              <div className="card__desc">{p.desc}</div>
            </div>
            <div className="project-card__meta">
              <span>{p.stack}</span>
              <a href={p.link ?? `https://github.com/grmpycrab/${p.name.toLowerCase().replace(/\s+/g, "-")}`} style={{ color: "var(--accent)", textDecoration: "none", display: "inline-flex", gap: 6, alignItems: "center" }}>OPEN <I.ext /></a>
            </div>
          </div>
        ))}

        <div className="card" style={{ gridColumn: "span 12", display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center" }}>
          <div>
            <div className="card__tag">{'// github'}</div>
            <div className="card__title" style={{ marginTop: 6 }}>40+ public repos · main + small open-source</div>
            <div className="card__desc">From small Flutter widgets to a CLI for renaming photo batches by EXIF tag.</div>
          </div>
          <a href="https://github.com/grmpycrab" className="embed__btn" style={{ textDecoration: "none" }}><I.github /></a>
        </div>
      </div>
    </div>
  );
}
