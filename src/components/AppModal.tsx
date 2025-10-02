import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { cn } from "../utils/cn";
import type { ModalItem } from "../types/common";
import AppModalItem from "./AppModalItem";

interface AppModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  footer?: ReactNode;
  className?: string;
  items?: ModalItem[];
  children?: ReactNode;
  ariaLabel?: string;
}

// Threads 스타일의 공통 모달 컴포넌트
function AppModal({
  isOpen,
  onClose,
  title,
  description,
  footer,
  className,
  items,
  children,
  ariaLabel,
}: AppModalProps) {
  useEffect(() => {
    if (!isOpen || typeof document === "undefined") return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <button
        aria-label="모달 닫기"
        type="button"
        onClick={onClose}
        className="app-overlay absolute inset-0 h-full w-full backdrop-blur-sm"
      />

      <div
        className={cn(
          "app-panel relative w-full sm:max-w rounded-3xl border border-white/10 p-6 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.8)]",
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-label={title ?? ariaLabel}
      >
        {title || description ? (
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              {title ? (
                <h2 className="text-lg font-semibold text-white">{title}</h2>
              ) : null}
              {description ? (
                <p className="text-sm text-neutral-400">{description}</p>
              ) : null}
            </div>
          </div>
        ) : null}

        {children || (items && items.length > 0) ? (
          <div className=" text-sm text-neutral-200">
            {children}
            {items ? <AppModalItem items={items} /> : null}
          </div>
        ) : null}

        {footer ? (
          <div className="mt-6 border-t border-white/10 pt-4">{footer}</div>
        ) : null}
      </div>
    </div>,
    document.body
  );
}

export default AppModal;
