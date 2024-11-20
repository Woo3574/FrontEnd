import { useState } from "react";

const TodoList = () => {
  const [names, setNames] = useState([
    { id: 1, text: "html 연습" },
    { id: 2, text: "css 복습" },
    { id: 3, text: "자바스크립트 이해" },
    { id: 4, text: "리액트 프로젝트" },
  ]);

  const [inputText, setInputText] = useState(""); // 입력을 받기위한 부분
  const [nextId, setNextId] = useState(5);
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    //리액트는 불변성의 원칙을 대게 중요시한다.

    // 렌더링을 진행시켜야할 시점을 주소안의 데이터를 다비교하고 진행하기엔
    // 너무 무거우니 변수의 주소가 변했는지를 확인하고 변한시점에 렌더링을 진행한다.
    // concat을 사용한것은 불변성의 원칙을 지키기 위해서

    // const nextNames = names.concat({id: nextId, text: inputText});

    const nextNames = [...names, { id: nextId, text: inputText }];
    setNextId(nextId + 1); // id를 증가 시킴
    setNames(nextNames); // todo list 갱신
    setInputText(""); // 입력창을 초기화
  };

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>
        {names && names.map((name) => <li key={name.id}>{name.text}</li>)}
      </ul>
    </>
  );
};

export default TodoList;
