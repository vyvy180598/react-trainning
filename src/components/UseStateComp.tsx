import { useState } from 'react';
import { toast } from 'react-toastify'

import { Button } from './Button';
import { Input } from './Input';

const courses = [
  {
    id: 1,
    name: 'HTML, CSS',
  },
  {
    id: 2,
    name: 'Javascript',
  },
  {
    id: 3,
    name: 'ReactJS',
  },
];

export function UseStateComp() {
  const [counter, setCounter] = useState(1);
  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  // two-way binding
  const [name, setName] = useState('');

  // radio
  const [checked, setChecked] = useState<number>();
  const handleCheck = (id: number) => {
    setChecked(id);
  };
  const handleSubmit = () => {
    toast.info(`Radio: ${checked}, Checkbox: ${checkbox}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      pauseOnFocusLoss: true
    })
  };

  // checkbox
  const [checkbox, setCheckbox] = useState<Array<number>>([]);
  const handleCheckbox = (id: number) => {
    setCheckbox((prev) => {
      const isChecked: boolean = checkbox.includes(id);
      if (isChecked) {
        return checkbox.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };
  return (
    <div className='p-3'>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>increase</button>
      <p>------------------------------</p>
      <Input
        value={name}
        handleChange={(event) => setName(event.target.value)}
      />
      <Button handleClick={() => setName('Name Changed')}>Change</Button>
      <p>------------------------------</p>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            checked={checked === course.id}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <p>------------------------------</p>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checkbox.includes(course.id)}
            onChange={() => handleCheckbox(course.id)}
          />
          {course.name}
        </div>
      ))}
      <Button handleClick={handleSubmit}>Register</Button>
    </div>
  );
}
