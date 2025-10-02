import Skeleton from "../common/Skeleton";

// 개별 포스트 카드 스켈레톤
function PostSkeleton() {
  return (
    <article className="app-panel rounded-3xl border border-neutral-900 p-4 sm:p-6">
      <div className="flex items-start gap-3">
        <Skeleton className="h-10 w-10" rounded="full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-[85%]" />
        <Skeleton className="h-3 w-[60%]" />
      </div>

      <div className="mt-6 flex items-center gap-4">
        <Skeleton className="h-6 w-12" rounded="full" />
        <Skeleton className="h-6 w-12" rounded="full" />
        <Skeleton className="h-6 w-12" rounded="full" />
      </div>
    </article>
  );
}

export default PostSkeleton;
