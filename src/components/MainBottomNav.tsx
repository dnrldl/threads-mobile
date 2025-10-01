import {
  Heart,
  Home,
  PenSquare,
  Search,
  User,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { cn } from "../utils/cn";
import ThreadComposerModal from "./thread/ThreadComposerModal";

interface RouteItem {
  id: string;
  icon: LucideIcon;
  path: string;
  label: string;
}

const routes: RouteItem[] = [
  { id: "home", icon: Home, path: "/", label: "홈" },
  { id: "search", icon: Search, path: "/search", label: "검색" },
  { id: "write", icon: PenSquare, path: "/write", label: "Thread 작성" },
  { id: "activity", icon: Heart, path: "/activity", label: "활동" },
  { id: "profile", icon: User, path: "/myprofile", label: "프로필" },
];

// 하단 내비게이션
function MainBottomNav() {
  const { isTop } = useScrollPosition();
  const location = useLocation();
  const navigate = useNavigate();
  const [isComposerOpen, setIsComposerOpen] = useState(false);

  const routeButtonClass = (isActive: boolean) =>
    cn(
      "flex h-9 w-9 my-2 items-center justify-center rounded-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
      isActive
        ? "bg-white/[0.08] text-white"
        : "text-neutral-500 hover:text-white"
    );

  const handleRouteClick = (path: string, isActive: boolean) => {
    if (!isActive) {
      navigate(path);
      return;
    }

    if (isTop) {
      navigate(0);
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {routes.map((route) => {
        const isActive = location.pathname === route.path;

        return (
          <button
            key={route.id}
            type="button"
            aria-label={route.label}
            className={routeButtonClass(isActive)}
            onClick={() => handleRouteClick(route.path, isActive)}
          >
            <route.icon className="h-6 w-6" aria-hidden />
          </button>
        );
      })}

      <ThreadComposerModal
        isOpen={isComposerOpen}
        onClose={() => setIsComposerOpen(false)}
      />
    </>
  );
}

export default MainBottomNav;
