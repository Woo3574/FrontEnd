import { useRef } from "react";
// 렌더링을 유발하지않는다 useRef

const CreateRef = () => {
  const inputRef = useRef(null); // 참조하는 DOM요소가 없음

  const handleFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  return (
    <>
      {/* ref={} 참조하고있는 dom, DOM을 추적할때 사용 ref */}
      <input disabled type="text" ref={inputRef} />
      <button onClick={handleFocus}>활성화</button>
    </>
  );
};

export default CreateRef;
