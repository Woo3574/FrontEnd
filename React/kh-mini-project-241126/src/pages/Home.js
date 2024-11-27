import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const HomeStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  width: 500px;
  height: 500px;
  margin: 150px auto;
  border: 1px solid black;
  display: flex;
  align-items: center;
`;

//////////////////////////////////
/////////////////////////////////
const MemberInfo = () => {
  const [infoData, setInfoDate] = useState({
    email: "",
    password: "",
    name: "",
  });
};

useEffect(() => {}, []);

const Home = () => {
  return (
    <>
      <HomeStyle />
      <Container></Container>
    </>
  );
};

export default Home;
