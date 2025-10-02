import { useMemo, useRef } from "react";
import type { Post } from "../../types/feed";
import { formatHandle } from "../../utils/format";
import AppModal from "../AppModal";
import PostActions from "./PostActions";
import PostCommentForm from "./PostCommentForm";
import PostHeader from "./PostHeader";

interface PostDetailModalProps {
  post: Post | null;
  isOpen: boolean;
  onClose: () => void;
}

// 피드 포스트 상세 내용을 모달로 노출
function PostDetailModal({ post, isOpen, onClose }: PostDetailModalProps) {
  const commentInputRef = useRef<HTMLInputElement | null>(null);

  const formattedHandle = useMemo(
    () => (post ? formatHandle(post.author) : ""),
    [post]
  );

  if (!post) {
    return null;
  }

  const accentHue = (post.imageHue + 40) % 360;
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, hsl(${post.imageHue}, 55%, 38%), hsl(${accentHue}, 60%, 28%))`,
  } as const;

  const handleCommentFocus = () => {
    commentInputRef.current?.focus();
  };

  return (
    <AppModal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel={`${post.author}님의 게시물 상세 모달`}
      className="max-w-3xl overflow-hidden p-0"
    >
      <article className="flex flex-col sm:flex-row sm:divide-x sm:divide-white/10">
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
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <PostActions
            likes={post.likes}
            onCommentClick={handleCommentFocus}
            className="pt-2"
          />

          {/* <PostStats likeLabel={likeLabel} /> */}

          <PostCommentForm inputRef={commentInputRef} />
        </div>
      </article>
    </AppModal>
  );
}

export default PostDetailModal;
