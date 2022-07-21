import { createSlice } from "@reduxjs/toolkit";

export const posts = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },

  reducers: {
    // payload : new post
    addPostsAction: (state, action) => {
      console.log(action);
      state.posts.unshift(action.payload);
    },
    // payload : array of post
    setPostsAction: (state, action) => {
      state.posts = action.payload;
    },

    updatePostsAction: (state, action) => {
      // console.log(state.posts.title);
      state.posts=state.posts.map((element) => {
        if (element.id == action.payload.id) {
          console.log(action.payload.newPosts);
          return action.payload.newPosts;
        }
        
        return element;
      });
    },
    //payload:id
    deletePostsAction: (state, action) => {
      console.log(action);

      state.posts = state.posts.filter((e) => {
        return e.id != action.payload;
      });
    },
  },
});

export const {
  addPostsAction,
  setPostsAction,
  updatePostsAction,
  deletePostsAction,
} = posts.actions;

export default posts.reducer;
