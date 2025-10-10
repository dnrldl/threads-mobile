import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import MainHeader from '../components/MainHeader';
import MainBottomNav from '../components/MainBottomNav';
import BaseButton from '../components/BaseButton';
import Select, { type SelectOption } from '../components/common/Select';

function ReportPage() {
  const [category, setCategory] = useState('bug');
  const categoryOptions: Array<SelectOption<typeof category>> = [
    { value: 'bug', label: '버그 또는 오류' },
    { value: 'abuse', label: '부적절한 콘텐츠' },
    { value: 'safety', label: '안전/보안 문제' },
    { value: 'other', label: '기타' },
  ];
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: send to API
    alert('신고가 접수되었습니다. 빠르게 확인하겠습니다.');
    setDescription('');
    setContact('');
    setCategory('bug');
  };

  return (
    <MainLayout
      header={<MainHeader title="문제 신고" rightSlot={null} />}
      bottomNav={<MainBottomNav />}
      scrollable
    >
      <section className="app-panel px-4 py-4 shadow-[0_24px_60px_-50px_rgba(0,0,0,0.8)] sm:px-8 sm:py-8">
        <header className="space-y-2">
          <h2 className="text-xl font-semibold text-white">무슨 일이 있었나요?</h2>
          <p className="text-sm text-neutral-400">
            버그나 부적절한 콘텐츠, 혹은 커뮤니티 가이드 위반 사례를 알려주세요.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-neutral-300">신고 유형</p>
            <Select value={category} onChange={setCategory} options={categoryOptions} />
          </div>

          <label className="block text-sm font-semibold text-neutral-300">
            상세 설명
            <textarea
              className="app-panel mt-2 h-32 w-full resize-none rounded-xl border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-white/40 focus:outline-none"
              placeholder="상황을 최대한 자세히 설명해 주세요."
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </label>

          <label className="block text-sm font-semibold text-neutral-300">
            연락받을 이메일 (선택)
            <input
              type="email"
              className="app-panel mt-2 w-full rounded-xl border border-white/10 px-4 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-white/40 focus:outline-none"
              placeholder="you@example.com"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
            />
          </label>

          <div className="flex items-center justify-end gap-3">
            <BaseButton
              type="button"
              variant="ghost"
              className="text-sm text-neutral-400 hover:text-white"
              onClick={() => {
                setCategory('bug');
                setDescription('');
                setContact('');
              }}
            >
              초기화
            </BaseButton>
            <BaseButton type="submit" className="text-sm font-semibold">
              신고 보내기
            </BaseButton>
          </div>
        </form>
      </section>
    </MainLayout>
  );
}

export default ReportPage;
