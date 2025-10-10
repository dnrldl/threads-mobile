import StoryRing from './StoryRing';
import type { Story } from '../types/feed';

interface ActiveUsersSectionProps {
  stories: Story[];
}

// Threads 피드 상단의 활동 중인 사용자 스트립
function ActiveUsersSection({ stories }: ActiveUsersSectionProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] px-3 py-4 sm:px-6">
      <h2 className="px-1 text-[11px] font-semibold tracking-wide text-neutral-400 uppercase sm:text-xs">
        지금 활발한 사람들
      </h2>
      <div className="mt-3 flex gap-4 overflow-x-auto pb-2 sm:gap-6">
        {stories.map((story) => (
          <StoryRing key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
}

export default ActiveUsersSection;
