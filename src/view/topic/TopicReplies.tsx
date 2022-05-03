import React, { FC } from "react";
import { Avatar, Card, List, Comment, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Replies } from "@/hooks/module/topic.type";
import { Link } from "react-router-dom";
import { fromNowDate } from "@/utils/utils";

export interface TopicRepliesProps {
  loading?: boolean;
  repliesData?: Replies[];
}

export const TopicReplies: FC<TopicRepliesProps> = (props) => {
  if (!props?.repliesData) return null;
  return (
    <Card title="评论列表" loading={props.loading} type="inner">
      <List
        dataSource={props.repliesData}
        pagination={{ simple: true }}
        renderItem={(item) => {
          return (
            <List.Item>
              <Comment
                content={
                  <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                }
                avatar={
                  <Tooltip title={item?.author?.loginname} placement="top">
                    <Avatar icon={UserOutlined} src={item.author.avatar_url} />
                  </Tooltip>
                }
                author={<Link to={`/user/${item.author.loginname}`} />}
                datetime={<time>发表于： {fromNowDate(item.create_at)}</time>}
              />
            </List.Item>
          );
        }}
      ></List>
    </Card>
  );
};
TopicReplies.displayName = "TopicReplies";
