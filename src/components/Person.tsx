// Extract type to Person.types.ts
import { PersonProps } from './Person.types';

// Destructuring props
export function Person({
  name, job, age, isLoggedIn,
}: PersonProps) {
  return (
    <div className="custom-body-bg">
      <h2>
        {isLoggedIn
          ? `Welcome ${name.first || ''} ${
            name.last
          } - ${job} - ${age} years old`
          : 'Welcome Guest'}
      </h2>
    </div>
  );
}
