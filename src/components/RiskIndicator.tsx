import { Shield, AlertTriangle, AlertCircle } from "lucide-react";

type RiskLevel = "safe" | "at-risk" | "high-risk";

interface RiskIndicatorProps {
  level: RiskLevel;
  score: number;
  className?: string;
}

export const RiskIndicator = ({ level, score, className = "" }: RiskIndicatorProps) => {
  const getRiskConfig = (level: RiskLevel) => {
    switch (level) {
      case "safe":
        return {
          icon: Shield,
          text: "Safe Path",
          description: "You're doing great! Keep up the excellent work.",
          bgClass: "status-safe",
          textColor: "text-white",
          glowClass: "shadow-[0_0_20px_hsl(var(--safe)/0.4)]"
        };
      case "at-risk":
        return {
          icon: AlertTriangle,
          text: "Needs Support",
          description: "Let's work together to strengthen your path.",
          bgClass: "status-at-risk",
          textColor: "text-white",
          glowClass: "shadow-[0_0_20px_hsl(var(--at-risk)/0.4)]"
        };
      case "high-risk":
        return {
          icon: AlertCircle,
          text: "Priority Care",
          description: "We're here to help. Counseling support available.",
          bgClass: "status-high-risk",
          textColor: "text-white",
          glowClass: "shadow-[0_0_20px_hsl(var(--high-risk)/0.4)]"
        };
    }
  };

  const config = getRiskConfig(level);
  const Icon = config.icon;

  return (
    <div className={`card-gentle p-6 ${config.glowClass} ${className}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-full ${config.bgClass}`}>
          <Icon className={config.textColor} size={24} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{config.text}</h3>
          <p className="text-muted-foreground text-sm">{config.description}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">{score}%</div>
          <div className="text-sm text-muted-foreground">Success Score</div>
        </div>
      </div>
      
      <div className="progress-bar">
        <div 
          className={`progress-fill ${config.bgClass}`}
          style={{ width: `${score}%` }}
        ></div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground italic">
          "Your Path is Safe with DropShield"
        </p><br/>  
        <p className="text-sm text-muted-foreground italic"> 
          "hvxb gbxzhvbjh zbjhv bhvb xjhc bb 
          b cznbxhfb b jbvjhnfb
           nv hxfbv jfb h"
        </p>
      </div>
    </div>
  );
};
