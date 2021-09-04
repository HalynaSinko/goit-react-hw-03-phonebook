import actionsTypes from "./types";

export const addContact = ({ id, name, number }) => ({
  type: actionsTypes.ADD_CONTACT,
  payload: { id, name, number },
});

export const removeContact = (contactId) => ({
  type: actionsTypes.REMOVE_CONTACT,
  payload: contactId,
});

export const changeFilter = (value) => ({
  type: actionsTypes.CHANGE_FILTER,
  payload: value,
});
