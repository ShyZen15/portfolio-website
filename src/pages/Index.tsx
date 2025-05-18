
import React from 'react';
import { Github, Linkedin, Code, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CodeBackground from "@/components/CodeBackground";
import ProjectCard from "@/components/ProjectCard";
import ProfileHeader from "@/components/ProfileHeader";
import SocialLink from "@/components/SocialLink";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated code background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <CodeBackground />
      </div>
      
      <div className="container max-w-4xl mx-auto px-4 py-12 relative z-10 space-y-16">
        {/* Header section */}
        <ProfileHeader 
          name="Shiven Sharma"
          title="AI/ML Developer & Python Programmer"
          description="Senior at Pestle Weed School, Dehradun. Focused on integrating hardware with AI/ML using Python and socket programming."
        />

        {/* Current projects section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gradient">Current Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard 
              title="EMF Detector"
              description="Hardware device utilizing Arduino to detect electromagnetic fields with custom ML algorithms."
              icon={<Cpu size={24} />}
            />
            <ProjectCard 
              title="Video Meeting App"
              description="Accessible communication platform designed specifically for people of determination."
              icon={<Code size={24} />}
            />
            <ProjectCard 
              title="Driver Safety Device"
              description="System combining hardware sensors and ML to monitor driver alertness and enhance road safety."
              icon={<Cpu size={24} />}
            />
          </div>
        </section>

        {/* Skills section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gradient">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Python", "Machine Learning", "Socket Programming", "Arduino", 
              "ESP32", "Raspberry Pi", "Hardware Integration", "Computer Vision"
            ].map((skill, index) => (
              <div key={index} className="glass-card p-3 text-sm text-center">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Contact section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gradient">Connect</h2>
          <div className="flex flex-wrap gap-4">
            <SocialLink 
              icon={<Github size={20} />} 
              label="GitHub"
              href="https://github.com/yourusername" 
            />
            <SocialLink 
              icon={<Linkedin size={20} />} 
              label="LinkedIn"
              href="https://linkedin.com/in/yourusername" 
            />
            <Button variant="outline" className="gap-2">
              Contact Me <ArrowRight size={16} />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
