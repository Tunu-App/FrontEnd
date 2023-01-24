import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "tochi" });
  const [signupData, setSignupData] = useState({});

  const saveUserData = (data) => {
    setUser(data);
  };

  const saveSignupData = (data) => {
    setSignupData(data);
  };

  return (
    <UserContext.Provider
      value={{ user, saveUserData, saveSignupData, signupData }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
