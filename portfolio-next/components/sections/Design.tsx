"use client";

import { DESIGN_CASES, DESIGN_PROCESS } from "@/lib/projects";

export function Design() {
  return (
    <div className="page page-enter" data-screen-label="02 Design">
      <div className="section-head">
        <div>
          <div className="section-head__eyebrow">
            <span className="pill">TRACK 02</span>
            <span>SOFT EDIT — 92 BPM</span>
            <span className="faint">interface, with care</span>
          </div>
          <h1 className="section-head__title">Soft <em>edit.</em></h1>
        </div>
        <div className="section-head__lead">
          I design products that earn their warmth. Mobile-first, system-minded, and
          obsessed with the moments between screens.
        </div>
      </div>

      <div className="design-grid stagger">
        {DESIGN_CASES.map((c) => (
          <div className={"case" + (c.wide ? " case--wide" : "")} key={c.name}>
            <div className="case__art" style={{ background: c.colors[2] || "var(--bg-elev-2)" }}>
              <div className="frame">
                <div className="frame-bar"><i /><i /><i /></div>
                <div className="frame-body">
                  <div className="h" style={{ background: c.colors[1] }} />
                  <div className="l" />
                  <div className="l short" />
                  <div className="l shorter" />
                  <div className="blocks">
                    <i style={{ background: c.colors[0], opacity: 0.92 }} /><i /><i />
                  </div>
                </div>
              </div>
            </div>
            <div className="case__body">
              <div className="case__pre">{c.pre} · {c.tag}</div>
              <div className="case__t">{c.name}</div>
              <div className="case__d">{c.desc}</div>
              <div className="swatches">
                {c.colors.map((col, i) => (
                  <i key={i} style={{ background: col }} />
                ))}
              </div>
              <div className="case__meta">
                <span>ROLE · <strong>{c.role}</strong></span>
                <span>TOOLS · <strong>{c.tools}</strong></span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="process">
        {DESIGN_PROCESS.map(([n, t, d]) => (
          <div className="process__step" key={n}>
            <div className="process__num">{n}</div>
            <div className="process__t">{t}</div>
            <div className="process__d">{d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
