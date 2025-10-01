import { useState } from "react";
import { File, MoreHorizontal, Share, ShieldAlert } from "lucide-react";
import IconButton from "../IconButton";
import AppModal from "../AppModal";

interface PostHeaderProps {
  author: string;
  handle: string;
  timeAgo: string;
  location: string;
  avatarHue: number;
  authorId?: string;
  onAuthorClick?: (authorId?: string) => void;
}

// 카드 상단의 작성자 정보와 팔로우 버튼을 담당
function PostHeader({
  author,
  timeAgo,
  avatarHue,
  authorId,
  onAuthorClick,
}: PostHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAuthorClick = () => {
    onAuthorClick?.(authorId);
  };

  return (
    <header className="flex flex-row items-start justify-between gap-3">
      <div className="flex items-start gap-3">
        {/* 프로필 */}
        <button
          type="button"
          className="flex cursor-pointer flex-wrap items-start gap-x-2 gap-y-1 text-left"
          onClick={handleAuthorClick}
        >
          {/* 프로필 사진 */}
          <div
            className="h-8 w-8 rounded-full bg-gradient-to-br from-neutral-700 via-neutral-800 to-black ring-2 ring-neutral-900"
            style={{
              backgroundImage: `linear-gradient(135deg, hsl(${avatarHue},35%,65%), hsl(${
                avatarHue + 60
              },25%,35%))`,
            }}
          />

          <div>
            {/* 작성자 */}
            <span className="text-sm mr-2 font-semibold text-white">
              {author}
            </span>
            {/* 작성 시간 */}
            <span className="mt-0.5 flex-wrap items-center text-xs text-neutral-500">
              {timeAgo}
            </span>
          </div>
        </button>
      </div>
      <div className="flex items-center gap-2 self-start sm:gap-3">
        <IconButton
          icon={MoreHorizontal}
          aria-label="옵션 더보기"
          className="text-neutral-500 hover:text-neutral-200"
          size={5}
          onClick={() => setIsMenuOpen(true)}
        />
      </div>

      <AppModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        items={[
          {
            title: "링크 공유",
            action: () => {},
            icon: Share,
          },
          { title: "저장하기", action: () => {}, icon: File },
          {
            title: "게시글 신고",
            action: () => {},
            variant: "danger",
            icon: ShieldAlert,
          },
        ]}
        // title="게시글 옵션"
      />
    </header>
  );
}

export default PostHeader;
