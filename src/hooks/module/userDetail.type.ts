import { Author } from "./topic.type";

export interface UserDetailModule {
  avatar_url?: string;
  create_at?: string;
  githubUsername?: string;
  loginname?: string;
  recent_replies?: RecentReplies[];
  recent_topics?: RecentReplies[];
  score?: number;
}

export interface RecentReplies {
  author: Author;
  id: string;
  last_reply_at: string;
  title: string;
}
