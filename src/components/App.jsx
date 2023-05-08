import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title, TitleH2 } from '../components/App.styled';

const lsKey = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem(lsKey));
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(lsKey, JSON.stringify(this.state.contacts));
    }
  }

  onAddContacts = e => {
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...e }, ...prevState.contacts],
    }));
  };
  onRemoveContacts = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));
  };
  onFilterListContacts = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onAddContacts={this.onAddContacts} contacts={contacts} />
        <TitleH2>Contacts</TitleH2>
        <Filter
          onFilterListContacts={this.onFilterListContacts}
          filter={filter}
        />
        <ContactList
          onRemoveContacts={this.onRemoveContacts}
          contacts={filteredContacts}
        />
      </Container>
    );
  }
}
