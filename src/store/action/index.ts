// define create action
import { LoadingStatus } from "../actionType";
export const topicsACT = <T>(
  data: T,
  type: LoadingStatus
): { type: string; data: T } => {
  return {
    type,
    data,
  };
};
