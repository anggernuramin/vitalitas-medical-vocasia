/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { getUserLogged, putAccessToken } from "../utils";

export const AuthContext = createContext();

export const useContextUser = () => {
  return useContext(AuthContext);
};

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function onLogginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const response = await getUserLogged();
    setUser(response?.data);
  }

  const fetchUserName = async () => {
    const { data } = await getUserLogged();
    setUser(data);
  };

  useEffect(() => {
    fetchUserName();
  }, []);

  const initialValue = {
    user,
    setUser,
    onLogginSuccess,
  };
  return (
    <AuthContext.Provider value={initialValue}>{children}</AuthContext.Provider>
  );
};
