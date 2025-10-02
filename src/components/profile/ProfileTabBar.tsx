import { Tab, TabGroup, TabList } from "@headlessui/react";
import type { Dispatch, SetStateAction, ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface ProfileTab<T extends string> {
  id: T;
  label: ReactNode;
}

interface ProfileTabBarProps<T extends string> {
  tabs: Array<ProfileTab<T>>;
  activeTab: T;
  onTabChange: Dispatch<SetStateAction<T>>;
}

function ProfileTabBar<T extends string>({
  tabs,
  activeTab,
  onTabChange,
}: ProfileTabBarProps<T>) {
  return (
    <TabGroup
      selectedIndex={tabs.findIndex((tab) => tab.id === activeTab)}
      onChange={(index) => onTabChange(tabs[index]?.id)}
    >
      <TabList className="flex gap-6 border-b border-white/10">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            className={({ selected }) =>
              cn(
                "relative pb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500 transition focus:outline-none cursor-pointer",
                selected ? "text-white" : "hover:text-white"
              )
            }
          >
            {({ selected }) => (
              <>
                {tab.label}
                <span
                  className={cn(
                    "absolute left-0 bottom-0 h-0.5 w-full rounded-full bg-white transition-opacity",
                    selected ? "opacity-100" : "opacity-0"
                  )}
                />
              </>
            )}
          </Tab>
        ))}
      </TabList>
    </TabGroup>
  );
}

export default ProfileTabBar;
