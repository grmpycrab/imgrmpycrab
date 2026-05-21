"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { SONGS } from "@/lib/songs";
import { useMusic } from "@/lib/MusicContext";
import { I } from "./Icons";

export function Nav() {
  const router = useRouter();
  const { section, soundOn, setSoundOn, openResume } = useMusic();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (path: string) => {
    router.push(path);
    setMenuOpen(false);
  };

  const handleResume = () => {
    openResume();
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav__brand">
          <span className="dot" />
          <span>KEYNT · HARLY · ADOL</span>
          <span className="faint" style={{ marginLeft: 10 }}>VOL.01</span>
        </div>

        <div className="nav__tracks">
          {SONGS.map((s) => (
            <button
              key={s.id}
              className="nav__track"
              data-active={section === s.section}
              onClick={() => navigate(s.section === "hub" ? "/" : "/" + s.section)}
            >
              <span className="num">{s.no}</span>
              <span>{s.title}</span>
            </button>
          ))}
        </div>

        <div className="nav__right">
          <button className="nav__sound-toggle" onClick={() => setSoundOn((v) => !v)}>
            {soundOn ? <I.volume /> : <I.mute />}
            <span>SFX {soundOn ? "ON" : "OFF"}</span>
          </button>
          <button className="nav__resume" onClick={openResume}>
            <I.doc />
            <span>Resume</span>
          </button>
        </div>

        <button
          className="nav__hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          data-open={menuOpen}
        >
          {menuOpen ? <I.close /> : <I.menu />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav__drawer"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="nav__drawer__tracks">
              {SONGS.map((s) => (
                <button
                  key={s.id}
                  className="nav__drawer__track"
                  data-active={section === s.section}
                  onClick={() => navigate(s.section === "hub" ? "/" : "/" + s.section)}
                >
                  <span className="nav__drawer__num">{s.no}</span>
                  <div className="nav__drawer__info">
                    <span className="nav__drawer__title">{s.title}</span>
                    <span className="nav__drawer__sub">{s.sub}</span>
                  </div>
                </button>
              ))}
            </nav>

            <div className="nav__drawer__footer">
              <button className="nav__sound-toggle nav__drawer__action" onClick={() => setSoundOn((v) => !v)}>
                {soundOn ? <I.volume /> : <I.mute />}
                <span>SFX {soundOn ? "ON" : "OFF"}</span>
              </button>
              <button className="nav__resume nav__drawer__action" onClick={handleResume}>
                <I.doc />
                <span>Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
