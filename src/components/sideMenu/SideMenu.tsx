import React from "react";
import styles from "./SideMenu.module.css";
import { sideMenuList } from "./mockup";
import { GifOutlined } from "@ant-design/icons";
import { Menu } from "antd";

export const SideMenu = () => {
  return (
    <Menu mode="vertical" className={styles["side-menu"]}>
      {sideMenuList.map((sm, index) => (
        <Menu.SubMenu title={sm.title} key={`side-menu-${index}`}>
          {sm.subMenu.map((sms, smsindex) => (
            <Menu.Item key={`sub-sub-menu-${smsindex}`}>
              <span>
                <GifOutlined />
              </span>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );
};

