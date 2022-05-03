export interface TopicsListModule {
  author: Author;
  author_id: string;
  content: string;
  create_at: string;
  good: boolean;
  id: string;
  last_reply_at: string;
  reply_count: number;
  tab: string;
  title: string;
  top: boolean;
  visit_count: number;
}

export interface Author {
  avatar_url: string;
  loginname: string;
}

export interface ResponseData {
  success: boolean;
  data: TopicsListModule;
}
