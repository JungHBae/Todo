import taskReducer from "../modules/tasks";
import themeReducer from "../modules/theme";
import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({ taskReducer, themeReducer });
// const store = createStore(rootReducer);
const store = configureStore({
  reducer: {
    taskReducer,
    themeReducer,
  },
});

export default store;
