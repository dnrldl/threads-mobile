import SettingButton from './common/SettingButton';

interface MainHeaderProps {
  title?: string;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

// 상단 헤더 컴포넌트
function MainHeader({ title = 'Threads', leftSlot, rightSlot }: MainHeaderProps) {
  return (
    <div className="app-surface sticky top-0 border-b border-white/10 backdrop-blur">
      <header className="relative mx-auto grid w-full max-w-4xl grid-cols-3 items-center px-4 py-3 sm:px-8 sm:py-4 lg:px-10">
        {/* 왼쪽 */}
        <div className="flex items-center justify-self-start">{leftSlot}</div>

        {/* 가운데 */}
        <h1 className="text-center text-lg font-semibold tracking-tight text-white sm:text-2xl">
          {title}
        </h1>

        {/* 오른쪽 */}
        <div className="flex items-center justify-self-end">
          {rightSlot ? rightSlot : <SettingButton />}
        </div>
      </header>
    </div>
  );
}

export default MainHeader;
