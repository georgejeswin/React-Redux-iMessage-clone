import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userrSlice";
import chatReducer from "../features/chatSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
});
