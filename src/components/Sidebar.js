import React from "react";
import { Layout, Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  const items = [
    {
      key: "product-details",
      icon: <AppstoreOutlined />,
      label: <Link to="/">Product Details</Link>,
    },
    {
      key: "compare-products",
      icon: <AppstoreOutlined />,
      label: <Link to="/compare">Compare Products</Link>,
    },
  ];

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["product-details"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
