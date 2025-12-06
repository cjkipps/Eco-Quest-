import { useState } from "react";
import { ArrowLeft, MapPin, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const CreatePost = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { image, title, type } = location.state || {};
  
  const [caption, setCaption] = useState("");
  const [locationText, setLocationText] = useState("");
  const [taggedPeople, setTaggedPeople] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const suggestedLocations = [
    "Central Park, New York",
    "Backyard Garden",
    "Local Nature Trail",
    "Community Garden",
    "Riverside Park"
  ];

  const suggestedPeople = [
    "Dorothy", "Margaret", "Robert", "Patricia", "Susan"
  ];

  const handleAddTag = (person: string) => {
    if (!taggedPeople.includes(person)) {
      setTaggedPeople([...taggedPeople, person]);
    }
    setTagInput("");
  };

  const handleRemoveTag = (person: string) => {
    setTaggedPeople(taggedPeople.filter(p => p !== person));
  };

  const handlePost = () => {
    // Store the new post in sessionStorage to pass to Community page
    const newPost = {
      id: Date.now(),
      user: {
        name: "Linda Thompson",
        avatar: "/placeholder.svg",
        handle: "@lindaexplores"
      },
      image: image,
      caption: caption || `Just discovered this amazing ${title}!`,
      likes: 0,
      comments: [],
      timeAgo: "Just now",
      location: locationText || "My Garden",
      category: type === "quest" ? "Plants" : "Insects"
    };
    
    // Get existing posts from sessionStorage or use empty array
    const existingPosts = JSON.parse(sessionStorage.getItem('userPosts') || '[]');
    existingPosts.unshift(newPost);
    sessionStorage.setItem('userPosts', JSON.stringify(existingPosts));
    
    toast({
      title: "Posted! 🎉",
      description: "Your discovery has been shared with the community.",
    });
    
    navigate('/community');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-muted rounded-full flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-xl font-bold text-foreground">New Post</h1>
        </div>
        <Button 
          onClick={handlePost}
          className="rounded-full px-6"
        >
          Post
        </Button>
      </div>

      <div className="p-4 space-y-6">
        {/* Image Preview */}
        <Card className="overflow-hidden border-0 shadow-card">
          <div className="relative aspect-square">
            <img 
              src={image || "/placeholder.svg"} 
              alt="Post preview" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              {title || "Discovery"}
            </div>
          </div>
        </Card>

        {/* Caption */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Write a caption</label>
          <Textarea
            placeholder="Share your nature discovery story..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="min-h-[100px] resize-none rounded-xl"
          />
        </div>

        {/* Location */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Add Location
          </label>
          <Input
            placeholder="Where was this taken?"
            value={locationText}
            onChange={(e) => setLocationText(e.target.value)}
            className="rounded-xl"
          />
          <div className="flex flex-wrap gap-2">
            {suggestedLocations.map((loc) => (
              <button
                key={loc}
                onClick={() => setLocationText(loc)}
                className="px-3 py-1.5 bg-muted rounded-full text-sm text-muted-foreground hover:bg-muted/80 transition-colors"
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* Tag People */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            Tag People
          </label>
          
          {taggedPeople.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {taggedPeople.map((person) => (
                <span
                  key={person}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {person}
                  <button onClick={() => handleRemoveTag(person)}>
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
            </div>
          )}
          
          <Input
            placeholder="Search people to tag..."
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            className="rounded-xl"
          />
          <div className="flex flex-wrap gap-2">
            {suggestedPeople
              .filter(p => !taggedPeople.includes(p))
              .map((person) => (
                <button
                  key={person}
                  onClick={() => handleAddTag(person)}
                  className="px-3 py-1.5 bg-muted rounded-full text-sm text-muted-foreground hover:bg-muted/80 transition-colors"
                >
                  + {person}
                </button>
              ))}
          </div>
        </div>

        {/* Post Button (Mobile) */}
        <Button 
          onClick={handlePost}
          className="w-full h-14 text-lg font-semibold rounded-xl shadow-button"
        >
          Share to Community
        </Button>
      </div>
    </div>
  );
};

export default CreatePost;