import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

export function UseRefComp() {
  const [count, setCount] = useState(60);
  const [isStart, setIsStart] = useState(false);

  const timerId = useRef<any>();
  const prevCount = useRef<number>();

  const h2Ref = useRef<any>();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    const rect = h2Ref.current.getBoundingClientRect();
    toast.info(`rect DOM - width: ${rect.width}, height - ${rect.height}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      pauseOnFocusLoss: true
    })
  }, []);

  const handleStart = () => {
    setIsStart(true);
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
    setIsStart(false);
  };

  console.log('Count & prevCount', count, prevCount.current);

  return (
    <div className="p-3">
      <h2 ref={h2Ref}>
        Count down:
        {count}
      </h2>
      <button disabled={isStart} onClick={handleStart}>
        Start
      </button>
      <button disabled={!isStart} onClick={handleStop}>
        Stop
      </button>
    </div>
  );
}
