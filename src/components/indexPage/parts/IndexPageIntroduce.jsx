import { Collapse } from "antd";
import styles from "../styles/IndexPageIntroduce.module.less";

function IndexPageIntroduce({ sceneNumber }) {
  const items = [
    {
      key: "1",
      label: "功能指引",
      children: <div>123</div>,
    },
  ];

  return (
    <Collapse
      className={styles.collapse}
      items={items}
      defaultActiveKey={["1"]}
      expandIconPosition="end"
      ghost
    />
  );
}

export default IndexPageIntroduce;
