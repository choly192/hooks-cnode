import { serverRequest } from "@/service/server";
import { userDetailACT } from "@/store/action";
import { UserLoadStatus } from "@/store/actionType";
import { useDispatch } from "react-redux";
import { UserDetailModule } from "../module/userDetail.type";

export const useUserInfo = () => {
  const dispatch = useDispatch();
  return (loginName: string) => {
    dispatch(userDetailACT({}, UserLoadStatus.USER_LOADING));
    serverRequest<unknown, { data: UserDetailModule; success: boolean }>({
      url: `/user/${loginName}`,
    })
      .then((result) => {
        dispatch(userDetailACT(result.data, UserLoadStatus.USER_LOADOVER));
      })
      .catch((err) => {
        dispatch(userDetailACT({}, UserLoadStatus.USER_LOADOVER));
      });
  };
};
