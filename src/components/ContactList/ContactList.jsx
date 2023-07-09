import React from 'react';
import css from '../Style/contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContacts } from 'redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
console.log({contacts})
  return (
    <ul className={css.container}>
      {filteredContacts.map(({ name, id, number }) => (
        <li className={css.boxList} key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            className={css.button_delete}
            onClick={() => dispatch(deleteContacts(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
