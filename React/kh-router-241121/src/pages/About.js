import { Link, useSearchParams } from "react-router-dom";
// 쿼리 스트링 : URL의 뒷 부분에 붙여서 전달하는 유동적인 데이터? 키=값&키=값

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 쿼리 스트링에서 정보 가져 오기
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  // detail 값ㅇ르 토글하는 함수
  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true }); //객체를 넣어야 하는 이유
  };

  // mode 값을 증가시키는 함수
  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <>
      <h1>여기는 About 페이지 입니다.</h1>
      <p>소개 페이지 입니다.</p>
      <Link to="/">홈으로 이동</Link>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>토글 디테일</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </>
  );
};

export default About;
