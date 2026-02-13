"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Maximize2 } from "lucide-react";
import { useSession } from "@/context/SessionContext";

interface WindowProps {
  title: string;
  children: React.ReactNode;
}

export default function Window({ title, children }: WindowProps) {
  const { closeApp } = useSession();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute inset-4 md:inset-10 md:top-10 md:bottom-24 bg-gruv-bg border-2 border-gruv-gray rounded-lg shadow-2xl flex flex-col overflow-hidden z-30"
    >
      {/* --- Title Bar --- */}
      <div className="bg-gruv-bgSoft px-4 py-2 flex items-center justify-between border-b border-gruv-gray select-none" onDoubleClick={closeApp}>
        <div className="flex items-center gap-2">
          {/* Window Controls */}
          <button 
            onClick={closeApp} 
            className="p-1 hover:bg-gruv-red/20 hover:text-gruv-red rounded-md transition-colors"
          >
            <X size={16} />
          </button>
          <div className="w-px h-4 bg-gruv-gray/50 mx-1" />
          <span className="text-gruv-fg font-bold text-sm tracking-wide uppercase">{title}</span>
        </div>
        
        {/* Fake decorative controls */}
        <div className="flex gap-2 text-gruv-gray">
          <Minus size={16} />
          <Maximize2 size={16} />
        </div>
      </div>

      {/* --- Window Content --- */}
      <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gruv-gray scrollbar-track-transparent">
        {children}
      </div>
    </motion.div>
  );
}