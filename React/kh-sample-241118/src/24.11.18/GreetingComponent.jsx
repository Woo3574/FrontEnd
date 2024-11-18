import "../App.css";

const member = {
  name: "곰돌이사육사",
  job: "Developer",
  addr: "서울 역삼동",
  gender: "남성",
};

const getGreeting = (user) => {
  return user ? <h1>환영합니다. {user}님.</h1> : <h1>환영합니다. 방문자님.</h1>;
};

// 앞에오는 철자가 대문자로 바꾸면 컴포넌트
// class 선택자는 class가 아니고 className으로 변경 됨
// 태그는 항상 닫힘 태그이어야 함
const GreetingComponent = () => {
  return (
    <div className="App">
      <p className="title-name">제 이름은 {member.name}</p>
      <p className="title-name">직업은 {member.job}</p>
      <p className="title-name">주소는 {member.addr}</p>
      <p className="title-name">성별은 {member.gender}</p>
      <hr />
      <p>{getGreeting(member.name)}</p>
    </div>
  );
};

export default GreetingComponent;
