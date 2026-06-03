import { useState } from "react";
import { ArrowLeft, Calendar, Clock, Video, MessageCircle, Users, User, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DropShieldLogo } from "@/components/DropShieldLogo";
import { Button } from "@/components/ui/button";

const ScheduleSession = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [sessionData, setSessionData] = useState({
    type: "",
    counselor: "",
    date: "",
    time: "",
    concern: "",
    urgency: "normal"
  });

  const sessionTypes = [
    {
      id: "individual",
      name: "Individual Counseling",
      description: "One-on-one session with a professional counselor",
      icon: User,
      duration: "45 minutes",
      availability: "Most Available"
    },
    {
      id: "video",
      name: "Video Consultation",
      description: "Online video session for remote counseling",
      icon: Video,
      duration: "30-45 minutes", 
      availability: "Available"
    },
    {
      id: "group",
      name: "Group Therapy",
      description: "Participate in a supportive group environment",
      icon: Users,
      duration: "60 minutes",
      availability: "Limited Slots"
    },
    {
      id: "chat",
      name: "Text-Based Chat",
      description: "Real-time text conversation with counselor",
      icon: MessageCircle,
      duration: "30 minutes",
      availability: "Most Available"
    }
  ];

  const counselors = [
    {
      id: "1",
      name: "Dr. Himanshu Pal",
      specialization: "Academic Counseling",
      experience: "8 years",
      rating: 4.8,
      availability: "Available",
      nextSlot: "Today, 3:00 PM"
    },
    {
      id: "2", 
      name: "Ms. Preksha Thakkar",
      specialization: "Career Guidance",
      experience: "6 years",
      rating: 4.9,
      availability: "Available",
      nextSlot: "Tomorrow, 10:00 AM"
    },
    {
      id: "3",
      name: "Dr. Soumya Gupta",
      specialization: "Mental Health",
      experience: "10 years",
      rating: 4.7,
      availability: "Busy",
      nextSlot: "Next Week"
    },
    {
      id: "4",
      name: "Mr. Vikram Patel",
      specialization: "Stress Management",
      experience: "5 years",
      rating: 4.6,
      availability: "Available",
      nextSlot: "Today, 5:00 PM"
    }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const concerns = [
    "Academic Performance",
    "Stress Management", 
    "Career Guidance",
    "Mental Health Support",
    "Time Management",
    "Social Anxiety",
    "Family Issues",
    "Other"
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Simulate booking success
    alert("Session scheduled successfully! You will receive a confirmation email shortly.");
    navigate('/');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Choose Session Type</h2>
              <p className="text-muted-foreground">Select the type of counseling session that best fits your needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sessionTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSessionData({ ...sessionData, type: type.id })}
                    className={`p-6 rounded-lg border-2 transition-all text-left ${
                      sessionData.type === type.id
                        ? "border-primary bg-primary/5"
                        : "border-muted hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${
                        sessionData.type === type.id
                          ? "bg-primary text-white"
                          : "bg-muted/50"
                      }`}>
                        <Icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{type.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                        <div className="flex justify-between text-xs">
                          <span className="text-primary">{type.duration}</span>
                          <span className={`${
                            type.availability === "Most Available" 
                              ? "text-secondary" 
                              : type.availability === "Limited Slots"
                              ? "text-amber-500"
                              : "text-muted-foreground"
                          }`}>
                            {type.availability}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Select Counselor</h2>
              <p className="text-muted-foreground">Choose a counselor who specializes in your area of concern</p>
            </div>

            <div className="space-y-4">
              {counselors.map((counselor) => (
                <button
                  key={counselor.id}
                  onClick={() => setSessionData({ ...sessionData, counselor: counselor.id })}
                  className={`w-full p-6 rounded-lg border-2 transition-all text-left ${
                    sessionData.counselor === counselor.id
                      ? "border-primary bg-primary/5"
                      : "border-muted hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">
                        {counselor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{counselor.name}</h3>
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                          counselor.availability === "Available"
                            ? "bg-secondary/20 text-secondary"
                            : "bg-muted text-muted-foreground"
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                            counselor.availability === "Available" ? "bg-secondary" : "bg-muted-foreground"
                          }`} />
                          {counselor.availability}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{counselor.specialization}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span>{counselor.experience} experience</span>
                        <span>⭐ {counselor.rating}</span>
                        <span className="text-primary">Next: {counselor.nextSlot}</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Choose Date & Time</h2>
              <p className="text-muted-foreground">Select your preferred date and time for the session</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Date Selection */}
              <div>
                <h3 className="font-semibold mb-4">Select Date</h3>
                <div className="space-y-2">
                  {["Today", "Tomorrow", "Day After Tomorrow"].map((day, index) => (
                    <button
                      key={day}
                      onClick={() => setSessionData({ ...sessionData, date: day })}
                      className={`w-full p-3 rounded-lg border text-left transition-all ${
                        sessionData.date === day
                          ? "border-primary bg-primary/5"
                          : "border-muted hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Calendar size={20} className={sessionData.date === day ? "text-primary" : "text-muted-foreground"} />
                        <div>
                          <div className="font-medium">{day}</div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(Date.now() + index * 24 * 60 * 60 * 1000).toDateString()}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <h3 className="font-semibold mb-4">Select Time</h3>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSessionData({ ...sessionData, time })}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        sessionData.time === time
                          ? "border-primary bg-primary text-white"
                          : "border-muted hover:border-primary/50"
                      }`}
                    >
                      <Clock size={16} className="mx-auto mb-1" />
                      <div className="text-sm">{time}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Session Details</h2>
              <p className="text-muted-foreground">Provide additional information about your concerns</p>
            </div>

            <div className="space-y-6">
              {/* Concern Category */}
              <div>
                <label className="block font-semibold mb-3">Main Concern</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {concerns.map((concern) => (
                    <button
                      key={concern}
                      onClick={() => setSessionData({ ...sessionData, concern })}
                      className={`p-3 rounded-lg border text-sm transition-all ${
                        sessionData.concern === concern
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-muted hover:border-primary/50"
                      }`}
                    >
                      {concern}
                    </button>
                  ))}
                </div>
              </div>

              {/* Urgency Level */}
              <div>
                <label className="block font-semibold mb-3">Urgency Level</label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: "low", label: "Low", description: "Can wait a week", color: "secondary" },
                    { id: "normal", label: "Normal", description: "Within a few days", color: "primary" },
                    { id: "high", label: "High", description: "Need soon", color: "accent" }
                  ].map((urgency) => (
                    <button
                      key={urgency.id}
                      onClick={() => setSessionData({ ...sessionData, urgency: urgency.id })}
                      className={`p-4 rounded-lg border-2 text-center transition-all ${
                        sessionData.urgency === urgency.id
                          ? `border-${urgency.color} bg-${urgency.color}/5`
                          : "border-muted hover:border-primary/50"
                      }`}
                    >
                      <div className="font-medium">{urgency.label}</div>
                      <div className="text-sm text-muted-foreground">{urgency.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block font-semibold mb-3">Additional Notes (Optional)</label>
                <textarea
                  className="w-full p-3 border rounded-lg h-24 resize-none"
                  placeholder="Share any specific details or questions you'd like to discuss..."
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <DropShieldLogo size="md" />
            <button 
              onClick={() => navigate('/wellness')}
              className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Wellness
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Schedule Counseling Session
            </h1>
            <div className="text-sm text-muted-foreground">
              Step {step} of 4
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  stepNum < step 
                    ? "bg-secondary text-white" 
                    : stepNum === step
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {stepNum < step ? <CheckCircle size={16} /> : stepNum}
                </div>
                {stepNum < 4 && (
                  <div className={`w-12 h-1 rounded ${
                    stepNum < step ? "bg-secondary" : "bg-muted"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="card-gentle p-8 mb-8">
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            onClick={handleBack}
            variant="outline"
            disabled={step === 1}
            className={step === 1 ? "invisible" : ""}
          >
            Previous
          </Button>
          
          <Button
            onClick={step === 4 ? handleSubmit : handleNext}
            className="btn-primary"
            disabled={
              (step === 1 && !sessionData.type) ||
              (step === 2 && !sessionData.counselor) ||
              (step === 3 && (!sessionData.date || !sessionData.time)) ||
              (step === 4 && !sessionData.concern)
            }
          >
            {step === 4 ? "Schedule Session" : "Next"}
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ScheduleSession;
