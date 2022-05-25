import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage/session";

const initialState = {
  user: null,
};

const user_slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

const config = {
  key: "User",
  storage,
};

export const persisted_user_reducer = persistReducer(config, user_slice.reducer);
export const { login, logout } = user_slice.actions;
