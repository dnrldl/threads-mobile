import { Link } from 'react-router-dom';
import { useState } from 'react';
import IconButton from './IconButton';
import BaseButton from './BaseButton';
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';

// 신규 사용자 가입 폼을 출력하는 카드 컴포넌트
function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="app-panel w-full max-w-sm rounded-2xl border border-neutral-800 p-5 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.8)] sm:p-6">
      <div className="space-y-1">
        {/* <p className="text-xl font-semibold text-neutral-200">회원 가입</p> */}
        <p className="text-xs text-neutral-500">Threads 계정을 지금 만들어보세요.</p>
      </div>

      <form className="mt-6 space-y-4">
        <label className="block text-xs font-semibold text-neutral-400">
          이름
          <span className="mt-1 flex items-center rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm">
            <User className="mr-2 h-4 w-4 text-neutral-500" aria-hidden />
            <input
              type="text"
              className="flex-1 bg-transparent text-neutral-100 outline-none placeholder:text-neutral-600"
              placeholder="홍길동"
            />
          </span>
        </label>

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
              type={showPassword ? 'text' : 'password'}
              className="flex-1 bg-transparent text-neutral-100 outline-none placeholder:text-neutral-600"
              placeholder="최소 8자 이상"
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

        <label className="block text-xs font-semibold text-neutral-400">
          비밀번호 확인
          <span className="mt-1 flex items-center rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm">
            <Lock className="mr-2 h-4 w-4 text-neutral-500" aria-hidden />
            <input
              type={showConfirm ? 'text' : 'password'}
              className="flex-1 bg-transparent text-neutral-100 outline-none placeholder:text-neutral-600"
              placeholder="다시 한 번 입력"
            />
            <IconButton
              icon={showConfirm ? EyeOff : Eye}
              aria-label="비밀번호 확인 표시 전환"
              className="ml-2 text-neutral-500 hover:text-neutral-200"
              iconClassName="h-4 w-4"
              onClick={(event) => {
                event.preventDefault();
                setShowConfirm((value) => !value);
              }}
            />
          </span>
        </label>

        <div className="flex items-start gap-2 text-xs text-neutral-400">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-neutral-700 bg-neutral-950 text-sky-500 focus:ring-sky-400/60"
          />
          <span>이용약관과 개인정보 처리방침에 동의합니다.</span>
        </div>

        <BaseButton type="submit" className="w-full">
          가입하기
        </BaseButton>
      </form>

      <p className="mt-4 text-center text-xs text-neutral-500">
        이미 계정이 있으신가요?
        <Link to="/login" className="ml-1 font-semibold text-white underline">
          로그인
        </Link>
      </p>
    </div>
  );
}

export default SignupCard;
