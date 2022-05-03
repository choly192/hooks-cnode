import React, { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { useTopicDetail } from "@/hooks/getDataHooks/useTopicDetail";
import { TopicDetailReducerModule } from "@/store/module/store.type";
import { Alert } from "antd";
import { TopicDetailComp } from "./TopicDetailComp";
import { TopicReplies } from "./TopicReplies";

export interface TopicProps {}

export const Topic: FC<TopicProps> = (props) => {
  const navigate = useNavigate();
  const { id = "" } = useParams();
  const getTopicDetail = useTopicDetail();
  const { loading, data, isError, errorMessage } = useSelector<
    any,
    TopicDetailReducerModule
  >((state) => state.topicDetailReducer);
  useEffect(() => {
    getTopicDetail(id);
  }, []);

  return (
    <div className="topic-detail">
      {isError && (
        <Alert
          closable
          message={"请求出错"}
          type="error"
          description={
            <>
              <p>{errorMessage}</p>
              <p>点击关闭按钮并返回上一步</p>
            </>
          }
          afterClose={() => navigate(-1)}
        />
      )}
      {!isError && (
        <>
          <TopicDetailComp loading={loading} detailInfo={data} />
          <TopicReplies loading={loading} repliesData={data.replies} />
        </>
      )}
    </div>
  );
};
Topic.displayName = "Topic";
