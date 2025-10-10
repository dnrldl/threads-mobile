interface PostStatsProps {
  likeLabel: string;
  commentsLabel?: string;
}

// 좋아요 수, 댓글 안내 등 메타 정보 출력
function PostStats({ likeLabel, commentsLabel = '댓글 24개 보기' }: PostStatsProps) {
  return (
    <div className="space-y-1.5 text-xs text-neutral-500 sm:space-y-2">
      <p>
        <span className="font-medium text-neutral-100">{likeLabel}</span>
        <span className="ml-1">명이 좋아합니다</span>
      </p>
      <p className="inline cursor-pointer hover:text-neutral-300">{commentsLabel}</p>
    </div>
  );
}

export default PostStats;
