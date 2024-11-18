import styled from "styled-components";

const Employee = styled.div`
  font-size: 15px;
  color: blue;
`;

const Customer = styled.div`
  font-size: 15px;
  color: red;
`;

const Order = ({ phone }) => {
  // 객체 디스트럭처링을 통해 props 객체에서 필요한 속성들만 추출
  const { name, productCompany, price, option, color } = phone;
  return (
    <>
      <Employee>
        매장직원 : {productCompany}회사의 제품중에 요즘 {name}이게 제일
        잘나갑니다. 이걸로 드릴까요?
      </Employee>
      <Customer>고객 : 네 그걸로 주세요</Customer>
      <Employee>
        매장직원 : 옵션은 총 3가지가 있습니다. 첫번째 {option.first}, 두번째
        {option.second}, 세번째 {option.third}
        어떤걸 추가하시겠나요?
      </Employee>
      <Customer>고객 : 따로 옵션은 안할래요.</Customer>
      <Employee>
        매장직원 : 색상은 {color.first}이랑 {color.second}이랑
        {color.third}이 있습니다. 어떤걸로 고르시겠어요?
      </Employee>
      <Customer>고객 : 저는 {color.second}이 마음에 드네요</Customer>
      <Employee>매장직원 : 지불하실 금액은 {price}입니다.</Employee>
    </>
  );
};

export default Order;
