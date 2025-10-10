import { useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import MainBottomNav from '../components/MainBottomNav';
import MainHeader from '../components/MainHeader';
import MobileBackButton from '../components/MobileBackButton';
import PostCard from '../components/PostCard';
import ProfileHero from '../components/profile/ProfileHero';
import ProfileTabBar, { type ProfileTab } from '../components/profile/ProfileTabBar';
import { getProfileContent, DEFAULT_PROFILE_ID } from '../data/profiles';
import MainLayout from '../layouts/MainLayout';
import type { Post } from '../types/feed';

// Threads 프로필 페이지 구성을 위한 탭 타입 정의
type TabId = 'threads' | 'replies' | 'reposts';

const tabs: ProfileTab<TabId>[] = [
  { id: 'threads', label: '스레드' },
  { id: 'replies', label: '답글' },
  { id: 'reposts', label: '리포스트' },
];

function ProfilePage() {
  const { id } = useParams<{ id?: string }>();
  const location = useLocation();
  const locationState = location.state as { authorName?: string } | null;
  const profileId = id ?? DEFAULT_PROFILE_ID;
  const content = useMemo(() => getProfileContent(profileId), [profileId]);
  const fallbackContent = useMemo(() => getProfileContent(DEFAULT_PROFILE_ID)!, []);
  const isOwnProfile = !id || profileId === DEFAULT_PROFILE_ID;

  const displayName = content ? content.profile.name : (locationState?.authorName ?? profileId);

  const placeholderProfile = useMemo(() => {
    if (content) return content.profile;
    return {
      ...fallbackContent.profile,
      name: displayName,
      handle: profileId,
      bio: '프로필을 준비 중입니다.',
      location: '',
      website: '',
      badges: [],
      stats: {
        threads: 0,
        followers: 0,
        following: 0,
      },
    };
  }, [content, displayName, fallbackContent, profileId]);

  const activeContent = useMemo(() => {
    if (content) return content;
    return {
      profile: placeholderProfile,
      threads: [],
      replies: [],
      reposts: [],
      pinnedThreadId: undefined,
    };
  }, [content, placeholderProfile]);

  const pinnedThread = useMemo(() => {
    if (!activeContent.pinnedThreadId) return undefined;
    return activeContent.threads.find((thread) => thread.id === activeContent.pinnedThreadId);
  }, [activeContent]);

  const [activeTab, setActiveTab] = useState<TabId>('threads');

  const threadPosts = useMemo(() => {
    if (!pinnedThread) return activeContent.threads;
    return activeContent.threads.filter((post) => post.id !== pinnedThread.id);
  }, [activeContent.threads, pinnedThread]);

  const tabPosts: Record<TabId, Post[]> = {
    threads: threadPosts,
    replies: activeContent.replies,
    reposts: activeContent.reposts,
  };
  const activePosts = tabPosts[activeTab];

  const emptyMessages: Record<TabId, string> = {
    threads: '아직 작성한 스레드가 없어요.',
    replies: '아직 남긴 답글이 없어요.',
    reposts: '아직 리포스트한 콘텐츠가 없어요.',
  };

  // const headerTitle = isOwnProfile
  //   ? "내 프로필"
  //   : `${activeContent.profile.name} 님`;

  const headerLeftSlot = isOwnProfile ? undefined : <MobileBackButton />;
  const headerTitle = isOwnProfile ? '내 프로필' : `${displayName} 님`;

  return (
    <MainLayout
      header={<MainHeader title={headerTitle} leftSlot={headerLeftSlot} rightSlot={null} />}
      bottomNav={<MainBottomNav />}
    >
      <section className="space-y-6">
        <ProfileHero profile={activeContent.profile} isOwner={isOwnProfile} />
        <ProfileTabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </section>

      {activeTab === 'threads' && pinnedThread ? (
        /* 핀된 스레드는 Threads 탭에서만 노출 */
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-xs tracking-wide text-neutral-500 uppercase">
            <span className="font-semibold text-neutral-400">Pinned</span>
            <span className="text-neutral-600">·</span>
            <span>최근 업데이트 {pinnedThread.timeAgo}</span>
          </div>
          <PostCard post={pinnedThread} />
        </section>
      ) : null}

      <section className="space-y-4">
        {activeTab === 'threads' ? (
          <div className="text-xs tracking-wide text-neutral-500 uppercase">최근 스레드</div>
        ) : null}

        {activePosts.length ? (
          <div className="space-y-6 sm:space-y-8">
            {activePosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-12 text-center text-sm text-neutral-500 sm:px-10 sm:py-16">
            {emptyMessages[activeTab]}
          </div>
        )}
      </section>
    </MainLayout>
  );
}

export default ProfilePage;
