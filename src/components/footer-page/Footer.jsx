import ItemsContainer from "./ItemsContainer";
import { menuFooter } from "./Menus";
import MenuFooter from "./MenuFooter";

const Footer = () => {
  return (
    <footer className="bg-[#B97375] text-[#FFFFFF] mt-10">
      <div className="md:flex md:justify-end md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 ">
        <div className="flex flex-col lg:flex-row space-y-2 sm:space-y-0 sm:space-x-2 px-7">
          <div className="flex justify-between items-center bg-white min-[320px]:w-full md:w-[300px] mr-5 rounded px-2 mb-2 md:mb-0 sm:mr-5 lg:mb-0 min-[320px]:py-1 md:py-2.5 lg:py-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#333"
              className="bi bi-envelope w-[10%]  h-[20px]"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
            <input
              type="email"
              placeholder="Enter your email to get the latest news..."
              className="min-[320px]:py-2 lg:py-1 text-gray-800 w-fullfocus:outline-none focus:border-0 bg-[#FFF] w-[85%] text-sm"
            />
          </div>

          <button
            className="bg-black-400 hover:bg-gray-500 duration-300 px-3 lg:px-5 py-2 lg:py-2.5 font-[Poppins]
            rounded-md text-white w-full md:w-auto bg-black"
          >
            Subscribe
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="min-[320px]:justify-between min-[320px]:gap-1 sm:gap-10
        text-center pt-2 text-[#FFFFFF] text-sm pb-8 w-full px-5"
      >
        <MenuFooter Links={menuFooter} />
      </div>
      <span className="block text-sm pb-5 text-center">
        Vitalitas Medical ©2023. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
