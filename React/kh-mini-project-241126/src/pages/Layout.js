import { useContext, useEffect, useState } from "react";
import { userContext } from "../context/UserStore";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Side Bar 메뉴 열고 닫기
  const [member, setMember] = useState(""); // 회원 정보 업데이트
  const { color, name, imgUrl } = useContext(userContext); // 전역 상태 관리
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goToSetting = () => {
    navigate("/setting");
  };

  useEffect(() => {}, []);

  return (
    <>
      <p>Layout.js</p>
    </>
  );
};

export default Layout;
