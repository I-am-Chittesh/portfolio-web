"use client";

import { motion } from "framer-motion";
import { 
  TerminalSquare, 
  FolderOpen, 
  User, 
  Mail, 
  Settings, 
  AppWindow 
} from "lucide-react";
import { useSession, AppID } from "@/context/SessionContext";

export default function Taskbar() {
  const { 
    activeApp, 
    openApp, 
    isTerminalOpen, 
    toggleTerminal, 
    minimizeTerminal 
  } = useSession();

  // The Apps configuration
  const dockItems = [
    { 
      id: "terminal", 
      label: "Terminal", 
      icon: TerminalSquare, 
      action: toggleTerminal,
      isOpen: isTerminalOpen 
    },
    { 
      id: "about", 
      label: "About", 
      icon: User, 
      action: () => openApp("about"),
      isOpen: activeApp === "about"
    },
    { 
      id: "projects", 
      label: "Projects", 
      icon: FolderOpen, 
      action: () => openApp("projects"),
      isOpen: activeApp === "projects"
    },
    { 
      id: "contact", 
      label: "Contact", 
      icon: Mail, 
      action: () => openApp("contact"),
      isOpen: activeApp === "contact"
    },
    { 
      id: "settings", 
      label: "System", 
      icon: Settings, 
      action: () => openApp("settings"),
      isOpen: activeApp === "settings"
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      {/* The Glass Container */}
      <div className="flex items-end gap-2 px-4 py-3 bg-gruv-bgSoft/90 backdrop-blur-md border border-gruv-gray/40 rounded-2xl shadow-2xl">
        
        {dockItems.map((item) => (
          <div key={item.id} className="relative group flex flex-col items-center gap-1">
            
            {/* Tooltip (appears on hover) */}
            <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono bg-gruv-bg border border-gruv-gray text-gruv-fg px-2 py-1 rounded">
              {item.label}
            </span>

            {/* The Icon Button */}
            <motion.button
              onClick={item.action}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-xl transition-colors ${
                item.isOpen 
                  ? "bg-gruv-bg border border-gruv-yellow text-gruv-yellow shadow-lg" 
                  : "hover:bg-gruv-bg hover:text-gruv-fg text-gruv-gray"
              }`}
            >
              <item.icon size={24} strokeWidth={2} />
            </motion.button>

            {/* Active Dot Indicator */}
            <div className={`w-1 h-1 rounded-full transition-all duration-300 ${
              item.isOpen ? "bg-gruv-yellow w-2" : "bg-transparent"
            }`} />
          </div>
        ))}

      </div>
    </div>
  );
}