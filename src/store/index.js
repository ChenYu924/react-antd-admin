import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/userSlice";

// 创建store
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
