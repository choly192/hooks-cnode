import { createStore, combineReducers } from "redux";
import { topicsReducer } from "./reducer/topicsReducer";

export default createStore(
  combineReducers({
    topicsReducer,
  })
);
