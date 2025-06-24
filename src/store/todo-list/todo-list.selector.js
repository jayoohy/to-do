import { createSelector } from "reselect";

const selectListReducer = (state) => state.todo;

export const selectListItems = createSelector(
  [selectListReducer],
  (todo) => todo.listItems
);

export const selectItem = createSelector(
  [selectListReducer],
  (todo) => todo.item
);
