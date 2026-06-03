import { useState } from "react";
import { Heart, Shield, TrendingUp, Users, BookOpen, Calendar, MessageCircle, ChevronRight, Brain, Star, Award, Target, ArrowRight, User, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DropShieldLogo } from "@/components/DropShieldLogo";
import { RiskIndicator } from "@/components/RiskIndicator";
import { MotivationCard } from "@/components/MotivationCard";
import { NotificationDropdown } from "@/components/NotificationDropdown";
import { Chatbot } from "@/components/Chatbot";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard");

  const quickActions = [
    { title: "Study Materials", icon: BookOpen, path: "/study-materials" },
    { title: "Achievements", icon: Award, path: "/achievements" },
    { title: "Goals", icon: Target, path: "/goals" },
    { title: "Wellness", icon: Heart, path: "/wellness" },
    { title: "Counseling", icon: MessageCircle, path: "/wellness" },
    { title: "Resources", icon: Brain, path: "/study-materials" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white/95 backdrop-blur-sm shadow-soft border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <DropShieldLogo size="md" />
            <div className="flex items-center gap-4">
              <NotificationDropdown />
              <button 
                onClick={() => navigate('/profile')}
                className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
              >
                <User size={16} />
                <span className="hidden sm:inline">Profile</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:bg-muted/50 rounded-lg transition-colors">
                <Settings size={16} />
                <span className="hidden sm:inline">Settings</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {activeSection === "dashboard" && (
          <>
            {/* Hero Section */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text animate-fade-in">
                  Welcome back, Soumya! 👋
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                  Your academic journey is on track. Let's keep building towards success together.
                </p>
              </div>

              {/* Status Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                <div className="card-gentle p-4 sm:p-6 text-center group hover:scale-105 transition-transform animate-fade-in">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-shield rounded-full flex items-center justify-center">
                    <Shield className="text-white animate-shield-glow" size={24} />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-secondary mb-1">Safe</div>
                  <div className="text-sm text-muted-foreground">Risk Status</div>
                </div>

                <div className="card-gentle p-4 sm:p-6 text-center group hover:scale-105 transition-transform animate-fade-in">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold mb-1">8.56/10</div>
                  <div className="text-sm text-muted-foreground">Current CGPA</div>
                </div>

                <div className="card-gentle p-4 sm:p-6 text-center group hover:scale-105 transition-transform animate-fade-in">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center">
                    <Calendar className="text-white" size={24} />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Attendance</div>
                </div>

                <div className="card-gentle p-4 sm:p-6 text-center group hover:scale-105 transition-transform animate-fade-in">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-tricolor rounded-full flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Sessions Done</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(action.path)}
                    className="btn-floating p-4 text-center hover:scale-105 transition-all duration-300 group"
                  >
                    <action.icon className="mx-auto mb-2 group-hover:text-primary transition-colors" size={20} />
                    <span className="text-xs sm:text-sm font-medium">{action.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                {/* Risk Analysis */}
                <div className="card-gentle p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Risk Analysis</h2>
                    <button 
                      onClick={() => navigate('/achievements-analytics')}
                      className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm"
                    >
                      View Details <ChevronRight size={16} />
                    </button>
                  </div>
                  <RiskIndicator level="safe" score={87} />
                </div>

                {/* Recent Achievements */}
                <div className="card-gentle p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Recent Achievements</h2>
                    <button 
                      onClick={() => navigate('/achievements')}
                      className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm"
                    >
                      View All <ChevronRight size={16} />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg border border-secondary/20">
                      <div className="flex items-center gap-3">
                        <Star className="text-secondary animate-pulse" size={24} />
                        <div>
                          <h4 className="font-medium">Consistent Learner</h4>
                          <p className="text-sm text-muted-foreground">Earned yesterday</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-3">
                        <Award className="text-primary" size={24} />
                        <div>
                          <h4 className="font-medium">High Achiever</h4>
                          <p className="text-sm text-muted-foreground">Earned 3 days ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="card-gentle p-6">
                  <FAQ className="mt-0" />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6 sm:space-y-8">
                {/* Motivation Card */}
                <MotivationCard 
                  studentName="Soumya"
                  badges={[
                    { id: "1", name: "Consistent", icon: Award, earned: true, description: "Maintained regular attendance" },
                    { id: "2", name: "Achiever", icon: Star, earned: true, description: "Academic excellence" }
                  ]}
                  currentStreak={12}
                  motivationQuote="Your education is a dress rehearsal for a life that is yours to lead."
                />

                {/* Upcoming Events */}
                <div className="card-gentle p-6">
                  <h3 className="text-lg font-bold mb-4">Upcoming Events</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <Calendar className="text-primary flex-shrink-0" size={20} />
                      <div className="min-w-0">
                        <p className="font-medium text-sm">Counseling Session</p>
                        <p className="text-xs text-muted-foreground">Tomorrow, 2:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <BookOpen className="text-secondary flex-shrink-0" size={20} />
                      <div className="min-w-0">
                        <p className="font-medium text-sm">Assignment Due</p>
                        <p className="text-xs text-muted-foreground">Oct 25, 11:59 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <Users className="text-accent flex-shrink-0" size={20} />
                      <div className="min-w-0">
                        <p className="font-medium text-sm">Group Study</p>
                        <p className="text-xs text-muted-foreground">Oct 26, 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Goals */}
                <div className="card-gentle p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Current Goals</h3>
                    <button 
                      onClick={() => navigate('/goals')}
                      className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm"
                    >
                      View All <ChevronRight size={16} />
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Improve Attendance</span>
                        <span className="text-xs text-muted-foreground">87/100%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-progress h-2 rounded-full w-4/5 animate-progress-fill"></div>
                      </div>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Complete Assignments</span>
                        <span className="text-xs text-muted-foreground">8/10</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-progress h-2 rounded-full w-4/5 animate-progress-fill"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Index;
