import { Camera, X, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { questDetails } from "./QuestDetail";

const ActiveQuest = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [captured, setCaptured] = useState(false);
  
  const quest = questDetails[id as keyof typeof questDetails] || questDetails.pollinator;

  const handleCapture = () => {
    setCaptured(true);
    setTimeout(() => {
      navigate(`/quest/complete/${id || 'pollinator'}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-foreground relative flex flex-col">
      {/* Camera View Simulation */}
      <div className="flex-1 relative bg-gradient-to-b from-nature-dark/20 to-nature-dark/40 flex items-center justify-center">
        {!captured ? (
          <>
            {/* Camera Viewfinder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 border-4 border-white/50 rounded-3xl" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-1 h-8 bg-white/50" />
                <div className="w-8 h-1 bg-white/50 absolute" />
              </div>
            </div>

            {/* Instructions */}
            <Card className="absolute top-8 left-4 right-4 p-4 bg-white/95 backdrop-blur border-0 shadow-lg">
              <h2 className="font-bold text-lg mb-1 flex items-center gap-2">
                <Camera className="w-5 h-5 text-primary" />
                {quest.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {quest.description}
              </p>
            </Card>

            {/* Close Button */}
            <button 
              onClick={() => navigate(-1)}
              className="absolute top-8 right-4 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            <p className="text-white text-xl font-bold">Great shot!</p>
          </div>
        )}
      </div>

      {/* Bottom Controls */}
      {!captured && (
        <div className="bg-background/95 backdrop-blur border-t border-border p-6">
          <div className="max-w-md mx-auto flex items-center justify-center gap-8">
            <div className="w-16" />
            
            {/* Capture Button */}
            <button 
              onClick={handleCapture}
              className="w-20 h-20 rounded-full bg-white border-4 border-primary shadow-lg active:scale-95 transition-transform relative"
            >
              <div className="absolute inset-2 rounded-full bg-primary" />
            </button>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="w-16 h-16 rounded-full"
            >
              <Sparkles className="w-6 h-6" />
            </Button>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-4">
            Tip: {quest.tips[0]}
          </p>
        </div>
      )}
    </div>
  );
};

export default ActiveQuest;