import { CalendarDays, Link2, MapPin, Share2 } from 'lucide-react';
import type { ReactNode } from 'react';
import { formatCount } from '../../utils/format';
import type { ProfileData } from '../../types/profile';
import BaseButton from '../BaseButton';

interface ProfileHeroProps {
  profile: ProfileData;
  onShareClick?: () => void;
  onEditClick?: () => void;
  isOwner?: boolean;
  actionSlot?: ReactNode;
}

// Threads 스타일의 프로필 히어로 영역을 렌더링
function ProfileHero({
  profile,
  onShareClick,
  onEditClick,
  isOwner = true,
  actionSlot,
}: ProfileHeroProps) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
      <div className="flex w-full items-start justify-between gap-6">
        <div className="space-y-3">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">{profile.name}</h2>
            <p className="text-sm text-neutral-500 sm:text-base">@{profile.handle}</p>
          </div>
          <p className="text-sm leading-relaxed text-neutral-200 sm:text-base">{profile.bio}</p>
          {profile.badges.length ? (
            <div className="flex flex-wrap items-center gap-2">
              {profile.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold tracking-wide text-neutral-200 uppercase"
                >
                  {badge}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        {/* 프로필 사진 */}
        <div className="flex h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-neutral-700 via-neutral-800 to-black sm:h-20 sm:w-20">
          {profile.avatarUrl ? (
            <img
              src={profile.avatarUrl}
              alt={`${profile.name} 프로필 사진`}
              className="h-full w-full object-cover"
            />
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5">
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-neutral-400 sm:text-sm">
          {profile.location ? (
            <li className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              {profile.location}
            </li>
          ) : null}
          {profile.joined ? (
            <li className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden />
              {profile.joined}
            </li>
          ) : null}
          {profile.website ? (
            <li className="flex items-center gap-1.5">
              <Link2 className="h-3.5 w-3.5" aria-hidden />
              <span className="font-semibold text-white">{profile.website}</span>
            </li>
          ) : null}
        </ul>

        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
          <span>
            <span className="mr-1 font-semibold text-white">
              {formatCount(profile.stats.threads)}
            </span>
            Threads
          </span>
          <span>
            <span className="mr-1 font-semibold text-white">
              {formatCount(profile.stats.followers)}
            </span>
            Followers
          </span>
          <span>
            <span className="mr-1 font-semibold text-white">
              {formatCount(profile.stats.following)}
            </span>
            Following
          </span>
        </div>
      </div>

      {actionSlot ?? (
        <div className="flex items-start gap-2 sm:flex-col sm:items-end">
          {isOwner ? (
            <>
              <BaseButton
                size="sm"
                variant="outline"
                className="flex items-center gap-2 text-xs sm:text-sm"
                onClick={onShareClick}
              >
                <Share2 className="h-3.5 w-3.5" aria-hidden />
                공유
              </BaseButton>
              <BaseButton size="sm" className="text-xs sm:text-sm" onClick={onEditClick}>
                프로필 편집
              </BaseButton>
            </>
          ) : (
            <>
              <BaseButton size="sm" className="text-xs sm:text-sm">
                팔로우
              </BaseButton>
              <BaseButton size="sm" variant="outline" className="text-xs sm:text-sm">
                메시지
              </BaseButton>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default ProfileHero;
