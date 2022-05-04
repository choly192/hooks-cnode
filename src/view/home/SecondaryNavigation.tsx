import React, { FC, useEffect } from "react";
import qs from "qs";
import { Menu } from "antd";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { homeSecondaryNavigation } from "@/route";
import { useLocation } from "react-router";

export interface SecondaryNavigationProps {}

export const SecondaryNavigation: FC<SecondaryNavigationProps> = (props) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { search } = useLocation();
  const { tab, page } = qs.parse(search.substring(1));
  const activeKey = searchParams.get("tab") ?? "all";
  const tabKeyArr = homeSecondaryNavigation.find((item) => item.key === tab);

  useEffect(() => {
    if (
      (tab && !tabKeyArr) ||
      (typeof page === "string" && parseInt(page) <= 0) ||
      (typeof page === "string" && isNaN(parseInt(page)))
    ) {
      navigate("/404");
    }
  }, [tab, page]);
  return (
    <Menu mode="horizontal" selectedKeys={[activeKey]} className="margin-top">
      {homeSecondaryNavigation.map((item) => {
        return (
          <Menu.Item key={item.key}>
            <Link to={item.path}>{item.text}</Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};
SecondaryNavigation.displayName = "SecondaryNavigation";
