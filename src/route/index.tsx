import React from "react";
import { About } from "../view/about/About";
import { GetStart } from "../view/getstart/GetStart";
import Home from "../view/home/Home";
import { Page404 } from "../view/page404/Page404";
import { Topic } from "../view/topic/Topic";
import { User } from "../view/user/User";

const router = [
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "/topics/:id",
    exact: true,
    element: <Topic />,
  },
  {
    path: "/user/:userName",
    exact: true,
    element: <User />,
  },
  {
    path: "/getstart",
    exact: true,
    element: <GetStart />,
  },
  {
    path: "/about",
    exact: true,
    element: <About />,
  },
  {
    path: "*",
    exact: false,
    element: <Page404 />,
  },
];

const navigationList = [
  {
    path: "/",
    text: "首页",
    key: "CNODE_HOMEPAGE",
  },
  {
    path: "/getstart",
    text: "新手入门",
    key: "CNODE_GETSTART",
  },
  {
    path: "/about",
    text: "关于",
    key: "CNODE_ABOUT",
  },
];

const homeSecondaryNavigation = [
  {
    text: "全部",
    path: "/?tab=all",
    key: "all",
  },
  {
    text: "精华",
    path: "/?tab=good",
    key: "good",
  },
  {
    text: "分享",
    path: "/?tab=share",
    key: "share",
  },
  {
    text: "问答",
    path: "/?tab=ask",
    key: "ask",
  },
  {
    text: "招聘",
    path: "/?tab=job",
    key: "job",
  },
  {
    text: "客户端测试",
    path: "/?tab=dev",
    key: "dev",
  },
];

export { router, navigationList, homeSecondaryNavigation };
