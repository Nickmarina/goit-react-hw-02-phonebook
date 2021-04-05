import { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
// import Filter from './components/Filter';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const handleChangeContacts = newContact => {
    return contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts(prevState => [...prevState, newContact]);
  };

  const handleDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onChangeContacts={handleChangeContacts} />
      <h2>Contacts</h2>
      {/* <Filter ... /> */}
      <ContactList contacts={contacts} onDelete={handleDelete} />
    </div>
  );
};

export default App;
