import { Link } from "react-router-dom";
import IconButton from "./IconButton";
import BaseButton from "./BaseButton";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";

// 간단한 로그인 인터페이스를 제공하는 카드 컴포넌트
function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-sm rounded-2xl border border-neutral-800 bg-black/70 p-5 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.8)] sm:p-6">
      <div className="space-y-2">
        <p className="text-sm font-semibold text-neutral-200">로그인</p>
        <p className="text-xs text-neutral-500">
          Threads에 입장하려면 계정 정보를 입력하세요.
        </p>
      </div>

      <form className="mt-5 space-y-4">
        <label className="block text-xs font-semibold text-neutral-400">
          이메일
          <span className="mt-1 flex items-center rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm">
            <Mail className="mr-2 h-4 w-4 text-neutral-500" aria-hidden />
            <input
              type="email"
              inputMode="email"
              className="flex-1 bg-transparent text-neutral-100 outline-none placeholder:text-neutral-600"
              placeholder="you@example.com"
            />
          </span>
        </label>

        <label className="block text-xs font-semibold text-neutral-400">
          비밀번호
          <span className="mt-1 flex items-center rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm">
            <Lock className="mr-2 h-4 w-4 text-neutral-500" aria-hidden />
            <input
              type={showPassword ? "text" : "password"}
              className="flex-1 bg-transparent text-neutral-100 outline-none placeholder:text-neutral-600"
              placeholder="••••••••"
            />
            <IconButton
              icon={showPassword ? EyeOff : Eye}
              aria-label="비밀번호 표시 전환"
              className="ml-2 text-neutral-500 hover:text-neutral-200"
              iconClassName="h-4 w-4"
              onClick={(event) => {
                event.preventDefault();
                setShowPassword((value) => !value);
              }}
            />
          </span>
        </label>

        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-400">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-neutral-700 bg-neutral-950 text-sky-500 focus:ring-sky-400/60"
            />
            로그인 상태 유지
          </label>
          <button type="button" className="font-semibold text-sky-400">
            비밀번호 찾기
          </button>
        </div>

        <BaseButton type="submit" className="w-full">
          로그인
        </BaseButton>
      </form>

      <p className="mt-4 text-center text-xs text-neutral-500">
        계정이 없으신가요?
        <Link to="/signup" className="ml-1 font-semibold text-white underline">
          가입하기
        </Link>
      </p>
    </div>
  );
}

export default LoginCard;
