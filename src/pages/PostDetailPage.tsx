import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import MainBottomNav from '../components/MainBottomNav';
import MainHeader from '../components/MainHeader';
import MobileBackButton from '../components/MobileBackButton';
import PostDetailContent from '../components/post/PostDetailContent';
import { posts } from '../data/feed';
import MainLayout from '../layouts/MainLayout';

function PostDetailPage() {
  const { id } = useParams<{ id: string }>();

  const post = useMemo(() => posts.find((item) => item.id === id), [id]);
  const headerTitle = post ? `${post.author}님의 게시물` : '게시물';

  const header = (
    <MainHeader title={headerTitle} leftSlot={<MobileBackButton />} rightSlot={null} />
  );

  if (!post) {
    return (
      <MainLayout header={header} bottomNav={<MainBottomNav />}>
        <section className="flex flex-1 items-center justify-center py-20">
          <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.02] px-8 py-12 text-center text-sm text-neutral-500 sm:px-12 sm:py-16">
            요청하신 게시글을 찾을 수 없어요.
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout header={header} bottomNav={<MainBottomNav />}>
      <section className="flex flex-1 flex-col py-4">
        <div className="app-panel overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.8)]">
          <PostDetailContent post={post} />
        </div>
      </section>
    </MainLayout>
  );
}

export default PostDetailPage;
