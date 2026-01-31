"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden bg-[#0a0a0a]">
      
      {/* 1. The Architectural Grid Background */}
      <div className="absolute inset-0 bg-[size:40px_40px] bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 max-w-7xl mx-auto w-full">
        
        {/* 2. Left Side: The "System Data" */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-cyan-500 font-mono tracking-widest text-sm uppercase"
            >
              // AI & Robotics Engineer
            </motion.p>
            
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white leading-[0.9]">
              CHITTESH
            </h1>
          </div>
          
          <p className="max-w-xl text-lg text-neutral-400 font-light leading-relaxed border-l-2 border-cyan-500/30 pl-6">
            Building intelligent systems that bridge the gap between 
            <span className="text-white font-medium"> digital code</span> and 
            <span className="text-white font-medium"> physical motion</span>. 
            <br />
            <span className="text-sm font-mono text-neutral-500 mt-2 block">
              STATUS: Building @ DataSpring Hackathon Winner
            </span>
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-3 bg-white text-black font-bold text-sm tracking-wide rounded-sm hover:bg-cyan-500 transition-colors duration-300">
              VIEW WORK
            </button>
            <button className="px-8 py-3 border border-white/20 text-white font-medium text-sm tracking-wide rounded-sm hover:bg-white/5 transition-colors duration-300">
              CONTACT ME
            </button>
          </div>
        </motion.div>

        {/* 3. Right Side: The "Holographic" Profile */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square max-w-md ml-auto group"
        >
          {/* The "Cyber Frame" Effect */}
          <div className="absolute inset-0 border border-cyan-500/30 translate-x-4 translate-y-4 rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
          
          {/* The Glass Container */}
          <div className="w-full h-full relative rounded-lg overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
            {/* Make sure 'chittesh-profile.png' is in public/images/ */}
            <Image 
  src="/images/chittesh-profile.png" 
  alt="Chittesh"
  width={500}
  height={500}
  className="object-cover"
/>
            
            {/* Overlay Gradient for Text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}