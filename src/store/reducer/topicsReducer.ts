import { LoadingStatus } from "../actionType";
import { TopicsReducerModule } from "../module/store.type";

export function topicsReducer(
  topics = { loading: true, data: [] },
  action: any
): TopicsReducerModule {
  switch (action?.type) {
    case LoadingStatus.LOADING_START:
      return {
        loading: true,
        data: [],
      };
    case LoadingStatus.LOADING_OVER:
      return {
        loading: false,
        data: action.data,
      };
    default:
      return topics;
  }
}
