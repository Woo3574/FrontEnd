import { useState } from "react";

const NameCardPrn = ({ nameCard }) => {
  return (
    <>
      <h3>명함 정보 출력</h3>
      <p>이름 : {nameCard.name}</p>
      <p>직책 : {nameCard.position}</p>
      <p>회사 : {nameCard.company}</p>
      <p>주소 : {nameCard.addr}</p>
      <p>메일 : {nameCard.email}</p>
      <p>전화 : {nameCard.phone}</p>
    </>
  );
};

const NameCard = () => {
  // nameCard에 배열을 넣어도되고 객체를 넣어도된다. (동적타입)
  const [nameCard, setNameCard] = useState({
    name: "",
    position: "",
    company: "",
    addr: "",
    email: "",
    phone: "",
  });

  const [submit, setSubmit] = useState(false);

  const onChange = (key, value) => {
    // 계산된 속성명 : ES6 에서 추가, []안에 표현식을 넣으면 됨
    setNameCard({ ...nameCard, [key]: value });
  };

  const onSubmit = () => {
    setSubmit(true);
  };

  return (
    <>
      <h1>회원 정보 가입</h1>
      <input
        type="text"
        placeholder="이름 입력"
        value={nameCard.name}
        onChange={(e) => onChange("name", e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="직책 입력"
        value={nameCard.position}
        onChange={(e) => onChange("position", e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="회사 입력"
        value={nameCard.company}
        onChange={(e) => onChange("company", e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="주소 입력"
        value={nameCard.addr}
        onChange={(e) => onChange("addr", e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="메일 입력"
        value={nameCard.email}
        onChange={(e) => onChange("email", e.target.value)}
      />
      <br />
      <input
        type="tel"
        placeholder="폰 입력"
        value={nameCard.phone}
        onChange={(e) => onChange("phone", e.target.value)}
      />
      <br />
      <button onClick={onSubmit}>제출</button>
      {submit && <NameCardPrn nameCard={nameCard} />}
    </>
  );
};
export default NameCard;
