import { createStore, combineReducers } from "redux";
import { topicDetailReducer, topicsReducer } from "./reducer/topicsReducer";
import userReducer from "./reducer/userReducer";

export default createStore(
  combineReducers({
    topicsReducer,
    topicDetailReducer,
    userReducer,
  })
);
