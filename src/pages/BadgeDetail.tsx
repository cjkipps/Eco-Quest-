import { ArrowLeft, Calendar, Camera } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";

import monarchButterfly from "@/assets/monarch-butterfly.jpg";
import swallowtailButterfly from "@/assets/swallowtail-butterfly.jpg";
import ladybug from "@/assets/ladybug.jpg";
import beeLavender from "@/assets/bee-lavender.jpg";
import cardinal from "@/assets/cardinal.jpg";
import blueJay from "@/assets/blue-jay.jpg";
import birdCardinalFeeder from "@/assets/bird-cardinal-feeder.jpg";
import daffodils from "@/assets/daffodils.jpg";
import yellowTulips from "@/assets/yellow-tulips.jpg";
import goldenSunset from "@/assets/golden-sunset.jpg";
import autumnLeaves from "@/assets/autumn-leaves.jpg";
import wildMushrooms from "@/assets/wild-mushrooms.jpg";

const badgeDetails: Record<string, {
  name: string;
  description: string;
  icon: string;
  earnedDate: string;
  photos: { image: string; name: string; date: string }[];
  tip: string;
}> = {
  "pollinator-pal": {
    name: "Pollinator Pal",
    description: "Spotted 5 pollinators in your nature adventures",
    icon: "🌸",
    earnedDate: "December 4, 2024",
    photos: [
      { image: monarchButterfly, name: "Monarch Butterfly", date: "Dec 4" },
      { image: swallowtailButterfly, name: "Swallowtail Butterfly", date: "Dec 3" },
      { image: beeLavender, name: "Honeybee on Lavender", date: "Dec 2" },
      { image: ladybug, name: "Ladybug", date: "Dec 1" },
      { image: swallowtailButterfly, name: "Tiger Swallowtail", date: "Nov 30" },
    ],
    tip: "Keep exploring meadows and gardens to find more pollinators!"
  },
  "bird-watcher": {
    name: "Bird Watcher",
    description: "Identified 3 different bird species",
    icon: "🦜",
    earnedDate: "November 29, 2024",
    photos: [
      { image: cardinal, name: "Northern Cardinal", date: "Nov 29" },
      { image: blueJay, name: "Blue Jay", date: "Nov 28" },
      { image: birdCardinalFeeder, name: "Cardinal at Feeder", date: "Nov 27" },
    ],
    tip: "Early morning is the best time to spot birds!"
  },
  "flower-finder": {
    name: "Flower Finder",
    description: "Found 10 beautiful flowering plants",
    icon: "🌺",
    earnedDate: "December 3, 2024",
    photos: [
      { image: daffodils, name: "Daffodils", date: "Dec 3" },
      { image: yellowTulips, name: "Yellow Tulips", date: "Dec 2" },
      { image: daffodils, name: "Spring Daffodils", date: "Dec 1" },
      { image: yellowTulips, name: "Garden Tulips", date: "Nov 30" },
      { image: daffodils, name: "Wild Daffodils", date: "Nov 29" },
    ],
    tip: "Spring is the perfect season to find more flowers!"
  },
  "early-bird": {
    name: "Early Bird",
    description: "Completed a quest before 8 AM",
    icon: "🌅",
    earnedDate: "December 1, 2024",
    photos: [
      { image: goldenSunset, name: "Sunrise Quest", date: "Dec 1" },
    ],
    tip: "The early bird catches the worm - and the best photos!"
  },
  "week-warrior": {
    name: "Week Warrior",
    description: "Completed quests 7 days in a row",
    icon: "🔥",
    earnedDate: "December 6, 2024",
    photos: [
      { image: monarchButterfly, name: "Day 7 - Butterfly", date: "Dec 6" },
      { image: cardinal, name: "Day 6 - Cardinal", date: "Dec 5" },
      { image: daffodils, name: "Day 5 - Flowers", date: "Dec 4" },
      { image: beeLavender, name: "Day 4 - Bee", date: "Dec 3" },
      { image: wildMushrooms, name: "Day 3 - Mushroom", date: "Dec 2" },
      { image: autumnLeaves, name: "Day 2 - Leaves", date: "Dec 1" },
      { image: goldenSunset, name: "Day 1 - Sunset", date: "Nov 30" },
    ],
    tip: "You're on fire! Keep the streak going!"
  },
  "tree-tracker": {
    name: "Tree Tracker",
    description: "Identified 10 different tree species",
    icon: "🌳",
    earnedDate: "December 5, 2024",
    photos: [
      { image: autumnLeaves, name: "Maple Tree", date: "Dec 5" },
      { image: autumnLeaves, name: "Oak Tree", date: "Dec 4" },
      { image: autumnLeaves, name: "Birch Tree", date: "Dec 3" },
    ],
    tip: "Look at the leaves and bark patterns to identify trees!"
  },
  "insect-inspector": {
    name: "Insect Inspector",
    description: "Found 15 different insects",
    icon: "🐛",
    earnedDate: "December 4, 2024",
    photos: [
      { image: ladybug, name: "Ladybug", date: "Dec 4" },
      { image: monarchButterfly, name: "Monarch", date: "Dec 3" },
      { image: beeLavender, name: "Honeybee", date: "Dec 2" },
      { image: swallowtailButterfly, name: "Swallowtail", date: "Dec 1" },
    ],
    tip: "Check under leaves and logs for hidden insects!"
  },
  "nature-master": {
    name: "Nature Master",
    description: "Completed all available quests",
    icon: "👑",
    earnedDate: "December 6, 2024",
    photos: [
      { image: monarchButterfly, name: "Final Quest", date: "Dec 6" },
      { image: cardinal, name: "Bird Quest", date: "Dec 5" },
      { image: daffodils, name: "Flower Quest", date: "Dec 4" },
      { image: wildMushrooms, name: "Mushroom Quest", date: "Dec 3" },
    ],
    tip: "You've mastered nature! Share your knowledge with others!"
  },
};

const BadgeDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const badge = badgeDetails[id as keyof typeof badgeDetails] || badgeDetails["pollinator-pal"];

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-accent to-accent/70 text-accent-foreground px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={() => navigate('/badges')}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold">Badge Details</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <span className="text-4xl">{badge.icon}</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-1">{badge.name}</h2>
            <p className="text-accent-foreground/80">{badge.description}</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Earned Date */}
        <Card className="border-0 shadow-card p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
            <Calendar className="w-5 h-5 text-success" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Earned on</p>
            <p className="font-semibold text-foreground">{badge.earnedDate}</p>
          </div>
        </Card>

        {/* Photos that earned this badge */}
        <div>
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Camera className="w-5 h-5 text-primary" />
            Photos that earned this badge
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {badge.photos.map((photo, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-card">
                <div className="aspect-square relative">
                  <img 
                    src={photo.image} 
                    alt={photo.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm text-foreground truncate">{photo.name}</p>
                  <p className="text-xs text-muted-foreground">{photo.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Pro Tip */}
        <Card className="border-0 shadow-card p-4 bg-primary/5">
          <p className="text-sm font-medium text-primary mb-1">💡 Pro Tip</p>
          <p className="text-muted-foreground">{badge.tip}</p>
        </Card>

        {/* Action Button */}
        <Button 
          onClick={() => navigate('/quests')}
          className="w-full h-14 text-lg font-semibold rounded-xl shadow-button"
        >
          Continue Exploring
        </Button>
      </div>
    </div>
  );
};

export default BadgeDetail;