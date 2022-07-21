import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "NOT-AUTHENTICATED",
    uid: null,
    email: null,
    userName: null,
    photoURL: null,
    errMessage: null,
  },
  reducers: {
    login: (state, action) => {
      return "logged in!";
    },
    logout: (state, payload) => {
      return "logged out!";
    },
    authCheck: (state) => {
      state.status = "CHECKING";
    },
  },
});

export const { login, logout, authCheck } = authSlice.actions;
