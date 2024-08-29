import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  const items = [{ key: "user", label: "User", icon: <UserOutlined /> }];

  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" items={items} />
    </Header>
  );
};

export default Navbar;
