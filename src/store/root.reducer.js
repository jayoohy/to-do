import { combineReducers } from "redux";
import { listReducer } from "./todo-list/todo-list.reducer";

export const rootReducer = combineReducers({
  todo: listReducer,
});
