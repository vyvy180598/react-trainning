// Advanced props
type StatusProps = {
  status: 'loading' | 'success' | 'error'
}

export function Status(props: StatusProps) {
  let message;
  switch (props.status) {
    case 'loading':
      message = 'Loading ...';
      break;
    case 'success':
      message = 'Data fetched successfully!';
      break;
    case 'error':
      message = 'Error fetching data';
      break;
  }
  return (
    <div>
      <h2>
        Status -
        {message}
      </h2>
    </div>
  );
}
