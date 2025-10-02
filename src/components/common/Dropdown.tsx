import { Fragment, type ReactNode } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { cn } from "../../utils/cn";

export interface DropdownItem {
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
  triggerClassName?: string;
  menuClassName?: string;
}

function Dropdown({
  trigger,
  items,
  align = "left",
  triggerClassName,
  menuClassName,
}: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-flex">
      <MenuButton
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-bolds text-neutral-200 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40 active:scale-90",
          triggerClassName
        )}
      >
        {trigger}
      </MenuButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <MenuItems
          className={cn(
            "app-panel absolute z-40 mt-2 top-10 min-w-[160px] overflow-hidden rounded-2xl border border-white/10 p-1 text-sm shadow-lg backdrop-blur focus:outline-none",
            align === "right" ? "right-0" : "left-0",
            menuClassName
          )}
        >
          {items.map(({ id, label, onSelect, disabled, className }) => (
            <MenuItem key={id} disabled={disabled} as={Fragment}>
              {({ active, disabled: itemDisabled }) => (
                <button
                  type="button"
                  className={cn(
                    "w-full rounded-xl px-3 py-2 text-left transition cursor-pointer",
                    active && "bg-white/10",
                    itemDisabled && "cursor-not-allowed opacity-50",
                    className
                  )}
                  onClick={() => {
                    if (itemDisabled) return;
                    onSelect?.();
                  }}
                >
                  {label}
                </button>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
}

export default Dropdown;
