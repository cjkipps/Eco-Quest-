import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quests from "./pages/Quests";
import QuestDetail from "./pages/QuestDetail";
import ActiveQuest from "./pages/ActiveQuest";
import QuestComplete from "./pages/QuestComplete";
import Badges from "./pages/Badges";
import BadgeDetail from "./pages/BadgeDetail";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Friends from "./pages/Friends";
import Chat from "./pages/Chat";
import PhotoGallery from "./pages/PhotoGallery";
import EditProfile from "./pages/EditProfile";
import PrivacySecurity from "./pages/PrivacySecurity";
import HelpFAQ from "./pages/HelpFAQ";
import IdentifyActive from "./pages/IdentifyActive";
import SpeciesIdentified from "./pages/SpeciesIdentified";
import CreatePost from "./pages/CreatePost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quests" element={<Quests />} />
          <Route path="/quest/:id" element={<QuestDetail />} />
          <Route path="/quest/active/:id" element={<ActiveQuest />} />
          <Route path="/quest/complete/:id" element={<QuestComplete />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/badge/:id" element={<BadgeDetail />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/chat/:friendId" element={<Chat />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/privacy-security" element={<PrivacySecurity />} />
          <Route path="/help-faq" element={<HelpFAQ />} />
          <Route path="/identify-active" element={<IdentifyActive />} />
          <Route path="/species-identified" element={<SpeciesIdentified />} />
          <Route path="/create-post" element={<CreatePost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
