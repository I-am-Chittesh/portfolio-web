"use client";

import LockScreen from "@/components/os/LockScreen";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-wallpaper bg-cover bg-center">
      {/* 1. The Lock Screen Overlay */}
      <LockScreen />

      {/* 2. The Desktop (Hidden behind Lock Screen for now) */}
      <div className="h-full w-full flex items-center justify-center">
        <h1 className="text-gruv-fg text-2xl">Desktop Environment Loading...</h1>
      </div>
    </main>
  );
}