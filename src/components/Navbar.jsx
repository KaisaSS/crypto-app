import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, Typography, Avatar } from "antd";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons";
import icon from "../images/logo.png";

const { Item } = Menu;

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoCurr</Link>
        </Typography.Title>
        {window.innerWidth < 800 && (
          <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
            <MenuOutlined />
          </Button>
        )}
      </div>
      {activeMenu && (
        <Menu theme="dark" onClick={() => setActiveMenu(true)}>
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
      )}
    </div>
  );
};

export default Navbar;
