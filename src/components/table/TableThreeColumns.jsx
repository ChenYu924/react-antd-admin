import { Descriptions } from "antd";

const publicCol = [
  {
    title: "计划编号",
    dataIndex: "planCode",
    render: (text) => <a href="#">{text}</a>,
  },
  {
    title: "计划主要内容",
    width: 300,
    render: (record) => (
      <Descriptions column={1}>
        <Descriptions.Item label="计划类别" style={{ padding: 0 }}>
          {record.planCategory}
        </Descriptions.Item>
        <Descriptions.Item label="计划名称" style={{ padding: 0 }}>
          {record.planName}
        </Descriptions.Item>
        <Descriptions.Item label="计划内容" style={{ padding: 0 }}>
          {record.planContent}
        </Descriptions.Item>
        <Descriptions.Item label="预期完成时间" style={{ padding: 0 }}>
          {record.planTime}
        </Descriptions.Item>
      </Descriptions>
    ),
  },
  {
    title: "计划预算（元）",
    dataIndex: "planBudget",
    align: "center",
    render: (text) => <span className="text-gold-6">{text}</span>
  },
];

export { publicCol };
