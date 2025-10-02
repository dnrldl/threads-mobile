import { Fragment, type ReactNode } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
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
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="app-overlay fixed inset-0 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto px-4">
          <div className="flex min-h-full items-center justify-center py-8">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel
                className={cn(
                  "app-panel relative w-full max-w-lg rounded-3xl border border-white/10 p-6 text-neutral-100 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.8)]",
                  className
                )}
                aria-label={ariaLabel ?? title}
              >
                {(title || description) && (
                  <div className="space-y-2">
                    {title ? (
                      <DialogTitle className="text-lg font-semibold text-white">
                        {title}
                      </DialogTitle>
                    ) : null}
                    {description ? (
                      <Dialog.Description className="text-sm text-neutral-400">
                        {description}
                      </Dialog.Description>
                    ) : null}
                  </div>
                )}

                {(children || (items && items.length > 0)) && (
                  <div className="mt-4 text-sm text-neutral-100">
                    {children}
                    {items ? <AppModalItem items={items} /> : null}
                  </div>
                )}

                {footer ? (
                  <div className="mt-6 border-t border-white/10 pt-4">
                    {footer}
                  </div>
                ) : null}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default AppModal;
