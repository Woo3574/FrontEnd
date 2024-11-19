import { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    //컴포넌트 마운트 시 실행
    const intervalID = setInterval(() => setDate(new Date()), 1000);
    // 컴포넌트가 언마운트 될때 setInteval을 정리 로직
    return () => clearInterval(intervalID);
  }, []); // [ ]의존성 배열이라고 하며, [ ]빈 배열이면 마운트 시점을 의미

  return (
    <>
      <h1>현재 시간을 표시 합니다.</h1>
      <h2>현재 시간은 {date.toLocaleTimeString()}</h2>
    </>
  );
};

export default Clock;
