"use client";

import React from "react";
import Window from "@/components/os/Window";
import { Cpu, Zap, Box, Layers, Globe, Database } from "lucide-react";

const ServicesApp: React.FC = () => {
  return (
    <Window title="~/system/services">
      <div className="font-mono text-gruv-fg space-y-8 max-w-5xl mx-auto">
        
        {/* SECTION 1: SYSTEM RESOURCES (SKILLS) */}
        <div>
          <h3 className="text-gruv-gray text-sm uppercase tracking-widest border-b border-gruv-gray/50 pb-2 mb-4">
            System Resources (Skills)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {[
              { label: "Robotics / ROS2", usage: 90, color: "bg-gruv-red" },
              { label: "React / Next.js", usage: 85, color: "bg-gruv-blue" },
              { label: "C++ / Python", usage: 95, color: "bg-gruv-yellow" },
              { label: "Linux / Bash", usage: 80, color: "bg-gruv-green" },
              { label: "PCB Design", usage: 70, color: "bg-gruv-purple" },
              { label: "IoT / Embedded", usage: 75, color: "bg-gruv-aqua" },
            ].map((skill) => (
              <div key={skill.label} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>{skill.label}</span>
                  <span className="text-gruv-gray">{skill.usage}%</span>
                </div>
                <div className="h-4 bg-gruv-bgSoft rounded overflow-hidden border border-gruv-gray/30 relative">
                  {/* The Bar */}
                  <div 
                    className={`h-full ${skill.color} opacity-80`} 
                    style={{ width: `${skill.usage}%` }} 
                  />
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: ACTIVE DAEMONS (SERVICES) */}
        <div>
          <h3 className="text-gruv-gray text-sm uppercase tracking-widest border-b border-gruv-gray/50 pb-2 mb-4">
            Active Daemons (Services)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Service Card 1 */}
            <div className="bg-gruv-bgSoft p-4 rounded border border-gruv-gray/50 hover:border-gruv-yellow transition-colors group">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gruv-bg rounded text-gruv-yellow"><Globe size={20} /></div>
                <div>
                  <h4 className="font-bold">Web Development</h4>
                  <p className="text-xs text-gruv-green">[ RUNNING ]</p>
                </div>
              </div>
              <p className="text-sm text-gruv-fg0 opacity-80">
                Building scalable, modern web applications using Next.js, React, and Tailwind CSS.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gruv-bgSoft p-4 rounded border border-gruv-gray/50 hover:border-gruv-red transition-colors group">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gruv-bg rounded text-gruv-red"><Cpu size={20} /></div>
                <div>
                  <h4 className="font-bold">Robotics Engineering</h4>
                  <p className="text-xs text-gruv-green">[ RUNNING ]</p>
                </div>
              </div>
              <p className="text-sm text-gruv-fg0 opacity-80">
                End-to-end robotics solutions: from PCB design to autonomous navigation algorithms (SLAM).
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gruv-bgSoft p-4 rounded border border-gruv-gray/50 hover:border-gruv-aqua transition-colors group">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gruv-bg rounded text-gruv-aqua"><Box size={20} /></div>
                <div>
                  <h4 className="font-bold">Product Prototyping</h4>
                  <p className="text-xs text-gruv-green">[ RUNNING ]</p>
                </div>
              </div>
              <p className="text-sm text-gruv-fg0 opacity-80">
                Rapid prototyping of hardware products using 3D printing and custom embedded systems.
              </p>
            </div>

          </div>
        </div>

      </div>
    </Window>
  );
};

export default ServicesApp;