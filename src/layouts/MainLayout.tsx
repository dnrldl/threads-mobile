import { useScrollDirection } from "../hooks/useScrollDirection";
import { cn } from "../utils/cn";

interface MainLayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
  bottomNav: React.ReactNode;
  scrollable?: boolean;
}

// 전체 뼈대를 구성하는 레이아웃
function MainLayout({
  header,
  children,
  bottomNav,
  scrollable,
}: MainLayoutProps) {
  const direction = useScrollDirection();
  const hideChrome = direction === "down";

  return (
    <div className="flex min-h-[100dvh] flex-col bg-black text-neutral-100">
      <div
        className={cn(
          "sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur transition-transform duration-300",
          scrollable ? (hideChrome ? "-translate-y-full" : "translate-y-0") : ""
        )}
      >
        {header}
      </div>
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 py-2 sm:gap-8 sm:px-10 sm:py-8">
        {children}
      </main>

      <nav
        className={cn(
          "sticky bottom-0 px-8 z-20 rounded-full mt-auto border-t border-white/10 bg-black/80 backdrop-blur transition-transform duration-300 sm:px-10 sm:py-4"
        )}
      >
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between text-lg text-neutral-500 sm:text-xl">
          {bottomNav}
        </div>
      </nav>
    </div>
  );
}

export default MainLayout;
