import { Sun, Target, Award, Trophy, Camera } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BottomNav } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";
import gardenHero from "@/assets/garden-hero.jpg";
import monarchButterfly from "@/assets/monarch-butterfly.jpg";

const Home = () => {
  const navigate = useNavigate();
  const greeting = "Good afternoon";
  const userName = "Linda";
  const questProgress = 8;
  const totalQuests = 20;
  const progressPercentage = (questProgress / totalQuests) * 100;

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Section */}
      <div className="relative h-[280px] overflow-hidden">
        <img 
          src={gardenHero} 
          alt="Garden path" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Sun className="w-6 h-6" />
            <span className="text-base opacity-90">{greeting}, {userName}!</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Ready to Explore?</h1>
          <p className="text-lg opacity-95">Discover the wonders of nature around you</p>
        </div>
      </div>

      {/* Progress Card */}
      <div className="px-6 -mt-8 relative z-10">
        <Card className="bg-card shadow-card border-0">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground">Quest Progress</h2>
              <span className="text-2xl font-bold text-primary">{questProgress} / {totalQuests}</span>
            </div>
            <Progress value={progressPercentage} className="h-3 mb-6" />
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-nature-light rounded-2xl p-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">12</div>
                <div className="text-sm text-muted-foreground">Discoveries</div>
              </div>
              
              <div className="bg-warm-light rounded-2xl p-4 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">5</div>
                <div className="text-sm text-muted-foreground">Badges</div>
              </div>
              
              <div className="bg-gold-light rounded-2xl p-4 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Trophy className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">7</div>
                <div className="text-sm text-muted-foreground">Day Streak</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Featured Quest */}
      <div className="px-6 mt-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <span className="text-xl">🌿</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Today's Featured Quest</h2>
        </div>
        
        <Card 
          className="overflow-hidden border-0 shadow-card cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => navigate('/quest/pollinator')}
        >
          <div className="relative h-48">
            <img 
              src={monarchButterfly} 
              alt="Monarch Butterfly" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-success/90 text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
              Easy
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-xl font-bold text-foreground mb-2">Find a Pollinator</h3>
            <p className="text-muted-foreground mb-4">
              Spot a butterfly or bee visiting flowers
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <span>⏱️</span>
                <span>15-20 min</span>
              </div>
              <div className="flex items-center gap-1">
                <span>📍</span>
                <span>Garden Area</span>
              </div>
            </div>
            <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 shadow-button">
              <Camera className="w-5 h-5" />
              Start Quest
            </button>
          </div>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
