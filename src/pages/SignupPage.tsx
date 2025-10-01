import MobileBackButton from "../components/MobileBackButton";
import SignupCard from "../components/SignupCard";

// 신규 가입 프로세스를 담당하는 전용 페이지 컴포넌트
function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-neutral-50">
      <header className="relative flex items-center justify-center border-b border-white/10 px-4 py-4 sm:px-6">
        <MobileBackButton className="absolute left-4 top-1/2 -translate-y-1/2" />
        <div className="text-center">
          <h1 className="mt-1 text-xl font-semibold text-white">회원 가입</h1>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6">
        <div className="w-full max-w-[440px] space-y-6 text-center">
          <SignupCard />
        </div>
      </main>
    </div>
  );
}

export default SignupPage;
