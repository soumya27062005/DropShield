import { useState } from "react";
import { Award, Trophy, Star, Target, Heart, BookOpen, ArrowLeft, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DropShieldLogo } from "@/components/DropShieldLogo";

const Achievements = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const achievements = [
    { 
      id: 1, 
      name: "Resilient Learner", 
      description: "Overcame challenges with determination", 
      icon: Award, 
      earned: true, 
      date: "2024-03-15",
      category: "academic",
      points: 100
    },
    { 
      id: 2, 
      name: "Consistency Champion", 
      description: "Maintained regular attendance for 30 days", 
      icon: Target, 
      earned: true, 
      date: "2024-03-10",
      category: "attendance",
      points: 150
    },
    { 
      id: 3, 
      name: "Helper", 
      description: "Helped fellow students succeed", 
      icon: Heart, 
      earned: true, 
      date: "2024-03-08",
      category: "social",
      points: 75
    },
    { 
      id: 4, 
      name: "Scholar", 
      description: "Achieved academic excellence", 
      icon: BookOpen, 
      earned: false, 
      date: null,
      category: "academic",
      points: 200
    },
    { 
      id: 5, 
      name: "Leader", 
      description: "Demonstrated leadership skills", 
      icon: Star, 
      earned: false, 
      date: null,
      category: "social",
      points: 250
    },
    { 
      id: 6, 
      name: "Champion", 
      description: "Completed major milestone", 
      icon: Trophy, 
      earned: false, 
      date: null,
      category: "milestone",
      points: 300
    },
  ];

  const categories = [
    { id: "all", name: "All Categories", color: "from-primary to-secondary" },
    { id: "academic", name: "Academic", color: "from-blue-500 to-blue-600" },
    { id: "attendance", name: "Attendance", color: "from-green-500 to-green-600" },
    { id: "social", name: "Social", color: "from-purple-500 to-purple-600" },
    { id: "milestone", name: "Milestones", color: "from-yellow-500 to-orange-500" },
  ];

  const filteredAchievements = selectedCategory === "all" 
    ? achievements 
    : achievements.filter(a => a.category === selectedCategory);

  const totalPoints = achievements.filter(a => a.earned).reduce((sum, a) => sum + a.points, 0);
  const earnedCount = achievements.filter(a => a.earned).length;

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <DropShieldLogo size="md" />
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Your Achievements
          </h1>
          <p className="text-muted-foreground">Track your progress and celebrate your success</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card-gentle p-6 text-center">
            <Trophy className="mx-auto mb-4 text-accent" size={48} />
            <div className="text-2xl font-bold">{earnedCount}</div>
            <div className="text-muted-foreground">Badges Earned</div>
          </div>
          <div className="card-gentle p-6 text-center">
            <Star className="mx-auto mb-4 text-secondary" size={48} />
            <div className="text-2xl font-bold">{totalPoints}</div>
            <div className="text-muted-foreground">Total Points</div>
          </div>
          <div className="card-gentle p-6 text-center">
            <Target className="mx-auto mb-4 text-primary" size={48} />
            <div className="text-2xl font-bold">{Math.round((earnedCount / achievements.length) * 100)}%</div>
            <div className="text-muted-foreground">Completion Rate</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-md`
                    : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={achievement.id} 
                className={`card-gentle p-6 transition-all ${
                  achievement.earned
                    ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30'
                    : 'opacity-60 grayscale'
                }`}
              >
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    achievement.earned 
                      ? 'bg-gradient-to-r from-primary to-secondary' 
                      : 'bg-muted'
                  }`}>
                    <Icon 
                      className={achievement.earned ? 'text-white' : 'text-muted-foreground'} 
                      size={32} 
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{achievement.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-accent">{achievement.points} pts</span>
                    {achievement.earned && achievement.date && (
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar size={12} />
                        {new Date(achievement.date).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </div>
                
                {!achievement.earned && (
                  <div className="text-center">
                    <button className="btn-outline w-full">View Requirements</button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Achievements;
