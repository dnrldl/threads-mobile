import type { ButtonHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";

// 아이콘과 상호작용 스타일을 공통으로 묶어주는 버튼 컴포넌트
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  size?: number;
  color?: string;
  fill?: string;
  iconClassName?: string;
}

function IconButton({
  icon: Icon,
  size = 6,
  className = "",
  iconClassName = "",
  type = "button",
  color,
  fill,
  ...buttonProps
}: IconButtonProps) {
  // 추가 스타일을 병합해 일관된 크기/커서를 유지
  return (
    <button
      type={type}
      className={`cursor-pointer transition duration-150 active:scale-95 hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none ${className}`.trim()}
      {...buttonProps}
    >
      <Icon
        className={`h-${size} w-${size} ${iconClassName}`.trim()}
        aria-hidden
        color={color}
        fill={fill}
      />
    </button>
  );
}

export default IconButton;
