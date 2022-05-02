import * as React from "react";
import { useRoutes } from "react-router-dom";
import { Layout } from "antd";
import { Footer, Header } from "./component";
import { router } from "./route";
import "./static/css/common.css";

function App() {
  const element = useRoutes(router);
  return (
    <Layout className="one-hundred-percent">
      <Header />
      <Layout.Content>
        <div className="wrap">{element}</div>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default App;
