import { useState } from "react";
import { ArrowLeft, Star, Calendar, Clock, Award, BookOpen, MessageCircle, Video, Phone } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { DropShieldLogo } from "@/components/DropShieldLogo";
import { Button } from "@/components/ui/button";

const CounselorProfile = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const counselorId = searchParams.get('id') || '1';
  const [activeTab, setActiveTab] = useState('overview');

  const counselors = {
    "1": {
      name: "Dr. Himanshu Pal",
      title: "Licensed Clinical Psychologist",
      specialization: "Academic Counseling & Student Wellness",
      experience: "8 years",
      rating: 4.8,
      totalSessions: 1247,
      languages: ["English", "Hindi", "Tamil"],
      education: [
        "Ph.D. in Clinical Psychology - AIIMS, New Delhi",
        "M.A. in Psychology - Delhi University",
        "B.A. in Psychology - St. Stephen's College"
      ],
      certifications: [
        "Licensed Clinical Psychologist (RCI)",
        "Certified Academic Counselor (IACC)",
        "Trauma-Informed Care Specialist"
      ],
      bio: "Dr. Himanshu Pal is a dedicated clinical psychologist with over 8 years of experience in student counseling and academic support. He specializes in helping students overcome academic challenges, manage stress, and develop healthy coping mechanisms. His approach combines cognitive-behavioral therapy with mindfulness techniques tailored specifically for the academic environment.",
      expertise: [
        "Academic Performance Enhancement",
        "Stress & Anxiety Management", 
        "Study Skills Development",
        "Career Guidance & Planning",
        "Self-Confidence Building",
        "Time Management Strategies"
      ],
      availability: {
        monday: ["9:00 AM - 12:00 PM", "2:00 PM - 6:00 PM"],
        tuesday: ["10:00 AM - 1:00 PM", "3:00 PM - 7:00 PM"],
        wednesday: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"],
        thursday: ["10:00 AM - 1:00 PM", "3:00 PM - 7:00 PM"],
        friday: ["9:00 AM - 12:00 PM", "2:00 PM - 6:00 PM"],
        saturday: ["10:00 AM - 2:00 PM"],
        sunday: ["Unavailable"]
      },
      sessionTypes: [
        { type: "Individual Session", duration: "45 min", price: "₹500" },
        { type: "Video Consultation", duration: "30-45 min", price: "₹400" },
        { type: "Group Therapy", duration: "60 min", price: "₹300" }
      ],
      reviews: [
        {
          id: 1,
          student: "Soumya G.",
          rating: 5,
          comment: "Dr. Pal helped me overcome my exam anxiety completely. His techniques are very practical and effective.",
          date: "2 weeks ago"
        },
        {
          id: 2,
          student: "Meet G.",
          rating: 5,
          comment: "Excellent counselor! He understood my academic struggles and provided personalized solutions.",
          date: "1 month ago"
        },
        {
          id: 3,
          student: "Khushi M.",
          rating: 4,
          comment: "Very patient and understanding. Helped me develop better study habits and confidence.",
          date: "1 month ago"
        }
      ],
      achievements: [
        "Best Student Counselor Award 2023",
        "Published 15+ research papers on student psychology",
        "Featured speaker at National Education Conference",
        "Helped 500+ students improve academic performance"
      ]
    },
    "2": {
      name: "Dr. Preksha Thakkar",
      title: "Licensed Clinical Psychologist",
      specialization: "Academic Counseling & Student Wellness",
      experience: "8 years",
      rating: 4.8,
      totalSessions: 1247,
      languages: ["English", "Hindi", "Tamil"],
      education: [
        "Ph.D. in Clinical Psychology - AIIMS, New Delhi",
        "M.A. in Psychology - Delhi University",
        "B.A. in Psychology - St. Stephen's College"
      ],
      certifications: [
        "Licensed Clinical Psychologist (RCI)",
        "Certified Academic Counselor (IACC)",
        "Trauma-Informed Care Specialist"
      ],
      bio: "Dr. Preksha Thakkar is a dedicated clinical psychologist with over 8 years of experience in student counseling and academic support. He specializes in helping students overcome academic challenges, manage stress, and develop healthy coping mechanisms. His approach combines cognitive-behavioral therapy with mindfulness techniques tailored specifically for the academic environment.",
      expertise: [
        "Academic Performance Enhancement",
        "Stress & Anxiety Management", 
        "Study Skills Development",
        "Career Guidance & Planning",
        "Self-Confidence Building",
        "Time Management Strategies"
      ],
      availability: {
        monday: ["9:00 AM - 12:00 PM", "2:00 PM - 6:00 PM"],
        tuesday: ["10:00 AM - 1:00 PM", "3:00 PM - 7:00 PM"],
        wednesday: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"],
        thursday: ["10:00 AM - 1:00 PM", "3:00 PM - 7:00 PM"],
        friday: ["9:00 AM - 12:00 PM", "2:00 PM - 6:00 PM"],
        saturday: ["10:00 AM - 2:00 PM"],
        sunday: ["Unavailable"]
      },
      sessionTypes: [
        { type: "Individual Session", duration: "45 min", price: "₹500" },
        { type: "Video Consultation", duration: "30-45 min", price: "₹400" },
        { type: "Group Therapy", duration: "60 min", price: "₹300" }
      ],
      reviews: [
        {
          id: 1,
          student: "Kanchi M.",
          rating: 5,
          comment: "Dr. Thakkar helped me overcome my exam anxiety completely. His techniques are very practical and effective.",
          date: "2 weeks ago"
        },
        {
          id: 2,
          student: "Prachi J.",
          rating: 5,
          comment: "Excellent counselor! He understood my academic struggles and provided personalized solutions.",
          date: "1 month ago"
        },
        {
          id: 3,
          student: "Namrata P.",
          rating: 4,
          comment: "Very patient and understanding. Helped me develop better study habits and confidence.",
          date: "1 month ago"
        }
      ],
      achievements: [
        "Best Student Counselor Award 2023",
        "Published 15+ research papers on student psychology",
        "Featured speaker at National Education Conference",
        "Helped 500+ students improve academic performance"
      ]
    },
    "3": {
      name: "Dr. Sita Maheshwari",
      title: "Licensed Clinical Psychologist",
      specialization: "Academic Counseling & Student Wellness",
      experience: "8 years",
      rating: 4.8,
      totalSessions: 1247,
      languages: ["English", "Hindi", "Tamil"],
      education: [
        "Ph.D. in Clinical Psychology - AIIMS, New Delhi",
        "M.A. in Psychology - Delhi University",
        "B.A. in Psychology - St. Stephen's College"
      ],
      certifications: [
        "Licensed Clinical Psychologist (RCI)",
        "Certified Academic Counselor (IACC)",
        "Trauma-Informed Care Specialist"
      ],
      bio: "Dr. Sita Maheshwari is a dedicated clinical psychologist with over 8 years of experience in student counseling and academic support. He specializes in helping students overcome academic challenges, manage stress, and develop healthy coping mechanisms. His approach combines cognitive-behavioral therapy with mindfulness techniques tailored specifically for the academic environment.",
      expertise: [
        "Academic Performance Enhancement",
        "Stress & Anxiety Management", 
        "Study Skills Development",
        "Career Guidance & Planning",
        "Self-Confidence Building",
        "Time Management Strategies"
      ],
      availability: {
        monday: ["9:00 AM - 12:00 PM", "2:00 PM - 6:00 PM"],
        tuesday: ["10:00 AM - 1:00 PM", "3:00 PM - 7:00 PM"],
        wednesday: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"],
        thursday: ["10:00 AM - 1:00 PM", "3:00 PM - 7:00 PM"],
        friday: ["9:00 AM - 12:00 PM", "2:00 PM - 6:00 PM"],
        saturday: ["10:00 AM - 2:00 PM"],
        sunday: ["Unavailable"]
      },
      sessionTypes: [
        { type: "Individual Session", duration: "45 min", price: "₹500" },
        { type: "Video Consultation", duration: "30-45 min", price: "₹400" },
        { type: "Group Therapy", duration: "60 min", price: "₹300" }
      ],
      reviews: [
        {
          id: 1,
          student: "Mitanshu C.",
          rating: 5,
          comment: "Dr. Maheshwari helped me overcome my exam anxiety completely. His techniques are very practical and effective.",
          date: "2 weeks ago"
        },
        {
          id: 2,
          student: "Het S.",
          rating: 5,
          comment: "Excellent counselor! He understood my academic struggles and provided personalized solutions.",
          date: "1 month ago"
        },
        {
          id: 3,
          student: "Kripa J.",
          rating: 4,
          comment: "Very patient and understanding. Helped me develop better study habits and confidence.",
          date: "1 month ago"
        }
      ],
      achievements: [
        "Best Student Counselor Award 2023",
        "Published 15+ research papers on student psychology",
        "Featured speaker at National Education Conference",
        "Helped 500+ students improve academic performance"
      ]
    }
  };

  const counselor = counselors[counselorId as keyof typeof counselors];

  if (!counselor) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Counselor Not Found</h2>
          <Button onClick={() => navigate('/wellness')}>
            Back to Wellness Center
          </Button>
        </div>
      </div>
    );
  }

  const handleScheduleSession = () => {
    navigate(`/schedule-session?counselor=${counselorId}`);
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'availability', label: 'Availability' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'achievements', label: 'Achievements' }
  ];

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

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Profile Header */}
        <div className="card-gentle p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {counselor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2">{counselor.name}</h1>
                  <p className="text-lg text-muted-foreground mb-2">{counselor.title}</p>
                  <p className="text-primary font-medium mb-4">{counselor.specialization}</p>
                  
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-500" size={16} />
                      <span className="font-medium">{counselor.rating}</span>
                      <span className="text-muted-foreground">({counselor.totalSessions} sessions)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="text-secondary" size={16} />
                      <span>{counselor.experience} experience</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Languages:</h4>
                    <div className="flex gap-2">
                      {counselor.languages.map((lang) => (
                        <span key={lang} className="px-2 py-1 bg-muted/50 rounded text-sm">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button 
                onClick={handleScheduleSession}
                className="w-full btn-primary"
              >
                <Calendar size={16} />
                Schedule Session
              </Button>
              
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" size="sm" className="flex flex-col p-3 h-auto">
                  <MessageCircle size={20} className="mb-1" />
                  <span className="text-xs">Chat</span>
                </Button>
                <Button variant="outline" size="sm" className="flex flex-col p-3 h-auto">
                  <Video size={20} className="mb-1" />
                  <span className="text-xs">Video</span>
                </Button>
                <Button variant="outline" size="sm" className="flex flex-col p-3 h-auto">
                  <Phone size={20} className="mb-1" />
                  <span className="text-xs">Call</span>
                </Button>
              </div>

              {/* Session Types */}
              <div className="card-gentle p-4">
                <h4 className="font-medium mb-3">Session Options</h4>
                <div className="space-y-2">
                  {counselor.sessionTypes.map((session, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                      <div>
                        <div className="font-medium text-sm">{session.type}</div>
                        <div className="text-xs text-muted-foreground">{session.duration}</div>
                      </div>
                      <div className="font-medium text-primary">{session.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="card-gentle p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Bio */}
              <div>
                <h3 className="text-xl font-bold mb-4">About Dr. Pal</h3>
                <p className="text-muted-foreground leading-relaxed">{counselor.bio}</p>
              </div>

              {/* Expertise */}
              <div>
                <h3 className="text-xl font-bold mb-4">Areas of Expertise</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {counselor.expertise.map((area, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
                      <BookOpen className="text-primary" size={16} />
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <div className="space-y-3">
                  {counselor.education.map((edu, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">{edu}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xl font-bold mb-4">Certifications</h3>
                <div className="space-y-3">
                  {counselor.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="text-secondary mt-1" size={16} />
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'availability' && (
            <div>
              <h3 className="text-xl font-bold mb-6">Weekly Availability</h3>
              <div className="space-y-4">
                {Object.entries(counselor.availability).map(([day, slots]) => (
                  <div key={day} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="w-20 font-medium capitalize">{day}</div>
                    <div className="flex-1">
                      {Array.isArray(slots) && slots[0] !== "Unavailable" ? (
                        <div className="flex gap-2 flex-wrap">
                          {slots.map((slot, index) => (
                            <span key={index} className="px-3 py-1 bg-secondary/20 text-secondary rounded text-sm">
                              {slot}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-muted-foreground">Unavailable</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <h3 className="text-xl font-bold mb-6">Student Reviews</h3>
              <div className="space-y-6">
                {counselor.reviews.map((review) => (
                  <div key={review.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-accent to-accent-light rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {review.student[0]}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium">{review.student}</div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={i < review.rating ? "text-yellow-500 fill-current" : "text-muted-foreground"}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div>
              <h3 className="text-xl font-bold mb-6">Achievements & Recognition</h3>
              <div className="space-y-4">
                {counselor.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-accent/5 to-secondary/5 rounded-lg">
                    <Award className="text-accent mt-1" size={20} />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CounselorProfile;
