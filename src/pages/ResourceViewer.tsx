import { useState, useEffect } from "react";
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Maximize2, BookOpen, Clock, Star, Share2 } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { DropShieldLogo } from "@/components/DropShieldLogo";

const ResourceViewer = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const resourceType = searchParams.get('type') || 'video';
  const resourceId = searchParams.get('id') || '1';
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [readingProgress, setReadingProgress] = useState(0);

  const resources = {
    video: {
      "1": {
        title: "Building Confidence: A Student's Guide",
        description: "Learn practical techniques to boost your self-confidence and overcome academic challenges",
        duration: "12:34",
        instructor: "Dr. Anita Gupta",
        rating: 4.8,
        views: 1247,
        thumbnail: "/api/placeholder/800/450",
        videoUrl: "/api/placeholder/800/450", // Would be actual video URL
        transcript: `
          Welcome to this comprehensive guide on building confidence as a student...
          
          In this session, we'll explore:
          1. Understanding the root causes of low confidence
          2. Practical daily exercises to boost self-esteem
          3. Overcoming fear of failure in academic settings
          4. Building a positive mindset for success
          
          Let's begin with understanding what confidence really means...
        `,
        chapters: [
          { title: "Introduction", time: "0:00" },
          { title: "Understanding Confidence", time: "2:15" },
          { title: "Practical Exercises", time: "5:30" },
          { title: "Overcoming Fear", time: "8:45" },
          { title: "Building Positive Mindset", time: "11:00" }
        ]
      }
    },
    article: {
      "1": {
        title: "Stress Management Techniques for Students",
        description: "Effective strategies to manage academic stress and maintain mental well-being",
        readTime: "5 min read",
        author: "Dr. Himanshu Pal",
        rating: 4.9,
        views: 2156,
        content: `
          <h2>Understanding Academic Stress</h2>
          <p>Academic stress is a common experience among students, characterized by feelings of pressure, anxiety, and overwhelm related to educational demands. It's important to recognize that some level of stress can be motivating, but excessive stress can be detrimental to both academic performance and mental health.</p>
          
          <h3>Common Sources of Academic Stress</h3>
          <ul>
            <li>Heavy workload and tight deadlines</li>
            <li>Fear of failure or disappointing others</li>
            <li>Competitive academic environment</li>
            <li>Financial pressures</li>
            <li>Balancing studies with other responsibilities</li>
          </ul>
          
          <h3>Effective Stress Management Techniques</h3>
          
          <h4>1. Time Management</h4>
          <p>Proper time management is crucial for reducing academic stress. Create a realistic study schedule that includes:</p>
          <ul>
            <li>Breaking large tasks into smaller, manageable chunks</li>
            <li>Setting specific, achievable goals</li>
            <li>Using tools like calendars and to-do lists</li>
            <li>Prioritizing tasks based on importance and deadlines</li>
          </ul>
          
          <h4>2. Relaxation Techniques</h4>
          <p>Incorporate relaxation practices into your daily routine:</p>
          <ul>
            <li><strong>Deep Breathing:</strong> Practice 4-7-8 breathing (inhale for 4, hold for 7, exhale for 8)</li>
            <li><strong>Progressive Muscle Relaxation:</strong> Tense and release different muscle groups</li>
            <li><strong>Meditation:</strong> Even 10 minutes daily can significantly reduce stress</li>
            <li><strong>Mindfulness:</strong> Stay present and avoid worrying about future events</li>
          </ul>
          
          <h4>3. Physical Wellness</h4>
          <p>Your physical health directly impacts your ability to handle stress:</p>
          <ul>
            <li>Regular exercise (even a 20-minute walk helps)</li>
            <li>Adequate sleep (7-9 hours per night)</li>
            <li>Balanced nutrition</li>
            <li>Limiting caffeine and avoiding alcohol</li>
          </ul>
          
          <h4>4. Social Support</h4>
          <p>Don't isolate yourself when feeling stressed:</p>
          <ul>
            <li>Talk to friends, family, or counselors</li>
            <li>Join study groups or student organizations</li>
            <li>Seek help from professors or academic advisors</li>
            <li>Consider professional counseling if needed</li>
          </ul>
          
          <h3>Creating a Stress-Reduction Plan</h3>
          <p>Develop a personalized approach to managing stress:</p>
          <ol>
            <li>Identify your specific stress triggers</li>
            <li>Choose 2-3 techniques that work best for you</li>
            <li>Practice these techniques regularly, not just during stressful times</li>
            <li>Monitor your stress levels and adjust your approach as needed</li>
            <li>Remember that seeking help is a sign of strength, not weakness</li>
          </ol>
          
          <h3>When to Seek Professional Help</h3>
          <p>Consider reaching out to a counselor or mental health professional if you experience:</p>
          <ul>
            <li>Persistent anxiety or depression</li>
            <li>Difficulty sleeping or eating</li>
            <li>Substance abuse as a coping mechanism</li>
            <li>Thoughts of self-harm</li>
            <li>Inability to function in daily activities</li>
          </ul>
          
          <h3>Conclusion</h3>
          <p>Remember that managing stress is a skill that takes time to develop. Be patient with yourself and celebrate small victories along the way. With the right techniques and support system, you can successfully navigate academic challenges while maintaining your mental well-being.</p>
        `,
        relatedResources: [
          { title: "Time Management for Students", type: "article" },
          { title: "Mindfulness Meditation", type: "video" },
          { title: "Healthy Study Habits", type: "guide" }
        ]
      }
    }
  };

  const currentResource = resources[resourceType as keyof typeof resources]?.[resourceId];

  useEffect(() => {
    if (resourceType === 'article') {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        setReadingProgress(Math.min(scrollPercent, 100));
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [resourceType]);

  if (!currentResource) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Resource Not Found</h2>
          <button onClick={() => navigate('/wellness')} className="btn-primary">
            Back to Wellness Center
          </button>
        </div>
      </div>
    );
  }

  const handleVideoControls = (action: string) => {
    switch (action) {
      case 'play':
        setIsPlaying(!isPlaying);
        break;
      case 'mute':
        setIsMuted(!isMuted);
        break;
      default:
        break;
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

      {/* Progress Bar for Articles */}
      {resourceType === 'article' && (
        <div className="h-1 bg-muted">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      )}

      <main className="max-w-6xl mx-auto px-6 py-8">
        {resourceType === 'video' ? (
          <div className="space-y-6">
            {/* Video Player */}
            <div className="card-gentle p-4">
              <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
                <img 
                  src={currentResource.thumbnail} 
                  alt={currentResource.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleVideoControls('play')}
                      className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      {isPlaying ? <Pause className="text-white" size={24} /> : <Play className="text-white ml-1" size={24} />}
                    </button>
                  </div>
                </div>

                {/* Bottom Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center gap-4 text-white">
                    <button onClick={() => handleVideoControls('play')}>
                      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                    <div className="flex-1 h-1 bg-white/30 rounded">
                      <div 
                        className="h-full bg-white rounded"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <span className="text-sm">3:24 / {currentResource.duration}</span>
                    <button onClick={() => handleVideoControls('mute')}>
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                    <button>
                      <Maximize2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="card-gentle p-6">
                  <h1 className="text-2xl font-bold mb-2">{currentResource.title}</h1>
                  <p className="text-muted-foreground mb-4">{currentResource.description}</p>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {currentResource.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-500" />
                      {currentResource.rating}
                    </div>
                    <div>{currentResource.views} views</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {currentResource.instructor.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">{currentResource.instructor}</div>
                        <div className="text-sm text-muted-foreground">Mental Health Counselor</div>
                      </div>
                    </div>
                    
                    <button className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                      <Share2 size={16} />
                      Share
                    </button>
                  </div>
                </div>

                {/* Transcript */}
                <div className="card-gentle p-6">
                  <h3 className="text-lg font-bold mb-4">Transcript</h3>
                  <div className="text-sm space-y-3 text-muted-foreground whitespace-pre-line">
                    {currentResource.transcript}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Chapters */}
                <div className="card-gentle p-4">
                  <h3 className="font-bold mb-4">Chapters</h3>
                  <div className="space-y-2">
                    {currentResource.chapters.map((chapter, index) => (
                      <button
                        key={index}
                        className="w-full text-left p-2 hover:bg-muted/50 rounded text-sm"
                      >
                        <div className="font-medium">{chapter.title}</div>
                        <div className="text-muted-foreground">{chapter.time}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Article Content */
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <article className="card-gentle p-8">
                <header className="mb-8">
                  <h1 className="text-3xl font-bold mb-4">{currentResource.title}</h1>
                  <p className="text-lg text-muted-foreground mb-6">{currentResource.description}</p>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <BookOpen size={16} />
                      {currentResource.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-500" />
                      {currentResource.rating}
                    </div>
                    <div>{currentResource.views} views</div>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {currentResource.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{currentResource.author}</div>
                      <div className="text-sm text-muted-foreground">Clinical Psychologist</div>
                    </div>
                  </div>
                </header>

                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: currentResource.content }}
                />
              </article>
            </div>

            {/* Article Sidebar */}
            <div className="space-y-6">
              <div className="card-gentle p-4">
                <h3 className="font-bold mb-4">Related Resources</h3>
                <div className="space-y-3">
                  {currentResource.relatedResources.map((resource, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-3 hover:bg-muted/50 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-sm">{resource.title}</div>
                      <div className="text-xs text-muted-foreground capitalize">{resource.type}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="card-gentle p-4">
                <h3 className="font-bold mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full btn-primary text-sm">
                    Save to Favorites
                  </button>
                  <button className="w-full px-3 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-sm">
                    Share Article
                  </button>
                  <button className="w-full px-3 py-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50 transition-colors text-sm">
                    Report Issue
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ResourceViewer;
