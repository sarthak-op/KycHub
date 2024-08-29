// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductDetails from "./pages/ProductDetails";
import CompareProducts from "./pages/CompareProducts";
import { Provider } from "react-redux";
import store from "./redux/store";
const { Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Navbar />
          <Layout>
            <Sidebar />
            <Layout style={{ padding: "0 24px 24px" }}>
              <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
                <Routes>
                  <Route path="/" element={<ProductDetails />} />
                  <Route path="/compare" element={<CompareProducts />} />
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
