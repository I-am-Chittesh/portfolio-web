"use client";

import LockScreen from "@/components/os/LockScreen";
import Terminal from "@/components/apps/Terminal"; // <--- Import this
import { useSession } from "@/context/SessionContext";

export default function Home() {
  const { isLocked } = useSession();

  return (
    <main className="h-screen w-screen overflow-hidden bg-gruv-bg relative">
      <LockScreen />

      {/* Only show Desktop when unlocked */}
      {!isLocked && (
        <>
          {/* Wallpaper / Grid Effect */}
          <div className="absolute inset-0 bg-[size:50px_50px] bg-grid-pattern opacity-10 pointer-events-none" />
          
          {/* The Apps */}
          <Terminal />
          
          {/* We will add Taskbar here next */}
        </>
      )}
    </main>
  );
}