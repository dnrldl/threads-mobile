interface MainHeaderProps {
  title?: string;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

// 상단 헤더 컴포넌트
function MainHeader({
  title = "Threads",
  leftSlot,
  rightSlot,
}: MainHeaderProps) {
  return (
    <div className="sticky top-0 border-b border-white/5 bg-black/80 backdrop-blur">
      <header className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-3 sm:px-8 sm:py-4 lg:px-10">
        <div className="flex items-center flex-1">{leftSlot}</div>

        <h1 className="text-lg mx-auto font-semibold tracking-tight text-white sm:text-2xl">
          {title}
        </h1>

        <div className="flex items-center flex-1">{rightSlot}</div>
      </header>
    </div>
  );
}

export default MainHeader;
