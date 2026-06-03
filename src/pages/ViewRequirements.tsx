import { useState } from "react";
import { ArrowLeft, FileText, User, Calendar, Clock, CheckCircle, AlertCircle, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DropShieldLogo } from "@/components/DropShieldLogo";

const ViewRequirement = () => {
  const navigate = useNavigate();
  const [selectedRequirement, setSelectedRequirement] = useState("academic-support");

  const requirements = {
    "academic-support": {
      title: "Academic Support Requirements",
      description: "Documents and criteria needed for academic assistance programs",
      category: "Academic",
      lastUpdated: "2024-01-15",
      documents: [
        {
          name: "Academic Transcript",
          description: "Official academic record from current semester",
          status: "required",
          submitted: false
        },
        {
          name: "Attendance Record",
          description: "Attendance percentage from the last 3 months",
          status: "required", 
          submitted: true
        },
        {
          name: "Financial Aid Form",
          description: "Family income certificate and financial need assessment",
          status: "optional",
          submitted: false
        },
        {
          name: "Medical Certificate",
          description: "Health certificate if applicable for special accommodations",
          status: "conditional",
          submitted: false
        }
      ],
      eligibility: [
        "CGPA below 6.5 or recent academic decline",
        "Attendance below 75% in current semester",
        "Demonstrated financial need (optional)",
        "Active student status in good standing"
      ],
      process: [
        "Submit online application through DropShield portal",
        "Upload required documents",
        "Schedule initial counseling session",
        "Await review and approval (5-7 business days)",
        "Begin support program upon approval"
      ]
    },
    "counseling-services": {
      title: "Counseling Services Requirements", 
      description: "Prerequisites for accessing professional counseling support",
      category: "Wellness",
      lastUpdated: "2024-01-10",
      documents: [
        {
          name: "Student ID Verification",
          description: "Valid student identification",
          status: "required",
          submitted: true
        },
        {
          name: "Consent Form",
          description: "Counseling services consent and privacy agreement",
          status: "required",
          submitted: false
        },
        {
          name: "Referral Letter", 
          description: "Referral from academic advisor or faculty (if applicable)",
          status: "optional",
          submitted: false
        }
      ],
      eligibility: [
        "Currently enrolled student",
        "Age 18+ or parental consent for minors",
        "Commitment to attend scheduled sessions",
        "Willingness to engage in counseling process"
      ],
      process: [
        "Complete online intake assessment",
        "Submit consent forms and documentation",
        "Schedule initial consultation",
        "Begin regular counseling sessions",
        "Participate in progress reviews"
      ]
    }
  };

  const currentReq = requirements[selectedRequirement as keyof typeof requirements];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "required": return "text-red-600 bg-red-50";
      case "optional": return "text-blue-600 bg-blue-50";
      case "conditional": return "text-amber-600 bg-amber-50";
      default: return "text-muted-foreground bg-muted/20";
    }
  };

  const getStatusIcon = (submitted: boolean, status: string) => {
    if (submitted) return <CheckCircle className="text-secondary" size={16} />;
    if (status === "required") return <AlertCircle className="text-red-500" size={16} />;
    return <FileText className="text-muted-foreground" size={16} />;
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

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Service Requirements
          </h1>
          <p className="text-muted-foreground">View eligibility criteria and documentation requirements for DropShield services</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card-gentle p-4">
              <h3 className="font-semibold mb-4">Available Services</h3>
              <div className="space-y-2">
                {Object.entries(requirements).map(([key, req]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedRequirement(key)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedRequirement === key 
                        ? "bg-primary text-white" 
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="font-medium text-sm">{req.title}</div>
                    <div className={`text-xs mt-1 ${
                      selectedRequirement === key ? "text-white/80" : "text-muted-foreground"
                    }`}>
                      {req.category}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Header */}
            <div className="card-gentle p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{currentReq.title}</h2>
                  <p className="text-muted-foreground">{currentReq.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Last Updated</div>
                  <div className="font-medium flex items-center gap-2">
                    <Calendar size={16} />
                    {new Date(currentReq.lastUpdated).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="card-gentle p-6">
              <h3 className="text-lg font-bold mb-4">Required Documentation</h3>
              <div className="space-y-4">
                {currentReq.documents.map((doc, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className="mt-1">
                      {getStatusIcon(doc.submitted, doc.status)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium">{doc.name}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{doc.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(doc.status)}`}>
                            {doc.status}
                          </span>
                          {doc.submitted && (
                            <span className="text-xs px-2 py-1 rounded-full bg-secondary text-white">
                              Submitted
                            </span>
                          )}
                        </div>
                      </div>
                      {!doc.submitted && (
                        <div className="mt-3 flex gap-2">
                          <button className="btn-primary text-sm px-3 py-1">
                            Upload Document
                          </button>
                          <button className="text-primary hover:text-primary/80 text-sm flex items-center gap-1">
                            <Download size={14} />
                            Download Template
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="card-gentle p-6">
              <h3 className="text-lg font-bold mb-4">Eligibility Criteria</h3>
              <div className="space-y-3">
                {currentReq.eligibility.map((criteria, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-secondary mt-1" size={16} />
                    <span className="text-sm">{criteria}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Process */}
            <div className="card-gentle p-6">
              <h3 className="text-lg font-bold mb-4">Application Process</h3>
              <div className="space-y-4">
                {currentReq.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="card-gentle p-6">
              <div className="flex gap-4">
                <button className="btn-primary flex items-center gap-2">
                  <User size={16} />
                  Start Application
                </button>
                <button className="btn-shield flex items-center gap-2">
                  <Clock size={16} />
                  Schedule Consultation
                </button>
                <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewRequirement;
