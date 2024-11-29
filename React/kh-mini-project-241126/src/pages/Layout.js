import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserStore";
import { useNavigate, Outlet } from "react-router-dom";
import {
  Container,
  UserContainer,
  UserImage,
  UserAndName,
  StyledSideMenu,
  StyledMenuList,
  StyledMenuItem,
  MenuIcon,
  StyledLink,
  Dummy,
} from "../styles/LayoutStyle";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { FaHome, FaClipboardList, FaRegNewspaper } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { LuListTodo } from "react-icons/lu";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Side Bar 메뉴 열고 닫기
  const [member, setMember] = useState(""); // 회원 정보 업데이트
  const { color, name, imgUrl } = useContext(UserContext); // 전역 상태 관리
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goToSetting = () => {
    navigate("/setting");
  };

  useEffect(() => {}, []);

  return (
    <Container color={color}>
      <header className="head">
        <div onClick={toggleMenu}>
          {isMenuOpen ? (
            <GiCancel size={32} color="white" />
          ) : (
            <GiHamburgerMenu size={32} color="white" />
          )}
        </div>
        <div onClick={goToSetting}>
          <FiSettings size={32} color="white" />
        </div>
      </header>
      <StyledSideMenu isOpen={isMenuOpen} onClick={toggleMenu}>
        <StyledMenuList>
          <UserContainer>
            <UserImage
              src={member.image || "http://via.placeholder.com/160"}
              alt="User"
            />
            <UserAndName>
              <span>{member.name}</span>
              <span>{member.email}</span>
            </UserAndName>
          </UserContainer>
          {[
            { icon: <FaHome />, label: "Home", to: "/home" },
            { icon: <FaClipboardList />, label: "Boards", to: "/Boards" },
            { icon: <FaRegNewspaper />, label: "News", to: "/News" },
            { icon: <CgProfile />, label: "Members", to: "/Members" },
            { icon: <BiCameraMovie />, label: "Movies", to: "/Movies" },
            { icon: <LuListTodo />, label: "ToDos", to: "/ToDos" },
          ].map((item, index) => (
            <StyledMenuItem key={index}>
              <MenuIcon>{item.icon}</MenuIcon>
              <StyledLink to={item.to}>{item.label}</StyledLink>
            </StyledMenuItem>
          ))}
        </StyledMenuList>
      </StyledSideMenu>
      <main className="body">
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
