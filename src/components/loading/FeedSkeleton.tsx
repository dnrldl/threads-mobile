import PostSkeleton from './PostSkeleton';

interface FeedSkeletonProps {
  count?: number;
}

// 피드 전체에 대한 스켈레톤 묶음
function FeedSkeleton({ count = 4 }: FeedSkeletonProps) {
  return (
    <div className="space-y-6 sm:space-y-8">
      {Array.from({ length: count }).map((_, index) => (
        <PostSkeleton key={index} />
      ))}
    </div>
  );
}

export default FeedSkeleton;
