import styled from "styled-components";

// 색상 정의
const defaultBackgroundColor = "#f9aa06";
const defaultFontColor = "#fff";

export const Container = styled.div`
  display: flex;
  // Flexbox는 특히 다양한 화면 크기에 대응하는 반응형 웹 디자인을 만들 때 유용합니다.
  // Flexbox를 활성화하려면 부모 요소에 display: flex를 설정합니다.
  // 이 속성은 자식 요소들을 자동으로 flex 아이템으로 변환합니다.
  position: relative;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 100vh;
  width: 500px;
  margin: auto;
  background-color: ${(props) => props.color || defaultBackgroundColor};
`;

export const StyledInput = styled.input`
  margin: 0 30px;
  width: 100%;
  height: auto;
  padding: 1em;
  border: 1px solid #999;
  border-radius: 18px;
  outline-style: none;
`;

export const StyledButton = styled.button`
  font-weight: bold;
  width: 100%;
  height: 50px;
  color: white;
  background-color: #999;
  font-size: 15px;
  border-radius: 18px;
  border: orange;
`;
