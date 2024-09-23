import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, Avatar } from "antd";
import { UpOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./styles/UserArea.module.less";
import Cookies from "js-cookie";

// 头部用户区域
function UserArea() {
  const items = [
    {
      key: "logout",
      label: <span onClick={handleNavLogin}>退出登录</span>,
      danger: true,
    },
  ];
  const stateUserInfo = useSelector((state) => state.user.info);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleNavLogin() {
    Cookies.remove("token");
    dispatch({ type: "user-slice/setClear" });
    navigate("/login");
  }

  return (
    <Dropdown menu={{ items }}>
      <div className={styles["avatar-wrapper"]}>
        <span className={styles["user-name"]}>{stateUserInfo.nickname}</span>
        <UpOutlined className={styles.arrow} />
        <Avatar size={40} icon={<UserOutlined />} className={styles.avatar} />
      </div>
    </Dropdown>
  );
}

export default UserArea;
