import { useState } from "react";
import { Settings as SettingsIcon, Moon, Sun, Globe, Bell, Shield, User, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [autoTranslate, setAutoTranslate] = useState(false);
  const [anonymous, setAnonymous] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // Apply theme to document
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const settingsCategories = [
    {
      title: "Appearance",
      icon: Sun,
      settings: [
        {
          label: "Dark Mode",
          description: "Toggle between light and dark themes",
          component: (
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch checked={darkMode} onCheckedChange={toggleTheme} />
              <Moon className="h-4 w-4" />
            </div>
          )
        },
        {
          label: "Language",
          description: "Choose your preferred language",
          component: (
            <Select defaultValue="en">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="hi">Hindi</SelectItem>
              </SelectContent>
            </Select>
          )
        }
      ]
    },
    {
      title: "Notifications",
      icon: Bell,
      settings: [
        {
          label: "Push Notifications",
          description: "Receive notifications for new responses and updates",
          component: <Switch checked={notifications} onCheckedChange={setNotifications} />
        },
        {
          label: "Email Digest",
          description: "Weekly summary of your classroom activity",
          component: <Switch defaultChecked />
        }
      ]
    },
    {
      title: "Privacy",
      icon: Shield,
      settings: [
        {
          label: "Anonymous Mode",
          description: "Keep your identity hidden in all interactions",
          component: <Switch checked={anonymous} onCheckedChange={setAnonymous} />
        },
        {
          label: "Data Sharing",
          description: "Allow anonymous analytics to improve the platform",
          component: <Switch defaultChecked />
        }
      ]
    },
    {
      title: "Accessibility",
      icon: Globe,
      settings: [
        {
          label: "Auto Translate",
          description: "Automatically translate questions and responses",
          component: <Switch checked={autoTranslate} onCheckedChange={setAutoTranslate} />
        },
        {
          label: "Text Size",
          description: "Adjust text size for better readability",
          component: (
            <Select defaultValue="medium">
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectContent>
            </Select>
          )
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/student" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Dashboard</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <SettingsIcon className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Settings</h1>
              <p className="text-sm text-muted-foreground">Customize your Class Whisper experience</p>
            </div>
          </div>

          <div className="w-24"></div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="grid gap-6">
          {settingsCategories.map((category, index) => (
            <Card key={index} className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <category.icon className="h-6 w-6 text-primary" />
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.settings.map((setting, settingIndex) => (
                    <div key={settingIndex} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <div className="flex-1">
                        <h4 className="font-medium">{setting.label}</h4>
                        <p className="text-sm text-muted-foreground">{setting.description}</p>
                      </div>
                      <div className="ml-4">
                        {setting.component}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Account Actions */}
          <Card className="shadow-elegant border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <User className="h-6 w-6 text-primary" />
                <span>Account</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  Export My Data
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Reset Preferences
                </Button>
                <Button variant="destructive" className="w-full justify-start">
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
