// 1. memo() -> Higher Order Component (HOC)
// 2. useCallBack()
// - References type
// - React memo()

import React, {
  useState, memo, useCallback
} from 'react';
// Hooks
// HOC
// Render props

// Dùng memo khi 1 component sử dụng nhiều con và cần xác định re-render có ảnh hưởng perfomance

const ContentMemo = memo((props: { countUp: number }) => {
  console.log('re-render count up...')
  return (
    <h2 className="text-danger" style={{border: '1px solid', padding: '20px'}}>
      This line use count up state and it'll re-render:
      {props.countUp}
    </h2>
  );
});

const ContentMemoWithCallback = memo((props: {
  onDecrease: React.MouseEventHandler<HTMLButtonElement>
}) => {
  console.log('re-render count down...')
  return (
    <div style={{border: '1px solid', padding: '20px', marginTop: '20px'}}>
      <h2>Use Callback</h2>
      <button onClick={props.onDecrease}>Click me!</button>
    </div>
  );
});

export function UseCallbackComp() {
  const [countUp, setCountUp] = useState(0);
  const [countDown, setCountDown] = useState(100);

  const handleDecrease = useCallback(() => {
    setCountDown((prevCount) => prevCount - 1);
  }, []);

  return (
    <div style={{border: '1px solid', padding: '20px', marginTop:'20px'}}>
      <ContentMemo countUp={countUp} />
      <h2>
        Count Up:
        {countUp}
      </h2>
      <h2>
        Count Down:
        {countDown}
      </h2>
      <button onClick={() => setCountUp(countUp + 1)}>
        Increase - Re-render
      </button>
      <button onClick={() => setCountDown(countDown - 1)}>
        Decrease - Not re-render
      </button>

      <ContentMemoWithCallback onDecrease={handleDecrease} />
    </div>
  );
}
