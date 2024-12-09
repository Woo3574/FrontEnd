import styled from "styled-components";
import { useState, useMemo } from "react";

// 두 위도-경도 좌표 간의 거리를 계산하는 Haversine 공식
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  // 각도를 라디안으로 변환하는 함수
  const toRad = (value) => (value * Math.PI) / 180;
  
  const R = 6371; // 지구의 반지름 (단위: 킬로미터)

  // 위도와 경도의 차이를 라디안으로 변환
  const deltaLat = toRad(lat2 - lat1);  // 위도의 차이
  const deltaLon = toRad(lon2 - lon1);  // 경도의 차이

  // Haversine 공식에서 사용되는 값 계산
  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +  // 위도 차이에 대한 함수
    Math.cos(toRad(lat1)) *  // 첫 번째 좌표의 위도에 대한 함수
    Math.cos(toRad(lat2)) *  // 두 번째 좌표의 위도에 대한 함수
    Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2); // 경도 차이에 대한 함수

  // 두 점 간의 중앙각을 계산
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // 거리를 계산하여 반환 (단위: 킬로미터)
  return R * c; 
};


const SortBy = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 10px;
  margin-right: 100px;

  /* 3D effect on the buttons */
  perspective: 230px;

  button {
    width: 80px;
    height: 30px;
    line-height: 30px;
    font-weight: 600;
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    perspective: inherit; /* Ensure that perspective is inherited from the parent */
  }

  button span {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid #000;
    text-align: center;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
    transform-style: preserve-3d;
    font-size: 12px;
    top: 0;
    left: 0;
    transform-origin: 50% 50%;
  }

 /* 첫 번째 span - 초기 회전 상태 */
button span:nth-child(1) {
  /* 그림자 효과 */
  box-shadow:
    -7px -7px 20px 0px #fff9,  /* 상단 왼쪽 그림자 */
    -4px -4px 5px 0px #fff9,   /* 상단 왼쪽 작은 그림자 */
    7px 7px 20px 0px #0002,    /* 하단 오른쪽 그림자 */
    4px 4px 5px 0px #0001;     /* 하단 오른쪽 작은 그림자 */

  /* 3D 회전: Y축을 기준으로 90도 회전 */
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);

  /* 변형의 기준점 설정: 중앙에서 -20px 깊이 */
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;

  /* 처음에는 수직으로 90도 회전된 상태로 보이도록 설정 */
  transform: rotateX(90deg); 
}

/* 두 번째 span - 처음에 보이는 상태 */
button span:nth-child(2) {
  /* 3D 회전: Y축을 기준으로 0도로 설정하여 수평 상태로 보이도록 함 */
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);

  /* 변형의 기준점 설정: 중앙에서 -20px 깊이 */
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}

/* hover 상태 (버튼에 마우스를 올렸을 때) */
button:hover span:nth-child(1) {
  /* 첫 번째 span이 마우스를 올렸을 때 회전이 풀려서 보이게 됨 */
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}

button:hover span:nth-child(2) {
  /* 두 번째 span의 배경을 변경하고 회전하여 숨김 */
  background: #e0e5ec;  /* 배경색을 회색으로 변경 */
  color: #e0e5ec;        /* 글자 색도 회색으로 변경 */
  
  /* 3D 회전: Y축을 기준으로 -90도 회전하여 보이지 않게 됨 */
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}

`;

const HomeItemBlock = styled.div`
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
    box-sizing: border-box;
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
    background-color: #f1f1f1;
    border-radius: 10px;
  }

  .stores {
    box-sizing: border-box;
    display: flex;
    gap: 50px;
  }

  .storeBox {
    width: 383px;
    height: 276px;
    margin-top: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .storeBoxUp {
    width: 100%;
    height: 215px;
    background-size: contain;
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

const HomeItem = ({ dataReceivedAfterSearch }) => {
  const [sortType, setSortType] = useState("name");
  const [sortByDistance, setSortByDistance] = useState(false);

  const referenceLat = 37.500666760224306;
  const referenceLon = 127.03646889929213;

  const stores = useMemo(() => {
    return Array.isArray(dataReceivedAfterSearch) && dataReceivedAfterSearch.length > 0
      ? dataReceivedAfterSearch.reduce((acc, curr) => {
          const brand = acc.find((item) => item.brand.brandName === curr.brandVO.brandName);
          if (brand) {
            brand.stores.push(curr);
          } else {
            acc.push({
              brand: curr.brandVO,
              stores: [curr],
            });
          }
          return acc;
        }, []): [];
  }, [dataReceivedAfterSearch]);

  const sortedStores = useMemo(() => {
    return stores.map((brandData) => {
      let sortedStores = [...brandData.stores];

      if (sortByDistance) {
        sortedStores.sort((a, b) => {
          const distanceA = calculateDistance(referenceLat, referenceLon, a.storeLat, a.storeLon);
          const distanceB = calculateDistance(referenceLat, referenceLon, b.storeLat, b.storeLon);
          return distanceA - distanceB;
        });
      } else if (sortType === "name") {
        sortedStores.sort((a, b) => a.storeName.localeCompare(b.storeName));
      } else if (sortType === "rating") {
        sortedStores.sort((a, b) => b.reviewVO.rvAverage - a.reviewVO.rvAverage);
      }

      return { ...brandData, stores: sortedStores };
    });
  }, [stores, sortType, sortByDistance]);

  if (!sortedStores || sortedStores.length === 0) {
    return <div>No stores available</div>;
  }

  return (
    <>
      <SortBy>
        <button
          onClick={() => {
            setSortType("name");
            setSortByDistance(false);
          }}
        >
          <span>CLICK</span>
          <span data-text="자음순">자음순</span>
        </button>
        <button
          onClick={() => {
            setSortType("rating");
            setSortByDistance(false);
          }}
        >
          <span>CLICK</span>
          <span data-text="별점순">별점순</span>
        </button>
        <button
          onClick={() => {
            setSortType(null);
            setSortByDistance((prev) => !prev);
          }}
        >
          <span>CLICK</span>
          <span data-text="거리순">거리순</span>
        </button>
      </SortBy>
      <HomeItemBlock>
        <div className="container">
          {sortedStores.map((brandData) => (
            <div key={brandData.brand.brandName} className="brandWrapper">
              <div className="brand">
                <div
                  className="brandLogo"
                  style={{
                    backgroundImage: `url(${brandData.brand.brandLogo2})`,
                  }}
                ></div>
              </div>

              <div className="stores">
                {brandData.stores.map((store) => (
                  <div key={store.storeNo} className="storeBox">
                    <div
                      className="storeBoxUp"
                      style={{
                        backgroundImage: `url(${brandData.brand.brandImg})`,
                      }}
                    ></div>
                    <div className="storeBoxDown">
                      <div className="boxDTextUp">{store.storeName}</div>
                      <div className="boxDTextDown">
                        <p style={{ color: "RED", display: "inline" }}>★ </p>
                        <p style={{ display: "inline" }}>{store.reviewVO.rvAverage}</p>
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
          ))}
        </div>
      </HomeItemBlock>
    </>
  );
};

export default HomeItem;
