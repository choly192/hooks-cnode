import React, { FC } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { TopicDetailModule } from "@/hooks/module/topic.type";
import { getTab } from "@/component/common/topicList/TopicList";
import { TopicCategory } from "@/component/common/topicList/TopicCategory";
import { fromNowDate } from "@/utils/utils";

export interface TopicDetailCompProps {
  loading: boolean;
  detailInfo: TopicDetailModule;
}

export const TopicDetailComp: FC<TopicDetailCompProps> = (props) => {
  return (
    <Card
      bordered
      loading={props?.loading}
      type="inner"
      title={
        <>
          <h1>
            <TopicCategory
              tab={getTab(
                props.detailInfo.top,
                props.detailInfo.good,
                props.detailInfo.tab
              )}
            />
            {props.detailInfo.title}
          </h1>
          <p>
            - 作者：
            <Link to={`/user/${props.detailInfo.author?.loginname}`}>
              {props.detailInfo.author?.loginname}
            </Link>
            　- 创建时间：{fromNowDate(props.detailInfo.create_at)}　-
            浏览人数：{props.detailInfo.visit_count}
          </p>
        </>
      }
    >
      <div
        dangerouslySetInnerHTML={{ __html: props.detailInfo.content ?? "" }}
      ></div>
    </Card>
  );
};
TopicDetailComp.displayName = "TopicDetailComp";
