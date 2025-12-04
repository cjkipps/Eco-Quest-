import { Search, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import monarchButterfly from "@/assets/monarch-butterfly.jpg";
import daffodils from "@/assets/daffodils.jpg";
import beeLavender from "@/assets/bee-lavender.jpg";
import ladybug from "@/assets/ladybug.jpg";
import birdCardinalFeeder from "@/assets/bird-cardinal-feeder.jpg";
import autumnLeaves from "@/assets/autumn-leaves.jpg";
import goldenSunset from "@/assets/golden-sunset.jpg";
import wildMushrooms from "@/assets/wild-mushrooms.jpg";

const quests = [
  {
    id: "pollinator",
    title: "Find a Pollinator",
    description: "Spot a butterfly or bee visiting flowers",
    duration: "15-20 min",
    location: "Garden Area",
    difficulty: "Easy",
    image: monarchButterfly,
  },
  {
    id: "spring-blooms",
    title: "Spring Blooms",
    description: "Photograph 5 different spring flowers",
    duration: "20-30 min",
    location: "Garden Area",
    difficulty: "Easy",
    image: daffodils,
  },
  {
    id: "busy-bees",
    title: "Busy Bees",
    description: "Find and photograph bees at work",
    duration: "15-25 min",
    location: "Wildflower Meadow",
    difficulty: "Medium",
    image: beeLavender,
  },
  {
    id: "ladybug-hunt",
    title: "Ladybug Hunt",
    description: "Discover ladybugs in the garden",
    duration: "10-15 min",
    location: "Rose Garden",
    difficulty: "Easy",
    image: ladybug,
  },
  {
    id: "bird-watching",
    title: "Bird Watching",
    description: "Spot and identify local birds",
    duration: "30-45 min",
    location: "Bird Feeder",
    difficulty: "Medium",
    image: birdCardinalFeeder,
  },
  {
    id: "leaf-collection",
    title: "Leaf Collection",
    description: "Collect photos of 6 different leaf shapes",
    duration: "25-35 min",
    location: "Walking Path",
    difficulty: "Easy",
    image: autumnLeaves,
  },
  {
    id: "sunset-seeker",
    title: "Sunset Seeker",
    description: "Capture the perfect golden hour photo",
    duration: "20-30 min",
    location: "Open Field",
    difficulty: "Easy",
    image: goldenSunset,
  },
  {
    id: "mushroom-mystery",
    title: "Mushroom Mystery",
    description: "Find and photograph wild mushrooms",
    duration: "30-40 min",
    location: "Shaded Woods",
    difficulty: "Hard",
    image: wildMushrooms,
  },
];

const Quests = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-nature-dark text-primary-foreground px-6 py-8">
        <h1 className="text-3xl font-bold mb-2">Nature Quests</h1>
        <p className="text-primary-foreground/90">Choose your next adventure</p>
      </div>

      {/* Search Bar */}
      <div className="px-6 -mt-6 relative z-10 mb-6">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search quests..." 
              className="pl-12 h-14 bg-card border-0 shadow-card rounded-xl text-base"
            />
          </div>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-14 px-4 bg-card border-0 shadow-card rounded-xl"
          >
            <Filter className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6">
        <Tabs defaultValue="browse" className="w-full">
          <TabsList className="w-full bg-muted/50 p-1 h-12 rounded-xl mb-6">
            <TabsTrigger value="browse" className="flex-1 rounded-lg text-base data-[state=active]:bg-card data-[state=active]:shadow-sm">
              Browse Quests
            </TabsTrigger>
            <TabsTrigger value="identify" className="flex-1 rounded-lg text-base data-[state=active]:bg-card data-[state=active]:shadow-sm">
              Identify Species
            </TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-4 mt-0">
            {quests.map((quest) => (
              <Card 
                key={quest.id}
                className="overflow-hidden border-0 shadow-card cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(`/quest/${quest.id}`)}
              >
                <div className="relative h-36">
                  <img 
                    src={quest.image} 
                    alt={quest.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-foreground mb-1">{quest.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {quest.description}
                  </p>
                  <div className="flex items-center flex-wrap gap-2 text-xs text-muted-foreground">
                    <span className={`px-2 py-1 rounded-full font-medium ${
                      quest.difficulty === "Easy" ? "bg-success/10 text-success" : 
                      quest.difficulty === "Medium" ? "bg-accent/10 text-accent" : 
                      "bg-secondary/10 text-secondary"
                    }`}>
                      {quest.difficulty}
                    </span>
                    <span className="flex items-center gap-1">⏱️ {quest.duration}</span>
                    <span className="flex items-center gap-1">📍 {quest.location}</span>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="identify" className="mt-0">
            <Card className="p-8 text-center border-0 shadow-card">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📸</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Identify</h3>
              <p className="text-muted-foreground mb-6">
                Take a photo to instantly identify plants, birds, or insects
              </p>
              <Button 
                size="lg" 
                className="w-full h-14 text-base font-semibold rounded-xl shadow-button"
                onClick={() => navigate('/quest/active/identify')}
              >
                Open Camera
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <BottomNav />
    </div>
  );
};

export default Quests;
