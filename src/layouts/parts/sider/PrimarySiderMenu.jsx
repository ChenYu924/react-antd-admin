import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu } from "antd";
import styles from "@/layouts/styles/PrimarySiderMenu.module.less";
import menuIcon from "@/config/menuIcon";

function PrimarySiderMenu({ collapsed, openedKeys }) {
  const navigate = useNavigate();
  // 仓库中的侧边栏菜单项(登录 -> 存入用户数据到user切片 - 从user切片获取菜单项数据)
  const stateMenuTree = useSelector((state) => state.user.menuTree);
  const [menuItems, setMenuItems] = useState([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState();

  useEffect(() => {
    if (stateMenuTree.length) {
      initMenu(stateMenuTree);
    }
  }, [stateMenuTree]); // eslint-disable-line react-hooks/exhaustive-deps

  function initMenu(stateMenuTree) {
    setMenuItems(renderMenuItems(stateMenuTree));
    // 默认选中第一个菜单项
    menuItemChange(stateMenuTree[0].key);
  }
  function renderMenuItems(result) {
    const list = [];
    result.forEach((item) => {
      const { key, label, menuIco, children } = item;
      const MenuIcon = menuIcon[menuIco];
      const menuItem = {
        key,
        label,
        icon: menuIco && MenuIcon && <MenuIcon />,
        children,
      };
      list.push(menuItem);
    });
    return list;
  }
  function menuItemChange(key) {
    setSelectedMenuItem(key);
    navigate(`/${key}`);
  }

  return (
    <div className={styles["menu-wrapper"]}>
      <div className={styles["logo-wrapper"]}>
        <div className={styles.logo} />
      </div>
      <Menu
        items={menuItems}
        selectedKeys={[selectedMenuItem]}
        mode="inline"
        theme="light"
        onClick={(item) => menuItemChange(item.key)}
      />
    </div>
  );
}

export default PrimarySiderMenu;
