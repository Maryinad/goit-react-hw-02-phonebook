import React, { Component } from 'react';
import { PhoneBook } from './PhoneBook/PhoneBook.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { nanoid } from 'nanoid';
import contacts from '../data/contacts.json';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson' },
      { id: 'id-2', name: 'Hermione Kline' },
      { id: 'id-3', name: 'Eden Clements' },
      { id: 'id-4', name: 'Annie Copeland' },
    ],
  };
  //как он появляется ??
  //обрабатывает то, что возвращает наша форма, дальше через props onAddContact(можем назвать как угодно), передали эту функцию
  addContact = contact => {
    const newContact = {
      id: nanoid(),
      ...contact,
    };

    this.setState({ contacts: [newContact, ...this.state.contacts] });
    // console.log(contacts);
  };

  render() {
    //передаем пропсами
    return (
      <>
        <h1>Phonebook</h1>
        <PhoneBook onAddContact={this.addContact} title="Phonebook" />;
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </>
    );
  }
}
