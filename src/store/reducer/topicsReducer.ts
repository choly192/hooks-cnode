import { LoadingStatus } from "../actionType";
import {
  TopicDetailReducerModule,
  TopicsReducerModule,
} from "../module/store.type";

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

export function topicDetailReducer(
  topic = {
    loading: true,
    data: {},
    isError: false,
    errorMessage: "",
  },
  action: any
): TopicDetailReducerModule {
  switch (action.type) {
    case LoadingStatus.LOADING_START:
      return {
        loading: true,
        data: {},
        isError: false,
        errorMessage: "",
      };
    case LoadingStatus.LOADING_OVER:
      return {
        loading: false,
        data: action.data,
        isError: false,
        errorMessage: "",
      };
    case LoadingStatus.LOADING_ERROR:
      return {
        loading: false,
        data: {},
        isError: true,
        errorMessage: action.errorMessage,
      };
    default:
      return topic;
  }
}
