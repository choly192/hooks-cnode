import { Affix, Col, Layout, Menu, Row } from "antd";
import React, { FC } from "react";
import { navigationList } from "@/route";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
const Header: FC = () => {
  const { pathname } = useLocation();
  const currentKey =
    navigationList.find((nav) => nav.path === pathname)?.key ??
    "CNODE_HOMEPAGE";
  return (
    <Affix offsetTop={0}>
      <Layout.Header id="header">
        <Row>
          <Col xs={6} sm={4} md={2}>
            <h1 className="logo">
              <a>Logo</a>
            </h1>
          </Col>
          <Col xs={18} sm={20} md={22}>
            <Menu
              mode="horizontal"
              theme="dark"
              defaultSelectedKeys={[currentKey]}
            >
              {navigationList.map((item) => (
                <Menu.Item key={item.key}>
                  <Link to={item.path}>{item.text}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </Col>
        </Row>
      </Layout.Header>
    </Affix>
  );
};
Header.displayName = "Header";
export default Header;
