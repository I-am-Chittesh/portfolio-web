"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Square } from "lucide-react";
import { useSession } from "@/context/SessionContext";

// Initial "Boot" Message
const WELCOME_MSG = [
  { type: "system", content: "ChitteshOS [Version 3.0.0]" },
  { type: "system", content: "(c) 2026 Chittesh Corporation. All rights reserved." },
  { type: "info", content: "Welcome, user! Type 'help' to see available commands." },
  { type: "break", content: "" },
];

export default function Terminal() {
  const { isTerminalOpen, minimizeTerminal, openApp } = useSession();
  const [history, setHistory] = useState(WELCOME_MSG);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Command Parser
  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    // Add User Command to History
    const newHistory = [...history, { type: "user", content: `chittesh@portfolio:~$ ${input}` }];

    // Process Command
    switch (cmd) {
      case "help":
        newHistory.push({ type: "response", content: "Available commands:" });
        newHistory.push({ type: "response", content: "  whoami    - About Chittesh" });
        newHistory.push({ type: "response", content: "  projects  - View my work (GUI)" });
        newHistory.push({ type: "response", content: "  contact   - Send me a message" });
        newHistory.push({ type: "response", content: "  clear     - Clear terminal" });
        break;
      case "whoami":
        newHistory.push({ type: "response", content: "Chittesh | AI & Robotics Engineer" });
        newHistory.push({ type: "response", content: "Building autonomous systems and scalable web apps." });
        break;
      case "projects":
        newHistory.push({ type: "success", content: "Launching Project Manager..." });
        setTimeout(() => openApp("projects"), 800); // Small delay for effect
        break;
      case "contact":
        newHistory.push({ type: "success", content: "Opening Mail Client..." });
        setTimeout(() => openApp("contact"), 800);
        break;
      case "clear":
        setHistory(WELCOME_MSG);
        setInput("");
        return;
      case "":
        break;
      default:
        newHistory.push({ type: "error", content: `Command not found: ${cmd}` });
    }

    setHistory(newHistory);
    setInput("");
  };

  // If minimized, don't render (or use AnimatePresence to slide it out)
  if (!isTerminalOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: -50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.9, x: -50 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
      className="absolute left-4 md:left-10 top-20 bottom-32 w-full md:w-[600px] bg-gruv-bg border-2 border-gruv-gray rounded-lg shadow-2xl flex flex-col overflow-hidden font-mono z-20"
    >
      {/* Title Bar */}
      <div className="bg-gruv-bgSoft px-4 py-2 flex items-center justify-between border-b border-gruv-gray select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gruv-red hover:bg-red-400 cursor-pointer" onClick={minimizeTerminal}/>
          <span className="w-3 h-3 rounded-full bg-gruv-yellow hover:bg-yellow-400 cursor-pointer" onClick={minimizeTerminal}/>
          <span className="w-3 h-3 rounded-full bg-gruv-green hover:bg-green-400 cursor-pointer"/>
        </div>
        <div className="text-gruv-gray text-sm font-bold">chittesh@portfolio:~</div>
        <div className="w-10"></div> {/* Spacer for centering */}
      </div>

      {/* Terminal Content */}
      <div className="flex-1 p-4 overflow-y-auto space-y-1 scrollbar-hide" onClick={() => document.getElementById("terminal-input")?.focus()}>
        {history.map((line, i) => (
          <div key={i} className={`${
            line.type === "user" ? "text-gruv-fg font-bold mt-4" :
            line.type === "error" ? "text-gruv-red" :
            line.type === "success" ? "text-gruv-green" :
            line.type === "info" ? "text-gruv-blue" :
            line.type === "break" ? "h-2" :
            "text-gruv-fg0 opacity-90"
          }`}>
            {line.content}
          </div>
        ))}
        <div ref={bottomRef} />
        
        {/* Input Line */}
        <form onSubmit={handleCommand} className="flex items-center mt-2">
          <span className="text-gruv-green mr-2">➜</span>
          <span className="text-gruv-aqua mr-2">~</span>
          <input 
            id="terminal-input"
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-gruv-fg caret-gruv-fg"
            autoFocus
            autoComplete="off"
          />
        </form>
      </div>
    </motion.div>
  );
}