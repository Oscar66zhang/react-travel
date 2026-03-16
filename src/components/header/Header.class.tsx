import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Layout, Typography, Input, Dropdown, Menu, Space, Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import {
  useNavigate,
  useLocation,
  useParams,
  NavigateFunction,
  Location,
  Params,
} from "react-router-dom";

interface RouterProps {
  navigate: NavigateFunction;
  location: Location;
  params: Params;
}

function withRouter<P extends object>(
  Component: React.ComponentType<P & RouterProps>,
) {
  return (props: P) => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    return (
      <Component
        {...props}
        navigate={navigate}
        location={location}
        params={params}
      />
    );
  };
}

class Header extends React.Component<RouterProps> {
  render() {
    const { navigate } = this.props;
    return (
      <div className={styles["app-header"]}>
        <div className={styles["top-header"]}>
          <div className={styles.inner}>
            <Space>
              <Typography.Text style={{ height: "20px", width: "110px" }}>
                让旅游更幸福
              </Typography.Text>
              <Dropdown
                menu={{
                  items: [
                    { key: "zh", label: "中文" },
                    { key: "en", label: "English" },
                  ],
                }}
              >
                <Button
                  style={{
                    marginLeft: 15,
                  }}
                  icon={<GlobalOutlined />}
                >
                  语言
                </Button>
              </Dropdown>
            </Space>
            <Space className={styles["button-group"]}>
              <Button onClick={() => navigate("/register")}>注册</Button>
              <Button onClick={() => navigate("/signin")}>登录</Button>
            </Space>
          </div>
        </div>
        <Layout.Header className={styles["main-header"]}>
          <span onClick={() => navigate("/")}>
            <img src={logo} alt="" className={styles["App-logo"]} />
            <Typography.Title level={3} className={styles["title"]}>
              React Travel
            </Typography.Title>
          </span>
          <Input.Search
            className={styles["search-input"]}
            placeholder="请输入旅游目的地、主题或关键字"
          />
        </Layout.Header> 
        <Menu
          mode="horizontal"
          className={styles["main-menu"]}
          items={[
            { key: "1", label: "旅游首页" },
            { key: "2", label: "周末游" },
            { key: "3", label: "跟团游" },
            { key: "4", label: "自由行" },
            { key: "5", label: "私家团" },
            { key: "6", label: "邮轮" },
            { key: "7", label: "酒店+景点" },
            { key: "8", label: "当地玩乐" },
            { key: "9", label: "主题游" },
            { key: "10", label: "定制游" },
            { key: "11", label: "游学" },
            { key: "12", label: "签证" },
            { key: "13", label: "企业游" },
            { key: "14", label: "高端游" },
          ]}
        />
      </div>
    );
  }
}

export default withRouter(Header);
