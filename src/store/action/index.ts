// define create action
import { LoadingStatus } from "../actionType";

// 主题列表
export const topicsACT = <T>(
  data: T,
  type: LoadingStatus
): { type: string; data: T } => {
  return {
    type,
    data,
  };
};

// 主题详情
export const topicDetailACT = <T>(
  data: T,
  type: LoadingStatus,
  errorMessage: string
): {
  data: T;
  type: string;
  errorMessage: string;
} => {
  return {
    data,
    type,
    errorMessage,
  };
};
