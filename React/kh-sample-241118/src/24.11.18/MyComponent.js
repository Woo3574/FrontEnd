const MyComponent = (props) => {
  return (
    <>
      <p>안녕하세요. 제 이름은 {props.name} 입니다.</p>
      <p>나이는 {props.age}입니다.</p>
    </>
  );
};
// defaultProps : props 값이 지정되지 않는 경우 기본값을 설정
MyComponent.defaultProps = {
  name: "기본 이름",
  age: 20,
};

export default MyComponent;
