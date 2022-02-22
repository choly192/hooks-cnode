import React, { FC } from "react";
import { Layout } from "antd";
const Footer: FC = () => {
  return (
    <Layout.Footer>
      <p className="wrap">
        CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js
        的技术研究。
      </p>
    </Layout.Footer>
  );
};

Footer.displayName = "Footer";
export default Footer;
