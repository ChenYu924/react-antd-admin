import { createContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Layout, FloatButton } from "antd";
import request from "@/utils/request";
import styles from "./styles/PrimaryLayout.module.less";
import { SIDER_WIDTH } from "@/const/SystemParams";
import PrimarySiderMenu from "@/layouts/parts/sider/PrimarySiderMenu";
import PrimaryHeader from "@/layouts/parts/header/PrimaryHeader";

// 上下文对象
export const PrimaryLayoutContext = createContext(null);

function PrimaryLayout() {
  const { Header, Sider, Content } = Layout;
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  // 当前展开的sub菜单项
  const [openedKeys, setOpenedKeys] = useState([]);

  useEffect(() => {
    // 根据获取到的token再去接口中获取用户信息
    request.get("/user").then((res) => {
      const userData = res.data;
      dispatch({ type: "user-slice/setUser", payload: userData });
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <PrimaryLayoutContext.Provider
      value={{
        collapsed,
        setCollapsed,
        openedKeys,
        setOpenedKeys,
      }}
    >
      <Layout className={styles["primary-layout"]}>
        <Sider
          className={styles.sider}
          width={SIDER_WIDTH}
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme="light"
        >
          <PrimarySiderMenu collapsed={collapsed} openedKeys={openedKeys} />
        </Sider>
        <Layout className={styles.main}>
          <Header className={styles.header}>
            <PrimaryHeader collapsed={collapsed} setCollapsed={setCollapsed} />
          </Header>
          <Content className={styles.content}>
            <Outlet />
            <FloatButton.BackTop className="back-top-position" />
          </Content>
        </Layout>
      </Layout>
    </PrimaryLayoutContext.Provider>
  );
}

export default PrimaryLayout;
