const Test = (props) => {
  const { name, age, addr, job, isAdult } = props;
  return (
    <>
      <p>안녕하세요 저의 이름은 {name} 입니다.</p>
      <p>저의 나이는 {age} 입니다.</p>
      <p>집주소는 {addr}입니다.</p>
      <p>직업은 {job}입니다</p>
      {isAdult ? <p>성인</p> : <p>미성년자</p>}
    </>
  );
};
export default Test;
