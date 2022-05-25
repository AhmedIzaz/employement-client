import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import { persisted_user_reducer } from "./user_slice";

export const store = configureStore({
  reducer: {
    user_reducer: persisted_user_reducer,
  },
  middleware: [...getDefaultMiddleware({ thunk: true })],
});

export const persisted_store = persistStore(store);
