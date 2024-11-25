import { Link } from "react-router-dom";
import { UserContext } from "../context/UserStore";
import { useContext } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.color};
`;

const Home = () => {
  const { userId, password, color } = useContext(UserContext);
  return (
    <>
      <Container color={color}>
        <h1>여기는 홈 입니다.</h1>
        <p>가장 먼저 보이는 페이지 입니다.</p>
        <Link to="/about">소개 페이지로 이동</Link>
        <br />
        <Link to="/profile/frontend">Frontend 프로필 </Link>
        <br />
        <Link to="/profile/backend">Backend 프로필 </Link>
        <br />
        <Link to="/profile/dba">DBA 프로필 </Link>
        <br />
        <Link to="/articles">게시판 목록</Link>
        <p>아이디: {userId}</p>
        <p>패스워드: {password}</p>
      </Container>
    </>
  );
};

export default Home;
