import { Sun, Target, Award, Trophy, Camera, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BottomNav } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";
import gardenHero from "@/assets/garden-hero.jpg";
import monarchButterfly from "@/assets/monarch-butterfly.jpg";
import beeLavender from "@/assets/bee-lavender.jpg";
import daffodils from "@/assets/daffodils.jpg";
import ladybug from "@/assets/ladybug.jpg";
import wildMushrooms from "@/assets/wild-mushrooms.jpg";

const Home = () => {
  const navigate = useNavigate();
  const greeting = "Good afternoon";
  const userName = "Linda";
  const questProgress = 8;
  const totalQuests = 20;
  const progressPercentage = (questProgress / totalQuests) * 100;

  const continueQuests = [
    { id: "spring-blooms", title: "Spring Blooms", progress: 60, image: daffodils, tasksLeft: "2 flowers left" },
    { id: "busy-bees", title: "Busy Bees", progress: 33, image: beeLavender, tasksLeft: "2 bees left" },
  ];

  const featuredQuests = [
    { id: "pollinator", title: "Find a Pollinator", description: "Spot a butterfly or bee visiting flowers", duration: "15-20 min", location: "Garden Area", difficulty: "Easy", image: monarchButterfly },
    { id: "ladybug-hunt", title: "Ladybug Hunt", description: "Discover ladybugs in the garden", duration: "10-15 min", location: "Rose Garden", difficulty: "Easy", image: ladybug },
    { id: "mushroom-mystery", title: "Mushroom Mystery", description: "Find and photograph wild mushrooms", duration: "30-40 min", location: "Shaded Woods", difficulty: "Hard", image: wildMushrooms },
  ];

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

      {/* Continue Quest Section */}
      {continueQuests.length > 0 && (
        <div className="px-6 mt-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Play className="w-4 h-4 text-secondary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Continue Quests</h2>
          </div>
          
          <div className="space-y-3">
            {continueQuests.map((quest) => (
              <Card 
                key={quest.id}
                className="overflow-hidden border-0 shadow-card cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(`/quest/active/${quest.id}`)}
              >
                <div className="flex items-center gap-4 p-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={quest.image} alt={quest.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1">{quest.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{quest.tasksLeft}</p>
                    <Progress value={quest.progress} className="h-2" />
                  </div>
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Featured Quests */}
      <div className="px-6 mt-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <span className="text-xl">🌿</span>
          </div>
          <h2 className="text-xl font-bold text-foreground">Featured Quests</h2>
        </div>
        
        <div className="space-y-4">
          {featuredQuests.map((quest) => (
            <Card 
              key={quest.id}
              className="overflow-hidden border-0 shadow-card cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate(`/quest/${quest.id}`)}
            >
              <div className="relative h-40">
                <img 
                  src={quest.image} 
                  alt={quest.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-foreground mb-1">{quest.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{quest.description}</p>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="px-2 py-0.5 rounded-full bg-success/10 text-success text-xs font-medium">
                    {quest.difficulty}
                  </span>
                  <span>⏱️ {quest.duration}</span>
                  <span>📍 {quest.location}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
