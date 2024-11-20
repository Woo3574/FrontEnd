//(1)
// import styled from "styled-components";
// const Employee = styled.div`
//   font-size: 15px;
//   color: blue;
// `;

// const Customer = styled.div`
//   font-size: 15px;
//   color: red;
// `;

// const Order = ({ phone }) => {
//   // 객체 디스트럭처링을 통해 props 객체에서 필요한 속성들만 추출
//   const { name, productCompany, price, option, color } = phone;
//   return (
//     <>
//       <Employee>
//         매장직원 : {productCompany}회사의 제품중에 요즘 {name}이게 제일
//         잘나갑니다. 이걸로 드릴까요?
//       </Employee>
//       <Customer>고객 : 네 그걸로 주세요</Customer>
//       <Employee>
//         매장직원 : 옵션은 총 3가지가 있습니다. 첫번째 {option.first}, 두번째
//         {option.second}, 세번째 {option.third}
//         어떤걸 추가하시겠나요?
//       </Employee>
//       <Customer>고객 : 따로 옵션은 안할래요.</Customer>
//       <Employee>
//         매장직원 : 색상은 {color.first}이랑 {color.second}이랑
//         {color.third}이 있습니다. 어떤걸로 고르시겠어요?
//       </Employee>
//       <Customer>고객 : 저는 {color.second}이 마음에 드네요</Customer>
//       <Employee>매장직원 : 지불하실 금액은 {price}입니다.</Employee>
//     </>
//   );
// };

// export default Order;

// (2)
//1.버튼클릭 -> 이벤트 핸들러 실행 -> setNumber호출 -> 상태변경

//useState는 리액트의 상태관리 훅, 컴포넌트 내부에서 값을 저장하고 업데이트하는 기능 제공
// import { useState } from "react";

// const TouchInc = () => {
//   //   상태변수, number상태를 변경하는 함수
//   const [number, setNumber] = useState(0); // 상태 변수 선언
//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => setNumber(number + 1)}>+1</button>
//       <button onClick={() => setNumber(0)}>초기화</button>
//       <button onClick={() => setNumber(number - 1)}>-1</button>
//     </>
//   );
// };

// export default TouchInc;

//(3)

import { useState } from "react";
const RadoioButton = () => {
  const [selecet, setSelect] = useState("apple");

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <>
      <label htmlFor="apple">
        <input
          type="radio"
          name="fruits"
          id="apple"
          value="apple"
          onChange={handleChange}
        />
        사과
      </label>
      <label htmlFor="banana">
        <input type="radio" name="fruits" id="banana" value="banana" />
      </label>
    </>
  );
};
