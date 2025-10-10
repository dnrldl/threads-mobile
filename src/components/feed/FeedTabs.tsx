import { Tab, TabGroup, TabList } from '@headlessui/react';
import type { Dispatch, SetStateAction } from 'react';
import { cn } from '../../utils/cn';

export type FeedTabId = 'for-you' | 'following';

interface FeedTabsProps {
  activeTab: FeedTabId;
  onTabChange: Dispatch<SetStateAction<FeedTabId>>;
}

const tabs: Array<{ id: FeedTabId; label: string }> = [
  { id: 'for-you', label: '추천' },
  { id: 'following', label: '팔로잉' },
];

function FeedTabs({ activeTab, onTabChange }: FeedTabsProps) {
  return (
    <TabGroup
      selectedIndex={tabs.findIndex((tab) => tab.id === activeTab)}
      onChange={(index) => onTabChange(tabs[index]?.id ?? 'for-you')}
    >
      <TabList className="flex justify-between border-b border-white/10">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            className={({ selected }) =>
              cn(
                'relative flex-1 cursor-pointer pb-3 text-sm font-semibold tracking-wide text-neutral-500 uppercase transition focus:outline-none',
                selected ? 'text-white' : 'hover:text-white'
              )
            }
          >
            {({ selected }) => (
              <>
                {tab.label}
                <span
                  className={cn(
                    'absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-white transition-opacity',
                    selected ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </>
            )}
          </Tab>
        ))}
      </TabList>
    </TabGroup>
  );
}

export default FeedTabs;
