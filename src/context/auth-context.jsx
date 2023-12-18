/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { getUserLogged, putAccesToken, getTokenUsername } from "../utils";

export const AuthContext = createContext();

export const useContextUser = () => {
  return useContext(AuthContext);
};

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  async function onLogginSuccess({ accessToken }) {
    putAccesToken(accessToken);
    const response = await getUserLogged();
    setUser(response?.data);
  }

  useEffect(() => {
    // // IIFE (Immediatly Invoke FUnction)
    // (async () => {
    //   const response = await getUserLogged();
    //   console.log("response", response);
    // })();
    // onLogginSuccess();

    setUser(getTokenUsername());
  }, []);

  useEffect(() => {
    if (user) {
      // console.log(user);
      // console.log("ada user");
    } else {
      // console.log("tidak ada user");
    }
  }, [user]);

  // cleanUp useEffect ,useMemo // hapus dark dari daisy ui
  const initialValue = {
    user,
    setUser,
    onLogginSuccess,
  };
  return (
    <AuthContext.Provider value={initialValue}>{children}</AuthContext.Provider>
  );
};
