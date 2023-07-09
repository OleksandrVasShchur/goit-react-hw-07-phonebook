import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import css from './Style/style-app.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);
console.log(contacts)
  return (
    <div className={css.total_box}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      {contacts.length === 0 && <p>There are no contacts...</p>}

      <Filter />

      <ContactList />
    </div>
  );
};
