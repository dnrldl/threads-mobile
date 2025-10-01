import { useMemo, useState } from "react";
import AppModal from "../AppModal";
import BaseButton from "../BaseButton";

interface ThreadComposerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MAX_LENGTH = 280;

// 새 스레드 작성을 위한 모달 컴포저
function ThreadComposerModal({ isOpen, onClose }: ThreadComposerModalProps) {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const remaining = useMemo(() => MAX_LENGTH - content.length, [content.length]);
  const isOverLimit = remaining < 0;
  const canSubmit = content.trim().length > 0 && !isOverLimit && !isSubmitting;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) return;

    try {
      setIsSubmitting(true);
      // TODO: API 연동 영역
      await new Promise((resolve) => setTimeout(resolve, 800));
      onClose();
      setContent("");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (isSubmitting) return;
    setContent("");
    onClose();
  };

  return (
    <AppModal
      isOpen={isOpen}
      onClose={handleClose}
      title="새 스레드 작성"
      description="생각을 공유하면 커뮤니티와 더 가까워집니다."
      className="max-w-xl"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-3">
          <label htmlFor="thread-content" className="text-sm font-semibold text-white">
            내용
          </label>
          <textarea
            id="thread-content"
            className="h-32 w-full resize-none rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 focus:border-white/30 focus:outline-none"
            placeholder="지금 무엇을 생각하고 계신가요?"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            maxLength={MAX_LENGTH * 2}
          />
          <div className="flex items-center justify-between text-xs text-neutral-500">
            <span>태그나 @멘션을 자유롭게 사용하세요.</span>
            <span className={isOverLimit ? "text-red-400" : undefined}>
              {remaining < 0 ? `-${Math.abs(remaining)}` : remaining} / {MAX_LENGTH}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3">
          <BaseButton
            type="button"
            variant="ghost"
            className="text-sm text-neutral-400 hover:text-white"
            onClick={handleClose}
          >
            취소
          </BaseButton>
          <BaseButton type="submit" disabled={!canSubmit} className="text-sm">
            {isSubmitting ? "게시 중..." : "게시"}
          </BaseButton>
        </div>
      </form>
    </AppModal>
  );
}

export default ThreadComposerModal;
