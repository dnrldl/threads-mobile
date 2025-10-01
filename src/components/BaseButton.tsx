import type { ButtonHTMLAttributes } from "react";
import { cn } from "../utils/cn";

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline" | "ghost";
  size?: "sm" | "md";
}

// 공통 버튼 스타일
function BaseButton({
  variant = "filled",
  size = "md",
  className,
  type = "button",
  ...props
}: BaseButtonProps) {
  const variants: Record<typeof variant, string> = {
    filled: "bg-white text-black hover:bg-neutral-200",
    outline: "border border-white/20 text-white hover:border-white/40",
    ghost: "text-white hover:bg-white/10",
  };

  const sizes: Record<typeof size, string> = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
  };

  return (
    <button
      type={type}
      className={cn("rounded-full font-semibold transition", variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export default BaseButton;
