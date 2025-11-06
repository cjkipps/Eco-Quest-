import { Award, Lock, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/BottomNav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const badges = [
  {
    id: "pollinator-pal",
    name: "Pollinator Pal",
    description: "Spotted 5 pollinators",
    icon: "🌸",
    earned: true,
    earnedDate: "2 days ago",
    progress: 5,
    total: 5,
  },
  {
    id: "bird-watcher",
    name: "Bird Watcher",
    description: "Identified 3 different birds",
    icon: "🦜",
    earned: true,
    earnedDate: "1 week ago",
    progress: 3,
    total: 3,
  },
  {
    id: "flower-finder",
    name: "Flower Finder",
    description: "Found 10 flowering plants",
    icon: "🌺",
    earned: true,
    earnedDate: "3 days ago",
    progress: 10,
    total: 10,
  },
  {
    id: "early-bird",
    name: "Early Bird",
    description: "Complete a quest before 8 AM",
    icon: "🌅",
    earned: true,
    earnedDate: "5 days ago",
    progress: 1,
    total: 1,
  },
  {
    id: "week-warrior",
    name: "Week Warrior",
    description: "Complete quests 7 days in a row",
    icon: "🔥",
    earned: true,
    earnedDate: "Today",
    progress: 7,
    total: 7,
  },
  {
    id: "tree-tracker",
    name: "Tree Tracker",
    description: "Identified 10 trees",
    icon: "🌳",
    earned: false,
    progress: 7,
    total: 10,
  },
  {
    id: "insect-inspector",
    name: "Insect Inspector",
    description: "Found 15 different insects",
    icon: "🐛",
    earned: false,
    progress: 11,
    total: 15,
  },
  {
    id: "nature-master",
    name: "Nature Master",
    description: "Complete all quests",
    icon: "👑",
    earned: false,
    progress: 8,
    total: 20,
  },
];

const Badges = () => {
  const earnedBadges = badges.filter(b => b.earned);
  const lockedBadges = badges.filter(b => !b.earned);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-accent to-accent/70 text-accent-foreground px-6 py-8">
        <div className="flex items-center gap-3 mb-2">
          <Award className="w-8 h-8" />
          <h1 className="text-3xl font-bold">Badge Collection</h1>
        </div>
        <p className="text-accent-foreground/90 text-lg">
          You've earned {earnedBadges.length} of {badges.length} badges
        </p>
      </div>

      {/* Tabs */}
      <div className="px-6 mt-6">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full bg-muted/50 p-1 h-12 rounded-xl mb-6">
            <TabsTrigger value="all" className="flex-1 rounded-lg text-base data-[state=active]:bg-card data-[state=active]:shadow-sm">
              All ({badges.length})
            </TabsTrigger>
            <TabsTrigger value="earned" className="flex-1 rounded-lg text-base data-[state=active]:bg-card data-[state=active]:shadow-sm">
              Earned ({earnedBadges.length})
            </TabsTrigger>
            <TabsTrigger value="locked" className="flex-1 rounded-lg text-base data-[state=active]:bg-card data-[state=active]:shadow-sm">
              Locked ({lockedBadges.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4 mt-0">
            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge) => (
                <BadgeCard key={badge.id} badge={badge} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="earned" className="space-y-4 mt-0">
            <div className="grid grid-cols-2 gap-4">
              {earnedBadges.map((badge) => (
                <BadgeCard key={badge.id} badge={badge} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="locked" className="space-y-4 mt-0">
            <div className="grid grid-cols-2 gap-4">
              {lockedBadges.map((badge) => (
                <BadgeCard key={badge.id} badge={badge} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <BottomNav />
    </div>
  );
};

const BadgeCard = ({ badge }: { badge: typeof badges[0] }) => {
  return (
    <Card className={`p-5 border-0 shadow-card relative ${!badge.earned && 'opacity-60'}`}>
      {badge.earned && (
        <div className="absolute top-3 right-3 w-6 h-6 bg-success rounded-full flex items-center justify-center">
          <CheckCircle className="w-4 h-4 text-white" />
        </div>
      )}
      {!badge.earned && (
        <div className="absolute top-3 right-3 w-6 h-6 bg-muted rounded-full flex items-center justify-center">
          <Lock className="w-3.5 h-3.5 text-muted-foreground" />
        </div>
      )}
      
      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
        <span className="text-3xl">{badge.icon}</span>
      </div>
      
      <h3 className="font-bold text-center mb-1 text-sm">{badge.name}</h3>
      <p className="text-xs text-muted-foreground text-center mb-3">
        {badge.description}
      </p>
      
      {badge.earned ? (
        <p className="text-xs text-success font-medium text-center">
          Earned {badge.earnedDate}
        </p>
      ) : (
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span>{badge.progress}/{badge.total}</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all"
              style={{ width: `${(badge.progress / badge.total) * 100}%` }}
            />
          </div>
        </div>
      )}
    </Card>
  );
};

export default Badges;
