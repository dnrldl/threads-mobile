import { Smile } from "lucide-react";
import type { Ref } from "react";

interface PostCommentFormProps {
  placeholder?: string;
  submitLabel?: string;
  inputRef?: Ref<HTMLInputElement> | undefined;
}

// 답글 입력 폼
function PostCommentForm({
  placeholder = "답글 추가...",
  submitLabel = "게시",
  inputRef,
}: PostCommentFormProps) {
  return (
    <div className="flex items-center gap-3 border-t border-neutral-900 pt-3">
      <span className="text-base text-neutral-600">
        <Smile />
      </span>
      <input
        ref={inputRef}
        className="flex-1 bg-transparent text-sm text-neutral-200 outline-none placeholder:text-neutral-600"
        placeholder={placeholder}
      />
      <button
        type="button"
        className="text-xs font-semibold text-white/80 hover:text-white"
      >
        {submitLabel}
      </button>
    </div>
  );
}

export default PostCommentForm;
