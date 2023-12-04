import React from "react";
import ItemsContainer from "./ItemsContainer";
import { menuFooter } from "./Menus";
import MenuFooter from "./MenuFooter";

const Footer = () => {
  return (
    <footer className="bg-[#B97375] text-[#FFFFFF]">
      <div className="md:flex md:justify-end md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7"> 
        <div className="flex">
          <div className="flex bg-white items-center mr-5 rounded px-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#333" className="bi bi-envelope" viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
          </svg>
          <input
            type="email"
            placeholder="Enter your email to get the latest news..."
            className="text-gray-800 sm:w-80 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 focus:outline-none ml-70 bg-[#FFF] px-3"
          />
          </div>

          <button
            className="bg-black-400 hover:bg-gray-500 duration-300 px-5 py-2.5 font-[Poppins]
            rounded-md text-white md:w-auto w-full bg-black"
          >
            Subscribe
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="flex justify-between sm:grid-cols-2 lg:grid-cols-3 gap-10
        text-center pt-2 text-[#FFFFFF] text-sm pb-8 inline-flex w-full px-5"
      >
        <span className="p-2 cursor-pointer mx-1.5 text-sm">Vinzeta ©2023. All rights reserved.</span>
        <MenuFooter Links={menuFooter}/>
      </div>
    </footer>
  );
};

export default Footer;
