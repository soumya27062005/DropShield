import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, UserCheck, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DropShieldLogo } from "@/components/DropShieldLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"student" | "admin">("student");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const dummyCredentials = {
    student: { email: "student@dropshield.edu", password: "student123" },
    admin: { email: "admin@dropshield.edu", password: "admin123" }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const credentials = dummyCredentials[userType];
    
    if (formData.email === credentials.email && formData.password === credentials.password) {
      if (userType === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } else {
      alert("Invalid credentials! Use the dummy credentials shown below.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="card-gentle p-8">
          <div className="text-center mb-8">
            <DropShieldLogo size="lg" className="mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to your DropShield account</p>
          </div>

          {/* User Type Selection */}
          <div className="flex mb-6 bg-muted/30 rounded-lg p-1">
            <button
              type="button"
              onClick={() => setUserType("student")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md transition-all ${
                userType === "student" 
                  ? "bg-white shadow-sm text-primary font-medium" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <UserCheck size={16} />
              Student
            </button>
            <button
              type="button"
              onClick={() => setUserType("admin")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md transition-all ${
                userType === "admin" 
                  ? "bg-white shadow-sm text-primary font-medium" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Shield size={16} />
              Admin
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full btn-primary">
              Sign In as {userType === "student" ? "Student" : "Admin"}
            </Button>
          </form>

          {/* Dummy Credentials Info */}
          <div className="mt-6 p-4 bg-gradient-to-r from-accent/10 to-accent/20 rounded-lg">
            <h4 className="font-medium text-sm mb-2">Demo Credentials:</h4>
            <div className="text-xs space-y-1">
              <div>
                <strong>Student:</strong> {dummyCredentials.student.email} / {dummyCredentials.student.password}
              </div>
              <div>
                <strong>Admin:</strong> {dummyCredentials.admin.email} / {dummyCredentials.admin.password}
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-primary hover:text-primary/80 font-medium"
              >
                Sign up here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
