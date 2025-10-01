// 소셜 피드에서 사용하는 스토리 항목 타입 정의
export interface Story {
  id: string;
  name: string;
  seen: boolean;
}

// 피드 카드 렌더링에 필요한 포스트 타입 정의
export interface Post {
  id: string;
  author: string;
  authorId?: string;
  location: string;
  avatarHue: number;
  imageHue: number;
  caption: string;
  likes: number;
  timeAgo: string;
  tags: string[];
}
