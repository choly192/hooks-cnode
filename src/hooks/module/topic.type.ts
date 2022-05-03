export interface TopicsListModule {
  author?: Author;
  author_id?: string;
  content?: string;
  create_at?: string;
  good?: boolean;
  id?: string;
  last_reply_at?: string;
  reply_count?: number;
  tab?: string;
  title?: string;
  top?: boolean;
  visit_count?: number;
}

export interface Author {
  avatar_url: string;
  loginname: string;
}

export interface ResponseData {
  success: boolean;
  data: TopicsListModule;
}

export interface TopicDetailModule extends TopicsListModule {
  is_collect?: boolean;
  replies?: Replies[];
}

export interface Replies {
  author: Author;
  content: string;
  create_at: string;
  id: string;
  is_uped: boolean;
  reply_id: any;
  ups: any[];
}
