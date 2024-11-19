import { useState } from "react";

const RadioButton = () => {
  const [selectedValue, setSelectedValue] = useState("apple");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <label htmlFor="apple">
        {/* name은 그룹핑하기위한것, id는 label과 상호작용하기 위한것, value는 상태관리 값을 표기하기위해*/}
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
        <input
          type="radio"
          name="fruits"
          id="banana"
          value="banana"
          onChange={handleChange}
        />
        바나나
      </label>
      <label htmlFor="strawberry">
        <input
          type="radio"
          name="fruits"
          id="strawberry"
          value="strawberry"
          onChange={handleChange}
        />
        딸기
      </label>
      <br />
      <p>선택된 과일 : {selectedValue}</p>
    </>
  );
};

export default RadioButton;
