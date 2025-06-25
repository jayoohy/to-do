import { LIST_ACTION_TYPES } from "./todo-list.types";

const createAction = (type, payload) => ({
  type,
  payload,
});

export const setItem = (value) =>
  createAction(LIST_ACTION_TYPES.SET_ITEM, value);

export const setListItems = (listItems, value) => {
  const newItem = {
    text: value,
    checked: false,
  };
  const newListItems = [...listItems, newItem];
  return createAction(LIST_ACTION_TYPES.SET_LIST_ITEMS, newListItems);
};

export const deleteItem = (listItems, indexToRemove) => {
  const newListItems = listItems.filter(
    (item, index) => index !== indexToRemove
  );
  return createAction(LIST_ACTION_TYPES.SET_LIST_ITEMS, newListItems);
};

export const checkItem = (listItems, indexToCheck) => {
  const newListItems = listItems.map((item, index) =>
    index === indexToCheck ? { ...item, checked: !item.checked } : item
  );
  return createAction(LIST_ACTION_TYPES.SET_LIST_ITEMS, newListItems);
};

export const updateItem = (listItems, indexToEdit, editValue) => {
  const newListItems = listItems.map((item, index) =>
    index === indexToEdit ? { ...item, text: editValue } : item
  );
  return createAction(LIST_ACTION_TYPES.SET_LIST_ITEMS, newListItems);
};
