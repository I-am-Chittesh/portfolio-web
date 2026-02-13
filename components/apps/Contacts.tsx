"use client";

import React, { useState } from "react";
import Window from "@/components/os/Window";
import { Send, Github, Linkedin, Mail, Twitter, MapPin } from "lucide-react";

const ContactApp: React.FC = () => {
  const [formState, setFormState] = useState({ subject: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    // Here you would normally send the data to an API
    setTimeout(() => {
      setIsSent(false);
      setFormState({ subject: "", message: "" });
    }, 3000);
  };

  return (
    <Window title="~/contact/compose">
      <div className="flex flex-col md:flex-row h-full gap-0 md:gap-4 font-mono text-gruv-fg">
        
        {/* SIDEBAR (Socials) */}
        <div className="w-full md:w-1/3 bg-gruv-bgSoft p-4 border-r md:border-r-0 md:border border-gruv-gray/30 rounded-lg flex flex-col gap-6">
          
          {/* My Info */}
          <div className="space-y-2">
            <h3 className="text-gruv-gray text-xs uppercase tracking-widest border-b border-gruv-gray/30 pb-1">
              User Profile
            </h3>
            <div className="flex items-center gap-3 text-sm">
              <Mail size={16} className="text-gruv-yellow" />
              <span>me@chittesh.dev</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin size={16} className="text-gruv-red" />
              <span>Chennai, IN</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            <h3 className="text-gruv-gray text-xs uppercase tracking-widest border-b border-gruv-gray/30 pb-1">
              Network Drives
            </h3>
            <a href="https://github.com" target="_blank" className="flex items-center gap-3 p-2 hover:bg-gruv-bg rounded transition-colors group">
              <Github size={18} className="text-gruv-gray group-hover:text-gruv-fg" />
              <span className="text-gruv-gray group-hover:text-gruv-fg">/mnt/github</span>
            </a>
            <a href="https://linkedin.com" target="_blank" className="flex items-center gap-3 p-2 hover:bg-gruv-bg rounded transition-colors group">
              <Linkedin size={18} className="text-gruv-gray group-hover:text-gruv-fg" />
              <span className="text-gruv-gray group-hover:text-gruv-fg">/mnt/linkedin</span>
            </a>
            <a href="https://twitter.com" target="_blank" className="flex items-center gap-3 p-2 hover:bg-gruv-bg rounded transition-colors group">
              <Twitter size={18} className="text-gruv-gray group-hover:text-gruv-fg" />
              <span className="text-gruv-gray group-hover:text-gruv-fg">/mnt/x</span>
            </a>
          </div>

        </div>

        {/* MAIN PANEL (Email Form) */}
        <div className="flex-1 p-2 md:p-4">
          <form onSubmit={handleSubmit} className="flex flex-col h-full gap-4">
            
            {/* Header Fields */}
            <div className="grid gap-2 border-b border-gruv-gray/30 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-gruv-gray w-16 text-right text-sm">To:</span>
                <span className="bg-gruv-bgSoft px-2 py-1 rounded text-gruv-green text-sm">iamchitteshd@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-gruv-gray w-16 text-right text-sm">Subject:</label>
                <input 
                  type="text" 
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({...formState, subject: e.target.value})}
                  className="bg-transparent border-b border-gruv-gray/30 flex-1 focus:outline-none focus:border-gruv-yellow transition-colors text-gruv-fg text-sm py-1"
                  placeholder="Project Inquiry..."
                />
              </div>
            </div>

            {/* Message Body */}
            <textarea 
              required
              value={formState.message}
              onChange={(e) => setFormState({...formState, message: e.target.value})}
              className="flex-1 bg-gruv-bgSoft/50 p-4 rounded border border-gruv-gray/30 focus:outline-none focus:border-gruv-aqua transition-colors resize-none text-sm leading-relaxed"
              placeholder="Write your message here..."
            />

            {/* Footer / Send Button */}
            <div className="flex justify-between items-center pt-2">
              <span className="text-xs text-gruv-gray">
                {isSent ? "Message sent successfully!" : "Press Ctrl+Enter to send"}
              </span>
              <button 
                type="submit" 
                className={`
                  flex items-center gap-2 px-6 py-2 rounded font-bold text-sm transition-all
                  ${isSent 
                    ? "bg-gruv-green text-gruv-bg" 
                    : "bg-gruv-yellow text-gruv-bg hover:bg-gruv-fg"
                  }
                `}
              >
                {isSent ? "Sent!" : "Send Mail"} <Send size={14} />
              </button>
            </div>

          </form>
        </div>

      </div>
    </Window>
  );
};

export default ContactApp;