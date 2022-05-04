import React, { FC, useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import { useUserInfo } from "@/hooks/getDataHooks/useUserInfo";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { UserReducerModule } from "@/store/module/store.type";
import { Avatar, Card } from "antd";
import { fromNowDate } from "@/utils/utils";
import { TopicList } from "@/component";

export interface UserProps {}

export const User: FC<UserProps> = (props) => {
  const getUserInfo = useUserInfo();
  const { userName = "" } = useParams();
  const { data, loading } = useSelector<any, UserReducerModule>(
    (state) => state.userReducer
  );
  useEffect(() => {
    getUserInfo(userName);
  }, [userName]);
  return (
    <div className="user-page">
      <Card loading={loading} className="user-detail">
        <Avatar size={80} src={data.avatar_url} icon={<UserOutlined />} />
        <p style={{ marginTop: "20px" }}>
          用户名：{data.loginname}&nbsp;&nbsp;注册时间：
          {fromNowDate(data.create_at)}&nbsp;&nbsp;积分：{data.score}
        </p>
        <p>
          github：
          <a href={`https://github.com/${data.githubUsername}`} target="_blank">
            https://github.com/{data.githubUsername}
          </a>
        </p>
      </Card>
      <Card loading={loading} title="最近创建的话题" type="inner">
        <TopicList data={data?.recent_topics ?? []} />
      </Card>
      <Card loading={loading} title="最近参与的话题" type="inner">
        <TopicList data={data?.recent_replies ?? []} />
      </Card>
    </div>
  );
};
User.displayName = "User";
