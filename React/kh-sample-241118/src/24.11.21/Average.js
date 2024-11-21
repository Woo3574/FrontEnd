import { useMemo, useState } from "react";

const getAverage = (numbers) => {
  // 반환코드
  console.log("평균값 계산 중");
  if (numbers.length === 0) return 0;
  // reduce a+b =a 로가고 b에 새로운값이 들어온다,반복 진행
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    // parseInt : 값을 정수로 바꿈
    // 불변성때문에 concat을 사용
    const nextList = list.concat(parseInt(number));
    setList(nextList); // 새로 만들어진 배열로 상태 변경
    setNumber(""); // 입력창을 비우기 위해서
  };

  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <>
      <input type="text" value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list && list.map((value, index) => <li key={index}>{value}</li>)}
      </ul>
      <p>평균값 : {avg}</p>
    </>
  );
};

export default Average;
