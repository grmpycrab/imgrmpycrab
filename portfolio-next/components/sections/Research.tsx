"use client";

export function Research() {
  return (
    <div className="page page-enter" data-screen-label="04 Research">
      <div className="section-head">
        <div>
          <div className="section-head__eyebrow">
            <span className="pill">TRACK 04</span>
            <span>CITATIONS — 76 BPM</span>
            <span className="faint">Quiet work, in the open</span>
          </div>
          <h1 className="section-head__title">Cit<em>ations.</em></h1>
        </div>
        <div className="section-head__lead">
          Co-author on a peer-reviewed study evaluating how AI tools shape programming
          education for IT students. Quantitative, field-collected, published 2024.
        </div>
      </div>

      <div className="paper stagger">
        <div className="paper__body">
          <div className="paper__doi">DOI · 10.46223/HCMCOUJS.soci.en.16.2.3519.2026 — OPEN ACCESS</div>
          <h2 className="paper__title">
            Evaluating the impact of AI-powered tools on programming skills development among IT students at Davao Oriental State University (DOrSU)
          </h2>
          <div className="paper__authors">
            D. C. Montejo, K. A. B. Diocares, J. C. Arac, <strong>K. H. S. Adol</strong>, S. G. Mendoza · Ho Chi Minh City Open University Journal of Science — Social Sciences · Vol. 16, Issue 2 · pp 73–90 · 2024
          </div>

          <div className="abstract">
            <div className="abstract__label">ABSTRACT</div>
            <div className="abstract__body">
              This study evaluated the impact of AI integration on the development of computer
              programming skills among Bachelor of Science in Information Technology (BSIT)
              students at Davao Oriental State University (DOrSU). Using a descriptive
              cross-sectional quantitative research design, data were collected and analyzed
              from a sample of 100 students across all academic year levels from first year to
              fourth year using quota sampling. This involved administering survey
              questionnaires to measure their programming skill proficiency and skill
              development with AI integrations. The findings indicated that AI integration
              significantly enhanced programming skills, with senior students showing the most
              improvement, suggesting that prolonged exposure to AI tools contributed to higher
              proficiency levels.
            </div>
          </div>

          <div className="contribs">
            <div className="contrib"><div className="contrib__pct">N=100</div><div className="contrib__label">Sample</div></div>
            <div className="contrib"><div className="contrib__pct">4 yrs</div><div className="contrib__label">Y1 — Y4 BSIT</div></div>
            <div className="contrib"><div className="contrib__pct">Quota</div><div className="contrib__label">Sampling method</div></div>
            <div className="contrib"><div className="contrib__pct">Survey</div><div className="contrib__label">Instrument</div></div>
          </div>
        </div>

        <aside className="paper__aside">
          <div className="aside-card">
            <div className="aside-card__label">AT A GLANCE</div>
            <div className="aside-card__rows">
              <div className="aside-row"><span>Published work</span><span className="v">1</span></div>
              <div className="aside-row"><span>Role</span><span className="v">Co-author</span></div>
              <div className="aside-row"><span>Venue</span><span className="v">HCMCOUJS · 2024</span></div>
              <div className="aside-row"><span>Pages</span><span className="v">73 — 90</span></div>
              <div className="aside-row"><span>Institution</span><span className="v">DOrSU — Main</span></div>
            </div>
          </div>

          <div className="aside-card">
            <div className="aside-card__label">KEYWORDS</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["Artificial Intelligence","ChatGPT","Computer Programming","Information Technology","BSIT Education"].map((t) => (
                <span key={t} className="mono" style={{ padding: "6px 10px", border: "1px solid var(--line-strong)", borderRadius: 999, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--fg-dim)" }}>{t}</span>
              ))}
            </div>
          </div>

          <div className="aside-card">
            <div className="aside-card__label">FETCH</div>
            <div className="aside-card__rows">
              <a className="aside-row" href="https://doi.org/10.46223/HCMCOUJS.soci.en.16.2.3519.2026" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "var(--fg)" }}>
                <span>Read on publisher site</span><span className="v">↗</span>
              </a>
              <a className="aside-row" href="https://orcid.org/0009-0008-8583-5643" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "var(--fg)" }}>
                <span>ORCID</span><span className="v">↗</span>
              </a>
              <a className="aside-row" href="#" style={{ textDecoration: "none", color: "var(--fg)" }}>
                <span>Download PDF</span><span className="v">↗</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
