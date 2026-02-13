"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "@/context/SessionContext";
import { ArrowRight, Lock } from "lucide-react";
import Image from "next/image";

export default function LockScreen() {
  const { unlock, isLocked, bootSequence } = useSession();
  const [password, setPassword] = useState("");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    unlock();
  };

  // 1. Boot Sequence (No Changes)
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

  // 2. The Main Lock Screen
  return (
    <AnimatePresence>
      {isLocked && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-40 bg-gruv-bg flex flex-col font-mono overflow-hidden"
        >
          
          {/* --- TOP SECTION: THE NAME --- */}
          {/* Using padding-top to keep it high, w-full to center it */}
          <div className="w-full text-center pt-24 z-10">
            <h1 className="text-7xl md:text-9xl font-black text-gruv-fg0 tracking-widest uppercase select-none">
              CHITTESH
            </h1>
          </div>

          {/* --- MIDDLE SECTION: PROFILE & INPUT --- */}
          {/* flex-grow pushes this into the empty space between Name and Bottom */}
          <div className="flex-grow flex flex-col items-center justify-center space-y-8 -mt-10">
            {/* Profile Pic */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gruv-gray/30 ring-4 ring-gruv-bgSoft shadow-2xl">
              <Image 
                src="/public/icons/profile.png"
                alt="User"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Password Input */}
            <form onSubmit={handleLogin} className="relative w-72 group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gruv-gray">
                <Lock size={16} />
              </div>
              <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gruv-bgSoft text-gruv-fg px-12 py-3 rounded-full border border-gruv-gray/20 focus:outline-none focus:border-gruv-yellow focus:ring-1 focus:ring-gruv-yellow transition-all placeholder:text-gruv-gray/50 shadow-lg"
                autoFocus
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gruv-fg text-gruv-bg rounded-full hover:bg-gruv-yellow transition-colors"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

          {/* --- BOTTOM LEFT: TIME & DATE --- */}
          {/* Absolute positioning keeps it stuck to the corner */}
          <div className="absolute bottom-8 left-8 text-left z-10">
            <h2 className="text-2xl font-bold text-gruv-fg tracking-wider">
              {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </h2>
            <p className="text-gruv-gray text-sm uppercase tracking-widest mt-1">
              {time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
            </p>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}