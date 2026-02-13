"use client";

import React from "react";
import Window from "@/components/os/Window";
import { Github, ExternalLink, Cpu, Code, Activity } from "lucide-react";

// --- PROJECT DATA ---
const projects = [
  {
    id: "jarvis",
    title: "Project JARVIS",
    desc: "Personalized AI Assistant capable of voice interaction, system control, and home automation integration.",
    tags: ["Python", "AI", "NLP", "IoT"],
    color: "border-gruv-yellow",
    icon: <Cpu size={20} />,
    size: "col-span-1 md:col-span-2 row-span-2", // BIG TILE
    links: { github: "#", live: "#" }
  },
  {
    id: "talon",
    title: "T.A.L.O.N. Rover",
    desc: "Autonomous surveillance rover with gesture control and real-time telemetry.",
    tags: ["C++", "Arduino", "Robotics"],
    color: "border-gruv-red",
    icon: <Activity size={20} />,
    size: "col-span-1 row-span-1", // STANDARD TILE
    links: { github: "#", live: "#" }
  },
  {
    id: "nalam",
    title: "Nalam Health",
    desc: "Smart pill dispenser with mobile app integration for elderly care monitoring.",
    tags: ["IoT", "Flutter", "Firebase"],
    color: "border-gruv-blue",
    icon: <Activity size={20} />,
    size: "col-span-1 row-span-1",
    links: { github: "#", live: "#" }
  },
  {
    id: "portfolio",
    title: "ChitteshOS",
    desc: "The site you are looking at. A fully functional Desktop Environment in the browser.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    color: "border-gruv-aqua",
    icon: <Code size={20} />,
    size: "col-span-1 md:col-span-2 row-span-1", // WIDE TILE
    links: { github: "#", live: "#" }
  }
];
// Change this line to a standard function export
export default function ProjectsApp() {
  return (
    <Window title="~/projects">
      <div className="max-w-6xl mx-auto p-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`group relative bg-gruv-bgSoft rounded-xl border-2 ${project.color} ${project.size} p-6 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-2">
                  <div className="p-2 bg-gruv-bg rounded-lg text-gruv-fg border border-gruv-gray/50">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.links.github} className="text-gruv-gray hover:text-gruv-fg"><Github size={18} /></a>
                    <a href={project.links.live} className="text-gruv-gray hover:text-gruv-fg"><ExternalLink size={18} /></a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gruv-fg mb-1">{project.title}</h3>
                <p className="text-gruv-gray text-sm line-clamp-3">{project.desc}</p>
              </div>
              <div className="relative z-10 flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs font-mono bg-gruv-bg border border-gruv-gray rounded text-gruv-fg0 opacity-80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}