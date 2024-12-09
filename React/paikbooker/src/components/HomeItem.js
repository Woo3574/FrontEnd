import styled from "styled-components";

const HomeItemBlock = styled.div`
  .container {
    display: flex;
    flex-direction: column-reverse; /* 순서를 반대로 */
  }

  .brandWrapper {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  .brand {
    width: 383px;
    height: 266px;
    margin-top: 50px;
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
    margin-top: 50px;
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
  // storeData가 유효한지 확인하고 빈 배열로 초기화
  const stores = Array.isArray(dataReceivedAfterSearch) && dataReceivedAfterSearch.length > 0
    ? dataReceivedAfterSearch.reduce((acc, curr) => {
        const brand = acc.find(item => item.brand.brandName === curr.brandVO.brandName);

        if (brand) {
          brand.stores.push(curr); // 기존 브랜드에 매장을 추가
        } else {
          acc.push({
            brand: curr.brandVO, // 새로운 브랜드가 나오면 브랜드 정보를 추가
            stores: [curr]
          });
        }

        return acc;
      }, [])
    : [];

  // 브랜드 순서를 거꾸로 뒤집기
  const reversedStores = stores.reverse();

  if (!reversedStores || reversedStores.length === 0) {
    return <div>No stores available</div>; // 데이터가 없을 경우 처리
  }

  return (
    <HomeItemBlock>
      <div className="container">
        {reversedStores.map((brandData) => (
          <div key={brandData.brand.brandName} className="brandWrapper">
            {/* 브랜드 로고 */}
            <div className="brand">
              <div
                className="brandLogo"
                style={{
                  backgroundImage: `url(${brandData.brand.brandLogo2})`, // 브랜드 로고 설정
                }}
              ></div>
            </div>

            {/* 해당 브랜드의 매장 목록, 가로로 나열 */}
            <div className="stores">
              {brandData.stores.map((store) => (
                <div key={store.storeNo} className="storeBox">
                  <div
                    className="storeBoxUp"
                    style={{
                      backgroundImage: `url(${brandData.brand.brandImg})`, // 매장 이미지 설정
                    }}
                  ></div>
                  <div className="storeBoxDown">
                    <div className="boxDTextUp">{store.storeName}</div>
                    <div className="boxDTextDown">
                     <p style={{ color: 'RED', display: 'inline' }}>★ </p>
                     <p style={{ display: 'inline' }}>{store.reviewVO.rvAverage}</p>
                     <p style={{ color: '#a4a4a4', display: 'inline', fontSize: "13px" }}>  {store.brandVO.brandFood}ㆍ{store.storeAddr}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </HomeItemBlock>
  );
};

export default HomeItem;

