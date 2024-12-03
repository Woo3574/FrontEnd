import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const HomeItemBlock = styled.div`
  .container {
    display: flex;
    flex-direction: column-reverse; /* 순서를 반대로 */
  }

  .brandWrapper {
    display: flex;
    align-items: center;
    gap: 20px;
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
  }

  .brandLogo {
    width: 300px;
    height: 100px;
    background-size: cover;
    background-color: #f1f1f1;
    border-radius: 10px;
  }

  .storeBox {
    display: flex;
    gap: 10px;
  }

  .storeBoxUp {
    width: 100px;
    height: 100px;
    background-size: cover;
    background-color: #dcdcdc;
    border-radius: 10px;
  }

  .storeBoxDown {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #333;
  }
`;

const HomeItem = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8111/api/stores/home"
        );
        setBrands(response.data);
      } catch (error) {
        console.error("데이터 로딩 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <HomeItemBlock>
      <div className="container">
        {brands.map(({ brand, stores }) => (
          <div key={brand.storeNo} className="brandWrapper">
            {/* 브랜드 로고 */}
            <div className="brand">
              <div
                className="brandLogo"
                style={{ backgroundImage: `url(${brand.brandLogo})` }}
              ></div>
            </div>

            {/* 매장 목록 */}
            <div className="storeBox">
              {stores.map((store) => (
                <div key={store.storeNo} className="storeBoxDown">
                  <div
                    className="storeBoxUp"
                    style={{ backgroundImage: `url(${store.storeImg})` }}
                  ></div>
                  <div>{store.storeName}</div>
                  <div>{store.storeAddr}</div>
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
