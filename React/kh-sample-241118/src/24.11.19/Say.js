import React, { useState } from "react";

const Say = () => {
  // message는 값을 읽는 필드, setMessage 내부에 있는 인스턴트 필드값을 바꿔주는 Setter라 생각하면됨
  const [mesaage, setMessage] = useState("");
  const [value, setValue] = useState("black");
  const onClickEnter = () => setMessage("안녕하세요~~");
  const onClickLeave = () => setMessage("안녕히 가세요~~");

  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color: value }}>{mesaage}</h1>
      {/* setValue뒤에() 붙으면 호출 안붙으면 등록, 등록할땐 앞에 익명의함수(화살표함수)가 붙어줘야한다.
       매개변수를 달아줘야하기 때문에 익명의 함수를 넣어줘야한다 */}
      <button style={{ color: "red" }} onClick={() => setValue("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setValue("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setValue("blue")}>
        파랑색
      </button>
    </>
  );
};

export default Say;
