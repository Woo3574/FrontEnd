import { createContext, useState } from "react";

export const UserContext = createContext(null); // UserContext 생성

const UserStore = (props) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        password,
        setPassword,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStore;
