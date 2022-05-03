import React, { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SecondaryNavigation } from "./SecondaryNavigation";
import { TopicList } from "@/component";
import { useSelector } from "react-redux";
import { useTopicsList } from "@/hooks/getDataHooks/useTopicsList";
import { TopicsReducerModule } from "@/store/module/store.type";
interface HomeProps {}
const Home: FC<HomeProps> = (props) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("tab"));
  const { data, loading } = useSelector<any, TopicsReducerModule>(
    (state: any) => state.topicsReducer
  );
  const getTopicsList = useTopicsList();
  useEffect(() => {
    getTopicsList();
  }, []);
  return (
    <div>
      <SecondaryNavigation />
      <TopicList data={data} loading={loading} />
    </div>
  );
};

export default Home;

Home.displayName = "Home";
