import Skeleton from "../common/Skeleton";

// 프로필 히어로 영역 스켈레톤
function ProfileHeroSkeleton() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        <div className="flex items-start gap-6">
          <div className="space-y-3">
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-4 w-24" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-64" />
              <Skeleton className="h-3 w-56" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-6 w-16" rounded="full" />
              <Skeleton className="h-6 w-20" rounded="full" />
            </div>
          </div>
          <Skeleton className="h-16 w-16 sm:h-24 sm:w-24" rounded="full" />
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <Skeleton className="h-3 w-48" />
          <Skeleton className="h-3 w-40" />
          <div className="flex flex-wrap gap-3">
            <Skeleton className="h-6 w-20" rounded="full" />
            <Skeleton className="h-6 w-20" rounded="full" />
            <Skeleton className="h-6 w-20" rounded="full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileHeroSkeleton;
