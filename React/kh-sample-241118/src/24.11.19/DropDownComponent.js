import { useState } from "react";

// select 요소와 option 요소를 사용하여 드롭다운 메뉴 구현
const DropDownComponent = () => {
  const [selectValue, setSelectValue] = useState("");

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  // 이렇게도 사용가능
  const fruits = [
    //["apple", "banana", "grape", "watermelon"];
    {
      value: "apple",
      text: "사과",
    },
    {
      value: "banana",
      text: "바나나",
    },
  ];
  return (
    <>
      <h1>드롭다운 예제</h1>
      {/*  value={selectValue} 안넣으면  */}
      <select value={selectValue} onChange={handleChange}>
        <option value="" disabled>
          과일을 선택하세요.
        </option>
        <option value={fruits[0].value}>{fruits[0].text}</option>
        <option value={fruits[1].value}>{fruits[1].text}</option>
        <option value="grape">포도</option>
        <option value="watermelon">수박</option>
      </select>
      <p>선택된 과일 : {selectValue}</p>
    </>
  );
};

export default DropDownComponent;
