import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
