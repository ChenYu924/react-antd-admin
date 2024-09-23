import { RouterProvider } from "react-router-dom";
// 引入路由实例
import router from "./router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
