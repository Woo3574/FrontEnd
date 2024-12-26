import React, { useState, useMemo } from "react";

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  // 느린 계산 함수
  const slowFunction = (num) => {
    console.log("🔥 느린 계산 중...");
    for (let i = 0; i < 1000000000; i++) {} // 의도적으로 느리게 만듦
    return num * 2;
  };

  // useMemo로 계산 결과 메모이제이션
  const doubledNumber = useMemo(() => slowFunction(number), [number]);

  return (
    <div>
      <h1>카운트: {count}</h1>
      <h2>계산 결과: {doubledNumber}</h2>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <button onClick={() => setNumber(number + 1)}>숫자 증가</button>
    </div>
  );
}

export default UseMemoExample;
