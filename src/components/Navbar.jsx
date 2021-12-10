import React from "react";
import { Link } from "react-router-dom";
import { Button, Menu, Typography, Avatar } from "antd";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons";
import icon from "../images/logo.png";

const { Item } = Menu;

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoCurr</Link>
        </Typography.Title>
        <Button className="menu-control-container">
          <MenuOutlined />
        </Button>
      </div>
      <Menu theme="dark">
        <Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Item>
        <Item key="cryptocurrencies" icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Item>
        <Item key="exchanges" icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Item>
        <Item key="news" icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Item>
      </Menu>
    </div>
  );
};

export default Navbar;
