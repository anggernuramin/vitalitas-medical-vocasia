/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const MenuFooter = ({ Links }) => {
  return (
    <div className="flex justify-end ">
      {Links.map((link) => (
        <div key={link.name} className="p-2 cursor-pointer mx-1.5 text-sm">
          <a
            className="text-[#EEE] hover:text-[#FFFFFF] hover:font-semibold duration-300 cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default MenuFooter;
