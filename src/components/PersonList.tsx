import { Name } from './Person.types';
// Reusable type (Name) from file Person Types
type PersonListProps = {
  persons: Name[]
}

export function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.persons.map((name, idx) => (
        <h2 key={idx}>
          {name.first || ''}
          {' '}
          {name.last}
        </h2>
      ))}
    </div>
  );
}
