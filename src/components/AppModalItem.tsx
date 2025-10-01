import type { ModalItem } from "../types/common";

interface AppModalItemProps {
  items: ModalItem[];
}

function AppModalItem({ items }: AppModalItemProps) {
  return (
    <div>
      <ul className="space-y-2 text-left text-sm">
        {items.map((item) => {
          const Icon = item.icon ?? null;
          const isDanger = item.variant === "danger";

          return (
            <li key={item.title}>
              <button
                className={`w-full rounded-lg bg-white/5 p-4 text-center  transition ${
                  isDanger
                    ? "text-red-400 hover:bg-red-500/20"
                    : "text-neutral-200 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>{item.title}</div>

                  {Icon && <Icon />}
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AppModalItem;
