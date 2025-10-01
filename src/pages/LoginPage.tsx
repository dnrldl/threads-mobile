import MobileBackButton from "../components/MobileBackButton";
import LoginCard from "../components/LoginCard";
import { APP_BACKGROUND } from "../constants/theme";

// 전체 화면에 로그인 카드를 강조하는 페이지 컴포넌트
function LoginPage() {
  return (
    <div
      className="flex min-h-screen flex-col text-neutral-50"
      style={{ backgroundColor: APP_BACKGROUND }}
    >
      <header className="relative flex items-center justify-center border-b border-white/10 px-4 py-4 sm:px-6">
        <MobileBackButton className="absolute left-4 top-1/2 -translate-y-1/2" />
        <div className="text-center">
          <h1 className="mt-1 text-xl font-semibold text-white">로그인</h1>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6">
        <div className="w-full max-w-[420px] space-y-6 text-center">
          <p className="text-sm text-neutral-400">
            커뮤니티에 합류하려면 계정 정보를 입력하세요.
          </p>
          <LoginCard />
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
