import { useDispatch } from "react-redux";
import { LoadingStatus } from "@/store/actionType";
import { serverRequest } from "@/service/server";
import { topicDetailACT } from "@/store/action";
import { TopicDetailModule } from "../module/topic.type";

/**
 * 主题详情
 * @returns
 */
export const useTopicDetail = () => {
  const dispatch = useDispatch();
  return (topicId: string) => {
    dispatch(
      topicDetailACT<TopicDetailModule>({}, LoadingStatus.LOADING_START, "")
    );
    serverRequest<unknown, { success: boolean; data: TopicDetailModule }>({
      url: `/topic/${topicId}`,
    })
      .then((res) => {
        dispatch(topicDetailACT(res.data, LoadingStatus.LOADING_OVER, ""));
      })
      .catch((err) => {
        dispatch(
          topicDetailACT(
            {},
            LoadingStatus.LOADING_ERROR,
            err.response.data.error_msg
          )
        );
      });
  };
};
