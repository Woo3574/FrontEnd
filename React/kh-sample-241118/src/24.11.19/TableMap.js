import { useEffect, useState } from "react";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  background-color: antiquewhite;

  th,
  td {
    border: 1px solid #ccc;
    padding: 4px 8px;
  }

  th {
    background-color: royalblue;
    color: white;
  }
`;

// 서버에서 내려온데이터
const responseData = [
  {
    id: 1,
    name: "민지",
    addr: "서울시 강남구 신사동",
  },
  {
    id: 2,
    name: "하니",
    addr: "서울시 강남구 역삼동",
  },
  {
    id: 3,
    name: "혜린",
    addr: "서울시 강남구 청담동",
  },
  {
    id: 4,
    name: "다니엘",
    addr: "서울시 강남구 삼성동",
  },
  {
    id: 5,
    name: "혜인",
    addr: "서울시 강남구 선릉동",
  },
];

const TableMap = () => {
  const [memberData, setMemberDate] = useState([]);
  //콜백함수 조건이 됬을때 불려온다
  useEffect(() => {
    //이때 서버와 비동기 통신이 일어남
    // 리액트에서는 setMemberDate = (responseData) 가 작동하지 않는다
    // 그래서 다음과 같은 방식이 필요
    // 마운트시점
    setMemberDate(responseData);
  }, []);

  const handleTabelRowClick = (item) => {
    console.log(item);
  };

  return (
    <Table>
      <tr>
        <th>ID</th>
        <th>이름</th>
        <th>주소</th>
      </tr>
      {memberData &&
        memberData.map((member, index) => (
          <tr key={index} onClick={() => handleTabelRowClick(member)}>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>{member.addr}</td>
          </tr>
        ))}
    </Table>
  );
};

export default TableMap;
