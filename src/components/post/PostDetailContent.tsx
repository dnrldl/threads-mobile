import { useMemo, useRef } from 'react';
import type { Post } from '../../types/feed';
import { cn } from '../../utils/cn';
import { formatHandle } from '../../utils/format';
import PostActions from './PostActions';
import PostCommentForm from './PostCommentForm';
import PostHeader from './PostHeader';

interface PostDetailContentProps {
  post: Post;
  className?: string;
}

// 게시글 상세 뷰 본문을 구성하는 공용 컴포넌트
function PostDetailContent({ post, className = '' }: PostDetailContentProps) {
  const commentInputRef = useRef<HTMLInputElement | null>(null);

  const formattedHandle = useMemo(() => formatHandle(post.author), [post.author]);

  const accentHue = (post.imageHue + 40) % 360;
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, hsl(${post.imageHue}, 55%, 38%), hsl(${accentHue}, 60%, 28%))`,
  } as const;

  const handleCommentFocus = () => {
    commentInputRef.current?.focus();
  };

  return (
    <article className={cn('flex flex-col sm:flex-row sm:divide-x sm:divide-white/10', className)}>
      <div
        className="app-panel h-48 w-full flex-shrink-0 rounded-md sm:h-auto sm:w-[42%]"
        style={gradientStyle}
        aria-hidden
      />

      <div className="flex flex-1 flex-col gap-6 p-6 text-sm text-neutral-200 sm:p-8">
        <PostHeader
          author={post.author}
          handle={formattedHandle}
          timeAgo={post.timeAgo}
          location={post.location}
          avatarHue={post.avatarHue}
        />

        <div className="space-y-4">
          <p className="leading-relaxed text-neutral-100">{post.caption}</p>
          {post.tags.length > 0 ? (
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-white/80">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <PostActions likes={post.likes} onCommentClick={handleCommentFocus} className="pt-2" />

        <PostCommentForm inputRef={commentInputRef} />
      </div>
    </article>
  );
}

export default PostDetailContent;
