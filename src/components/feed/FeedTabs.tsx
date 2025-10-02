import type { Dispatch, SetStateAction } from "react";
import { cn } from "../../utils/cn";

export type FeedTabId = "for-you" | "following";

interface FeedTabsProps {
  activeTab: FeedTabId;
  onTabChange: Dispatch<SetStateAction<FeedTabId>>;
}

const tabs: Array<{ id: FeedTabId; label: string }> = [
  { id: "for-you", label: "추천" },
  { id: "following", label: "팔로잉" },
];

function FeedTabs({ activeTab, onTabChange }: FeedTabsProps) {
  return (
    <div className="border-b border-white/10">
      <div className="flex justify-between">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              type="button"
              className={cn(
                "flex-1 relative pb-3 text-sm tracking-wide uppercase text-neutral-500 transition hover:text-white",
                isActive && "text-white"
              )}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
              <span
                className={cn(
                  "absolute left-0 bottom-0 h-0.5 w-full rounded-full bg-white transition-opacity",
                  isActive ? "opacity-100" : "opacity-0"
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FeedTabs;
