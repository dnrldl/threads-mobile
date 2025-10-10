interface TrendingTopic {
  id: string;
  title: string;
  description: string;
  category: string;
}

interface SearchAccount {
  id: string;
  name: string;
  handle: string;
  bio: string;
  followers: number;
}

interface SearchTag {
  id: string;
  tag: string;
  posts: number;
  description?: string;
}

export const trendingTopics: TrendingTopic[] = [
  {
    id: 'topic-ai',
    title: '실시간 생성형 AI 협업',
    description: '디자이너와 개발자가 같은 화면에서 모델을 튜닝하는 워크플로우가 화제입니다.',
    category: '테크',
  },
  {
    id: 'topic-coffee',
    title: '도심 스페셜티 커피 투어',
    description: '서울에서 바리스타들이 추천한 5곳, 주말 라이브세션까지 포함된 일정.',
    category: '라이프스타일',
  },
  {
    id: 'topic-festival',
    title: '커뮤니티 아트 페스티벌',
    description: '거리 예술가와 메이커들이 함께하는 야간 마켓, 참여 신청 오픈.',
    category: '컬쳐',
  },
];

export const searchAccounts: SearchAccount[] = [
  {
    id: 'acct-amira',
    name: 'Amira Chen',
    handle: 'amira.codes',
    bio: '프로덕트 엔지니어 · async 팀 문화 전도사',
    followers: 48690,
  },
  {
    id: 'acct-luis',
    name: 'Luis Romero',
    handle: 'chef.luis',
    bio: '빠에야 연구소 운영, 지역 식재료 큐레이션',
    followers: 32450,
  },
  {
    id: 'acct-nyla',
    name: 'Nyla Patel',
    handle: 'nyla.studio',
    bio: '네온 팔레트를 탐구하는 커뮤니티 아티스트',
    followers: 28100,
  },
];

export const popularTags: SearchTag[] = [
  {
    id: 'tag-creators',
    tag: '#크리에이터',
    posts: 18234,
    description: '새로운 협업 툴과 제작 프로세스 공유',
  },
  {
    id: 'tag-nightnote',
    tag: '#야간노트',
    posts: 14210,
    description: '새벽 시간대 올리는 작업/생각 기록',
  },
  {
    id: 'tag-makers',
    tag: '#메이커',
    posts: 22054,
    description: 'DIY 하드웨어, 재활용 소재 프로젝트',
  },
];

export type { TrendingTopic, SearchAccount, SearchTag };
