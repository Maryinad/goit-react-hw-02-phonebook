import { ContactItem } from './ContactItem';

export function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id, name }) => (
        <ContactItem key={id} name={name} />
      ))}
    </ul>
  );
}
