// define create action
import { LoadingStatus, UserLoadStatus } from "../actionType";

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

// user detail
export const userDetailACT = <T>(
  data: T,
  type: UserLoadStatus
): {
  data: T;
  type: string;
} => {
  return {
    data,
    type,
  };
};
