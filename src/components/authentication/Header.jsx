/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function Header({ title, description }) {
  return (
    <>
      <h1 className="text-center text-color-coolGray90 text-3xl font-bold">
        {title}
      </h1>
      <p className="text-sm sm:text-base text-center font-normal text-color-coolGray90 mt-1">
        {description}
      </p>
    </>
  );
}

export default Header;
