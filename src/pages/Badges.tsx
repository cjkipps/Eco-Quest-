import { Award, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

const badges = [
  {
    id: "pollinator-pal",
    name: "Pollinator Pal",
    description: "Spotted 5 pollinators",
    icon: "🌸",
    earnedDate: "2 days ago",
  },
  {
    id: "bird-watcher",
    name: "Bird Watcher",
    description: "Identified 3 different birds",
    icon: "🦜",
    earnedDate: "1 week ago",
  },
  {
    id: "flower-finder",
    name: "Flower Finder",
    description: "Found 10 flowering plants",
    icon: "🌺",
    earnedDate: "3 days ago",
  },
  {
    id: "early-bird",
    name: "Early Bird",
    description: "Complete a quest before 8 AM",
    icon: "🌅",
    earnedDate: "5 days ago",
  },
  {
    id: "week-warrior",
    name: "Week Warrior",
    description: "Complete quests 7 days in a row",
    icon: "🔥",
    earnedDate: "Today",
  },
  {
    id: "tree-tracker",
    name: "Tree Tracker",
    description: "Identified 10 trees",
    icon: "🌳",
    earnedDate: "Yesterday",
  },
  {
    id: "insect-inspector",
    name: "Insect Inspector",
    description: "Found 15 different insects",
    icon: "🐛",
    earnedDate: "4 days ago",
  },
  {
    id: "nature-master",
    name: "Nature Master",
    description: "Complete all quests",
    icon: "👑",
    earnedDate: "Today",
  },
];

const Badges = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-accent to-accent/70 text-accent-foreground px-6 py-8">
        <div className="flex items-center gap-3 mb-2">
          <Award className="w-8 h-8" />
          <h1 className="text-3xl font-bold">Badge Collection</h1>
        </div>
        <p className="text-accent-foreground/90 text-lg">
          You've earned {badges.length} badges!
        </p>
      </div>

      {/* Badge Grid */}
      <div className="px-6 mt-6">
        <div className="grid grid-cols-2 gap-4">
          {badges.map((badge) => (
            <Card 
              key={badge.id} 
              className="p-5 border-0 shadow-card relative cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate(`/badge/${badge.id}`)}
            >
              <div className="absolute top-3 right-3 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">{badge.icon}</span>
              </div>
              
              <h3 className="font-bold text-center mb-1 text-sm">{badge.name}</h3>
              <p className="text-xs text-muted-foreground text-center mb-3">
                {badge.description}
              </p>
              
              <p className="text-xs text-success font-medium text-center">
                Earned {badge.earnedDate}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Badges;
