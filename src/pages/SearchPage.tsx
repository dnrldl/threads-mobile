import { useMemo, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import MainHeader from '../components/MainHeader';
import MainBottomNav from '../components/MainBottomNav';
import TabBar, { type TabItem } from '../components/common/TabBar';
import { cn } from '../utils/cn';
import { formatCount } from '../utils/format';
import {
  popularTags,
  searchAccounts,
  trendingTopics,
  type SearchAccount,
  type SearchTag,
  type TrendingTopic,
} from '../data/search';

// 검색 결과를 탭으로 구분해 보여주는 페이지

type SearchTabId = 'trending' | 'accounts' | 'tags';

const tabs: TabItem<SearchTabId>[] = [
  { id: 'trending', label: '트렌드' },
  { id: 'accounts', label: '계정' },
  { id: 'tags', label: '태그' },
];

function SearchPage() {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<SearchTabId>('trending');

  const filteredTopics = useMemo(() => {
    const lower = query.trim().toLowerCase();
    if (!lower) return trendingTopics;
    return trendingTopics.filter((topic) =>
      [topic.title, topic.description, topic.category].join(' ').toLowerCase().includes(lower)
    );
  }, [query]);

  const filteredAccounts = useMemo(() => {
    const lower = query.trim().toLowerCase();
    if (!lower) return searchAccounts;
    return searchAccounts.filter((account) =>
      [account.name, account.handle, account.bio].join(' ').toLowerCase().includes(lower)
    );
  }, [query]);

  const filteredTags = useMemo(() => {
    const lower = query.trim().toLowerCase();
    if (!lower) return popularTags;
    return popularTags.filter((tag) =>
      [tag.tag, tag.description ?? ''].join(' ').toLowerCase().includes(lower)
    );
  }, [query]);

  const emptyMessages: Record<SearchTabId, string> = {
    trending: '일치하는 트렌드를 찾지 못했어요.',
    accounts: '조건에 맞는 계정이 아직 없어요.',
    tags: '해당 태그를 찾지 못했어요.',
  };

  const renderTopics = (topics: TrendingTopic[]) => (
    <ul className="space-y-4">
      {topics.map((topic) => (
        <li
          key={topic.id}
          className="app-panel rounded-2xl border border-white/10 px-5 py-4 shadow-[0_24px_60px_-55px_rgba(0,0,0,0.8)]"
        >
          <div className="text-xs tracking-wide text-neutral-500 uppercase">{topic.category}</div>
          <h3 className="mt-1 text-base font-semibold text-white">{topic.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-300">{topic.description}</p>
        </li>
      ))}
    </ul>
  );

  const renderAccounts = (accounts: SearchAccount[]) => (
    <ul className="space-y-3">
      {accounts.map((account) => (
        <li
          key={account.id}
          className="app-panel flex items-start justify-between rounded-2xl border border-white/10 px-5 py-4"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-white">{account.name}</h3>
              <span className="text-xs text-neutral-500">@{account.handle}</span>
            </div>
            <p className="text-xs text-neutral-400">{account.bio}</p>
          </div>
          <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold text-neutral-200">
            {formatCount(account.followers)} 팔로워
          </span>
        </li>
      ))}
    </ul>
  );

  const renderTags = (tags: SearchTag[]) => (
    <ul className="space-y-3">
      {tags.map((tag) => (
        <li
          key={tag.id}
          className="app-panel flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 px-5 py-4"
        >
          <div>
            <h3 className="text-sm font-semibold text-white">{tag.tag}</h3>
            {tag.description ? (
              <p className="mt-1 text-xs text-neutral-400">{tag.description}</p>
            ) : null}
          </div>
          <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold text-neutral-200">
            {formatCount(tag.posts)} 게시물
          </span>
        </li>
      ))}
    </ul>
  );

  const tabContent: Record<SearchTabId, JSX.Element> = {
    trending: filteredTopics.length
      ? renderTopics(filteredTopics)
      : emptyState(emptyMessages.trending),
    accounts: filteredAccounts.length
      ? renderAccounts(filteredAccounts)
      : emptyState(emptyMessages.accounts),
    tags: filteredTags.length ? renderTags(filteredTags) : emptyState(emptyMessages.tags),
  };

  return (
    <MainLayout header={<MainHeader title="검색" />} bottomNav={<MainBottomNav />} scrollable>
      <section className="space-y-6">
        <div className="app-panel rounded-3xl border border-white/10 px-5 py-4">
          <label htmlFor="global-search" className="text-xs font-semibold text-neutral-400">
            검색어 입력
          </label>
          <input
            id="global-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="계정, 주제, 태그를 검색하세요"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-2 text-sm text-white placeholder:text-neutral-600 focus:border-white/40 focus:outline-none"
          />
        </div>

        <TabBar<SearchTabId>
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          className="border-b border-white/5"
        />

        <div className={cn('space-y-4')}>{tabContent[activeTab]}</div>
      </section>
    </MainLayout>
  );
}

function emptyState(message: string) {
  return (
    <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-12 text-center text-sm text-neutral-500 sm:px-10 sm:py-16">
      {message}
    </div>
  );
}

export default SearchPage;
