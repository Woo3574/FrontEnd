// 복잡한 로직을 가진 상태를 관리하는데 사용

import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    case "Reset":
      return { value: (state.value = 0) };
    default:
      return state;
  }
};

const ReducerCnt = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <>
      {/* state 안에있는 객체를 빼왔음(키와 값) */}
      <p>현재 카운터 값은 {state.value}</p>
      {/* dispatch */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
      <button onClick={() => dispatch({ type: "Reset" })}>리셋</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
    </>
  );
};

export default ReducerCnt;
