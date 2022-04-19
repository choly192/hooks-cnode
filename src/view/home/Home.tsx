import React, { FC } from "react";
interface HomeProps {}
const Home: FC<HomeProps> = (props) => {
  return <div>首页</div>;
};

export default Home;

Home.displayName = "Home";
