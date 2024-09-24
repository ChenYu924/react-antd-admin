import { Row, Col, Card } from "antd";
import styles from "./styles/IndexPage.module.less";
import classnames from "classnames";
import IndexPageSearchForm from "@/components/indexPage/parts/IndexPageSearchForm";
import IndexPageIntroduce from "@/components/indexPage/parts/IndexPageIntroduce";

function IndexPage(props) {
  const { pageTitle, pageExtra, searchItems, tabList, sceneNumber } = props;

  return (
    <Row gutter={16}>
      <Col span={sceneNumber ? 19 : 24}>
        <div className={classnames("flex", "flex-col", styles.main)}>
          {/* 查询组件 */}
          <IndexPageSearchForm
            title={pageTitle}
            extra={pageExtra}
            searchItems={searchItems}
          />
          {/* 表格组件 */}
          <Card className="mt-4 grow" tabList={tabList}></Card>
        </div>
      </Col>
      {sceneNumber && (
        <Col span={5}>
          <div className={styles.introduce}>
            {/* 功能介绍组件 */}
            <IndexPageIntroduce sceneNumber={sceneNumber} />
          </div>
        </Col>
      )}
    </Row>
  );
}

export default IndexPage;
