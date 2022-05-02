import React, { FC } from "react";
import { List } from "antd";

export interface TopicListProps {
  data: any;
  loading: boolean;
}

export const TopicList: FC<TopicListProps> = (props) => {
  return (
    <List
      className="topics-list"
      loading={props?.loading}
      dataSource={props?.data}
      renderItem={(item) => {
        return <List.Item>{}</List.Item>;
      }}
    ></List>
  );
};
TopicList.displayName = "TopicList";
