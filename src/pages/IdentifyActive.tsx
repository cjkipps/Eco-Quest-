import { X, Zap, FlipHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const IdentifyActive = () => {
  const navigate = useNavigate();

  const handleCapture = () => {
    navigate('/species-identified');
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Camera View Simulation */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center text-white/60">
            <div className="w-64 h-64 border-2 border-white/40 rounded-3xl mx-auto mb-4 flex items-center justify-center">
              <p className="text-lg">Point at a species</p>
            </div>
            <p className="text-sm">Center the subject in the frame</p>
          </div>
        </div>
      </div>

      {/* Top Controls */}
      <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
        <button 
          onClick={() => navigate('/quests')}
          className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        
        <div className="text-center">
          <span className="text-white text-lg font-semibold">Identify Species</span>
        </div>

        <button className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
          <Zap className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Hint Text */}
      <div className="absolute top-24 left-0 right-0 text-center">
        <p className="text-white/80 text-sm px-6">
          Take a photo of any plant, bird, insect, or wildlife to identify it
        </p>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 pb-12 pt-8 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center justify-center gap-8">
          {/* Gallery */}
          <button className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <div className="w-10 h-10 rounded-lg bg-primary/50" />
          </button>

          {/* Capture Button */}
          <button 
            onClick={handleCapture}
            className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg"
          >
            <div className="w-16 h-16 rounded-full border-4 border-primary bg-white" />
          </button>

          {/* Flip Camera */}
          <button className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <FlipHorizontal className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdentifyActive;
