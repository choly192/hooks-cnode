import { createStore, combineReducers } from "redux";
import { topicDetailReducer, topicsReducer } from "./reducer/topicsReducer";

export default createStore(
  combineReducers({
    topicsReducer,
    topicDetailReducer,
  })
);
