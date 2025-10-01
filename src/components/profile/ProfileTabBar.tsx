import TabBar, { type TabItem } from "../common/TabBar";

type ProfileTab<T extends string = string> = TabItem<T>;

interface ProfileTabBarProps<T extends string> {
  tabs: Array<ProfileTab<T>>;
  activeTab: T;
  onTabChange: (tabId: T) => void;
}

// 프로필의 스레드/답글/리포스트 전환 탭
function ProfileTabBar<T extends string>({
  tabs,
  activeTab,
  onTabChange,
}: ProfileTabBarProps<T>) {
  return <TabBar tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />;
}

export type { ProfileTab };
export default ProfileTabBar;
