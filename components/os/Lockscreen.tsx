"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "@/context/SessionContext";
import { ArrowRight, Lock } from "lucide-react";
import Image from "next/image";

export default function LockScreen() {
  const { unlock, isLocked, bootSequence } = useSession();
  const [password, setPassword] = useState("");
  
  // Auto-focus logic or simple submit
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    unlock(); // Any password works for now
  };

  // 1. The Boot Log Animation (The "BIOS" Text)
  if (bootSequence) {
    return (
      <div className="fixed inset-0 bg-gruv-bg text-gruv-fg font-mono p-10 z-50 flex flex-col justify-end">
        <div className="space-y-1 text-sm md:text-base opacity-80">
          <p className="text-gruv-gray">[ OK ] Mounted Kernel: Chittesh_OS_v3.0</p>
          <p className="text-gruv-gray">[ OK ] Verified Secure Boot...</p>
          <p className="text-gruv-green">[ OK ] Started User Session Manager.</p>
          <p className="text-gruv-blue">[ OK ] Loaded Graphical Interface (Hyprland).</p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.5 }}
            className="text-gruv-yellow mt-4"
          >
            chittesh@portfolio:~$ startx_
          </motion.p>
        </div>
      </div>
    );
  }

  // 2. The Actual Lock Screen
  return (
    <AnimatePresence>
      {isLocked && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-40 bg-gruv-bg flex flex-col items-center justify-center font-mono"
        >
          {/* Clock */}
          <div className="absolute top-10 md:top-20 text-center space-y-2">
            <h1 className="text-6xl md:text-8xl font-bold text-gruv-fg0 tracking-tighter">
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </h1>
            <p className="text-gruv-gray text-xl">
              {new Date().toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* User Profile */}
          <div className="flex flex-col items-center space-y-6 mt-10">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gruv-gray/30 ring-4 ring-gruv-bgSoft shadow-2xl">
              <Image 
                src="/images/profile.png" // Make sure this matches your file name!
                alt="User"
                fill
                className="object-cover"
              />
            </div>
            
            <h2 className="text-2xl font-bold text-gruv-fg">Chittesh</h2>

            {/* Password Input */}
            <form onSubmit={handleLogin} className="relative w-64 group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gruv-gray">
                <Lock size={16} />
              </div>
              <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gruv-bgSoft text-gruv-fg px-10 py-2 rounded-full border border-gruv-gray/20 focus:outline-none focus:border-gruv-yellow transition-all placeholder:text-gruv-gray/50"
                autoFocus
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-gruv-fg text-gruv-bg rounded-full hover:bg-gruv-yellow transition-colors"
              >
                <ArrowRight size={14} />
              </button>
            </form>

            <p className="text-xs text-gruv-gray/50 mt-4">
              Press Enter to unlock
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}