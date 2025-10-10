import type { Post } from '../../types/feed';
import AppModal from '../AppModal';
import PostDetailContent from './PostDetailContent';

interface PostDetailModalProps {
  post: Post | null;
  isOpen: boolean;
  onClose: () => void;
}

// 피드 포스트 상세 내용을 모달로 노출
function PostDetailModal({ post, isOpen, onClose }: PostDetailModalProps) {
  if (!post) {
    return null;
  }

  return (
    <AppModal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel={`${post.author}님의 게시물 상세 모달`}
      className="max-w-3xl overflow-hidden p-0"
    >
      <PostDetailContent post={post} />
    </AppModal>
  );
}

export default PostDetailModal;
