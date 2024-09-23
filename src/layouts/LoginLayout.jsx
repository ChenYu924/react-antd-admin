import { Layout } from "antd";
import styles from "@/layouts/styles/LoginLayout.module.less";

function LoginLayout({ loginContentJSX }) {
  const { Header, Content } = Layout;

  return (
    <Layout className={styles["login-layout"]}>
      <Header className={styles.header}>
        <div className={styles.logo}></div>
      </Header>
      <Content className={styles.content}>{loginContentJSX}</Content>
    </Layout>
  );
}

export default LoginLayout;
