// Compare to useEffect
// useEffect
// 1. Cập nhật lại state
// 2. Cật nhật lại DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi useEffect callback

// useLayoutEffect
// 1. Cập nhật lạu state
// 2. Cật nhật lại DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI

import { useEffect ,useLayoutEffect, useState } from 'react';

export function UseLayoutEffectComp() {
  const [countBug, setCountBug] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (countBug > 3) setCountBug(0);
  }, [countBug]);

  const handleRunBug = () => {
    setCountBug(countBug + 1);
  };

  // Nếu dùng useEffect thì count bị giật nhanh lên 4 -> 0
  useLayoutEffect(() => {
    if (count > 3) setCount(0);
  }, [count]);

  const handleRun = () => {
    // cách làm thông thường thì sẽ check count > 3 thì set về 0 : setCount(count > 2 ? 0 : (count + 1))
    setCount(count + 1);
  };
  return (
    <div className='p-3'>
      <h1>This will have bug: {countBug}</h1>
      <button onClick={handleRunBug}>Run</button>
      <br/>
      <br/>
      <h1>{count}</h1>
      <button onClick={handleRun}>Run</button>
    </div>
  );
}
