import { ArrowLeft, Camera, MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";
import monarchButterfly from "@/assets/monarch-butterfly.jpg";

const questDetails = {
  pollinator: {
    title: "Find a Pollinator",
    description: "Spot a butterfly or bee visiting flowers in the garden",
    image: monarchButterfly,
    duration: "15-20 min",
    location: "Garden Area",
    difficulty: "Easy",
    points: 50,
    tips: [
      "Look for colorful flowers - they attract pollinators",
      "Check around lavender and coneflowers",
      "Early morning or late afternoon is best",
      "Move slowly and quietly to not scare them away"
    ],
    goals: [
      "Take a clear photo of the pollinator",
      "Capture it on a flower if possible",
      "Note the type: butterfly, bee, or other"
    ]
  }
};

const QuestDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const quest = questDetails[id as keyof typeof questDetails] || questDetails.pollinator;

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Hero Image */}
      <div className="relative h-[320px]">
        <img 
          src={quest.image} 
          alt={quest.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 left-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>

        {/* Difficulty Badge */}
        <div className="absolute top-6 right-4 bg-success/90 backdrop-blur text-success-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          {quest.difficulty}
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">{quest.title}</h1>
          <p className="text-lg opacity-95">{quest.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 mt-6 space-y-6">
        {/* Quick Info */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-4 border-0 shadow-soft text-center">
            <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
            <div className="text-xs text-muted-foreground mb-1">Duration</div>
            <div className="font-semibold text-sm">{quest.duration}</div>
          </Card>
          <Card className="p-4 border-0 shadow-soft text-center">
            <MapPin className="w-5 h-5 text-secondary mx-auto mb-2" />
            <div className="text-xs text-muted-foreground mb-1">Location</div>
            <div className="font-semibold text-sm">{quest.location}</div>
          </Card>
          <Card className="p-4 border-0 shadow-soft text-center">
            <Star className="w-5 h-5 text-accent mx-auto mb-2" />
            <div className="text-xs text-muted-foreground mb-1">Points</div>
            <div className="font-semibold text-sm">{quest.points}</div>
          </Card>
        </div>

        {/* Quest Goals */}
        <Card className="p-5 border-0 shadow-card">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>🎯</span> Quest Goals
          </h2>
          <ul className="space-y-3">
            {quest.goals.map((goal, index) => (
              <li key={index} className="flex gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-sm font-semibold">{index + 1}</span>
                </div>
                <span className="text-foreground">{goal}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Tips */}
        <Card className="p-5 border-0 shadow-card bg-nature-light">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>💡</span> Helpful Tips
          </h2>
          <ul className="space-y-2">
            {quest.tips.map((tip, index) => (
              <li key={index} className="flex gap-2 text-sm text-foreground">
                <span className="text-primary">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Start Button */}
        <Button 
          size="lg" 
          className="w-full h-14 text-lg font-semibold rounded-xl shadow-button"
          onClick={() => navigate('/quest/active/pollinator')}
        >
          <Camera className="w-6 h-6 mr-2" />
          Start Quest
        </Button>
      </div>
    </div>
  );
};

export default QuestDetail;
