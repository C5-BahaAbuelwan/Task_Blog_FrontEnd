import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
  name: "auth",
  initialState: {
    name: localStorage.getItem("Name") || "",
    isLoggedIn: localStorage.getItem("Name") ? true : false,
    userName: localStorage.getItem("userName") || "",
    email: localStorage.getItem("email") || "",
    id:localStorage.getItem("id") || ""
  },

  reducers: {
    // payload :Name
    loginAction: (state, action) => {
      console.log(action);
      localStorage.setItem("Name", action.payload.Name);
      localStorage.setItem("userName", action.payload.userName);
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("id", action.payload.id);


      state.name = action.payload.Name;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },

    logoutAction: (state, action) => {
      localStorage.clear();
      state.name = null;
      state.isLoggedIn = false;
      state.isAdmin = false;
    },
  },
});

export const { logoutAction, loginAction } = auth.actions;

export default auth.reducer;
