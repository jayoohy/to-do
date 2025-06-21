import { LIST_ACTION_TYPES } from "./todo-list.types";

export const INITIAL_STATE = {
  item: "",
  listItems: [],
};

export const listReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case LIST_ACTION_TYPES.SET_LIST_ITEMS:
      return {
        ...state,
        listItems: payload,
      };
    default:
      return state;
  }
};
