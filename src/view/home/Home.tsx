import React, { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { SecondaryNavigation } from "./SecondaryNavigation";
import { TopicList } from "@/component";
interface HomeProps {}
const Home: FC<HomeProps> = (props) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("tab"));
  return (
    <div>
      <SecondaryNavigation />
      <TopicList data={[]} loading={true} />
    </div>
  );
};

export default Home;

Home.displayName = "Home";
