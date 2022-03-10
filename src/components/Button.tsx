// Event Props
import React from 'react';

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
  children: string
}

export function Button(props: ButtonProps) {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>
      {props.children}
    </button>
  );
}
