import styled from "styled-components";
import { Link } from "react-router-dom";

const defaultBackgroundColor = "#f9aa06";
const sideMenuBackgroundColor = "#eee";
const topbarHeight = "54px";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin: auto;
  background-color: ${(props) => props.color || defaultBackgroundColor};

  .head {
    display: flex;
    justify-content: space-between;
    position: fixed;
    height: ${topbarHeight};
    width: 100%;
    /* background-color: ${(props) => props.color || defaultBackgroundColor}; */
    z-index: 1;
    top: 0;
    left: 0%;
    padding: 10px 30px;
  }

  .body {
    margin-top: ${topbarHeight};
    height: calc(100vh - ${topbarHeight} -50px);
  }

  .footer {
    text-align: center;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  margin: 40px 20px;
`;

export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

export const UserAndName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 2px 10px;
  line-height: 1.5;
`;

export const StyledSideMenu = styled.div`
  position: fixed;
  left: 0;
  top: ${topbarHeight};
  width: 250px;
  height: calc(100vh - ${topbarHeight});
  background-color: ${sideMenuBackgroundColor};
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  border-top-right-radius: 10px;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease;
`;

export const StyledMenuList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledMenuItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
`;

export const MenuIcon = styled.span`
  margin-right: 10px;
`;
export const StyledLink = styled(Link)`
  // 원래 태그가 아닌경우 감싸준다.
  text-decoration: none;
  color: inherit; // 명시적으로 상속받을때 inherit

  &:hover {
    color: #3498db;
  }
`;

export const Dummy = styled.div`
  height: ${topbarHeight};
`;
