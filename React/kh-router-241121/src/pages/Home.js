import React, { useState, useMemo } from "react";

function UseMemoComparison() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 의도적으로 느리게 만든 계산 함수
  const slowCalculation = (num) => {
    console.log("🔥 느린 계산 실행...");
    for (let i = 0; i < 1000000000; i++) {} // CPU 소모 작업
    return num * 2;
  };

  // 1️⃣ useMemo 사용
  const memoizedValue = useMemo(() => slowCalculation(count), [count]);

  // 2️⃣ useMemo 미사용
  const nonMemoizedValue = slowCalculation(count);

  return (
    <div>
      <h1>UseMemo vs Non-UseMemo</h1>
      <div>
        <h2>1️⃣ useMemo 사용 결과: {memoizedValue}</h2>
        <h2>2️⃣ useMemo 미사용 결과: {nonMemoizedValue}</h2>
      </div>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="텍스트 입력"
      />
    </div>
  );
}

export default UseMemoComparison;