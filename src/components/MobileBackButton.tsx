import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MobileBackButtonProps {
  className?: string;
}

// 모바일 환경에서 이전 화면으로 돌아갈 수 있는 백 버튼
function MobileBackButton({ className = '' }: MobileBackButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className={`inline-flex items-center gap-1 text-sm font-semibold text-white transition hover:border-white/40 sm:hidden ${className}`.trim()}
      aria-label="뒤로 가기"
    >
      <ArrowLeft className="h-6 w-6" />
      {/* <span className="translate-x-1">뒤로</span> */}
    </button>
  );
}

export default MobileBackButton;
