import { Shield, BookOpen, Brain } from "lucide-react";
import dropShieldImage from "@/assets/dropshield-logo.jpg";

interface DropShieldLogoProps {
  size?: "sm" | "md" | "lg";
  showImage?: boolean;
  className?: string;
}

export const DropShieldLogo = ({ size = "md", showImage = true, className = "" }: DropShieldLogoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl"
  };

  const iconSizes = {
    sm: 20,
    md: 28,
    lg: 36
  };

  if (showImage) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="relative">
          <img 
            src={dropShieldImage} 
            alt="DropShield Logo" 
            className="h-12 w-auto rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 shield-glow rounded-lg"></div>
        </div>
        <div className="flex flex-col">
          <h1 className={`font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ${sizeClasses[size]}`}>
            DropShield
          </h1>
          <div className="tricolor-accent mt-1"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <Shield 
          className="text-primary animate-shield-glow" 
          size={iconSizes[size]}
        />
        <BookOpen 
          className="absolute -top-1 -right-1 text-secondary" 
          size={iconSizes[size] * 0.6}
        />
        <Brain 
          className="absolute -bottom-1 -left-1 text-accent" 
          size={iconSizes[size] * 0.5}
        />
      </div>
      <div className="flex flex-col">
        <h1 className={`font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ${sizeClasses[size]}`}>
          DropShield
        </h1>
        <div className="tricolor-accent mt-1"></div>
      </div>
    </div>
  );
};
