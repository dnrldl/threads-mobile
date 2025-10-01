import { useState } from "react";

interface UsePostParams {
  initialIsLiked?: boolean;
  initialLikeCount?: number;
  initialCommentCount?: number;
}

export const usePostAction = ({
  initialIsLiked,
  initialLikeCount,
  initialCommentCount,
}: UsePostParams) => {
  const [isLiked, setIsLiked] = useState(initialIsLiked ?? false);
  const [likeCount, setLikeCount] = useState(initialLikeCount ?? 0);
  const [commentCount] = useState(initialCommentCount ?? 0);

  const toggleLike = () => {
    setIsLiked((prev) => {
      setLikeCount((count) => (prev ? Math.max(0, count - 1) : count + 1));
      return !prev;
    });
  };

  return {
    isLiked,
    likeCount,
    commentCount,

    toggleLike,
  };
};
