import styled from "styled-components";
import { useEffect, useState } from "react";

const StoreListBlock = styled.div`
  box-sizing: border-box;
  margin-top: 2em;
  margin-bottom: 2em;
  margin-left: 20px;
`;

const StoreList = ({ store }) => {
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = store === "";
      } catch (e) {
        console.error("목록을 띄우지못했습니다.", e);
      }
    };
    fetchData();
  }, [store]);
  return (
    <>
      <StoreListBlock></StoreListBlock>
    </>
  );
};
export default StoreList;
