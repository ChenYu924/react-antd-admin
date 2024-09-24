import { Input, Form } from "antd";

// 渲染表单项
export function RenderFormItem(props) {
  const { formItemObj } = props;
  const { key, label, component: DynamicComponent = Input } = formItemObj;
  const componentProps = formItemObj.componentProps || {};

  return (
    <Form.Item name={key} label={label}>
      <DynamicComponent {...componentProps} />
    </Form.Item>
  );
}
