export function ContactItem({ name, number, id, onDeleteBtn }) {
  return (
    <li>
      <span>{name}</span>
      <span> {number}</span>
      <button onClick={() => onDeleteBtn(id)}>Delete</button>
    </li>
  );
}
