"use client";

import React from "react";
import Window from "@/components/os/Window";

// Explicitly saying: This component takes NO inputs (props)
const AboutApp: React.FC = () => {
  return (
    // It provides its OWN title to the Window wrapper
    <Window title="About Chittesh (User Profile)">
      <div className="max-w-4xl mx-auto space-y-8 font-mono text-gruv-fg">
        
        <div className="border-b border-gruv-gray pb-6">
          <h1 className="text-4xl font-bold text-gruv-yellow mb-2">Chittesh</h1>
          <p className="text-xl text-gruv-blue">AI & Robotics Engineer // Web Developer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-gruv-aqua text-lg font-bold uppercase border-b border-gruv-gray/50 w-max">
              ./bio.txt
            </h3>
            <p className="text-gruv-fg0 leading-relaxed">
              I am a builder at heart. Currently studying at <span className="text-gruv-yellow">VIT Chennai</span>, 
              I spend my free time ricing Linux, building rovers, and exploring Autonomous Systems.
            </p>
          </div>

          <div className="bg-gruv-bgSoft p-6 rounded-lg border border-gruv-gray font-mono text-sm">
            <p><span className="text-gruv-red font-bold">OS:</span> Chittesh Arch x86_64</p>
            <p><span className="text-gruv-green font-bold">Kernel:</span> Robotics_Engineer_v3.0</p>
            <p><span className="text-gruv-yellow font-bold">Stack:</span> Next.js, C++, ROS2</p>
          </div>
        </div>

      </div>
    </Window>
  );
};

export default AboutApp;