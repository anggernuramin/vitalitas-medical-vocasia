/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen   py-28 bg-color-coolGray10 flex flex-col justify-center items-center">
      <div className="w-[300px] sm:w-[540px] md:w-[580px] bg-white overflow-hidden  px-5 sm:px-16 py-7">
        {children}
      </div>
    </div>
  );
};
export default Layout;
