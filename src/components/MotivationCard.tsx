import { Award, Star, Target, Trophy, Heart, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Badge {
  id: string;
  name: string;
  icon: typeof Award;
  earned: boolean;
  description: string;
}

interface MotivationCardProps {
  studentName: string;
  badges: Badge[];
  currentStreak: number;
  motivationQuote: string;
  className?: string;
}

export const MotivationCard = ({ 
  studentName, 
  badges, 
  currentStreak, 
  motivationQuote, 
  className = "" 
}: MotivationCardProps) => {
  const navigate = useNavigate();
  const earnedBadges = badges.filter(badge => badge.earned);
  
  return (
    <div className={`card-gentle p-6 bg-gradient-to-br from-accent-light/10 to-secondary-light/10 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <Heart className="text-accent animate-bounce-gentle" size={24} />
        <h3 className="font-bold text-lg">Hey {studentName}! 🌟</h3>
      </div>
      
      <div className="mb-6 p-4 bg-white/50 rounded-lg border-l-4 border-accent">
        <p className="italic text-foreground font-medium">"{motivationQuote}"</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-4 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-lg">
          <Target className="mx-auto mb-2 text-secondary" size={32} />
          <div className="font-bold text-xl">{currentStreak}</div>
          <div className="text-sm text-muted-foreground">Day Streak</div>
        </div>
        
        <div className="text-center p-4 bg-gradient-to-br from-accent/10 to-accent/20 rounded-lg">
          <Trophy className="mx-auto mb-2 text-accent" size={32} />
          <div className="font-bold text-xl">{earnedBadges.length}</div>
          <div className="text-sm text-muted-foreground">Badges Earned</div>
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold mb-3 flex items-center gap-2">
          <Award className="text-primary" size={20} />
          Your Achievements
        </h4>
        <div className="grid grid-cols-3 gap-2">
          {badges.slice(0, 6).map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.id}
                className={`p-3 rounded-lg text-center transition-all duration-300 ${
                  badge.earned
                    ? 'bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 animate-pulse'
                    : 'bg-muted/50 opacity-50'
                }`}
                title={badge.description}
              >
                <Icon 
                  className={badge.earned ? 'text-primary mx-auto' : 'text-muted-foreground mx-auto'} 
                  size={16} 
                />
                <div className="text-xs mt-1 font-medium">{badge.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      
      <button 
        onClick={() => navigate('/goals')}
        className="btn-motivation w-full mt-4"
      >
        Continue Your Journey
      </button>
    </div>
  );
};
