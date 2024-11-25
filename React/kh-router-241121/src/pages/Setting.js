import { useContext } from "react"; // 전역 상태 관리를 위한 Hook
import { UserContext } from "../context/UserStore"; //전역 상태 정보 제공을 위한 우리가 만든 것
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  background-color: orangered;
`;

const Button = styled.button`
  margin: 10px;
  width: 300px;
  height: 70px;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 1px 1px 5px #999;
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `}
  &:active {
    transform: translateY(2px);
  }
`;

const Setting = () => {
  const { setColor } = useContext(UserContext);

  const navigate = useNavigate();

  const colorChange = (color) => {
    setColor(color);
    navigate("/home");
  };

  return (
    <Container>
      <Button color="orange" onClick={() => colorChange("orange")}>
        오렌지
      </Button>
      <Button color="green" onClick={() => colorChange("green")}>
        그린
      </Button>
      <Button color="lightgray" onClick={() => colorChange("lightgray")}>
        그레이
      </Button>
    </Container>
  );
};

export default Setting;
