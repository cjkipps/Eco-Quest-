import { ArrowLeft, Shield, Eye, Lock, UserX, Download, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const PrivacySecurity = () => {
  const navigate = useNavigate();
  const [privateProfile, setPrivateProfile] = useState(false);
  const [showLocation, setShowLocation] = useState(true);
  const [showActivity, setShowActivity] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  const handleChangePassword = () => {
    toast({
      title: "Password Reset",
      description: "A password reset link has been sent to your email.",
    });
  };

  const handleDownloadData = () => {
    toast({
      title: "Data Export Requested",
      description: "Your data will be ready for download within 24 hours.",
    });
  };

  const privacySettings = [
    { 
      icon: Eye, 
      label: "Private Profile", 
      description: "Only approved followers can see your posts",
      value: privateProfile, 
      setValue: setPrivateProfile 
    },
    { 
      icon: Shield, 
      label: "Show Location", 
      description: "Display your location on discoveries",
      value: showLocation, 
      setValue: setShowLocation 
    },
    { 
      icon: UserX, 
      label: "Show Activity Status", 
      description: "Let others see when you're active",
      value: showActivity, 
      setValue: setShowActivity 
    },
  ];

  const securitySettings = [
    { 
      icon: Lock, 
      label: "Two-Factor Authentication", 
      description: "Add extra security to your account",
      value: twoFactor, 
      setValue: setTwoFactor 
    },
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
        <h1 className="text-xl font-bold text-foreground">Privacy & Security</h1>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Privacy Section */}
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
            Privacy
          </h2>
          <Card className="border-0 shadow-card divide-y divide-border overflow-hidden">
            {privacySettings.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-card"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-foreground block">{item.label}</span>
                    <span className="text-sm text-muted-foreground">{item.description}</span>
                  </div>
                  <Switch 
                    checked={item.value} 
                    onCheckedChange={item.setValue}
                  />
                </div>
              );
            })}
          </Card>
        </div>

        {/* Security Section */}
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
            Security
          </h2>
          <Card className="border-0 shadow-card divide-y divide-border overflow-hidden">
            {securitySettings.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-card"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-foreground block">{item.label}</span>
                    <span className="text-sm text-muted-foreground">{item.description}</span>
                  </div>
                  <Switch 
                    checked={item.value} 
                    onCheckedChange={item.setValue}
                  />
                </div>
              );
            })}
            
            {/* Change Password */}
            <button 
              onClick={handleChangePassword}
              className="flex items-center gap-4 p-4 w-full bg-card hover:bg-muted/50 transition-colors"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <span className="font-medium text-foreground block">Change Password</span>
                <span className="text-sm text-muted-foreground">Update your password</span>
              </div>
            </button>
          </Card>
        </div>

        {/* Data Section */}
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
            Your Data
          </h2>
          <Card className="border-0 shadow-card divide-y divide-border overflow-hidden">
            <button 
              onClick={handleDownloadData}
              className="flex items-center gap-4 p-4 w-full bg-card hover:bg-muted/50 transition-colors"
            >
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                <Download className="w-5 h-5 text-secondary" />
              </div>
              <div className="flex-1 text-left">
                <span className="font-medium text-foreground block">Download My Data</span>
                <span className="text-sm text-muted-foreground">Get a copy of your data</span>
              </div>
            </button>
            
            <button className="flex items-center gap-4 p-4 w-full bg-card hover:bg-destructive/5 transition-colors">
              <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-destructive" />
              </div>
              <div className="flex-1 text-left">
                <span className="font-medium text-destructive block">Delete Account</span>
                <span className="text-sm text-muted-foreground">Permanently delete your account</span>
              </div>
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacySecurity;
