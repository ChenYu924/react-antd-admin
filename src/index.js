import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// 引入全局样式表
import "./global.less";
// 引入tailwind css
import "./tailwind.css";
// 引入antd组件的全局化配置
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
import antdTheme from "@/config/antdTheme";
// 引入redux
import store from "./store";
import { Provider } from "react-redux";
// 引入模拟接口
import "./mock";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider locale={zhCN} theme={antdTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
);
