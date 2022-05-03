import { Tag } from "antd";
import React, { FC } from "react";

export interface TopicCategoryProps {
  tab: string;
}

export const TopicCategory: FC<TopicCategoryProps> = (props) => {
  if (!props?.tab) return null;

  return tagMap.get(props?.tab) ?? null;
};
TopicCategory.displayName = "TopicCategory";

const tagMap = new Map([
  [
    "top",
    <Tag color="#87d068" className="topic-tag">
      置顶
    </Tag>,
  ],
  [
    "good",
    <Tag color="#f50" className="topic-tag">
      精华
    </Tag>,
  ],
  [
    "share",
    <Tag color="green" className="topic-tag">
      分享
    </Tag>,
  ],
  [
    "ask",
    <Tag color="gold" className="topic-tag">
      问答
    </Tag>,
  ],
  [
    "job",
    <Tag color="blue" className="topic-tag">
      招聘
    </Tag>,
  ],
  [
    "dev",
    <Tag color="purple" className="topic-tag">
      测试
    </Tag>,
  ],
]);
