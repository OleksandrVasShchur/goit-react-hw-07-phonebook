import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import css from '../Style/form.module.css';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContactsSlice } from 'redux/contactsSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectContacts } from 'redux/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = evt => {
    setName(evt.currentTarget.value);
  };

  const handleChangeNumber = evt => {
    setNumber(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      Notify.warning(`${newContact.name} is already in contacts`);
      resetForm();
      return;
    }

    dispatch(addContactsSlice(newContact));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label_style}>
        {' '}
        <span className={css.label_distance}>Name</span>
        <input
          className={css.input_style}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label_style}>
        <span className={css.label_distance}> Number</span>

        <input
          className={css.input_style}
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button_add} type="submit">
        Add contact
      </button>
    </form>
  );
};


export default ContactForm;
