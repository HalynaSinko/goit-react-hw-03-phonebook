import React from "react";

import "./App.css";

import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";

function App() {
  return (
    <div className="contaiter">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;

// handleAddContact = (newContact) => {
//   // console.log(newContact);
//   const uniqueContact = this.handleUniqueContact(newContact);
//   if (!uniqueContact) {
//     alert(`${newContact.name} is already in contacts`);
//     return;
//   }
//   this.setState((prevState) => ({
//     contacts: [newContact, ...prevState.contacts],
//   }));
// };

// handleUniqueContact = (newContact) => {
//   const { contacts } = this.state;
//   const isExistContact = !!contacts.find(
//     (contact) => contact.name === newContact.name
//   );
//   return !isExistContact;
//   // console.log(isExistContact);
// };

// componentDidMount() {
//    const contacts = JSON.parse(localStorage.getItem("contacts"));
//      if (contacts) {
//     this.setState({ contacts });
//   }
// }

// componentDidUpdate(prevProps, prevState) {

//   if (this.state.contacts !== prevState.contacts) {
//     // console.log("Изменился стейт");
//     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//   }
// }
