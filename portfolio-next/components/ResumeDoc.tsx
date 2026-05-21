import type { ReactNode } from "react";

function CvSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="cv-section">
      <h3 className="cv-section__h">{title}</h3>
      <div className="cv-section__body">{children}</div>
    </section>
  );
}

function CvEntry({
  head,
  meta,
  body,
  tags,
}: {
  head: string;
  meta?: string;
  body?: string;
  tags?: string[];
}) {
  return (
    <div className="cv-entry">
      <div className="cv-entry__head">
        <div className="cv-entry__h">{head}</div>
        {meta && <div className="cv-entry__meta">{meta}</div>}
      </div>
      {body && <div className="cv-entry__body">{body}</div>}
      {tags && tags.length > 0 && (
        <div className="cv-entry__tags">
          {tags.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export function ResumeDoc() {
  return (
    <article className="cv" id="cv-print-root">
      <header className="cv__head">
        <div>
          <div className="cv__eyebrow">CURRICULUM VITAE · 2026</div>
          <h1 className="cv__name">Keynt Harly Adol</h1>
          <div className="cv__tagline">
            Information Technology student · Mobile developer · UI/UX-oriented thinker · Multimedia editor · Campus journalist
          </div>
        </div>
        <div className="cv__contact">
          <div className="cv__photo" aria-hidden="true" />
          <div className="cv__contact-rows">
            <div><span className="k">Location</span><span className="v">Obrero, Davao City, PH</span></div>
            <div><span className="k">Email</span><span className="v">[ replace ]</span></div>
            <div><span className="k">Phone</span><span className="v">+63 XXX XXX XXXX</span></div>
            <div><span className="k">Portfolio</span><span className="v">side-a-side-b</span></div>
            <div><span className="k">GitHub</span><span className="v">[ replace ]</span></div>
            <div><span className="k">ORCID</span><span className="v">0009-0008-8583-5643</span></div>
          </div>
        </div>
      </header>

      <div className="cv__body">
        <section className="cv__col cv__col--main">
          <CvSection title="Professional summary">
            <p>
              Creative and technically skilled Information Technology student with a strong
              background in mobile application development, UI/UX-oriented thinking, multimedia
              editing, and campus journalism. Experienced in leadership, publication work,
              event participation, and collaborative projects. Adept at combining technical
              development skills with communication, visual storytelling, and organizational
              experience.
            </p>
          </CvSection>

          <CvSection title="Leadership, achievements & affiliations">
            <ol className="cv-list">
              <li><strong>Literary Editor</strong> — Ang Sidlakan Publication, DOrSU · <span className="meta">2025 — Present</span></li>
              <li><strong>Video Editor</strong> — Ang Sidlakan Publication, DOrSU · <span className="meta">2025 — Present</span></li>
              <li><strong>Bronze Awardee</strong> — FaCETLABAN 2026, Battle of the Band · <span className="meta">2026</span></li>
              <li><strong>Champion</strong> — Siglakas 2025, Standard Choir · <span className="meta">2025</span></li>
              <li><strong>Vice President — External</strong>, Codebyters (Student Org) · <span className="meta">2024 — 2025</span></li>
              <li><strong>Champion</strong> — PaICEklaban 2025, Battle of the Band · <span className="meta">2025</span></li>
              <li><strong>Business Manager</strong>, Kabataan Kontra Droga at Terorismo — DOrSU Chapter · <span className="meta">2024 — 2025</span></li>
              <li><strong>News Writer</strong> — Ang Sidlakan Publication, DOrSU · <span className="meta">2024 — 2025</span></li>
              <li><strong>Silver Awardee</strong> — Siglakas 2024, Standard Choir · <span className="meta">2024</span></li>
              <li><strong>News Anchor</strong>, University Student Council — Ang Subang · <span className="meta">2023 — 2024</span></li>
            </ol>
          </CvSection>

          <CvSection title="Publication">
            <CvEntry
              head="Evaluating the impact of AI-powered tools on programming skills development among IT students at Davao Oriental State University (DOrSU)"
              meta="Co-author · HCMCOUJS — Social Sciences · Vol. 16(2), pp 73–90 · 2024"
              body="Descriptive cross-sectional quantitative study (N=100 BSIT students). Findings indicated AI integration significantly enhanced programming skills, with senior students showing the most improvement."
              tags={["DOI: 10.46223/HCMCOUJS.soci.en.16.2.3519.2026"]}
            />
          </CvSection>

          <CvSection title="Selected academic strengths">
            <ul className="cv-coursework">
              <li><span>ITMSD 1 — Fundamentals of Mobile Design and Tools</span><span className="grade">Excellent · 1.25</span></li>
              <li><span>ITMSD 3 — Cross-Platform Mobile Application Development</span><span className="grade">Excellent · 1.25</span></li>
              <li><span>ITMSD 4 — Mobile Cloud Computing Application Development</span><span className="grade">Excellent · 1.25</span></li>
              <li><span>ITC 130 — Application Development in Emerging Technologies</span><span className="grade">Excellent · 1.25</span></li>
              <li><span>ITP 132 — Advanced Database Systems</span><span className="grade">Excellent · 1.25</span></li>
            </ul>
          </CvSection>
        </section>

        <aside className="cv__col cv__col--side">
          <CvSection title="Education">
            <CvEntry
              head="B.S. Information Technology"
              meta="DOrSU · Expected 2026"
              body="Davao Oriental State University — Main Campus. Multiple Excellent ratings (1.25) in specialized technical courses; consistent academic standing throughout college."
            />
            <div className="cv__chiprow" style={{ marginTop: 8 }}>
              {["Mobile App Dev","Cross-Platform","Web Systems","Adv. Databases","Info. Assurance","Systems Integration","HCI"].map((t) => (
                <span className="cv__chip cv__chip--ghost" key={t}>{t}</span>
              ))}
            </div>
          </CvSection>

          <CvSection title="Technical skills">
            <div className="cv__skill-group">
              <div className="cv__skill-label">Development</div>
              <div className="cv__chiprow">
                {["Mobile App Dev","Cross-Platform","Web Dev","UI/UX","Databases","Systems Integration"].map((t) => (
                  <span className="cv__chip" key={t}>{t}</span>
                ))}
              </div>
            </div>
            <div className="cv__skill-group">
              <div className="cv__skill-label">Tools & technologies</div>
              <div className="cv__chiprow">
                {["Flutter","React Native","HTML","CSS","JavaScript","Firebase","MySQL","Figma","Git","GitHub"].map((t) => (
                  <span className="cv__chip" key={t}>{t}</span>
                ))}
              </div>
            </div>
            <div className="cv__skill-group">
              <div className="cv__skill-label">Creative & multimedia</div>
              <div className="cv__chiprow">
                {["Video Editing","Graphic Layouting","Content Writing","Publication Editing","News Writing","News Anchoring"].map((t) => (
                  <span className="cv__chip cv__chip--ghost" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </CvSection>

          <CvSection title="Personal attributes">
            <ul className="cv-attrs">
              <li>Creative and detail-oriented</li>
              <li>Strong communication and collaboration</li>
              <li>Adaptable in technical and creative environments</li>
              <li>Leadership and organizational experience</li>
              <li>Fast learner; self-driven across multimedia and design</li>
            </ul>
          </CvSection>
        </aside>
      </div>

      <footer className="cv__foot">
        References available upon request · This document is also viewable as a track at side-a-side-b
      </footer>
    </article>
  );
}
