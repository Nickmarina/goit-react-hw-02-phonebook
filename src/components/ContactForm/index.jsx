import React, { useState } from 'react';
import shortid from 'shortid';
const ContactForm = ({ onChangeContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    onChangeContacts(newContact);
    setName('');
    setNumber('');
  };

  const handleChangeName = e => setName(e.target.value);
  const handleChangeNumber = e => setNumber(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChangeName}
        />
      </label>
      <label>
        <h3>Number</h3>
        <input
          type="tel"
          name="number"
          value={number}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          onChange={handleChangeNumber}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
