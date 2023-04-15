import { createStore } from "redux";
import { combineReducers } from "redux";
import taskReducer from "../modules/tasks";

const rootReducer = combineReducers({ taskReducer });
const store = createStore(rootReducer);

export default store;
