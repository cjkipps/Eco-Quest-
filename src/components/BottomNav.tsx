import { Home, Camera, Award, Users } from "lucide-react";
import { NavLink } from "./NavLink";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/quests", icon: Camera, label: "Quests" },
  { to: "/badges", icon: Award, label: "Badges" },
  { to: "/community", icon: Users, label: "Community" },
];

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50">
      <div className="max-w-md mx-auto px-4">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all text-muted-foreground hover:text-primary"
                activeClassName="text-primary font-medium"
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
