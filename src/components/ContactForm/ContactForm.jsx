import PropTypes from 'prop-types';
import { Component } from 'react';
import { Form, Label, Input, AddBtn } from './ContactForm.styled';
import InputMask from 'react-input-mask';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.props.contacts.find(contact => contact.name === this.state.name)) {
      window.alert(`Contact ${this.state.name} is already in contacts`);
      return;
    }
    const { name, number } = this.state;
    this.props.onAddContacts({ name, number });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { number, name } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label>
          Number
          <InputMask
            className="input-tel"
            mask="999-99-99"
            type="tel"
            name="number"
            placeholder="777-77-77"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <AddBtn type="submit">Add contact</AddBtn>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onAddContacts: PropTypes.func.isRequired,
};
