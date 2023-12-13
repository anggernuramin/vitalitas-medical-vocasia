/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import React, { useEffect } from "react";
import { useContextUser } from "../context/auth";
import { useNavigate } from "react-router-dom";

const privateRoute = (Component) => {
  return () => {
    const navigate = useNavigate();
    const { user } = useContextUser();
    console.log("user", user);
    useEffect(() => {
      if (!user) {
        navigate("/login");
      }
    }, [user]);
    return <Component />;
  };
};

export default privateRoute;
