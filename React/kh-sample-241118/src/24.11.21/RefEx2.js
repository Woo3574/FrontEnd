import { useEffect, useRef } from "react";

const InnerValueKeep = () => {
  const myButtonRef = useRef(null); // 특정한 DOM의 위치를 가리키기 위해서 사용

  useEffect(() => {
    // 값을 유지하기위한 문법, current 없이 렌더링하면 값이 사라지기 때문에
    // myButtonRef 내부의 값을 저장할 수있는 current라는 필드가 생긴다.
    if (myButtonRef.current) {
      // if() myButtonRef에 값이 있으면
      myButtonRef.current.innerText = "클릭하세요";
    }
  }, []);

  // 컴포넌트 내부 변수값 유지
  const count = useRef(0); // count.current 에 값이 들어간다.

  const handelClick = () => {
    count.current += 1;
    alert(`클릭 횟수 : ${count.current}`);
  };

  return (
    <>
      <button ref={myButtonRef} onClick={handelClick}>
        확인
      </button>
    </>
  );
};
