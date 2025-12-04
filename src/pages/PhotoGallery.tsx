import { ArrowLeft, Camera, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import monarchButterfly from "@/assets/monarch-butterfly.jpg";
import beeLavender from "@/assets/bee-lavender.jpg";
import ladybug from "@/assets/ladybug.jpg";
import cardinal from "@/assets/cardinal.jpg";
import daffodils from "@/assets/daffodils.jpg";

const photos = [
  {
    id: 1,
    image: monarchButterfly,
    title: "Monarch Butterfly",
    date: "Nov 28, 2024",
    location: "Garden Area",
    quest: "Find a Pollinator"
  },
  {
    id: 2,
    image: beeLavender,
    title: "Busy Bee on Lavender",
    date: "Nov 25, 2024",
    location: "Lavender Patch",
    quest: "Busy Bees"
  },
  {
    id: 3,
    image: ladybug,
    title: "Ladybug on Leaf",
    date: "Nov 22, 2024",
    location: "Vegetable Garden",
    quest: "Ladybug Hunt"
  },
  {
    id: 4,
    image: cardinal,
    title: "Red Cardinal",
    date: "Nov 20, 2024",
    location: "Bird Feeder",
    quest: "Bird Watching"
  },
  {
    id: 5,
    image: daffodils,
    title: "Spring Daffodils",
    date: "Nov 18, 2024",
    location: "Flower Bed",
    quest: "Spring Blooms"
  },
];

const PhotoGallery = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="bg-card shadow-soft px-4 py-4 flex items-center gap-4">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 bg-muted rounded-full flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div>
          <h1 className="text-xl font-bold text-foreground">My Photo Gallery</h1>
          <p className="text-sm text-muted-foreground">{photos.length} photos captured</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="px-4 mt-6">
        <div className="grid grid-cols-2 gap-3">
          {photos.map((photo) => (
            <Card 
              key={photo.id} 
              className="border-0 shadow-card overflow-hidden"
            >
              <div className="aspect-square relative">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-foreground text-sm truncate">{photo.title}</h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <Calendar className="w-3 h-3" />
                  <span>{photo.date}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                  <MapPin className="w-3 h-3" />
                  <span>{photo.location}</span>
                </div>
                <div className="mt-2 px-2 py-1 bg-primary/10 rounded-full text-xs text-primary font-medium inline-block">
                  {photo.quest}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State Message */}
        <Card className="mt-6 p-6 border-0 shadow-card text-center bg-nature-light">
          <Camera className="w-12 h-12 text-primary mx-auto mb-3" />
          <h3 className="font-semibold text-foreground mb-1">Keep Exploring!</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Complete more quests to grow your photo collection
          </p>
          <Button onClick={() => navigate('/quests')}>
            Browse Quests
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default PhotoGallery;
