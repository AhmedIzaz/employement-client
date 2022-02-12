import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  name: "Ahmed Izaz Bhuiyan",
  age: 22,
};

export const userSlice = createSlice({
  name: "User",
  initialState: initial_state,
  reducers: {
    clearUser: (state, action) => {
      state = { name: "", age: "" };
    },
    addUser: (state, action) => (state = action.payload.user),
  },
});

export default userSlice.reducer;
