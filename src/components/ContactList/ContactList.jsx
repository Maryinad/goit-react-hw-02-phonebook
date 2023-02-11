import { ContactItem } from './ContactItem';
import PropTypes from 'prop-types';

export function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} />
        ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};
