"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// The "Apps" available in your OS
export type AppID = "about" | "projects" | "contact" | "terminal" | "settings" | null;

interface SessionContextType {
  isLocked: boolean;
  unlock: () => void;
  lock: () => void;
  activeApp: AppID;
  openApp: (app: AppID) => void;
  closeApp: () => void;
  volume: number;
  setVolume: (vol: number) => void;
  bootSequence: boolean; // Tracks if the "BIOS" text is running
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  // 1. System State
  const [isLocked, setIsLocked] = useState(true);
  const [bootSequence, setBootSequence] = useState(true);
  const [activeApp, setActiveApp] = useState<AppID>(null);
  const [volume, setVolume] = useState(50);

  // 2. Boot Loader Effect
  useEffect(() => {
    // Simulate a quick "BIOS" boot sequence on first load
    const timer = setTimeout(() => {
      setBootSequence(false);
    }, 2500); // 2.5 seconds of "Boot Text"
    return () => clearTimeout(timer);
  }, []);

  // 3. Actions
  const unlock = () => setIsLocked(false);
  const lock = () => setIsLocked(true);
  
  const openApp = (app: AppID) => {
    setActiveApp(app);
  };

  const closeApp = () => {
    setActiveApp(null);
  };

  return (
    <SessionContext.Provider
      value={{
        isLocked,
        unlock,
        lock,
        activeApp,
        openApp,
        closeApp,
        volume,
        setVolume,
        bootSequence,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

// 4. Custom Hook to use the OS
export function useSession() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
}