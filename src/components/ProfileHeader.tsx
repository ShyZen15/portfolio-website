
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileHeaderProps {
  name: string;
  title: string;
  description: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, title, description }) => {
  return (
    <header className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
      <Avatar className="w-32 h-32 border-2 border-primary">
        <AvatarImage src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8MTYzMDM0MTY3OA&q=80&w=300" alt="Shiven Sharma" />
        <AvatarFallback className="text-2xl font-bold">SS</AvatarFallback>
      </Avatar>
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">{name}</h1>
        <p className="text-xl text-gradient font-semibold">{title}</p>
        <p className="text-muted-foreground max-w-lg">{description}</p>
      </div>
    </header>
  );
};

export default ProfileHeader;
