import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, StyledInput, StyledButton } from "../Styles/CommonStyle";
// Link 즉시이동, useNavigate 특정한 조건이 있고 난다음에 들어갈때 사용
import { UserContext } from "../context/UserStore";

const Login = () => {
  // 키보드 입력에 대한 상태 관리
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // 간단한 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);

  const navigate = useNavigate(); // 페이지 이동을 위한 객체 생성
  // const btnRef = useRef(null);

  // userContext 훅으로 우리가 만든 Usercontext의 전역 상태값에 접근
  const context = useContext(UserContext);
  const { setUserId, setPassword, color } = context;

  const onChangeId = (e) => {
    setInputId(e.target.value);
    // e.target.value.length를 넣은이유는 지금 들어온 입력값으로 비교를해야되서
    // inputId를 안넣은이유는 (업데이트(렌더링)가 안되서 이전값을 가지고 있어서 비교불가)

    e.target.value.length >= 5 ? setIsId(true) : setIsId(false);
  };

  const onChangePw = (e) => {
    setInputPw(e.target.value);

    e.target.value.length >= 5 ? setIsPw(true) : setIsPw(false);
  };

  const onClickLogin = () => {
    // axios 바동기 통신 호출
    // 그리고 결과 수신
    setUserId(inputId);
    setPassword(inputPw);
    if (inputId === "ktw0429" && inputPw === "qwert") {
      navigate("/home");
    } else {
      alert("아이디 또는 패스워드가 틀립니다.");
    }
  };

  return (
    <Container color={color}>
      <StyledInput value={inputId} placeholder="아이디" onChange={onChangeId} />
      <br />
      <StyledInput
        value={inputPw}
        placeholder="비밀번호"
        onChange={onChangePw}
      />
      <br />
      {isId && isPw ? (
        <StyledButton onClick={onClickLogin}>확인</StyledButton>
      ) : (
        <StyledButton disabled onClick={onClickLogin}>
          확인
        </StyledButton>
      )}
    </Container>
  );
};

export default Login;
