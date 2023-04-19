import { createStore } from "redux";
import { combineReducers } from "redux";
import taskReducer from "../modules/tasks";
import themeReducer from "../modules/theme";

const rootReducer = combineReducers({ taskReducer, themeReducer });
const store = createStore(rootReducer);

export default store;
