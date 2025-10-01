import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Post } from "../types/feed";
import { formatHandle } from "../utils/format";
import PostActions from "./post/PostActions";
import PostHeader from "./post/PostHeader";
import PostDetailModal from "./post/PostDetailModal";

// 개별 포스트 피드를 렌더링하기 위한 프롭 타입
interface PostCardProps {
  post: Post;
}

const CAPTION_PREVIEW_LENGTH = 80;

function PostCard({ post }: PostCardProps) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isCaptionExpanded, setIsCaptionExpanded] = useState(false);
  const navigate = useNavigate();
  const formattedHandle = useMemo(
    () => formatHandle(post.author),
    [post.author]
  );

  const truncatedCaption = useMemo(() => {
    if (post.caption.length <= CAPTION_PREVIEW_LENGTH) return post.caption;
    const slice = post.caption.slice(0, CAPTION_PREVIEW_LENGTH).trimEnd();
    // return `${slice}${slice.length < post.caption.length ? "..." : ""}`;
    return slice;
  }, [post.caption]);

  const isLongCaption = post.caption.length > CAPTION_PREVIEW_LENGTH;
  const captionToDisplay = isCaptionExpanded ? post.caption : truncatedCaption;

  const handleOpenDetail = () => setIsDetailOpen(true);
  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setIsCaptionExpanded(false);
  };

  const profileId = post.authorId ?? formattedHandle;
  const handleAuthorClick = () => {
    navigate(`/profile/${profileId}`, { state: { authorName: post.author } });
  };

  // Threads 피드 특유의 흑백 대비와 텍스트 중심 구성을 반영
  return (
    <>
      <article className="rounded-3xl border border-neutral-900 bg-black/90 p-4 shadow-[0_30px_80px_-60px_rgba(15,15,15,0.9)] sm:p-6">
        <PostHeader
          author={post.author}
          handle={formattedHandle}
          timeAgo={post.timeAgo}
          location={post.location}
          avatarHue={post.avatarHue}
          authorId={profileId}
          onAuthorClick={handleAuthorClick}
        />

        <div className="mt-4 space-y-4 sm:space-y-5">
          {/* 글 */}
          <div className="space-y-2">
            <p
              onClick={handleOpenDetail}
              className="text-sm leading-relaxed text-neutral-100 cursor-pointer"
            >
              {captionToDisplay + (isLongCaption ? "..." : "")}{" "}
              {isLongCaption ? (
                <button
                  type="button"
                  className="text-xs font-semibold text-neutral-400 hover:text-neutral-300 cursor-pointer"
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsCaptionExpanded((value) => !value);
                  }}
                >
                  {isCaptionExpanded ? "접기" : "더 보기"}
                </button>
              ) : null}
            </p>
          </div>
          <div className="mb-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="ml-1 text-xs font-semibold text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>

          <PostActions likes={post.likes} onCommentClick={handleOpenDetail} />
        </div>
      </article>

      <PostDetailModal
        post={post}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
      />
    </>
  );
}

export default PostCard;
