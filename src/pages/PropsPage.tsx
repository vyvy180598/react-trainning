import { Button } from '../components/Button';
import { ContactUs } from '../components/ContactUs';
import { Heading } from '../components/Heading';
import { Oscar } from '../components/Oscar';
import { Person } from '../components/Person';
import { Status } from '../components/Status';
import { Input } from '../components/Input';
import { Container } from '../components/Container';
import { PersonList } from '../components/PersonList';

export function PropsPage() {
  const personName = {
    first: 'Nguyen Van',
    last: 'A',
  };
  const personList = [
    {
      first: 'Nguyen Van',
      last: 'B',
    },
    {
      last: 'C',
    },
    {
      first: 'Le Van',
      last: 'D',
    },
  ];
  return (
    <>
      <h2 className="table-of-contents">1. Basic Props</h2>
      <Heading>Heading!</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Status status="loading" />
      {/* optional */}
      <Person name={personName} job="developer" age={20} isLoggedIn />
      <Person name={{ last: 'B' }} job="developer" age={20} isLoggedIn />
      <PersonList persons={personList} />
      <h2 className="table-of-contents">2. Event Props</h2>
      <Button
        handleClick={(event, id) => {
          console.log('click', event, id);
        }}
      >
        Click
      </Button>
      <Input value='' handleChange={(event) => console.log('input', event)} />
      <h2 className="table-of-contents">**Class component</h2>
      <ContactUs email="contactUs@gmail.com" />
      <h2 className="table-of-contents">3. Styles Props</h2>
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
    </>
  );
}
