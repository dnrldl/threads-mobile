import type { Post } from './feed';

export interface ProfileStats {
  threads: number;
  followers: number;
  following: number;
}

export interface ProfileData {
  name: string;
  handle: string;
  bio: string;
  location: string;
  joined: string;
  website: string;
  badges: string[];
  stats: ProfileStats;
  avatarUrl?: string;
}

export interface ProfileContent {
  profile: ProfileData;
  threads: Post[];
  replies: Post[];
  reposts: Post[];
  pinnedThreadId?: string;
}

export type ProfileDictionary = Record<string, ProfileContent>;
