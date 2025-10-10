import type { ProfileContent, ProfileDictionary } from '../types/profile';

export const DEFAULT_PROFILE_ID = 'amira';

const amiraContent: ProfileContent = {
  profile: {
    name: 'Amira Chen',
    handle: 'amira.codes',
    bio: '⚙️ 프로덕트 엔지니어 / 밤에는 크리에이티브 코더. 사람을 위한 시스템을 만듭니다.',
    location: 'Singapore',
    joined: '2021년 6월 가입',
    website: 'amira.dev',
    badges: ['초창기 멤버', "Threads Awards '24"],
    stats: {
      threads: 182,
      followers: 48690,
      following: 312,
    },
  },
  threads: [
    {
      id: 'amira-thread-1',
      author: 'Amira Chen',
      authorId: 'amira',
      location: 'Singapore',
      avatarHue: 205,
      imageHue: 210,
      caption:
        '빌드가 새벽 2시에 통과했을 때 나는 다시 한번 커피를 내렸다. 이번엔 팀을 위해 자동화된 테스트 러너를 오픈소스로 공개할 생각!',
      likes: 1210,
      timeAgo: '1d',
      tags: ['#buildinpublic', '#typescript'],
    },
    {
      id: 'amira-thread-2',
      author: 'Amira Chen',
      authorId: 'amira',
      location: 'Singapore',
      avatarHue: 205,
      imageHue: 210,
      caption:
        '디자인 시스템의 토큰을 다층 구조로 재편했다. 덕분에 다크 모드에서 대비 조정이 훨씬 쉬워졌고, 모바일/데스크톱 파편화도 줄었다.',
      likes: 980,
      timeAgo: '3d',
      tags: ['#designsystems', '#accessibility'],
    },
    {
      id: 'amira-thread-3',
      author: 'Amira Chen',
      authorId: 'amira',
      location: 'Singapore',
      avatarHue: 205,
      imageHue: 210,
      caption:
        '팀 온보딩 자료를 노션에서 Threads로 옮기는 실험 중. 콘텍스트 + 대화 흐름이 한 화면에 살아있으니 상대가 훨씬 빠르게 적응한다!',
      likes: 734,
      timeAgo: '5d',
      tags: ['#팀문화', '#async'],
    },
  ],
  replies: [
    {
      id: 'amira-reply-1',
      author: 'Amira Chen',
      authorId: 'amira',
      location: 'Singapore',
      avatarHue: 205,
      imageHue: 210,
      caption:
        '@sana 이거 너무 좋네요! 데이터 동기화 부분은 Webhooks로 처리한 건가요? 다음 주 스페이스에서 더 듣고 싶어요.',
      likes: 218,
      timeAgo: '12h',
      tags: ['#async', '#techtalk'],
    },
    {
      id: 'amira-reply-2',
      author: 'Amira Chen',
      authorId: 'amira',
      location: 'Singapore',
      avatarHue: 205,
      imageHue: 210,
      caption:
        '@leo 리팩터링 플로우 공유해줘서 고마워요. 비동기 처리 단계에 상태 머신을 쓰면 복잡도가 꽤 줄어들더라고요!',
      likes: 174,
      timeAgo: '2d',
      tags: ['#refactor', '#typescript'],
    },
  ],
  reposts: [
    {
      id: 'amira-repost-1',
      author: 'Threads Dev Update',
      authorId: 'threads-dev',
      location: 'Remote',
      avatarHue: 320,
      imageHue: 280,
      caption: '이번 분기 롤아웃되는 API v2 프리뷰. 더 많은 확장 포인트가 열립니다!',
      likes: 1490,
      timeAgo: '3d',
      tags: ['#threadsapi', '#dev'],
    },
    {
      id: 'amira-repost-2',
      author: 'Nyla Patel',
      authorId: 'nyla',
      location: 'Mumbai, India',
      avatarHue: 290,
      imageHue: 310,
      caption:
        '커뮤니티 뮤럴 프로젝트에 합류할 팀원을 찾고 있어요. 색채 실험 좋아하는 분들 DM 주세요!',
      likes: 860,
      timeAgo: '5d',
      tags: ['#community', '#art'],
    },
  ],
  pinnedThreadId: 'amira-thread-1',
};

