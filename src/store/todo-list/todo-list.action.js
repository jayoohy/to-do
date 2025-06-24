import { LIST_ACTION_TYPES } from "./todo-list.types";

const createAction = (type, payload) => ({
  type,
  payload,
});

export const setItem = (value) =>
  createAction(LIST_ACTION_TYPES.SET_ITEM, value);

export const setListItems = (listItems, value) => {
  const newListItems = [...listItems, value];
  return createAction(LIST_ACTION_TYPES.SET_LIST_ITEMS, newListItems);
};

export const deleteItem = (listItems, indexToRemove) => {
  const newListItems = listItems.filter(
    (item, index) => index !== indexToRemove
  );
  return createAction(LIST_ACTION_TYPES.SET_LIST_ITEMS, newListItems);
};

export const checkToggle = (listItems, indexToCheck) => {
  const newListItems = listItems.map((item, index) =>
    index === indexToCheck ? { ...item, check: !item.check } : item
  );
  return createAction(LIST_ACTION_TYPES.SET_LIST_ITEMS, newListItems);
};
