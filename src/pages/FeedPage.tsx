import { useEffect, useState } from "react";
import FeedSkeleton from "../components/loading/FeedSkeleton";
import MainBottomNav from "../components/MainBottomNav";
import MainHeader from "../components/MainHeader";
import PostCard from "../components/PostCard";
import FeedTabs, { type FeedTabId } from "../components/feed/FeedTabs";
import { posts as initialPosts } from "../data/feed";
import MainLayout from "../layouts/MainLayout";
import type { Post } from "../types/feed";

// 메인 피드 페이지
function FeedPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<FeedTabId>("for-you");
  const [posts, setPosts] = useState<Post[]>([]);

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

        {isLoading ? (
          <FeedSkeleton />
        ) : (
          <div className="space-y-6 sm:space-y-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </MainLayout>
  );
}

export default FeedPage;
