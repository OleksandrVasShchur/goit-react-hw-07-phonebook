import React from 'react';
import css from '../Style/contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts} from 'redux/selectors';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  
  return (
    <ul className={css.container}>
      {contacts.map(({ name, id, number }) => (
        <li className={css.boxList} key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            className={css.button_delete}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
