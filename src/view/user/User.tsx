import React, { FC } from "react";

export interface UserProps {}

export const User: FC<UserProps> = (props) => {
  return <div>用户详情</div>;
};
User.displayName = "User";
