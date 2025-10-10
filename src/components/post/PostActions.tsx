import { Heart, MessageCircle, Repeat2, Send } from 'lucide-react';
import { usePostAction } from '../../hooks/usePostAction';
import { formatCount } from '../../utils/format';
import IconButton from '../IconButton';

interface PostActionsProps {
  className?: string;
  likes?: number;
  comments?: number;
  onCommentClick?: () => void;
}

// 좋아요, 댓글 등 상호작용 버튼 그룹
function PostActions({
  className = '',
  likes = 0,
  comments = 0,
  onCommentClick,
}: PostActionsProps) {
  const { isLiked, likeCount, commentCount, toggleLike } = usePostAction({
    initialLikeCount: likes,
    initialCommentCount: comments,
  });

  const displayLikes = formatCount(likeCount);
  const displayComments = commentCount > 0 ? formatCount(commentCount) : null;

  return (
    <div className={`flex items-center gap-4 text-white/90 sm:gap-5 ${className}`.trim()}>
      <div className="flex items-center gap-1.5">
        <IconButton
          icon={Heart}
          aria-label="좋아요"
          className="hover:opacity-80"
          iconClassName={`transition ${isLiked ? 'fill-red-500 text-red-500' : ''}`.trim()}
          aria-pressed={isLiked}
          size={5}
          onClick={toggleLike}
        />
        <span className="text-xs">{displayLikes}</span>
      </div>

      <div className="flex items-center gap-1.5">
        <IconButton
          icon={MessageCircle}
          aria-label="댓글"
          className="hover:opacity-80"
          size={5}
          onClick={onCommentClick}
        />
        {displayComments ? <span className="text-xs">{displayComments}</span> : null}
      </div>
      <div className="flex items-center gap-1.5">
        <IconButton icon={Repeat2} aria-label="리포스트" className="hover:opacity-80" size={5} />
      </div>
      <div className="flex items-center gap-1.5">
        <IconButton icon={Send} aria-label="공유" className="hover:opacity-80" size={5} />
      </div>
    </div>
  );
}

export default PostActions;
