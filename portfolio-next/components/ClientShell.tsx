"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { MusicProvider } from "@/lib/MusicContext";
import { routeToSection } from "@/lib/songs";
import { Nav } from "./Nav";
import { Player } from "./Player";
import { Resume } from "./Resume";
import { Grain } from "./Grain";

/**
 * Owns the theme attribute, page transitions, persistent music player + nav,
 * and the resume modal portal. Sits inside <body> in the root layout.
 */
export function ClientShell({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "/";
  const section = routeToSection(pathname);

  return (
    <MusicProvider>
      <div data-theme={section} className="theme-surface">
        <Grain />
        <Nav />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Player />
        <Resume />
      </div>
    </MusicProvider>
  );
}
