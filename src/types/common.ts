import type { LucideIcon } from "lucide-react";

export type ModalItem = {
  title: string;
  icon: LucideIcon;
  action: () => void;
  variant?: "default" | "danger";
};
