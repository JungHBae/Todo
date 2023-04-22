import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authorizedUser: false,
};

const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    authUser: (state, action) => {
      if (action.payload === "true") {
        return {
          authorizedUser: true,
        };
      } else {
        return state;
      }
    },
  },
});

export const { authUser } = authSlice.actions;
export default authSlice.reducer;
