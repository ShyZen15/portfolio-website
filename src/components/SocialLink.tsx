
import React, { ReactNode } from 'react';
import { Button } from "@/components/ui/button";

interface SocialLinkProps {
  icon: ReactNode;
  label: string;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, label, href }) => {
  return (
    <Button 
      variant="secondary" 
      className="gap-2"
      asChild
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon}
        {label}
      </a>
    </Button>
  );
};

export default SocialLink;
