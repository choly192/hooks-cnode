import { Layout } from "antd";
import React from "react";
import { FC } from "react";
const Header: FC = () => {
  return (
    <Layout.Header>
      <div>header</div>
    </Layout.Header>
  );
};
Header.displayName = "Header";
export default Header;
