import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title, TitleH2 } from '../components/App.styled';

const lsKey = 'contacts';

export const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(lsKey)) ?? initialContacts
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(lsKey, JSON.stringify(contacts));
  }, [contacts]);

  const onAddContacts = e => {
    setContacts(prev => {
      return [...prev, { id: nanoid(), ...e }];
    });
  };

  const onRemoveContacts = e => {
    setContacts(prev => prev.filter(contact => contact.id !== e));
  };
  const onFilterListContacts = e => {
    setFilter(e.target.value.toLowerCase());
    // this.setState({ filter: e.target.value.toLowerCase() });
  };

  // const { contacts, filter } = this.state;
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onAddContacts={onAddContacts} contacts={contacts} />
      <TitleH2>Contacts</TitleH2>
      <Filter onFilterListContacts={onFilterListContacts} filter={filter} />
      <ContactList
        onRemoveContacts={onRemoveContacts}
        contacts={filteredContacts}
      />
    </Container>
  );
};
