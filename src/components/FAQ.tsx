import { useState } from "react";
import { ChevronDown, ChevronUp, Search, HelpCircle, BookOpen, Users, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  keywords: string[];
}

interface FAQProps {
  className?: string;
}

export const FAQ = ({ className = "" }: FAQProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqData: FAQItem[] = [
    {
      id: "1",
      category: "academics",
      question: "How do I access my study materials?",
      answer: "You can access your study materials by clicking on the 'Study Materials' section in your dashboard. All course-specific resources, including notes, videos, and practice tests, are organized by subject.",
      keywords: ["study", "materials", "resources", "access", "dashboard"]
    },
    {
      id: "2",
      category: "counseling",
      question: "How do I schedule a counseling session?",
      answer: "To schedule a counseling session, go to the Wellness Center and browse available counselors. Click 'Schedule Session' next to your preferred counselor. You can choose from available time slots and session types.",
      keywords: ["counseling", "schedule", "appointment", "session"]
    },
    {
      id: "3",
      category: "support",
      question: "What should I do in case of a mental health emergency?",
      answer: "In case of a mental health emergency, immediately use the Crisis Hotline button in the Wellness Center or start an Emergency Chat. These services are available 24/7. You can also call our emergency helpline at +91-8-XXX-XXXX.",
      keywords: ["emergency", "crisis", "mental health", "hotline", "urgent"]
    },
    {
      id: "4",
      category: "academics",
      question: "How is my dropout risk calculated?",
      answer: "Your dropout risk is calculated using multiple factors including attendance rates, academic performance, assignment submissions, engagement levels, and behavioral patterns. The AI system analyzes these data points to provide early intervention recommendations.",
      keywords: ["dropout", "risk", "calculation", "algorithm", "prediction"]
    },
    {
      id: "5",
      category: "achievements",
      question: "How do I earn achievements and badges?",
      answer: "Achievements are earned by completing various activities such as maintaining good attendance, submitting assignments on time, participating in counseling sessions, and reaching study goals. Check your Achievements page to see available badges and your progress.",
      keywords: ["achievements", "badges", "earn", "rewards", "progress"]
    },
    {
      id: "6",
      category: "support",
      question: "Is my personal information secure?",
      answer: "Yes, we take your privacy seriously. All personal information is encrypted and stored securely. Only authorized counselors and administrators have access to your data, and it's used solely for providing better support and educational services.",
      keywords: ["privacy", "security", "data", "confidential", "information"]
    },
    {
      id: "7",
      category: "counseling",
      question: "What types of counseling services are available?",
      answer: "We offer various counseling services including academic counseling, career guidance, mental health support, stress management, and crisis intervention. Both individual and group sessions are available, along with 24/7 AI-powered support.",
      keywords: ["counseling", "types", "services", "mental health", "academic"]
    },
    {
      id: "8",
      category: "academics",
      question: "How can I track my academic progress?",
      answer: "Your academic progress is tracked through the dashboard where you can see your CGPA, attendance rates, assignment submissions, and course-wise performance. Progress charts and analytics help visualize your academic journey.",
      keywords: ["progress", "tracking", "academic", "performance", "dashboard"]
    },
    {
      id: "9",
      category: "support",
      question: "How do I contact technical support?",
      answer: "For technical issues, you can use the chatbot on the bottom right of the screen, email support@dropshield.edu, or call our technical helpline during business hours. We also have a comprehensive help center with troubleshooting guides.",
      keywords: ["technical", "support", "help", "contact", "issues"]
    },
    {
      id: "10",
      category: "achievements",
      question: "Can I see detailed analytics of my achievements?",
      answer: "Yes! Click on 'View Detailed Analytics' in the Achievements section to see comprehensive charts and graphs showing your progress over time, including pie charts of achievement categories and bar graphs of monthly progress.",
      keywords: ["analytics", "detailed", "charts", "graphs", "achievements"]
    }
  ];

  const categories = [
    { id: "all", name: "All Categories", icon: HelpCircle },
    { id: "academics", name: "Academics", icon: BookOpen },
    { id: "counseling", name: "Counseling", icon: Users },
    { id: "support", name: "Support", icon: Phone },
    { id: "achievements", name: "Achievements", icon: Users }
  ];

  const filteredFAQs = faqData.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground mb-6">
          Find quick answers to common questions about DropShield services
        </p>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                <Icon size={16} />
                {category.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFAQs.length === 0 ? (
          <div className="card-gentle p-8 text-center">
            <HelpCircle size={48} className="mx-auto mb-4 text-muted-foreground/50" />
            <h3 className="text-lg font-semibold mb-2">No FAQs found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        ) : (
          filteredFAQs.map((item) => {
            const isOpen = openItems.includes(item.id);
            return (
              <div key={item.id} className="card-gentle overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors"
                >
                  <div className="flex-1 pr-4">
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.question}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full capitalize ${
                      item.category === 'academics' 
                        ? 'bg-blue-100 text-blue-700'
                        : item.category === 'counseling'
                        ? 'bg-primary/10 text-primary'
                        : item.category === 'support'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-secondary/10 text-secondary'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="text-muted-foreground flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-muted-foreground flex-shrink-0" size={20} />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Contact Support */}
      <div className="mt-8 card-gentle p-6 text-center">
        <h3 className="font-semibold mb-2">Still need help?</h3>
        <p className="text-muted-foreground mb-4">
          Can't find what you're looking for? Our support team is here to help.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button className="btn-primary">
            <Phone size={16} />
            Contact Support
          </button>
          <button className="btn-outline">
            <Users size={16} />
            Schedule Counseling
          </button>
        </div>
      </div>
    </div>
  );
};
