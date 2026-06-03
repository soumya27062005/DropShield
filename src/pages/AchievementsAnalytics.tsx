import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DropShieldLogo } from "@/components/DropShieldLogo";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AchievementsAnalytics = () => {
  const navigate = useNavigate();

  const categoryData = [
    { name: 'Academic', value: 45, color: '#3B82F6' },
    { name: 'Attendance', value: 25, color: '#10B981' },
    { name: 'Social', value: 20, color: '#F59E0B' },
    { name: 'Wellness', value: 10, color: '#EF4444' }
  ];

  const monthlyProgress = [
    { month: 'Jan', achievements: 2, points: 175 },
    { month: 'Feb', achievements: 3, points: 225 },
    { month: 'Mar', achievements: 4, points: 325 },
    { month: 'Apr', achievements: 2, points: 150 },
    { month: 'May', achievements: 5, points: 400 },
    { month: 'Jun', achievements: 3, points: 275 }
  ];

  const comparisonData = [
    { category: 'Academic Excellence', you: 85, average: 70 },
    { category: 'Attendance', you: 90, average: 75 },
    { category: 'Social Participation', you: 75, average: 65 },
    { category: 'Wellness Activities', you: 60, average: 55 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <DropShieldLogo size="md" />
            <button 
              onClick={() => navigate('/achievements')}
              className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Achievements
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Achievement Analytics
          </h1>
          <p className="text-muted-foreground">Detailed insights into your achievement progress and performance</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Achievement Categories Pie Chart */}
          <div className="card-gentle p-6">
            <h3 className="text-xl font-bold mb-6">Achievement Distribution by Category</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {categoryData.map((category) => (
                <div key={category.name} className="flex items-center gap-2">
                  <div 
                    className="w-4 h-4 rounded" 
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="text-sm">{category.name}: {category.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Progress Bar Chart */}
          <div className="card-gentle p-6">
            <h3 className="text-xl font-bold mb-6">Monthly Achievement Progress</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="achievements" fill="#3B82F6" name="Achievements Earned" />
                <Bar dataKey="points" fill="#10B981" name="Points Earned" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Performance Comparison */}
        <div className="card-gentle p-6 mb-8">
          <h3 className="text-xl font-bold mb-6">Performance vs Class Average</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={comparisonData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis type="category" dataKey="category" width={150} />
              <Tooltip />
              <Legend />
              <Bar dataKey="you" fill="#3B82F6" name="Your Performance" />
              <Bar dataKey="average" fill="#94A3B8" name="Class Average" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card-gentle p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">12</div>
            <div className="text-muted-foreground">Total Achievements</div>
            <div className="text-sm text-secondary mt-1">+3 this month</div>
          </div>
          <div className="card-gentle p-6 text-center">
            <div className="text-3xl font-bold text-secondary mb-2">1,250</div>
            <div className="text-muted-foreground">Total Points</div>
            <div className="text-sm text-secondary mt-1">+275 this month</div>
          </div>
          <div className="card-gentle p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">85%</div>
            <div className="text-muted-foreground">Completion Rate</div>
            <div className="text-sm text-secondary mt-1">Above average</div>
          </div>
          <div className="card-gentle p-6 text-center">
            <div className="text-3xl font-bold text-india-orange mb-2">#7</div>
            <div className="text-muted-foreground">Class Ranking</div>
            <div className="text-sm text-secondary mt-1">Top 15%</div>
          </div>
        </div>

        {/* Insights */}
        <div className="card-gentle p-6">
          <h3 className="text-xl font-bold mb-6">Key Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-secondary/10 to-secondary/20 rounded-lg">
                <h4 className="font-semibold text-secondary mb-2">🎯 Strength Areas</h4>
                <ul className="text-sm space-y-1">
                  <li>• Consistent attendance performance (90%)</li>
                  <li>• Strong academic achievement rate</li>
                  <li>• Regular participation in activities</li>
                </ul>
              </div>
              <div className="p-4 bg-gradient-to-r from-primary/10 to-primary/20 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">📈 Growth Trends</h4>
                <ul className="text-sm space-y-1">
                  <li>• 25% improvement in academic scores</li>
                  <li>• Increased social participation</li>
                  <li>• Steady monthly progress</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-accent/10 to-accent/20 rounded-lg">
                <h4 className="font-semibold text-accent mb-2">🎯 Improvement Areas</h4>
                <ul className="text-sm space-y-1">
                  <li>• Wellness activities participation</li>
                  <li>• Time management skills</li>
                  <li>• Stress management techniques</li>
                </ul>
              </div>
              <div className="p-4 bg-gradient-to-r from-india-orange/10 to-india-orange/20 rounded-lg">
                <h4 className="font-semibold text-india-orange mb-2">🎯 Recommendations</h4>
                <ul className="text-sm space-y-1">
                  <li>• Join wellness workshops</li>
                  <li>• Set monthly achievement goals</li>
                  <li>• Participate in group activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AchievementsAnalytics;
