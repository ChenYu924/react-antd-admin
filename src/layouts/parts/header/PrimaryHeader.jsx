import { Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import styles from "@/layouts/styles/PrimaryHeader.module.less";
import UserArea from "@/components/UserArea/UserArea";

function PrimaryHeader({ collapsed, setCollapsed }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {/* 菜单伸缩控制按钮 */}
        <Button
          style={{ marginRight: "16px" }}
          className="collapsed-button"
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>
      <div className={styles.right}>
        {/* 个人信息 */}
        <UserArea />
      </div>
    </div>
  );
}

export default PrimaryHeader;
