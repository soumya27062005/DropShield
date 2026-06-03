import { useState } from "react";
import { Heart, Brain, MessageCircle, Phone, ArrowLeft, Video, Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DropShieldLogo } from "@/components/DropShieldLogo";

const Wellness = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const resources = [
    {
      id: 1,
      title: "Stress Management Techniques",
      description: "Learn effective ways to manage academic stress",
      type: "article",
      category: "stress",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Confidence",
      description: "Boost your self-confidence and academic performance",
      type: "video",
      category: "confidence",
      readTime: "12 min watch"
    },
    {
      id: 3,
      title: "Time Management for Students",
      description: "Balance studies and personal life effectively",
      type: "guide",
      category: "productivity",
      readTime: "8 min read"
    },
    {
      id: 4,
      title: "Dealing with Exam Anxiety",
      description: "Overcome fear and perform better in exams",
      type: "article",
      category: "anxiety",
      readTime: "6 min read"
    }
  ];

  const counselors = [
    {
      id: 1,
      name: "Dr. Himanshu Pal",
      specialization: "Academic Counseling",
      rating: 4.8,
      experience: "8 years",
      available: true
    },
    {
      id: 2,
      name: "Ms. Preksha Thakkar",
      specialization: "Career Guidance", 
      rating: 4.9,
      experience: "6 years",
      available: true
    },
    {
      id: 3,
      name: "Dr. Sita Maheshwari",
      specialization: "Mental Health",
      rating: 4.7,
      experience: "10 years",
      available: false
    }
  ];

  const categories = [
    { id: "all", name: "All Resources" },
    { id: "stress", name: "Stress Management" },
    { id: "confidence", name: "Confidence Building" },
    { id: "anxiety", name: "Anxiety Support" },
    { id: "productivity", name: "Productivity" }
  ];

  const filteredResources = selectedCategory === "all" 
    ? resources 
    : resources.filter(r => r.category === selectedCategory);

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
            Wellness Center
          </h1>
          <p className="text-muted-foreground">Your mental health and well-being matter to us</p>
        </div>

        {/* Emergency Support */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-red-500" size={24} />
            <h2 className="text-xl font-bold text-red-700">Need Immediate Support?</h2>
          </div>
          <p className="text-red-600 mb-4">If you're experiencing a mental health emergency, please reach out immediately.</p>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => window.open('tel:987-915-2484')}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Phone size={16} />
              Crisis Hotline
            </button>
            <button 
              onClick={() => navigate('/emergency-chat')}
              className="bg-white hover:bg-red-50 text-red-500 border border-red-200 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <MessageCircle size={16} />
              Emergency Chat
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card-gentle p-6 text-center">
            <Brain className="mx-auto mb-4 text-primary" size={48} />
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-muted-foreground">AI Support</div>
          </div>
          <div className="card-gentle p-6 text-center">
            <Heart className="mx-auto mb-4 text-secondary" size={48} />
            <div className="text-2xl font-bold">50+</div>
            <div className="text-muted-foreground">Resources</div>
          </div>
          <div className="card-gentle p-6 text-center">
            <MessageCircle className="mx-auto mb-4 text-accent" size={48} />
            <div className="text-2xl font-bold">15</div>
            <div className="text-muted-foreground">Counselors</div>
          </div>
          <div className="card-gentle p-6 text-center">
            <Video className="mx-auto mb-4 text-india-green" size={48} />
            <div className="text-2xl font-bold">98%</div>
            <div className="text-muted-foreground">Satisfaction</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resources Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Self-Help Resources</h2>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border rounded-lg"
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-4">
              {filteredResources.map((resource) => (
                <div key={resource.id} className="card-gentle p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg">
                      {resource.type === "video" ? (
                        <Video className="text-primary" size={24} />
                      ) : (
                        <Brain className="text-secondary" size={24} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{resource.title}</h3>
                      <p className="text-muted-foreground mb-3">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock size={14} />
                          {resource.readTime}
                        </span>
                        <button 
                          onClick={() => navigate(`/resource-viewer?type=${resource.type}&id=${resource.id}`)}
                          className="btn-primary"
                        >
                          {resource.type === "video" ? "Watch Now" : "Read Now"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Counselors Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Available Counselors</h2>
            <div className="space-y-4">
              {counselors.map((counselor) => (
                <div key={counselor.id} className="card-gentle p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{counselor.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{counselor.name}</h4>
                      <p className="text-sm text-muted-foreground">{counselor.specialization}</p>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${counselor.available ? 'bg-secondary animate-pulse' : 'bg-muted'}`}></div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm mb-3">
                    <span>⭐ {counselor.rating}</span>
                    <span>{counselor.experience}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <button 
                      onClick={() => counselor.available && navigate('/schedule-session')}
                      className={`w-full px-3 py-2 rounded-lg text-sm ${
                        counselor.available 
                          ? 'btn-primary' 
                          : 'bg-muted text-muted-foreground cursor-not-allowed'
                      }`}
                      disabled={!counselor.available}
                    >
                      {counselor.available ? 'Schedule Session' : 'Not Available'}
                    </button>
                    <button 
                      onClick={() => navigate(`/counselor-profile?id=${counselor.id}`)}
                      className="w-full px-3 py-2 border border-primary text-primary rounded-lg text-sm hover:bg-primary/10 transition-colors"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Chat */}
            <div className="mt-6 card-gentle p-4">
              <div className="flex items-center gap-3 mb-3">
                <Brain className="text-accent" size={24} />
                <div>
                  <h4 className="font-semibold">AI Wellness Assistant</h4>
                  <p className="text-sm text-muted-foreground">Available 24/7</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCategory("chatbot")}
                className="w-full btn-motivation"
              >
                Start Conversation
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wellness;
