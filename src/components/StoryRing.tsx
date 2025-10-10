import { Plus } from 'lucide-react';
import type { Story } from '../types/feed';

// Threads 스타일의 라운드 아바타 컴포넌트
interface StoryRingProps {
  story: Story;
}

function StoryRing({ story }: StoryRingProps) {
  const isSelf = story.id === 'self';
  // Threads는 흑백 대비가 강하므로 심플한 링만 사용
  const ringClasses = isSelf
    ? 'border-white/80'
    : story.seen
      ? 'border-neutral-700'
      : 'border-neutral-300';

  return (
    <button className="flex w-14 cursor-pointer flex-col items-center gap-1.5 text-[10px] text-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:w-16 sm:text-[11px]">
      <span className="relative flex h-11 w-11 items-center justify-center sm:h-12 sm:w-12">
        <span
          className={`app-panel flex h-full w-full items-center justify-center rounded-full border ${ringClasses}`}
        >
          <span className="h-9 w-9 overflow-hidden rounded-full bg-gradient-to-br from-neutral-800 via-neutral-700 to-black sm:h-10 sm:w-10" />
        </span>
        {isSelf ? (
          <span className="absolute -right-1 -bottom-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-white text-black shadow-md sm:h-5 sm:w-5">
            <Plus className="h-3 w-3" aria-hidden />
            <span className="sr-only">새 스토리 추가</span>
          </span>
        ) : null}
      </span>
      <span className="text-center leading-tight text-neutral-500">
        {isSelf ? '나' : story.name}
      </span>
    </button>
  );
}

export default StoryRing;
