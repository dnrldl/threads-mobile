import type { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  rounded?: 'sm' | 'md' | 'lg' | 'full';
}

const radiusMap: Record<NonNullable<SkeletonProps['rounded']>, string> = {
  sm: 'rounded-md',
  md: 'rounded-xl',
  lg: 'rounded-3xl',
  full: 'rounded-full',
};

// 기본 골격 로딩 컴포넌트
function Skeleton({ className, rounded = 'md', ...props }: SkeletonProps) {
  return (
    <div className={cn('animate-pulse bg-white/5', radiusMap[rounded], className)} {...props} />
  );
}

export default Skeleton;
