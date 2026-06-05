import { MessageCircle, Video, FileText, Users, Clock, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CounselingSession {
  id: string;
  type: "chat" | "video" | "group";
  title: string;
  counselor: string;
  date: string;
  status: "upcoming" | "completed" | "available";
}

interface CounselingHubProps {
  upcomingSessions: CounselingSession[];
  availableResources: number;
  aiMentorActive: boolean;
  className?: string;
}

export const CounselingHub = ({ 
  upcomingSessions, 
  availableResources, 
  aiMentorActive, 
  className = "" 
}: CounselingHubProps) => {
  const navigate = useNavigate();
  
  const getSessionIcon = (type: string) => {
    switch (type) {
      case "chat": return MessageCircle;
      case "video": return Video;
      case "group": return Users;
      default: return MessageCircle;
    }
  };

  return (
    <div className={`card-gentle p-6 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-secondary to-secondary-light">
          <MessageCircle className="text-white" size={24} />
        </div>
        <div>
          <h3 className="font-bold text-lg">Counseling & Support</h3>
          <p className="text-sm text-muted-foreground">Your wellness journey matters</p>
        </div>
      </div>

      {/* AI Mentor Status */}
      <div className={`p-4 rounded-lg mb-4 ${aiMentorActive ? 'bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20' : 'bg-muted/20'}`}>
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${aiMentorActive ? 'bg-secondary animate-pulse' : 'bg-muted'}`}></div>
          <div>
            <div className="font-medium">AI Mentor</div>
            <div className="text-sm text-muted-foreground">
              {aiMentorActive ? "Available 24/7 for guidance" : "Currently offline"}
            </div>
          </div>
          {aiMentorActive && (
            <button 
              onClick={() => navigate('/wellness')}
              className="ml-auto btn-motivation text-sm px-3 py-1"
            >
              Chat Now
            </button>
          )}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-gradient-to-br from-accent/10 to-accent/20 rounded-lg">
          <FileText className="mx-auto mb-2 text-accent" size={24} />
          <div className="font-bold text-lg">{availableResources}</div>
          <div className="text-xs text-muted-foreground">Resources Available</div>
        </div>
        
        <div className="text-center p-3 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-lg">
          <Calendar className="mx-auto mb-2 text-secondary" size={24} />
          <div className="font-bold text-lg">{upcomingSessions.length}</div>
          <div className="text-xs text-muted-foreground">Sessions Scheduled</div>
        </div>
      </div>

      {/* Upcoming Sessions */}
      {upcomingSessions.length > 0 && (
        <div>
          <h4 className="font-semibold mb-3 text-sm">Upcoming Sessions</h4>
          <div className="space-y-3">
            {upcomingSessions.slice(0, 3).map((session) => {
              const Icon = getSessionIcon(session.type);
              return (
                <div key={session.id} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <Icon className="text-primary" size={16} />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{session.title}</div>
                    <div className="text-xs text-muted-foreground">
                      with {session.counselor} • {session.date}
                    </div>
                  </div>
                  <Clock className="text-muted-foreground" size={14} />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* CTA Buttons */}
      <div className="mt-6 space-y-2">
        <button 
          onClick={() => navigate('/wellness')}
          className="btn-shield w-full"
        >
          Schedule Counseling Session
        </button>
        <button 
          onClick={() => navigate('/wellness')}
          className="w-full px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
        >
          Browse Self-Help Resources
        </button>
      </div>
    </div>
  );
};
