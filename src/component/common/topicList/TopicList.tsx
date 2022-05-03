import React, { FC } from "react";
import { Avatar, Col, List, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { TopicsListModule } from "@/hooks/module/topic.type";
import { Link } from "react-router-dom";
import { TopicCategory } from "./TopicCategory";
import { fromNowDate } from "@/utils/utils";

export interface TopicListProps {
  data: TopicsListModule[];
  loading: boolean;
}

export const TopicList: FC<TopicListProps> = (props) => {
  return (
    <List
      className="topics-list"
      loading={props?.loading}
      dataSource={props?.data}
      renderItem={(item) => {
        return (
          <List.Item>
            {/* 主体内容 */}
            <Col xs={1} md={1}>
              <Link to={`/user/${item?.author?.loginname}`}>
                <Tooltip title={item?.author?.loginname} placement="top">
                  <Avatar
                    icon={<UserOutlined />}
                    src={item?.author?.avatar_url}
                  />
                </Tooltip>
              </Link>
            </Col>
            <Col xs={23} md={19}>
              <TopicCategory tab={getTab(item?.top, item?.good, item?.tab)} />
              <Link to={`/topics/${item?.id}`}>{item?.title}</Link>
            </Col>
            {/* 内容 */}
            <Col xs={0} md={4}>
              {fromNowDate(item?.last_reply_at)}
            </Col>
          </List.Item>
        );
      }}
    ></List>
  );
};
TopicList.displayName = "TopicList";

const getTab = (top: boolean, good: boolean, tab: string) => {
  if (top) return "top";

  if (good) return "good";

  return tab;
};
