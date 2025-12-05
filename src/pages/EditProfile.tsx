import { ArrowLeft, Camera } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import avatarLinda from "@/assets/avatar-linda.jpg";

const EditProfile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("Linda Thompson");
  const [username, setUsername] = useState("@linda_nature");
  const [email, setEmail] = useState("linda.thompson@email.com");
  const [bio, setBio] = useState("Nature enthusiast 🌿 | Bird watcher 🐦 | Gardener 🌸");
  const [location, setLocation] = useState("Portland, Oregon");

  const handleSave = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile changes have been saved.",
    });
    navigate(-1);
  };

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
        <h1 className="text-xl font-bold text-foreground">Edit Profile</h1>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <Avatar className="w-28 h-28 border-4 border-primary/20">
              <AvatarImage src={avatarLinda} alt="Profile" />
              <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">LT</AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <Camera className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Tap to change photo</p>
        </div>

        {/* Form */}
        <Card className="border-0 shadow-card p-6 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-medium">Full Name</Label>
            <Input 
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="username" className="text-foreground font-medium">Username</Label>
            <Input 
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
            <Input 
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-foreground font-medium">Location</Label>
            <Input 
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio" className="text-foreground font-medium">Bio</Label>
            <Textarea 
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="min-h-[100px] text-base resize-none"
            />
          </div>
        </Card>

        {/* Save Button */}
        <Button 
          onClick={handleSave}
          className="w-full h-14 text-lg font-semibold rounded-xl shadow-button"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default EditProfile;
