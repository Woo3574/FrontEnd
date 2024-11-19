// 컴포넌트는 함수형 컴포넌트와 클래스형 컴포넌트가 있음
// 현재는 함수형 컴포넌트만 사용 됨
// 예전에는 상태관리와 생명주기 관리를 위해서 클래스형 컴포넌트를 사용했지만
// v16.8 이후부터 함수형 컴포넌트에서도 상태관리와 생명주기 관리가 가능 해짐
import { useState } from "react";

// 상태관리
// number값이 바뀌면 렌더링 된다
const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      {/* setNumber() << 이건 호출이기 때문에 눌렸을때 동작하게 만들려면 익명의 함수를 만들어줘야한다. */}
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <button onClick={() => setNumber(0)}>0</button>
    </>
  );
};

export default Counter;
