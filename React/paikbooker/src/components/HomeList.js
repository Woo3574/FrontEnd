import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeItemBlock = styled.div`
  .container {
    width: 1920px;
    height: 336px;
    display: flex;
    flex-direction: row;
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
  }

  .storeBox {
    width: 383px;
    height: 276px;
    margin-top: 50px;
    margin-left: 50px;
    box-sizing: border-box;
  }

  .storeBoxUp {
    width: 100%;
    height: 215px;
    border-radius: 30px;
    background-color: #f1f1f1;
  }

  .storeBoxDown {
    width: 100%;
    height: 55px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
  }

  .boxDTextUp {
    font-size: 16px;
  }

  .boxDTextDown {
    font-size: 16px;
  }
`;

const HomeItem = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const rsp = await axios.get("http://localhost:8111/api/stores/home");
        setBrands(rsp.data);
      } catch (error) {
        console.error("데이터 로딩 실패", error);
      }
    };
    fetchBrands();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HomeItemBlock>
        <div className="container">
          <div className="brand" />
          <div className="storeBox">
            <div className="storeBoxUp" />
            <div className=" storeBoxDown">
              <div className="boxDTextUp">TEXT UP</div>
              <div className="boxDTextDown">TEXT DOWN</div>
            </div>
          </div>
        </div>
      </HomeItemBlock>
    </>
  );
};

export default HomeItem;
