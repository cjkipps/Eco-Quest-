import { Trophy, Share2, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";
import { questDetails } from "./QuestDetail";

const QuestComplete = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const quest = questDetails[id as keyof typeof questDetails] || questDetails.pollinator;

  return (
    <div className="min-h-screen bg-gradient-to-b from-success/5 to-background flex flex-col items-center justify-center p-6">
      {/* Success Animation */}
      <div className="mb-8 animate-in zoom-in duration-500">
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center shadow-lg">
            <Trophy className="w-16 h-16 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-12 h-12 bg-success rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <span className="text-2xl">✓</span>
          </div>
        </div>
      </div>

      {/* Success Message */}
      <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-4xl font-bold text-foreground mb-3">
          Quest Complete!
        </h1>
        <p className="text-xl text-muted-foreground">
          Amazing work, Linda!
        </p>
      </div>

      {/* Captured Photo */}
      <Card className="w-full max-w-md overflow-hidden border-0 shadow-lg mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
        <div className="relative">
          <img 
            src={quest.image} 
            alt={quest.capturedName} 
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 right-4 bg-success text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            +{quest.points} points
          </div>
        </div>
        <div className="p-5">
          <h2 className="text-2xl font-bold mb-2">{quest.capturedName}</h2>
          <p className="text-muted-foreground mb-4">
            {quest.capturedDescription}
          </p>
          
          {/* Stats */}
          <div className="bg-muted/50 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Species Identified</span>
              <span className="font-semibold">{quest.capturedName}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Location</span>
              <span className="font-semibold">{quest.location}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Quest Time</span>
              <span className="font-semibold">12 minutes</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Badge Earned */}
      <Card className="w-full max-w-md border-0 shadow-lg p-5 mb-8 bg-gradient-to-br from-primary/5 to-success/5 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-3xl">{quest.badge.emoji}</span>
          </div>
          <div className="flex-1">
            <div className="text-sm text-success font-semibold mb-1">New Badge Unlocked!</div>
            <h3 className="text-lg font-bold">{quest.badge.name}</h3>
            <p className="text-sm text-muted-foreground">{quest.badge.description}</p>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="w-full max-w-md space-y-3">
        <Button 
          size="lg" 
          className="w-full h-14 text-base font-semibold rounded-xl shadow-button"
          onClick={() => navigate('/community')}
        >
          <Share2 className="w-5 h-5 mr-2" />
          Share with Community
        </Button>
        <Button 
          size="lg" 
          variant="outline"
          className="w-full h-14 text-base font-semibold rounded-xl"
          onClick={() => navigate('/')}
        >
          <HomeIcon className="w-5 h-5 mr-2" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default QuestComplete;