import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background-color: lightgray;
  padding: 16px;
  font-size: 24px;
  height: 100px;
  display: flex;
  justify-content: center; // 수평 정렬
  align-items: center; // 수직 정렬
`;

const Footer = styled.footer`
  background-color: royalblue;
  color: white;
  text-align: center;
  font-size: 18px;
  height: 100px;
  display: flex;
  justify-content: center; // 수평 정렬
  align-items: center; // 수직 정렬
`;

const Main = styled.main`
  height: calc(100vh - 200px);
`;

const Layout = () => {
  return (
    <>
      {/* 시멘틱태그 */}
      <Header>여기는 헤더 영역 입니다.</Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>여기는 풋터 영역 입니다.</Footer>
    </>
  );
};

export default Layout;
