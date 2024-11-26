import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 import

const LoginGlobalStyle = createGlobalStyle`
  * {
    background-color: hsl(0, 0%, 85%);
    
  }
`;

const Container = styled.div`
  width: 500px;
  height: 600px;
  margin: 200px auto;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border: 1px solid none;
  border-radius: 3%;

  * {
    background-color: inherit;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 10px; /* 텍스트와 이미지 사이 간격 */
`;

const Input = styled.input`
  border: 1px solid gray;
  height: 40px;
  border-radius: 8px;
  margin-top: 10px;
`;

const Text = styled.p`
  font-size: 20px;
  margin-top: 20px;
`;

const Button = styled.button`
  height: 40px;
  border-radius: 8px;
  margin: 20px 0px;
  background-color: ${({ disabled }) =>
    disabled ? "gray" : "black"}; /* 비활성화 시 회색 */
  color: white;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: transform 0.1s ease; /* 부드럽게 이동하도록 transition 추가 */
  &:active {
    ${({ disabled }) =>
      disabled
        ? "disabled"
        : "transform: translateY(2px)"}; /* 버튼이 눌렸을 때 5px 아래로 이동 */
  }
`;

const TextButton = styled.button`
  border: none;
  cursor: pointer;
  color: black;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: blue;
  }
`;

///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////

const Login = () => {
  const [userId, setUserId] = useState(""); // 아이디 상태
  const [password, setPassword] = useState(""); // 비밀번호 상태

  const userIdVaild = userId.length >= 6;
  const passwordVaild = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);

  const isFormValid = userIdVaild && passwordVaild;
  const navigate = useNavigate(); // useNavigate 훅 사용
  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <LoginGlobalStyle />
      <Container>
        <Header>
          <Logo src="/images/PAIKBOOKER.png" alt="Logo" />
          <h1>백부커</h1>
        </Header>
        <h1>Log in</h1>
        <Text>ID</Text>
        <Input
          type="text"
          value={userId}
          placeholder="아이디 입력 (6자리 이상)"
          onChange={(e) => setUserId(e.target.value)}
        />
        <Text>Passsword</Text>
        <Input
          type="text"
          value={password}
          placeholder="패스워드 입력 (8자리 이상) "
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button disabled={!isFormValid}> Log in</Button>

        <TextButton onClick={handleClick}>
          회원가입이 안되있으신가요? 여기를 눌러주세요!{" "}
        </TextButton>
      </Container>
    </>
  );
};

export default Login;
