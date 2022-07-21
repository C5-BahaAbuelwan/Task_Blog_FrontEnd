import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/auth";
import postsReducer from "./reducer/post";

export default configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});
