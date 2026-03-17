"use client";

import { motion, useDragControls } from "framer-motion";
import { X, Minus, Maximize2 } from "lucide-react";
import { useSession } from "@/context/SessionContext";

interface WindowProps {
  title: string;
  children: React.ReactNode;
}

export default function Window({ title, children }: WindowProps) {
  const { closeApp } = useSession();
  
  // This hook lets us assign the "drag handle" to the Title Bar
  const dragControls = useDragControls();

  return (
    <motion.div
      // 1. Enable Dragging
      drag
      dragControls={dragControls}
      dragListener={false} // Disables dragging from the main body
      dragMomentum={false} // Stops it from sliding like ice when you let go
      
      // 2. Entrance/Exit Animations
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      
      // 3. Changed layout to fixed dimensions so it floats properly
      className="absolute top-10 left-0 right-0 mx-auto w-[95vw] md:w-[75vw] max-w-5xl h-[80vh] bg-gruv-bg border-2 border-gruv-gray rounded-lg shadow-2xl flex flex-col overflow-hidden z-30"
    >
      {/* --- TITLE BAR (THE DRAG HANDLE) --- */}
      {/* Added cursor-grab and the onPointerDown event to trigger dragging */}
      <div 
        className="bg-gruv-bgSoft px-4 py-2 flex items-center justify-between border-b border-gruv-gray select-none cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => dragControls.start(e)}
        onDoubleClick={closeApp}
      >
        <div className="flex items-center gap-2">
          <button 
            onClick={closeApp} 
            className="p-1 hover:bg-gruv-red/20 hover:text-gruv-red rounded-md transition-colors"
          >
            <X size={16} />
          </button>
          <div className="w-px h-4 bg-gruv-gray/50 mx-1" />
          <span className="text-gruv-fg font-bold text-sm tracking-wide uppercase">{title}</span>
        </div>
        
        <div className="flex gap-2 text-gruv-gray">
          <Minus size={16} />
          <Maximize2 size={16} />
        </div>
      </div>

      {/* --- WINDOW CONTENT --- */}
      <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gruv-gray scrollbar-track-transparent">
        {children}
      </div>
    </motion.div>
  );
}