import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = ({ filter, onFilterListContacts }) => {
  return (
    <form>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterListContacts}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </form>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterListContacts: PropTypes.func.isRequired,
};
