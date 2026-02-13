"use client";

import { AnimatePresence } from "framer-motion";
import LockScreen from "@/components/os/LockScreen";
import Terminal from "@/components/apps/Terminal";
import Taskbar from "@/components/os/Taskbar";
import AboutApp from "@/components/apps/About";
import { useSession } from "@/context/SessionContext";

export default function Home() {
  const { isLocked, activeApp, isTerminalOpen } = useSession();

  return (
    <main className="h-screen w-screen overflow-hidden bg-gruv-bg relative font-mono selection:bg-gruv-yellow selection:text-gruv-bg">
      <LockScreen />

      {!isLocked && (
        <>
          <div className="absolute inset-0 bg-[size:50px_50px] bg-grid-pattern opacity-5 pointer-events-none" />
          
          <AnimatePresence mode="popLayout">
            
            {/* 1. TERMINAL LAYER */}
            {isTerminalOpen && (
              <div 
                key="terminal-window" // <--- ADDED UNIQUE KEY
                className="absolute inset-0 z-20 pointer-events-none"
              >
                 <div className="pointer-events-auto w-full h-full"> {/* Enable clicking inside */}
                    <Terminal />
                 </div>
              </div>
            )}

            {/* 2. APP LAYER */}
            {activeApp === "about" && (
              <div 
                key="about-window" // <--- ADDED UNIQUE KEY
                className="absolute inset-0 z-30 flex items-center justify-center p-4"
              >
                <AboutApp /> 
              </div>
            )}
            
          </AnimatePresence>

          <Taskbar />
        </>
      )}
    </main>
  );
}