const luisContent: ProfileContent = {
  profile: {
    name: 'Luis Romero',
    handle: 'chef.luis',
    bio: 'Valencia 기반 파에야 연구가. 식재료와 코드를 함께 실험합니다.',
    location: 'Valencia, Spain',
    joined: '2020년 3월 가입',
    website: 'luisromero.es',
    badges: ['Food Lab', 'Community Builder'],
    stats: {
      threads: 98,
      followers: 32450,
      following: 210,
    },
  },
  threads: [
    {
      id: 'luis-thread-1',
      author: 'Luis Romero',
      authorId: 'luis',
      location: 'Valencia, Spain',
      avatarHue: 145,
      imageHue: 32,
      caption:
        '오늘 실험한 빠에야는 해산물 대신 제철 버섯을 넣어봤어요. 고명으로 올린 바삭한 샬롯이 포인트!',
      likes: 890,
      timeAgo: '6h',
      tags: ['#paella', '#seasonal'],
    },
    {
      id: 'luis-thread-2',
      author: 'Luis Romero',
      authorId: 'luis',
      location: 'Valencia, Spain',
      avatarHue: 145,
      imageHue: 32,
      caption:
        '시장 아침 투어를 라이브로 촬영했어요. 따라오신 분들 덕분에 최고의 농부님들을 소개할 수 있었네요!',
      likes: 642,
      timeAgo: '1d',
      tags: ['#farmtotable', '#market'],
    },
    {
      id: 'luis-thread-3',
      author: 'Luis Romero',
      authorId: 'luis',
      location: 'Madrid, Spain',
      avatarHue: 145,
      imageHue: 32,
      caption:
        '마드리드 팝업 이벤트 준비 중. 오프닝 메뉴는 불맛이 살짝 도는 레몬-연어 타파스입니다.',
      likes: 512,
      timeAgo: '4d',
      tags: ['#popup', '#tapas'],
    },
  ],
  replies: [
    {
      id: 'luis-reply-1',
      author: 'Luis Romero',
      authorId: 'luis',
      location: 'Valencia, Spain',
      avatarHue: 145,
      imageHue: 32,
      caption: '@amira.codes 그 자동화 러너 너무 멋져요! 다음 번 배포에도 후기를 부탁드려요.',
      likes: 98,
      timeAgo: '8h',
      tags: ['#cheeringsquad'],
    },
    {
      id: 'luis-reply-2',
      author: 'Luis Romero',
      authorId: 'luis',
      location: 'Valencia, Spain',
      avatarHue: 145,
      imageHue: 32,
      caption: '@nyla 커뮤니티 벽화 완성되면 투어 신청할게요. 색채 구성이 너무 기대돼요!',
      likes: 74,
      timeAgo: '2d',
      tags: ['#community'],
    },
  ],
  reposts: [
    {
      id: 'luis-repost-1',
      author: 'Food Tech Weekly',
      location: 'Remote',
      avatarHue: 210,
      imageHue: 120,
      caption: '식재료 데이터 플랫폼을 활용한 레시피 큐레이션 사례 연구',
      likes: 1034,
      timeAgo: '3d',
      tags: ['#foodtech', '#research'],
    },
    {
      id: 'luis-repost-2',
      author: 'Valencia Market',
      location: 'Valencia, Spain',
      avatarHue: 35,
      imageHue: 45,
      caption: '이번 주 토요일, 지역 농부들과 함께하는 가을 축제에 초대합니다!',
      likes: 420,
      timeAgo: '1w',
      tags: ['#local', '#festival'],
    },
  ],
  pinnedThreadId: 'luis-thread-1',
};

export const profiles: ProfileDictionary = {
  amira: amiraContent,
  luis: luisContent,
};

export function getProfileContent(profileId: string): ProfileContent | undefined {
  return profiles[profileId];
}
