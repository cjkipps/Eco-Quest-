import { ArrowLeft, Share2, BookmarkPlus, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import monarchButterfly from "@/assets/monarch-butterfly.jpg";

const SpeciesIdentified = () => {
  const navigate = useNavigate();

  const speciesInfo = {
    name: "Monarch Butterfly",
    scientificName: "Danaus plexippus",
    image: monarchButterfly,
    confidence: 94,
    category: "Insect",
    family: "Nymphalidae",
    description: "The monarch butterfly is one of the most recognizable butterflies in North America, known for its distinctive orange and black wing pattern. Famous for their incredible migration journey spanning thousands of miles.",
    facts: [
      "Can travel up to 3,000 miles during migration",
      "Lives for 2-6 weeks, except the migratory generation which lives 8-9 months",
      "Milkweed is essential for their survival",
      "Their bright colors warn predators they are toxic"
    ],
    habitat: "Meadows, fields, marshes, and areas with milkweed plants",
    status: "Near Threatened"
  };

  const handleShare = () => {
    navigate('/create-post', { 
      state: { 
        image: speciesInfo.image, 
        title: speciesInfo.name,
        type: 'identify'
      } 
    });
  };

  const handleSave = () => {
    toast({
      title: "Saved!",
      description: "Added to your Photo Gallery.",
    });
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="bg-card border-b border-border px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/quests')}
            className="w-10 h-10 bg-muted rounded-full flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-xl font-bold text-foreground">Species Identified</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={handleShare}>
            <Share2 className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleSave}>
            <BookmarkPlus className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Image */}
        <Card className="overflow-hidden border-0 shadow-card">
          <div className="relative h-64">
            <img 
              src={speciesInfo.image} 
              alt={speciesInfo.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold">
              {speciesInfo.confidence}% Match
            </div>
          </div>
        </Card>

        {/* Species Name */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-1">{speciesInfo.name}</h2>
          <p className="text-muted-foreground italic">{speciesInfo.scientificName}</p>
          <div className="flex justify-center gap-3 mt-3">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {speciesInfo.category}
            </span>
            <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              {speciesInfo.family}
            </span>
          </div>
        </div>

        {/* Description */}
        <Card className="border-0 shadow-card p-5">
          <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <Info className="w-5 h-5 text-primary" />
            About
          </h3>
          <p className="text-muted-foreground leading-relaxed">{speciesInfo.description}</p>
        </Card>

        {/* Quick Facts */}
        <Card className="border-0 shadow-card p-5">
          <h3 className="font-semibold text-foreground mb-3">Quick Facts</h3>
          <ul className="space-y-2">
            {speciesInfo.facts.map((fact, index) => (
              <li key={index} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Habitat & Status */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="border-0 shadow-card p-4 text-center">
            <p className="text-sm text-muted-foreground mb-1">Habitat</p>
            <p className="font-medium text-foreground text-sm">{speciesInfo.habitat}</p>
          </Card>
          <Card className="border-0 shadow-card p-4 text-center">
            <p className="text-sm text-muted-foreground mb-1">Conservation</p>
            <p className="font-medium text-accent">{speciesInfo.status}</p>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={handleShare}
            className="w-full h-14 text-lg font-semibold rounded-xl shadow-button"
          >
            Share to Community
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate('/identify-active')}
            className="w-full h-14 text-lg font-semibold rounded-xl"
          >
            Identify Another
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SpeciesIdentified;
