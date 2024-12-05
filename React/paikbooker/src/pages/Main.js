import FixHeader from "../styles/FixHeader";
import StoreList from "../components/StoreList";
import HomeItem from "../components/HomeItem";
import GlobalStyle from "../styles/GlobalStyle";
import { useCallback, useState, useEffect } from "react";
import StoreSearch from "../search/StoreSearch";
import axios from "axios";

const Main = () => {
  const [region, setRegion] = useState(""); // setRegion을 호출해서 region 상태 변경
  const [brandName, setBrandName] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [stores, setStores] = useState([]); // 검색된 매장들
  const onSelect = useCallback((category, value) => {
    if (category === "region") {
      setRegion(value);
    } else if (category === "brandName") {
      setBrandName(value);
    } else if (category === "reservationTime") {
      setReservationTime(value);
    }
  }, []);

  const onSearch = useCallback(async (region, brandName, reservationTime) => {
    try {
      console.log("검색 조건:", { region, brandName, reservationTime }); // 파라미터 확인
      // API 호출을 통해 조건에 맞는 데이터를 가져옵니다.
      const response = await axios.get(
        "http://localhost:8111/api/stores/search",
        {
          params: {
            region: region,
            brandName: brandName,
            reservationTime: reservationTime,
          },
        }
      );
      console.log(response.config.url);
      setStores(response.data); // 검색된 매장들 상태 업데이트
    } catch (error) {
      console.error("검색 실패:", error);
    }
  }, []);

  // 컴포넌트가 처음 로드될 때, 기본적으로 모든 매장을 가져오는 검색
  useEffect(() => {
    onSearch(region, brandName, reservationTime);
  }, []); // 빈 배열을 의존성으로 설정하면 컴포넌트가 처음 렌더링될 때만 호출됨

  return (
    <>
      <FixHeader />
      <div style={{ height: "260px" }}></div>
      <GlobalStyle />
      {/* 하나의 onSelect 전달 */}
      <StoreSearch
        region={region}
        brandName={brandName}
        reservationTime={reservationTime}
        onSelect={onSelect} // 카테고리 선택이 부모로 전달됨
        onSearch={onSearch} // 검색 요청을 부모에서 처리
      />

      {/* 디버깅용 상태 출력 */}
      {console.log("현재 stores 상태:", stores)}
      <HomeItem storeData={stores} />

      {/* <StoreList /> */}
    </>
  );
};

export default Main;
