import SettingButton from "./common/SettingButton";

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
      <header
        className="mx-auto relative w-full max-w-4xl px-4 py-3 sm:px-8 sm:py-4 lg:px-10
                     grid grid-cols-3 items-center"
      >
        {/* 왼쪽 */}
        <div className="justify-self-start flex items-center">{leftSlot}</div>

        {/* 가운데 */}
        <h1 className="text-center text-lg font-semibold tracking-tight text-white sm:text-2xl">
          {title}
        </h1>

        {/* 오른쪽 */}
        <div className="justify-self-end flex items-center">
          {rightSlot ? rightSlot : <SettingButton />}
        </div>
      </header>
    </div>
  );
}

export default MainHeader;
