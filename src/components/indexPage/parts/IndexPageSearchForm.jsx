import { Card, Form, Space, Button } from "antd";
import { ReloadOutlined, SearchOutlined } from "@ant-design/icons";
import { RenderFormItem } from "@/components/formBuilder/FormBuilder";

function IndexPageSearchForm(props) {
  const { title, extra, searchItems } = props;

  function handleSearch() {
    console.log("search");
  }
  function handleReset() {
    console.log("reset");
  }

  return (
    <Card title={title} extra={extra}>
      <Form layout="inline">
        {/* 使用组件渲染表单项 */}
        {searchItems.map(obj => (
          <RenderFormItem key={obj.key} formItemObj={obj} />
        ))}
        {/* 查询类按钮 */}
        <Form.Item>
          <Space>
            <Button
              icon={<SearchOutlined />}
              type="primary"
              onClick={handleSearch}
            >
              查询
            </Button>
            <Button icon={<ReloadOutlined />} onClick={handleReset}>
              重置
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default IndexPageSearchForm;
