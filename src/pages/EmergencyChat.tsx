import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Send, Phone, MessageCircle, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DropShieldLogo } from "@/components/DropShieldLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  text: string;
  sender: "user" | "counselor";
  timestamp: Date;
}

const EmergencyChat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm here to help you through this difficult time. You're safe here, and everything we discuss is confidential. How are you feeling right now?",
      sender: "counselor",
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isConnected, setIsConnected] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const counselorResponses = [
    "I understand this is a difficult time for you. Can you tell me more about what's happening?",
    "Thank you for sharing that with me. Your feelings are completely valid.",
    "It takes courage to reach out. I'm proud of you for taking this step.",
    "Let's work through this together. What would feel most helpful right now?",
    "Remember, you're not alone in this. There are people who care about you.",
    "That sounds really challenging. How long have you been feeling this way?",
    "I hear you. Sometimes it helps to talk about what's causing these feelings.",
    "Your safety is my priority. Are you in a safe place right now?",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage.trim(),
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");

    // Simulate counselor response
    setTimeout(() => {
      const counselorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: counselorResponses[Math.floor(Math.random() * counselorResponses.length)],
        sender: "counselor",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, counselorMessage]);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-white shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <DropShieldLogo size="md" />
            <button 
              onClick={() => navigate('/wellness')}
              className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Back to Wellness</span>
            </button>
          </div>
        </div>
      </header>

      {/* Emergency Banner */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 border-b border-red-200 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="text-red-500 flex-shrink-0" size={20} />
            <h1 className="text-lg font-bold text-red-700">Emergency Support Chat</h1>
            <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
          </div>
          <p className="text-red-600 text-sm">
            Connected to emergency counselor • Response time: &lt; 2 minutes • Available 24/7
          </p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-6 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs sm:max-w-md lg:max-w-lg px-4 py-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground border'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t pt-4">
          <div className="flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here... (Press Enter to send)"
              className="flex-1"
              disabled={!isConnected}
            />
            <Button 
              onClick={sendMessage} 
              disabled={!newMessage.trim() || !isConnected}
              className="px-4"
            >
              <Send size={16} />
            </Button>
          </div>
          
          {/* Emergency Actions */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
            <Button 
              variant="outline" 
              size="sm"
              className="text-red-600 border-red-200 hover:bg-red-50"
            >
              <Phone size={14} />
              Call Crisis Hotline
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setNewMessage("I need immediate help")}
            >
              <AlertTriangle size={14} />
              I need immediate help
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setNewMessage("Can we schedule a video call?")}
            >
              <MessageCircle size={14} />
              Request video call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyChat;
