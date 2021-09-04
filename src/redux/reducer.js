import { combineReducers } from "redux";
import actionsTypes from "./types";

// const initialState = {
//   contacts: {
//     items: [],
//     filter: "",
//   },
// };

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const itemsRreducer = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD_CONTACT:
      function handleUniqueContact(newContact) {
        const isExistContact = !!state.find(
          (contact) => contact.name === newContact.name
        );
        return !isExistContact;
      }
      const uniqueContact = handleUniqueContact(payload);
      if (!uniqueContact) {
        alert(`${payload.name} is already in contacts`);
        return [...state];
      }
      return [payload, ...state];

    case actionsTypes.REMOVE_CONTACT:
      return state.filter((contact) => contact.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case actionsTypes.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items: itemsRreducer,
  filter: filterReducer,
});
