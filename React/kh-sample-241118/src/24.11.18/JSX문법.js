// [ JSX 문법 이해하기 ]
// JSX에 표현식 포함하기 {변수나 연산식}
// 감싸인 요소로 표현하기 : 컴포넌트를 반환시 하나의 태그이어야 함, <></>
// <></>, <Fragment></Fragment> 같음
// 조건부 랜더링 : JSX문 내부에서는 조건부 연산자 사용 가능
// 3항 연산자 사용으로 참인 경우와 거짓인 경우에 화면을 다르게 구성 할  수 있음
// 인라인 스타일링 : 문자열 형태가 아니고 객체 형태로 만들어야 함
// 카밀표기법으로 적용해야됨

const inlineStyle = {
  backgroundColor: "#222",
  color: "royalBlue",
  fontSize: "2em",
};

const JsxSyntax = () => {
  const name = "리액트";
  const member = true;
  return (
    //  JSX 문법
    // 감싸인태그 <></> 리액트는 하나의 태그로 넘어가야한다
    <>
      {/* 화면에 무엇을 그릴지 */}
      {name === "리액트" ? (
        <h1 style={inlineStyle}>리액트를 공부 하겠습니다.</h1>
      ) : (
        <h1 style={inlineStyle}>자바스크립트를 공부 하겠습니다.</h1>
      )}

      {/* 화면에 그려줄지 말지 */}
      {member && (
        <>
          <h1>환영합니다. 고객님..</h1>
          <p>해당 메뉴를 자유롭게 사용하시면 됩니다.</p>
        </>
      )}
    </>
  );
};
// export 내보내다
export default JsxSyntax;
