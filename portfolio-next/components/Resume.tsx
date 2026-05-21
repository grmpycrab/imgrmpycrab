"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMusic } from "@/lib/MusicContext";
import { ResumeDoc } from "./ResumeDoc";
import { I } from "./Icons";

export function Resume() {
  const { resumeOpen, closeResume } = useMusic();

  useEffect(() => {
    if (!resumeOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeResume();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [resumeOpen, closeResume]);

  return (
    <AnimatePresence>
      {resumeOpen && (
        <motion.div
          className="resume-backdrop"
          onClick={closeResume}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="resume-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Resume"
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.99 }}
            transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="resume-modal__bar">
              <div className="resume-modal__bar-left">
                <span className="resume-modal__dot" />
                <span>RESUME — KEYNT HARLY ADOL</span>
                <span className="faint" style={{ marginLeft: 8 }}>1 PAGE · PDF READY</span>
              </div>
              <div className="resume-modal__bar-right">
                <button className="resume-btn" onClick={() => window.print()}>
                  <I.download />
                  DOWNLOAD PDF
                </button>
                <button
                  className="resume-btn resume-btn--ghost"
                  onClick={closeResume}
                  aria-label="Close"
                >
                  <I.close />
                </button>
              </div>
            </div>
            <div className="resume-scroll">
              <ResumeDoc />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
