import * as React from "react";
// import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import { Footer, Header } from "./component";

function App() {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <div className="wrap">content</div>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default App;
