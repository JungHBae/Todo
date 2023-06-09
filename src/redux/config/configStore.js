import themeReducer from "../modules/theme";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../modules/auth";
// const rootReducer = combineReducers({ taskReducer, themeReducer });
// const store = createStore(rootReducer);
const store = configureStore({
  reducer: {
    themeReducer,
    authReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
