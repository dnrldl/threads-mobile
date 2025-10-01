import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type TabId = string;

interface TabItem<T extends TabId = TabId> {
  id: T;
  label: ReactNode;
}

interface TabBarProps<T extends TabId> {
  tabs: Array<TabItem<T>>;
  activeTab: T;
  onTabChange: (tabId: T) => void;
  className?: string;
  tabClassName?: string;
}

// 공통 탭 바 컴포넌트: 탭 배열과 활성 탭 상태만 주입하면 스타일을 공유할 수 있음
function TabBar<T extends TabId>({
  tabs,
  activeTab,
  onTabChange,
  className,
  tabClassName,
}: TabBarProps<T>) {
  return (
    <nav className={cn("flex gap-2 border-b border-white/10", className)}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "flex-1 border-b-2 pt-1 pb-3 text-sm font-semibold transition-colors sm:text-base",
            activeTab === tab.id
              ? "border-white text-white"
              : "border-transparent text-neutral-500 hover:text-white",
            tabClassName
          )}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

export type { TabItem };
export default TabBar;
