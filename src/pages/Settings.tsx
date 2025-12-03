import { ArrowLeft, User, Bell, Moon, Lock, HelpCircle, LogOut, ChevronRight, Volume2, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Settings = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [sounds, setSounds] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [largeText, setLargeText] = useState(false);

  const settingsSections = [
    {
      title: "Account",
      items: [
        { icon: User, label: "Edit Profile", action: "navigate" },
        { icon: Lock, label: "Privacy & Security", action: "navigate" },
      ]
    },
    {
      title: "Preferences",
      items: [
        { icon: Bell, label: "Notifications", action: "toggle", value: notifications, setValue: setNotifications },
        { icon: Volume2, label: "Sounds", action: "toggle", value: sounds, setValue: setSounds },
        { icon: Moon, label: "Dark Mode", action: "toggle", value: darkMode, setValue: setDarkMode },
        { icon: Eye, label: "Large Text", action: "toggle", value: largeText, setValue: setLargeText },
      ]
    },
    {
      title: "Support",
      items: [
        { icon: HelpCircle, label: "Help & FAQ", action: "navigate" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="bg-card border-b border-border px-4 py-4 flex items-center gap-4">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 bg-muted rounded-full flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">Settings</h1>
      </div>

      <div className="px-4 py-6 space-y-6">
        {settingsSections.map((section) => (
          <div key={section.title}>
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
              {section.title}
            </h2>
            <Card className="border-0 shadow-card divide-y divide-border overflow-hidden">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.label}
                    className="flex items-center gap-4 p-4 bg-card hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="flex-1 font-medium text-foreground">{item.label}</span>
                    {item.action === "toggle" ? (
                      <Switch 
                        checked={item.value} 
                        onCheckedChange={item.setValue}
                      />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                );
              })}
            </Card>
          </div>
        ))}

        {/* Logout Button */}
        <Card className="border-0 shadow-card overflow-hidden">
          <button className="flex items-center gap-4 p-4 w-full bg-card hover:bg-destructive/5 transition-colors">
            <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
              <LogOut className="w-5 h-5 text-destructive" />
            </div>
            <span className="font-medium text-destructive">Log Out</span>
          </button>
        </Card>

        {/* App Version */}
        <p className="text-center text-sm text-muted-foreground pt-4">
          Wild Discovery Path v1.0.0
        </p>
      </div>
    </div>
  );
};

export default Settings;
