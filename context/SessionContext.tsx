"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type AppID = "projects" | "contact" | "settings" | null;

interface SessionContextType {
  isLocked: boolean;
  unlock: () => void;
  lock: () => void;
  
  // Terminal State
  isTerminalOpen: boolean;
  toggleTerminal: () => void;
  minimizeTerminal: () => void;
  maximizeTerminal: () => void;

  // Other Apps
  activeApp: AppID;
  openApp: (app: AppID) => void;
  closeApp: () => void;
  
  volume: number;
  setVolume: (vol: number) => void;
  bootSequence: boolean;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [isLocked, setIsLocked] = useState(true);
  const [bootSequence, setBootSequence] = useState(true);
  
  // Terminal is OPEN by default, but minimized when locked
  const [isTerminalOpen, setIsTerminalOpen] = useState(true); 
  
  const [activeApp, setActiveApp] = useState<AppID>(null);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBootSequence(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const unlock = () => setIsLocked(false);
  const lock = () => setIsLocked(true);
  
  // Terminal Controls
  const toggleTerminal = () => setIsTerminalOpen(!isTerminalOpen);
  const minimizeTerminal = () => setIsTerminalOpen(false);
  const maximizeTerminal = () => {
    setIsTerminalOpen(true);
    setActiveApp(null); // Close other apps when Terminal comes back
  };

  // App Controls
  const openApp = (app: AppID) => {
    setActiveApp(app);
    setIsTerminalOpen(false); // <--- MAGIC: Minimize terminal when app opens
  };

  const closeApp = () => {
    setActiveApp(null);
    setIsTerminalOpen(true); // <--- MAGIC: Bring terminal back when app closes
  };

  return (
    <SessionContext.Provider
      value={{
        isLocked,
        unlock,
        lock,
        isTerminalOpen,
        toggleTerminal,
        minimizeTerminal,
        maximizeTerminal,
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

export function useSession() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
} 