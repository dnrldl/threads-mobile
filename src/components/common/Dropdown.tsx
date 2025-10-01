import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../../utils/cn";

interface DropdownItem {
  id: string;
  label: ReactNode;
  onSelect?: () => void;
  disabled?: boolean;
  className?: string;
}

interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
  align?: "left" | "right";
  menuClassName?: string;
  triggerClassName?: string;
}

// 공용 드롭다운 컴포넌트 (클릭 트리거 + 간단한 메뉴)
function Dropdown({
  trigger,
  items,
  align = "left",
  menuClassName,
  triggerClassName,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return undefined;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        !menuRef.current?.contains(event.target as Node) &&
        !triggerRef.current?.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div className="relative inline-flex">
      <button
        ref={triggerRef}
        type="button"
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-neutral-200 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40",
          triggerClassName
        )}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {trigger}
      </button>

      {open ? (
        <div
          ref={menuRef}
          role="menu"
          className={cn(
            "absolute z-40 mt-2 min-w-[160px] overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/95 p-1 text-sm text-neutral-100 shadow-lg backdrop-blur",
            align === "right" ? "right-0" : "left-0",
            menuClassName
          )}
        >
          {items.map(({ id, label, onSelect, disabled, className }) => (
            <button
              key={id}
              type="button"
              role="menuitem"
              disabled={disabled}
              className={cn(
                "w-full cursor-pointer rounded-xl px-3 py-2 text-left transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50",
                className
              )}
              onClick={() => {
                if (disabled) return;
                onSelect?.();
                setOpen(false);
                triggerRef.current?.focus();
              }}
            >
              {label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export type { DropdownItem };
export default Dropdown;
