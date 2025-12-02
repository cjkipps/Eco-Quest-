import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Send, Image, Smile, Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import avatarMargaret from "@/assets/avatar-margaret.jpg";
import avatarRobert from "@/assets/avatar-robert.jpg";
import avatarDorothy from "@/assets/avatar-dorothy.jpg";
import avatarPatricia from "@/assets/avatar-patricia.jpg";
import avatarLinda from "@/assets/avatar-linda.jpg";

interface Message {
  id: string;
  text: string;
  sender: "me" | "friend";
  timestamp: string;
  image?: string;
}

const Chat = () => {
  const navigate = useNavigate();
  const { friendId } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock friend data based on ID
  const friendData: Record<string, { name: string; avatar: string; isOnline: boolean }> = {
    "1": { name: "Margaret Wilson", avatar: avatarMargaret, isOnline: true },
    "2": { name: "Robert Chen", avatar: avatarRobert, isOnline: true },
    "3": { name: "Dorothy Harris", avatar: avatarDorothy, isOnline: false },
    "4": { name: "James Martinez", avatar: avatarPatricia, isOnline: false },
    "5": { name: "Helen Brown", avatar: avatarLinda, isOnline: false },
  };

  const friend = friendData[friendId || "1"] || friendData["1"];

  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Good morning Linda! Did you see the beautiful cardinal in the garden today?", sender: "friend", timestamp: "9:30 AM" },
    { id: "2", text: "Yes! I managed to get a photo of it! 📸", sender: "me", timestamp: "9:32 AM" },
    { id: "3", text: "That's wonderful! The cardinals have been so active lately.", sender: "friend", timestamp: "9:33 AM" },
    { id: "4", text: "Are you working on the pollinator quest too?", sender: "friend", timestamp: "9:34 AM" },
    { id: "5", text: "I am! I found a monarch butterfly yesterday near the lavender. Just need one more sighting!", sender: "me", timestamp: "9:36 AM" },
    { id: "6", text: "The lavender garden is perfect for that. I'll be there this afternoon if you want to quest together!", sender: "friend", timestamp: "9:38 AM" },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    
    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: "me",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages([...messages, message]);
    setNewMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-card shadow-soft sticky top-0 z-20">
        <div className="px-4 py-3 flex items-center gap-3">
          <button 
            onClick={() => navigate('/friends')}
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          
          <div className="relative">
            <div className="w-11 h-11 rounded-full overflow-hidden">
              <img src={friend.avatar} alt={friend.name} className="w-full h-full object-cover" />
            </div>
            {friend.isOnline && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-card" />
            )}
          </div>
          
          <div className="flex-1">
            <h1 className="font-semibold text-foreground">{friend.name}</h1>
            <p className="text-xs text-muted-foreground">
              {friend.isOnline ? "Online" : "Last seen recently"}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.sender === "me"
                  ? "bg-primary text-primary-foreground rounded-br-md"
                  : "bg-card shadow-card text-foreground rounded-bl-md"
              }`}
            >
              <p className="text-[15px] leading-relaxed">{message.text}</p>
              <p
                className={`text-[11px] mt-1 ${
                  message.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-2 bg-background">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Button variant="outline" size="sm" className="whitespace-nowrap text-xs border-border">
            🦋 Share my discovery
          </Button>
          <Button variant="outline" size="sm" className="whitespace-nowrap text-xs border-border">
            📍 Meet at garden?
          </Button>
          <Button variant="outline" size="sm" className="whitespace-nowrap text-xs border-border">
            🎯 Quest together?
          </Button>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-card border-t border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <Camera className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <Image className="w-5 h-5" />
          </button>
          
          <div className="flex-1 relative">
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="pr-10 bg-muted border-0 h-11 rounded-full"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              <Smile className="w-5 h-5" />
            </button>
          </div>
          
          <Button 
            size="icon" 
            className="w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-button"
            onClick={handleSend}
            disabled={!newMessage.trim()}
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
