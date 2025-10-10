import { useEffect, useState } from 'react';
import FeedSkeleton from '../components/loading/FeedSkeleton';
import MainBottomNav from '../components/MainBottomNav';
import MainHeader from '../components/MainHeader';
import PostCard from '../components/PostCard';
import FeedTabs, { type FeedTabId } from '../components/feed/FeedTabs';
import { posts as initialPosts } from '../data/feed';
import MainLayout from '../layouts/MainLayout';
import type { Post } from '../types/feed';

const followingPlaceholderPosts: Post[] = [
  {
    id: 'following-1',
    author: '임진수',
    authorId: 'jinsu',
    location: '대한민국 부산',
    avatarHue: 210,
    imageHue: 185,
    caption:
      '새로 팔로우한 스튜디오에서 색채 워크숍을 열었어요. 다음 주에는 직접 만든 팔레트를 공유할 예정!',
    likes: 87,
    timeAgo: '방금 전',
    tags: ['#팔로잉', '#워크숍'],
  },
  {
    id: 'following-2',
    author: 'Yuna Park',
    authorId: 'yunapark',
    location: '일본 도쿄',
    avatarHue: 45,
    imageHue: 65,
    caption: '팀 콜 끝나고 즐기는 루프 스케치. 오늘은 팔로워들과 코드 아트 과정을 함께 나눠봤어요.',
    likes: 152,
    timeAgo: '1시간 전',
    tags: ['#크리에이터', '#공유'],
  },
];

// 메인 피드 페이지
function FeedPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<FeedTabId>('for-you');
  const [posts, setPosts] = useState<Post[]>([]);

  const isForYouTab = activeTab === 'for-you';
  const postsToRender = isForYouTab ? posts : followingPlaceholderPosts;
  const shouldShowSkeleton = isForYouTab && isLoading;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPosts(initialPosts);
      setIsLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <MainLayout header={<MainHeader />} bottomNav={<MainBottomNav />}>
      <section className="space-y-6 sm:space-y-8">
        <FeedTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {shouldShowSkeleton ? (
          <FeedSkeleton />
        ) : (
          <div className="space-y-6 sm:space-y-8">
            {postsToRender.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </MainLayout>
  );
}

export default FeedPage;
