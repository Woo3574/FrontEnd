import FixHeader from "../styles/FixHeader";
import StoreList from "../components/StoreList";
import HomeItem from "../components/HomeItem";
import GlobalStyle from "../styles/GlobalStyle";
import { useCallback, useState } from "react";
import StoreSearch from "../search/StoreSearch";

const Main = () => {
  const [region, setRegion] = useState("all"); // setRegion을 호출해서 region 상태 변경
  const [brandName, setBrandName] = useState("all");
  const [reservationTime, setReservationTime] = useState("all");
  const onSelect = useCallback((category, value) => {
    if (category === "region") {
      setRegion(value);
    } else if (category === "brandName") {
      setBrandName(value);
    } else if (category === "revationTime") {
      setReservationTime(value);
    }
  }, []);

  return (
    <>
      <FixHeader />
      {/* 하나의 onSelect 전달 */}
      <StoreSearch
        category={{ region, brandName, reservationTime }}
        onSelect={onSelect}
      />
      <div style={{ height: "260px" }}></div>
      <GlobalStyle />
      <HomeItem />
      {/* <StoreList /> */}
    </>
  );
};

export default Main;
