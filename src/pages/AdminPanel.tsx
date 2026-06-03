import { useState } from "react";
import { 
  Users, 
  AlertTriangle, 
  TrendingUp, 
  Calendar,
  Search,
  Filter,
  Download,
  MoreVertical,
  ArrowLeft,
  Eye,
  MessageSquare,
  UserCheck,
  GraduationCap
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DropShieldLogo } from "@/components/DropShieldLogo";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");

  const stats = [
    { title: "Total Students", value: "2,847", change: "+5.2%", icon: Users, color: "text-blue-600" },
    { title: "At Risk Students", value: "143", change: "-2.1%", icon: AlertTriangle, color: "text-red-600" },
    { title: "Success Rate", value: "94.2%", change: "+1.8%", icon: TrendingUp, color: "text-green-600" },
    { title: "Active Sessions", value: "28", change: "+12.5%", icon: MessageSquare, color: "text-purple-600" },
  ];

  const riskStudents = [
    {
      id: 1,
      name: "Meet Gajjar",
      class: "Class 12 - Science",
      riskLevel: "high",
      riskScore: 85,
      lastActive: "2 days ago",
      factors: ["Low Attendance", "Declining Grades"]
    },
    {
      id: 2,
      name: "Khushi More",
      class: "Class 11 - Commerce", 
      riskLevel: "medium",
      riskScore: 65,
      lastActive: "1 day ago",
      factors: ["Family Issues", "Financial Stress"]
    },
    {
      id: 3,
      name: "Bhavya Bagadia",
      class: "Class 10",
      riskLevel: "high",
      riskScore: 78,
      lastActive: "3 hours ago",
      factors: ["Poor Performance", "Social Issues"]
    }
  ];

  const recentActivities = [
    { id: 1, type: "counseling", student: "Soumya Gupta", action: "Completed counseling session", time: "2 hours ago" },
    { id: 2, type: "alert", student: "Meet Gajjar", action: "Risk level increased to High", time: "4 hours ago" },
    { id: 3, type: "success", student: "Bhavya Bagadia", action: "Moved from High Risk to Safe", time: "6 hours ago" },
    { id: 4, type: "session", student: "Khushi More", action: "Scheduled counseling session", time: "8 hours ago" },
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "high": return "bg-red-100 text-red-700 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "low": return "bg-green-100 text-green-700 border-green-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "counseling": return MessageSquare;
      case "alert": return AlertTriangle;
      case "success": return UserCheck;
      case "session": return Calendar;
      default: return Users;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <DropShieldLogo size="md" />
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
              >
                <ArrowLeft size={16} />
                Student View
              </button>
              <div className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-lg cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <GraduationCap className="text-white" size={16} />
                </div>
                <span className="font-medium">Admin Panel</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            DropShield Admin Dashboard
          </h1>
          <p className="text-muted-foreground">Monitor student welfare and intervention effectiveness</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="card-gentle p-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon className={stat.color} size={24} />
                  <span className="text-sm font-medium text-secondary">{stat.change}</span>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.title}</div>
              </div>
            );
          })}
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { id: "overview", name: "Overview" },
            { id: "students", name: "Students at Risk" },
            { id: "analytics", name: "Analytics" },
            { id: "counselors", name: "Counselors" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedTab === tab.id
                  ? 'bg-primary text-white'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content based on selected tab */}
        {selectedTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activities */}
            <div className="lg:col-span-2">
              <div className="card-gentle p-6">
                <h3 className="text-xl font-bold mb-4">Recent Activities</h3>
                <div className="space-y-4">
                  {recentActivities.map((activity) => {
                    const Icon = getActivityIcon(activity.type);
                    return (
                      <div key={activity.id} className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                        <Icon className="text-primary" size={20} />
                        <div className="flex-1">
                          <div className="font-medium">{activity.student}</div>
                          <div className="text-sm text-muted-foreground">{activity.action}</div>
                        </div>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <div className="card-gentle p-6">
                <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full btn-primary text-left">
                    <div className="flex items-center gap-3">
                      <AlertTriangle size={20} />
                      <div>
                        <div className="font-medium">Review High Risk Students</div>
                        <div className="text-sm opacity-80">{riskStudents.filter(s => s.riskLevel === "high").length} students need attention</div>
                      </div>
                    </div>
                  </button>
                  
                  <button className="w-full btn-outline text-left">
                    <div className="flex items-center gap-3">
                      <Calendar size={20} />
                      <div>
                        <div className="font-medium">Schedule Interventions</div>
                        <div className="text-sm text-muted-foreground">Assign counseling sessions</div>
                      </div>
                    </div>
                  </button>
                  
                  <button className="w-full btn-outline text-left">
                    <div className="flex items-center gap-3">
                      <Download size={20} />
                      <div>
                        <div className="font-medium">Generate Reports</div>
                        <div className="text-sm text-muted-foreground">Export analytics data</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedTab === "students" && (
          <div className="card-gentle p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Students at Risk</h3>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                  <input
                    type="text"
                    placeholder="Search students..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border rounded-lg w-64"
                  />
                </div>
                <button className="btn-outline flex items-center gap-2">
                  <Filter size={16} />
                  Filter
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {riskStudents.map((student) => (
                <div key={student.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{student.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{student.name}</h4>
                        <p className="text-sm text-muted-foreground">{student.class}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-1 text-xs rounded-full border ${getRiskColor(student.riskLevel)}`}>
                        {student.riskLevel} Risk ({student.riskScore}%)
                      </span>
                      <button className="p-2 hover:bg-muted rounded-lg">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">Risk Factors:</div>
                      <div className="flex gap-2">
                        {student.factors.map((factor, idx) => (
                          <span key={idx} className="px-2 py-1 bg-muted text-xs rounded">
                            {factor}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="btn-outline flex items-center gap-1">
                        <Eye size={14} />
                        View
                      </button>
                      <button className="btn-primary flex items-center gap-1">
                        <MessageSquare size={14} />
                        Intervene
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === "analytics" && (
          <div className="card-gentle p-6">
            <h3 className="text-xl font-bold mb-4">Analytics Dashboard</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-lg p-6 text-center">
                <TrendingUp className="mx-auto mb-4 text-primary" size={64} />
                <h4 className="text-lg font-semibold mb-2">Dropout Prediction Chart</h4>
                <p className="text-muted-foreground">Visual representation of risk trends</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-6 text-center">
                <Users className="mx-auto mb-4 text-secondary" size={64} />
                <h4 className="text-lg font-semibold mb-2">Intervention Success Rate</h4>
                <p className="text-muted-foreground">Track counseling effectiveness</p>
              </div>
            </div>
          </div>
        )}

        {selectedTab === "counselors" && (
          <div className="card-gentle p-6">
            <h3 className="text-xl font-bold mb-4">Counselor Management</h3>
            <div className="text-center py-12">
              <MessageSquare className="mx-auto mb-4 text-muted-foreground" size={64} />
              <h4 className="text-lg font-semibold mb-2">Counselor Dashboard</h4>
              <p className="text-muted-foreground">Manage counselor assignments and schedules</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPanel;
