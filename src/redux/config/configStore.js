import themeReducer from "../modules/theme";
import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({ taskReducer, themeReducer });
// const store = createStore(rootReducer);
const store = configureStore({
  reducer: {
    themeReducer,
  },
});

export default store;
