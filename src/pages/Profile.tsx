import { useState } from "react";
import { ArrowLeft, User, Mail, Phone, Calendar, MapPin, BookOpen, Edit2, Save, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DropShieldLogo } from "@/components/DropShieldLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "Soumya Gupta",
    email: "guptasoumya2706@gmail.com",
    phone: "+91 9879152484",
    studentId: "DS2025143",
    department: "Artificial Intelligence & Data Science",
    year: "3rd Year",
    institution: "JG University",
    dateOfBirth: "2005-06-27",
    address: "Ahmedabad, India",
    emergencyContact: "+91 9979152484",
    bio: "Passionate AI & DS student interested in AI and DSA. Actively participating in coding competitions and student welfare programs."
  });

  const [editData, setEditData] = useState(profileData);

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const academicStats = [
    { label: "Current CGPA", value: "8.56/10" },
    { label: "Attendance", value: "100%" },
    { label: "Risk Level", value: "Safe" },
    { label: "Counseling Sessions", value: "3 Completed" }
  ];

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

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              My Profile
            </h1>
            <p className="text-muted-foreground">Manage your personal information and settings</p>
          </div>
          
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)} className="btn-primary">
              <Edit2 size={16} />
              Edit Profile
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button onClick={handleSave} className="btn-primary">
                <Save size={16} />
                Save Changes
              </Button>
              <Button onClick={handleCancel} variant="outline">
                <X size={16} />
                Cancel
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="card-gentle p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <User size={48} className="text-white" />
              </div>
              <h2 className="text-xl font-bold mb-2">{profileData.fullName}</h2>
              <p className="text-muted-foreground mb-1">{profileData.studentId}</p>
              <p className="text-muted-foreground mb-4">{profileData.department}</p>
              
              {/* Academic Stats */}
              <div className="space-y-3">
                {academicStats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-muted/30 rounded">
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <span className="text-sm font-medium">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="card-gentle p-6">
              <h3 className="text-lg font-bold mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  {isEditing ? (
                    <Input
                      value={editData.fullName}
                      onChange={(e) => setEditData({ ...editData, fullName: e.target.value })}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-2 bg-muted/20 rounded">
                      <User size={16} className="text-muted-foreground" />
                      <span>{profileData.fullName}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  {isEditing ? (
                    <Input
                      type="email"
                      value={editData.email}
                      onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-2 bg-muted/20 rounded">
                      <Mail size={16} className="text-muted-foreground" />
                      <span>{profileData.email}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  {isEditing ? (
                    <Input
                      value={editData.phone}
                      onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-2 bg-muted/20 rounded">
                      <Phone size={16} className="text-muted-foreground" />
                      <span>{profileData.phone}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Date of Birth</label>
                  {isEditing ? (
                    <Input
                      type="date"
                      value={editData.dateOfBirth}
                      onChange={(e) => setEditData({ ...editData, dateOfBirth: e.target.value })}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-2 bg-muted/20 rounded">
                      <Calendar size={16} className="text-muted-foreground" />
                      <span>{new Date(profileData.dateOfBirth).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="card-gentle p-6">
              <h3 className="text-lg font-bold mb-4">Academic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Student ID</label>
                  <div className="flex items-center gap-2 p-2 bg-muted/20 rounded">
                    <BookOpen size={16} className="text-muted-foreground" />
                    <span>{profileData.studentId}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Department</label>
                  {isEditing ? (
                    <Input
                      value={editData.department}
                      onChange={(e) => setEditData({ ...editData, department: e.target.value })}
                    />
                  ) : (
                    <div className="p-2 bg-muted/20 rounded">
                      <span>{profileData.department}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Year</label>
                  {isEditing ? (
                    <Input
                      value={editData.year}
                      onChange={(e) => setEditData({ ...editData, year: e.target.value })}
                    />
                  ) : (
                    <div className="p-2 bg-muted/20 rounded">
                      <span>{profileData.year}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Institution</label>
                  {isEditing ? (
                    <Input
                      value={editData.institution}
                      onChange={(e) => setEditData({ ...editData, institution: e.target.value })}
                    />
                  ) : (
                    <div className="p-2 bg-muted/20 rounded">
                      <span>{profileData.institution}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="card-gentle p-6">
              <h3 className="text-lg font-bold mb-4">Additional Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Address</label>
                  {isEditing ? (
                    <Input
                      value={editData.address}
                      onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-2 bg-muted/20 rounded">
                      <MapPin size={16} className="text-muted-foreground" />
                      <span>{profileData.address}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Emergency Contact</label>
                  {isEditing ? (
                    <Input
                      value={editData.emergencyContact}
                      onChange={(e) => setEditData({ ...editData, emergencyContact: e.target.value })}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-2 bg-muted/20 rounded">
                      <Phone size={16} className="text-muted-foreground" />
                      <span>{profileData.emergencyContact}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Bio</label>
                  {isEditing ? (
                    <textarea
                      value={editData.bio}
                      onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                      className="w-full p-2 border rounded-md h-20 resize-none"
                    />
                  ) : (
                    <div className="p-2 bg-muted/20 rounded">
                      <span>{profileData.bio}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
