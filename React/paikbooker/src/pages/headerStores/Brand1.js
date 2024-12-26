import styled from "styled-components";
import { useState, useMemo } from "react";

// 두 위도-경도 좌표 간의 거리를 계산하는 Haversine 공식
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // 지구 반지름 (단위: 킬로미터)

  const deltaLat = toRad(lat2 - lat1);
  const deltaLon = toRad(lon2 - lon1);

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

const SortBy = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 10px;
  margin-right: 100px;

  button {
    width: 80px;
    height: 30px;
    font-weight: 600;
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
  }
`;

const BrandItemBlock = styled.div`
  .container {
    display: flex;
    flex-direction: column;
  }

  .brandWrapper {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  .brand {
    width: 383px;
    height: 266px;
    margin-top: 20px;
    margin-left: 120px;
    margin-bottom: 10px;
    background-color: #f1f1f1;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .brandLogo {
    width: 150px;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10px;
  }

  .stores {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
  }

  .storeBox {
    width: 383px;
    height: 276px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }

  .storeBoxUp {
    width: 100%;
    height: 215px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #f1f1f1;
    border-radius: 30px;
  }

  .storeBoxDown {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    font-size: 14px;
  }

  .boxDTextUp {
    padding-top: 10px;
    font-size: 16px;
  }

  .boxDTextDown {
    font-size: 16px;
  }
`;

const Brand1 = ({ dataReceivedAfterSearch }) => {
  const [sortType, setSortType] = useState("name");
  const [sortByDistance, setSortByDistance] = useState(false);

  const referenceLat = 37.500666760224306; // 기준 위도
  const referenceLon = 127.03646889929213; // 기준 경도

  // "빽보이피자" 데이터만 필터링
  const filteredData = useMemo(() => {
    return dataReceivedAfterSearch.filter(
      (item) => item.brandVO.brandName === "빽보이피자"
    );
  }, [dataReceivedAfterSearch]);

  // "빽보이피자" 브랜드 정보 추출
  const brand = useMemo(() => {
    if (filteredData.length > 0) {
      return {
        brandName: filteredData[0].brandVO.brandName,
        brandLogo2: filteredData[0].brandVO.brandLogo2,
        brandImg: filteredData[0].brandVO.brandImg,
      };
    }
    return null;
  }, [filteredData]);

  // 매장 데이터 정렬
  const sortedStores = useMemo(() => {
    let stores = [...filteredData];

    if (sortByDistance) {
      stores.sort((a, b) => {
        const distanceA = calculateDistance(
          referenceLat,
          referenceLon,
          a.storeLat,
          a.storeLon
        );
        const distanceB = calculateDistance(
          referenceLat,
          referenceLon,
          b.storeLat,
          b.storeLon
        );
        return distanceA - distanceB;
      });
    } else if (sortType === "name") {
      stores.sort((a, b) => a.storeName.localeCompare(b.storeName));
    } else if (sortType === "rating") {
      stores.sort(
        (a, b) => b.avgRatingVO.averageRating - a.avgRatingVO.averageRating
      );
    }

    return stores;
  }, [filteredData, sortType, sortByDistance]);

  if (!brand) {
    return <div>No data available for 빽보이피자</div>;
  }

  return (
    <>
      <SortBy>
        <button onClick={() => setSortType("name")}>자음순</button>
        <button onClick={() => setSortType("rating")}>별점순</button>
        <button onClick={() => setSortByDistance((prev) => !prev)}>거리순</button>
      </SortBy>
      <BrandItemBlock>
        <div className="container">
          <div className="brandWrapper">
            <div className="brand">
              <div
                className="brandLogo"
                style={{
                  backgroundImage: `url(${brand.brandLogo2})`,
                }}
              ></div>
            </div>
          </div>

          <div className="stores">
            {sortedStores.map((store) => (
              <div key={store.storeNo} className="storeBox">
                <div
                  className="storeBoxUp"
                  style={{
                    backgroundImage: `url(${brand.brandImg})`,
                  }}
                ></div>
                <div className="storeBoxDown">
                  <div className="boxDTextUp">{store.storeName}</div>
                  <div className="boxDTextDown">
                    <p style={{ color: "RED", display: "inline" }}>★ </p>
                    <p style={{ display: "inline" }}>
                      {store.avgRatingVO.averageRating}
                    </p>
                    <p
                      style={{
                        color: "#a4a4a4",
                        display: "inline",
                        fontSize: "13px",
                      }}
                    >
                      {store.brandVO.brandFood}ㆍ{store.storeAddr}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BrandItemBlock>
    </>
  );
};

export default Brand1;
