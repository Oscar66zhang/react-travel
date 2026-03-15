import React from "react";
import { Layout, Typography } from "antd";

export const Footer = () => {
  return (
    <Layout.Footer>
      <Typography.Title level={3} style={{ textAlign: "center",backgroundColor:"#ffffffff" }}>
        版权所有@2026 React Travel
      </Typography.Title>
    </Layout.Footer>
  );
};

