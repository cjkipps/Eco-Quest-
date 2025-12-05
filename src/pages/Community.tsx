import { Heart, MessageCircle, Filter, X, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BottomNav } from "@/components/BottomNav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import cardinal from "@/assets/cardinal.jpg";
import ladybug from "@/assets/ladybug.jpg";
import beeLavender from "@/assets/bee-lavender.jpg";
import avatarLinda from "@/assets/avatar-linda.jpg";
import avatarRobert from "@/assets/avatar-robert.jpg";
import avatarPatricia from "@/assets/avatar-patricia.jpg";

interface Comment {
  id: number;
  user: string;
  text: string;
  time: string;
}

interface Post {
  id: number;
  user: {
    name: string;
    avatar: string;
    time: string;
  };
  discovery: string;
  image: string;
  likes: number;
  comments: Comment[];
  liked: boolean;
}

const initialPosts: Post[] = [
  {
    id: 1,
    user: {
      name: "Linda Chen",
      avatar: avatarLinda,
      time: "2 hours ago"
    },
    discovery: "Northern Cardinal",
    image: cardinal,
    likes: 12,
    comments: [
      { id: 1, user: "Robert", text: "Beautiful shot!", time: "1h ago" },
      { id: 2, user: "Patricia", text: "I love cardinals!", time: "30m ago" },
    ],
    liked: false,
  },
  {
    id: 2,
    user: {
      name: "Robert Martinez",
      avatar: avatarRobert,
      time: "5 hours ago"
    },
    discovery: "Seven-spotted Ladybug",
    image: ladybug,
    likes: 8,
    comments: [
      { id: 1, user: "Linda", text: "So cute!", time: "4h ago" },
    ],
    liked: false,
  },
  {
    id: 3,
    user: {
      name: "Patricia Wong",
      avatar: avatarPatricia,
      time: "1 day ago"
    },
    discovery: "Bumblebee on Lavender",
    image: beeLavender,
    likes: 15,
    comments: [
      { id: 1, user: "Linda", text: "Great timing!", time: "23h ago" },
      { id: 2, user: "Robert", text: "Amazing detail", time: "20h ago" },
    ],
    liked: false,
  },
];

const Community = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  const handleAddComment = (postId: number, text: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, {
            id: post.comments.length + 1,
            user: "You",
            text,
            time: "Just now"
          }]
        };
      }
      return post;
    }));
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground px-6 py-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold">Community</h1>
          <Button 
            size="sm" 
            variant="ghost" 
            className="text-secondary-foreground hover:bg-white/20"
          >
            <Filter className="w-5 h-5" />
          </Button>
        </div>
        <p className="text-secondary-foreground/90">See what others are discovering</p>
      </div>

      {/* Tabs */}
      <div className="px-6 mt-6">
        <Tabs defaultValue="recent" className="w-full">
          <TabsList className="w-full bg-muted/50 p-1 h-12 rounded-xl mb-6">
            <TabsTrigger value="recent" className="flex-1 rounded-lg text-base data-[state=active]:bg-card data-[state=active]:shadow-sm">
              Recent
            </TabsTrigger>
            <TabsTrigger value="week" className="flex-1 rounded-lg text-base data-[state=active]:bg-card data-[state=active]:shadow-sm">
              This Week
            </TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="space-y-4 mt-0">
            {posts.map((post) => (
              <PostCard 
                key={post.id} 
                post={post} 
                onLike={handleLike}
                onAddComment={handleAddComment}
              />
            ))}
          </TabsContent>

          <TabsContent value="week" className="space-y-4 mt-0">
            {posts.map((post) => (
              <PostCard 
                key={post.id} 
                post={post} 
                onLike={handleLike}
                onAddComment={handleAddComment}
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>

      <BottomNav />
    </div>
  );
};

interface PostCardProps {
  post: Post;
  onLike: (postId: number) => void;
  onAddComment: (postId: number, text: string) => void;
}

const PostCard = ({ post, onLike, onAddComment }: PostCardProps) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      onAddComment(post.id, newComment.trim());
      setNewComment("");
    }
  };

  return (
    <Card className="overflow-hidden border-0 shadow-card">
      {/* User Info */}
      <div className="p-4 flex items-center gap-3">
        <Avatar className="w-12 h-12 border-2 border-primary/10">
          <AvatarImage src={post.user.avatar} alt={post.user.name} />
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
            {post.user.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">{post.user.name}</h3>
          <p className="text-sm text-muted-foreground">{post.user.time}</p>
        </div>
      </div>

      {/* Discovery Text */}
      <div className="px-4 pb-3">
        <p className="text-foreground">
          Discovered a <span className="text-primary font-semibold">{post.discovery}</span>!
        </p>
      </div>

      {/* Image */}
      <div className="relative h-80">
        <img 
          src={post.image} 
          alt={post.discovery} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="p-4 flex items-center gap-6">
        <button 
          onClick={() => onLike(post.id)}
          className={`flex items-center gap-2 transition-colors ${
            post.liked ? 'text-destructive' : 'text-muted-foreground hover:text-destructive'
          }`}
        >
          <Heart className={`w-6 h-6 ${post.liked ? 'fill-current' : ''}`} />
          <span className="font-semibold">{post.likes}</span>
        </button>
        <button 
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="font-semibold">{post.comments.length}</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="border-t border-border px-4 py-3 space-y-3">
          {/* Existing Comments */}
          {post.comments.map((comment) => (
            <div key={comment.id} className="flex gap-2">
              <span className="font-semibold text-sm">{comment.user}:</span>
              <span className="text-sm text-muted-foreground flex-1">{comment.text}</span>
              <span className="text-xs text-muted-foreground">{comment.time}</span>
            </div>
          ))}
          
          {/* Add Comment */}
          <div className="flex gap-2 pt-2">
            <Input
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmitComment()}
              className="flex-1 h-9"
            />
            <Button 
              size="sm" 
              onClick={handleSubmitComment}
              disabled={!newComment.trim()}
              className="h-9"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Community;
