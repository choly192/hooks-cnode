import { TopicDetailModule, TopicsListModule } from "@/hooks/module/topic.type";
import { UserDetailModule } from "@/hooks/module/userDetail.type";

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

export interface UserReducerModule {
  loading: boolean;
  data: UserDetailModule;
}
