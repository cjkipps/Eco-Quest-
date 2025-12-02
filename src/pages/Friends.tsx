import { useState } from "react";
import { ArrowLeft, Search, UserPlus, MessageCircle, Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BottomNav } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

interface Friend {
  id: string;
  name: string;
  avatar: string;
  status: string;
  lastActive: string;
  quests: number;
  isOnline?: boolean;
}

interface FriendRequest {
  id: string;
  name: string;
  avatar: string;
  mutualFriends: number;
}

const Friends = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const friends: Friend[] = [
    { id: "1", name: "Margaret Wilson", avatar: "👵", status: "Just found a hummingbird!", lastActive: "2m ago", quests: 18, isOnline: true },
    { id: "2", name: "Robert Chen", avatar: "👴", status: "Working on bird quest", lastActive: "15m ago", quests: 32, isOnline: true },
    { id: "3", name: "Dorothy Harris", avatar: "👩‍🦳", status: "Garden exploration time", lastActive: "1h ago", quests: 12, isOnline: false },
    { id: "4", name: "James Martinez", avatar: "👨‍🦳", status: "Photography walk", lastActive: "3h ago", quests: 25, isOnline: false },
    { id: "5", name: "Helen Brown", avatar: "👵", status: "Butterfly watching", lastActive: "Yesterday", quests: 15, isOnline: false },
  ];

  const friendRequests: FriendRequest[] = [
    { id: "r1", name: "Susan Anderson", avatar: "👩‍🦰", mutualFriends: 3 },
    { id: "r2", name: "William Lee", avatar: "👨‍🦲", mutualFriends: 5 },
  ];

  const suggestedFriends: FriendRequest[] = [
    { id: "s1", name: "Patricia Davis", avatar: "👩‍🦱", mutualFriends: 4 },
    { id: "s2", name: "Michael Thompson", avatar: "👨‍🦳", mutualFriends: 2 },
    { id: "s3", name: "Barbara White", avatar: "👵", mutualFriends: 6 },
  ];

  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-card shadow-soft sticky top-0 z-20">
        <div className="px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <button 
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>
            <h1 className="text-xl font-bold text-foreground">Friends</h1>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search friends..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted border-0 h-11"
            />
          </div>
        </div>
      </div>

      <div className="px-4 pt-4">
        <Tabs defaultValue="friends" className="w-full">
          <TabsList className="w-full bg-muted p-1 h-12">
            <TabsTrigger value="friends" className="flex-1 data-[state=active]:bg-card">
              Friends ({friends.length})
            </TabsTrigger>
            <TabsTrigger value="requests" className="flex-1 data-[state=active]:bg-card">
              Requests ({friendRequests.length})
            </TabsTrigger>
            <TabsTrigger value="discover" className="flex-1 data-[state=active]:bg-card">
              Discover
            </TabsTrigger>
          </TabsList>

          {/* Friends List */}
          <TabsContent value="friends" className="mt-4 space-y-3">
            {filteredFriends.map((friend) => (
              <Card 
                key={friend.id} 
                className="bg-card border-0 shadow-card p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                      {friend.avatar}
                    </div>
                    {friend.isOnline && (
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-success rounded-full border-2 border-card" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground truncate">{friend.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{friend.status}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span>{friend.quests} quests</span>
                      <span>•</span>
                      <span>{friend.lastActive}</span>
                    </div>
                  </div>

                  <Button 
                    size="sm" 
                    className="bg-primary text-primary-foreground shadow-button"
                    onClick={() => navigate(`/chat/${friend.id}`)}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Friend Requests */}
          <TabsContent value="requests" className="mt-4 space-y-3">
            {friendRequests.length > 0 ? (
              friendRequests.map((request) => (
                <Card key={request.id} className="bg-card border-0 shadow-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-2xl">
                      {request.avatar}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground">{request.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {request.mutualFriends} mutual friends
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="w-9 h-9 p-0 border-destructive text-destructive">
                        <X className="w-4 h-4" />
                      </Button>
                      <Button size="sm" className="w-9 h-9 p-0 bg-primary text-primary-foreground">
                        <Check className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="text-4xl mb-3">📬</div>
                <p className="text-muted-foreground">No pending requests</p>
              </div>
            )}
          </TabsContent>

          {/* Discover Friends */}
          <TabsContent value="discover" className="mt-4 space-y-3">
            <p className="text-sm text-muted-foreground mb-4">
              People you may know from Sunset Gardens
            </p>
            {suggestedFriends.map((person) => (
              <Card key={person.id} className="bg-card border-0 shadow-card p-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-2xl">
                    {person.avatar}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">{person.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {person.mutualFriends} mutual friends
                    </p>
                  </div>

                  <Button size="sm" variant="outline" className="gap-2 border-primary text-primary">
                    <UserPlus className="w-4 h-4" />
                    Add
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      <BottomNav />
    </div>
  );
};

export default Friends;
