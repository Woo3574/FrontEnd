import { createContext, useState } from "react";

export const UserContext = createContext(null); // UserContext 생성

// 전역상태 관리 등록
const UserStore = (props) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("white");

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        password,
        setPassword,
        color,
        setColor,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStore;
