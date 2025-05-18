
import React, { ReactNode } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="glass-card h-full transition-all duration-300 hover:bg-secondary/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20 group">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <div className="text-white group-hover:text-white group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <CardTitle className="text-lg group-hover:text-gradient">{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
