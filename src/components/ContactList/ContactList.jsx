import PropTypes from 'prop-types';
import { List, Item, Name, NumberName, DeleteBtn } from './ContactList.styled';

export const ContactList = ({ contacts, onRemoveContacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Name>{name}:</Name> <NumberName>{number}</NumberName>
          <DeleteBtn
            onClick={() => {
              onRemoveContacts(id);
            }}
            type="button"
          >
            delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onRemoveContacts: PropTypes.func.isRequired,
};
