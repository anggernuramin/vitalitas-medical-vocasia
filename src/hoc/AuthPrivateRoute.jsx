/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../utils";

const AuthPrivateRoute = (Component) => {
  return () => {
    const navigate = useNavigate();
    useEffect(() => {
      if (!getAccessToken()) {
        navigate("/login");
      }
    }, []);
    return <Component />;
  };
};

export default AuthPrivateRoute;
