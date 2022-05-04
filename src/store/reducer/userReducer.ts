import { UserLoadStatus } from "../actionType";
import { UserReducerModule } from "../module/store.type";

const userReducer = (
  user = {
    loading: true,
    data: {},
  },
  action: any
): UserReducerModule => {
  switch (action.type) {
    case UserLoadStatus.USER_LOADING:
      return {
        loading: true,
        data: {},
      };
    case UserLoadStatus.USER_LOADOVER:
      return {
        loading: false,
        data: action.data,
      };
    default:
      return user;
  }
};

export default userReducer;
