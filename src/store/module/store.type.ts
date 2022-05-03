import { TopicsListModule } from "@/hooks/module/topic.type";

export interface TopicsReducerModule {
  loading: boolean;
  data: TopicsListModule[];
}
