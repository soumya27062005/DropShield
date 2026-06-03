import { useState } from "react";
import { Target, Plus, Check, Clock, ArrowLeft, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DropShieldLogo } from "@/components/DropShieldLogo";

const Goals = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("active");
  const [showNewGoalForm, setShowNewGoalForm] = useState(false);

  const goals = [
    {
      id: 1,
      title: "Improve Math Grade",
      description: "Achieve 85+ in next mathematics exam",
      progress: 65,
      targetDate: "2024-04-15",
      status: "active",
      priority: "high"
    },
    {
      id: 2,
      title: "Perfect Attendance",
      description: "Maintain 100% attendance for this month",
      progress: 80,
      targetDate: "2024-03-31",
      status: "active",
      priority: "medium"
    },
    {
      id: 3,
      title: "Read 5 Books",
      description: "Complete reading 5 educational books this semester",
      progress: 40,
      targetDate: "2024-06-30",
      status: "active",
      priority: "low"
    },
    {
      id: 4,
      title: "Learn Python",
      description: "Complete basic Python programming course",
      progress: 100,
      targetDate: "2024-02-28",
      status: "completed",
      priority: "medium"
    }
  ];

  const activeGoals = goals.filter(g => g.status === "active");
  const completedGoals = goals.filter(g => g.status === "completed");

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-700 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "low": return "bg-green-100 text-green-700 border-green-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Your Goals
            </h1>
            <p className="text-muted-foreground">Set and track your academic objectives</p>
          </div>
          <button 
            onClick={() => setShowNewGoalForm(true)}
            className="btn-primary flex items-center gap-2"
          >
            <Plus size={16} />
            New Goal
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card-gentle p-6 text-center">
            <Target className="mx-auto mb-4 text-primary" size={48} />
            <div className="text-2xl font-bold">{activeGoals.length}</div>
            <div className="text-muted-foreground">Active Goals</div>
          </div>
          <div className="card-gentle p-6 text-center">
            <Check className="mx-auto mb-4 text-secondary" size={48} />
            <div className="text-2xl font-bold">{completedGoals.length}</div>
            <div className="text-muted-foreground">Completed</div>
          </div>
          <div className="card-gentle p-6 text-center">
            <Clock className="mx-auto mb-4 text-accent" size={48} />
            <div className="text-2xl font-bold">
              {Math.round(activeGoals.reduce((sum, g) => sum + g.progress, 0) / activeGoals.length) || 0}%
            </div>
            <div className="text-muted-foreground">Average Progress</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("active")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "active"
                ? 'bg-primary text-white'
                : 'bg-muted hover:bg-muted/80 text-muted-foreground'
            }`}
          >
            Active Goals ({activeGoals.length})
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "completed"
                ? 'bg-primary text-white'
                : 'bg-muted hover:bg-muted/80 text-muted-foreground'
            }`}
          >
            Completed ({completedGoals.length})
          </button>
        </div>

        {/* Goals List */}
        <div className="space-y-4">
          {(activeTab === "active" ? activeGoals : completedGoals).map((goal) => (
            <div key={goal.id} className="card-gentle p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-lg">{goal.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full border ${getPriorityColor(goal.priority)}`}>
                      {goal.priority} priority
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-3">{goal.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    Target: {new Date(goal.targetDate).toLocaleDateString()}
                  </div>
                </div>
                {goal.status === "completed" && (
                  <div className="flex items-center gap-2 text-secondary">
                    <Check size={20} />
                    <span className="font-medium">Completed</span>
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span className="font-medium">{goal.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
              </div>

              {goal.status === "active" && (
                <div className="flex gap-2">
                  <button className="btn-primary">Update Progress</button>
                  <button className="btn-outline">Edit Goal</button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* New Goal Form Modal */}
        {showNewGoalForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <h3 className="text-xl font-bold mb-4">Create New Goal</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Goal Title</label>
                  <input type="text" className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea className="w-full p-3 border rounded-lg" rows={3}></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Target Date</label>
                  <input type="date" className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Priority</label>
                  <select className="w-full p-3 border rounded-lg">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div className="flex gap-3 pt-4">
                  <button type="submit" className="btn-primary flex-1">Create Goal</button>
                  <button 
                    type="button" 
                    onClick={() => setShowNewGoalForm(false)}
                    className="btn-outline flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Goals;
