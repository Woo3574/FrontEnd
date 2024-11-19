import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  .enterClick {
    background-color: royalblue;
  }
  .leaveClick {
    background-color: orange;
  }
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 150px;
  padding: 10px 20px;
  border-radius: 8px;
  color: white;
  font-size: 1.4em;
  font-weight: bold;
  background-color: ${(props) => props.color || "black"};
  transition: all 0.1s ease-in;
  &:hover {
    color: #aaa;
    cursor: pointer;
  }
  &:active {
    transform: translateY(5px) translateX(2px);
  }
`;

const Say = () => {
  // message는 값을 읽는 필드, setMessage 내부에 있는 인스턴트 필드값을 바꿔주는 Setter라 생각하면됨
  const [mesaage, setMessage] = useState("");
  const [value, setValue] = useState("black");
  const onClickEnter = () => setMessage("안녕하세요~~");
  const onClickLeave = () => setMessage("안녕히 가세요~~");

  return (
    <Container>
      <ButtonContainer>
        <Button className="enterClick" onClick={onClickEnter}>
          입장
        </Button>
        <Button className="leaveClick" onClick={onClickLeave}>
          퇴장
        </Button>
      </ButtonContainer>
      <h1 style={{ color: value }}>{mesaage}</h1>
      {/* setValue뒤에() 붙으면 호출 안붙으면 등록, 등록할땐 앞에 익명의함수(화살표함수)가 붙어줘야한다.
       매개변수를 달아줘야하기 때문에 익명의 함수를 넣어줘야한다 */}
      <ButtonContainer>
        <Button color="red" onClick={() => setValue("red")}>
          빨간색
        </Button>
        <Button color="green" onClick={() => setValue("green")}>
          초록색
        </Button>
        <Button color="blue" onClick={() => setValue("blue")}>
          파랑색
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Say;
