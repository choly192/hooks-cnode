import { TopicDetailModule, TopicsListModule } from "@/hooks/module/topic.type";

export interface TopicsReducerModule {
  loading: boolean;
  data: TopicsListModule[];
}

export interface TopicDetailReducerModule {
  loading: boolean;
  data: TopicDetailModule;
  isError: boolean;
  errorMessage: string;
}
