// 从路由库中引入创建浏览器路由实例的方法
import { createBrowserRouter } from "react-router-dom";

import LoginPage from "@/pages/login/LoginPage";
// 通用布局
import PrimaryLayout from "@/layouts/PrimaryLayout";
// 引入通用布局的二级路由页面
import Workbench from "@/pages/workbench/Workbench";
import FormSplice from "@/pages/form/FormSplice";
import TableThree from "@/pages/table/TableThree";
import CarouselHorizontal from "@/pages/carousel/CarouselHorizontal";

// 创建浏览器路由实例
const router = createBrowserRouter([
  // 登录页
  {
    path: "/login",
    element: <LoginPage />,
  },
  // 通用布局
  {
    path: "/",
    element: <PrimaryLayout />,
    children: [
      {
        path: "workbench",
        element: <Workbench />,
      },
      {
        path: "form-splice",
        element: <FormSplice />,
      },
      {
        path: "table-three",
        element: <TableThree />,
      },
      {
        path: "carousel-horizontal",
        element: <CarouselHorizontal />,
      },
    ],
  },
]);

export default router;
