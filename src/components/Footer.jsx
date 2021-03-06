import React from "react";
import { Link } from "react-router-dom";
import { Typography, Space } from "antd";

const Footer = () => {
  return (
    <div>
      <Typography.Title level={5} style={{ color: "white", textAlign: "center" }}>
        CryptoCurr <br />
        All rights reserved
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
    </div>
  );
};

export default Footer;
