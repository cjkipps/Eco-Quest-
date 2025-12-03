import { User, Settings, Camera, MapPin, Calendar, Award, Target, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BottomNav } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";
import gardenHero from "@/assets/garden-hero.jpg";
import avatarLinda from "@/assets/avatar-linda.jpg";

const Profile = () => {
  const navigate = useNavigate();
  
  const stats = [
    { label: "Quests", value: 24, icon: Target },
    { label: "Badges", value: 8, icon: Award },
    { label: "Friends", value: 12, icon: User },
  ];

  const recentBadges = [
    { name: "Pollinator Pal", emoji: "🦋", date: "Nov 28" },
    { name: "Early Bird", emoji: "🐦", date: "Nov 25" },
    { name: "Garden Explorer", emoji: "🌿", date: "Nov 20" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header with Cover Photo */}
      <div className="relative h-[180px] overflow-hidden">
        <img 
          src={gardenHero} 
          alt="Profile cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
        <button className="absolute top-4 right-4 w-10 h-10 bg-card/80 backdrop-blur rounded-full flex items-center justify-center">
          <Settings className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Profile Info */}
      <div className="px-6 -mt-16 relative z-10">
        <div className="flex items-end gap-4 mb-4">
          <div className="w-28 h-28 rounded-full border-4 border-card shadow-card overflow-hidden">
            <img 
              src={avatarLinda} 
              alt="Linda Thompson" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 pb-2">
            <h1 className="text-2xl font-bold text-foreground">Linda Thompson</h1>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4" />
              <span>Sunset Gardens Community</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Calendar className="w-4 h-4" />
          <span>Member since October 2024</span>
        </div>

        {/* Bio */}
        <Card className="bg-card border-0 shadow-card p-4 mb-6">
          <p className="text-foreground">
            Retired teacher with a passion for gardening and birdwatching. Love spending mornings in the garden and sharing nature finds with my grandchildren! 🌻
          </p>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={stat.label} 
                className="bg-card border-0 shadow-card p-4 text-center cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => stat.label === "Friends" && navigate('/friends')}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Level Progress */}
        <Card className="bg-card border-0 shadow-card p-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-semibold text-foreground">Nature Explorer</h3>
              <p className="text-sm text-muted-foreground">Level 5</p>
            </div>
            <div className="text-right">
              <span className="text-sm text-muted-foreground">450 / 600 XP</span>
            </div>
          </div>
          <Progress value={75} className="h-3" />
          <p className="text-xs text-muted-foreground mt-2">150 XP until Nature Guardian</p>
        </Card>

        {/* Recent Badges */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Recent Badges</h2>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-primary"
              onClick={() => navigate('/badges')}
            >
              See All
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="flex gap-3">
            {recentBadges.map((badge) => (
              <Card key={badge.name} className="bg-card border-0 shadow-card p-4 flex-1 text-center">
                <div className="text-3xl mb-2">{badge.emoji}</div>
                <div className="text-xs font-medium text-foreground truncate">{badge.name}</div>
                <div className="text-xs text-muted-foreground">{badge.date}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <Button 
            variant="outline" 
            className="w-full justify-start gap-3 h-12 border-border"
            onClick={() => navigate('/friends')}
          >
            <User className="w-5 h-5 text-primary" />
            <span>Manage Friends</span>
            <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground" />
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start gap-3 h-12 border-border"
          >
            <Camera className="w-5 h-5 text-primary" />
            <span>My Photo Gallery</span>
            <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground" />
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
