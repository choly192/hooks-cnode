import React, { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SecondaryNavigation } from "./SecondaryNavigation";
import { TopicList } from "@/component";
import { useSelector } from "react-redux";
import { useTopicsList } from "@/hooks/getDataHooks/useTopicsList";
import { TopicsReducerModule } from "@/store/module/store.type";
import { PaginationComp } from "./Pagination";
interface HomeProps {}
const Home: FC<HomeProps> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("tab"));
  const { data, loading } = useSelector<any, TopicsReducerModule>(
    (state: any) => state.topicsReducer
  );
  const currentPage = searchParams.get("page") ?? "1";
  const currentTabKey = searchParams.get("tab") ?? "all";

  const getTopicsList = useTopicsList();
  useEffect(() => {
    getTopicsList(currentTabKey, +currentPage);
  }, [currentPage, currentTabKey]);

  const getCurrentPage = (page: number) => {
    if (!page) return;
    setSearchParams({ tab: currentTabKey, page: page?.toString() });
  };

  return (
    <div>
      <SecondaryNavigation />
      {data?.length > 0 && <TopicList data={data} />}
      {!loading && (
        <PaginationComp
          currentPage={+currentPage}
          pageSize={20}
          // totalCount={data?.length}
          totalCount={1000}
          getCurrentPage={getCurrentPage}
        />
      )}
    </div>
  );
};

export default Home;

Home.displayName = "Home";
