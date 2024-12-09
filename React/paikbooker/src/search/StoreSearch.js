import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 40px; /* 원의 너비 */
  height: 40px; /* 원의 높이 */
  background-color: black; /* 원의 배경색 */
  border-radius: 50%; /* 둥근 모양 */
  border: none; /* 기본 버튼 테두리 제거 */
  outline: none; /* 포커스 시 나타나는 테두리 제거 */
  background-image:url(https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2Fsearh.png?alt=media&token=cbfec402-d857-4edc-be0c-a8434cd526fb); /* 동적으로 이미지 경로 설정 */
  background-size: 20px 20px; /* 이미지 크기 맞춤 */
  background-position: center; /* 이미지 위치 */
  background-repeat: no-repeat; /* 이미지가 반복되지 않도록 설정 */
  cursor: pointer; /* 클릭 가능한 포인터 */

  /* 호버 및 클릭 시 효과 */
  &:hover {
    opacity: 0.8; /* 호버 효과 */
  }

  &:active {
    transform: scale(0.95); /* 클릭 시 살짝 축소 */
  }
`;

const StoreSearch = ({ getDataFromServerAndUpdateStoreList }) => {
  const [categories, setCategories] = useState({
    region: [],
    brandName: [],
    // reservationTime: [],
  });

  const [regionValue, setRegionValue] = useState("");
  const [brandNameValue, setBrandNameValue] = useState("");
  const [reservationTimeValue, setReservationTimeValue] = useState("");

  // 컴포넌트가 처음 렌더링될 때 카테고리 목록을 가져옵니다.
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const rsp = await axios.get(
          "http://localhost:8111/stores/categories" // region, brandName만 받아옴
        );
        console.log("카테고리 목록 응답:", rsp.data);
        setCategories({
          region: rsp.data.region || [],
          brandName: rsp.data.brandName || [],
        });
      } catch (error) {
        console.error("카테고리 목록 가져오기 실패:", error);
      }
    };
    fetchCategories();
  }, []);

  // 예약 시간은 리액트 내에서 하드코딩
  const reservationTimes = Array.from({ length: 24 }, (_, index) => {
    const hour = index + 1;
    return `${hour}:00`; // 1:00, 2:00, ..., 24:00
  });

  const handleSearchButtonClick = () => {
    // 검색 버튼 클릭 시 onSearchButtonClick의 하위 동작 중 하나
    getDataFromServerAndUpdateStoreList(
      regionValue,
      brandNameValue,
      reservationTimeValue
    );
  };

  // // async는 비동기 함수를 정의할 때 사용하는 JavaScript 키워드입니다. async와 await는 비동기 작업을 동기처럼 작성할 수 있도록 도와줍니다.
  // // 이 코드에서 사용된 async는 비동기적으로 데이터를 가져오는 API 요청을 처리하기 위해 사용됩니다.
  // // 즉, 비동기 작업을 처리하는 함수에서 await와 함께 사용되어, 비동기 작업을 직관적이고 동기적인 방식처럼 처리할 수 있게 해줍니다.
  // const handleSearch = async () => {
  //   try {
  //     // 내부 비동기 await, 요청이 완료될 때까지 기다린 후, 그 데이터를 response에 저장
  //     const rsp = await axios.get("http://localhost:8111/api/stores/search", {
  //       params: {
  //         region,
  //         brandName,
  //         reservationTime,
  //       },
  //     });
  //     setStores(rsp.data); // 검색 결과를 상태에 저장
  //   } catch (error) {
  //     console.error("검색 실패", error);
  //   }
  // };

  return (
    <div>
      {/* 카테고리 선택 UI */}
      <div>
        <select
          value={regionValue}
          onChange={(e) => {
            setRegionValue(e.target.value);
          }}
        >
          <option value="">지역 선택</option>
          {categories.region.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          value={brandNameValue}
          onChange={(e) => {
            setBrandNameValue(e.target.value);
          }}
        >
          <option value="">브랜드 선택</option>
          {categories.brandName.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* 예약 시간 선택 UI (하드코딩된 시간 목록) */}
        <select
          value={reservationTimeValue}
          onChange={(e) => setReservationTimeValue(e.target.value)}
        >
          <option value="">예약 시간 선택</option>
          {reservationTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>

        <Button onClick={handleSearchButtonClick} />
      </div>
    </div>
  );
};

export default StoreSearch;
