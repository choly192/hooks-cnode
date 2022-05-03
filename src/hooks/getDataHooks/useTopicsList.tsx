import { useDispatch } from "react-redux";
import { LoadingStatus } from "@/store/actionType";
import { serverRequest } from "@/service/server";
import { topicsACT } from "@/store/action";
import { ResponseData } from "../module/topic.type";

/**
 * 主题列表数据
 * @returns
 */
export const useTopicsList = () => {
  const dispatch = useDispatch();
  return (tab = "all", page = 1, limit = 20, mdrender = true) => {
    dispatch(topicsACT([], LoadingStatus.LOADING_START));
    serverRequest<unknown, ResponseData>({
      url: `/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`,
    }).then((res) => {
      dispatch(topicsACT(res.data, LoadingStatus.LOADING_OVER));
    });
  };
};
