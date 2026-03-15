import React from "react";
import styles from "./SideMenu.module.css";
import { sideMenuList } from "./mockup";
import { GifOutlined } from "@ant-design/icons";
import { Menu } from "antd";

export const SideMenu = () => {
  return (
    <Menu
      mode="vertical"
      className={styles["side-menu"]}
      items={sideMenuList.map((sm, index) => ({
        label: sm.title,
        key: `side-menu-${index}`,
        children: sm.subMenu.map((sms, smsindex) => ({
          label: (
            <span>
              <GifOutlined />
              {sms.title}
            </span>
          ),
            key: `sub-menu-${index}-${smsindex}`,
        })),
      }))}
    />
  );
};
