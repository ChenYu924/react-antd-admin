// 引入path模块
const path = require("path");
// 引入less插件
const lessPlugin = require("craco-less");

module.exports = {
  // webpack配置
  webpack: {
    // 别名配置 alias
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // 插件
  plugins: [
    {
      plugin: lessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
