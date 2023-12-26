import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { aosConfig, initAos } from "../../utils/aosUtils";

const Profile = () => {
  useEffect(() => {
    initAos();
  }, []);
  return (
    <>
      <div className=" overflow-hidden flex flex-wrap items-center justify-between bg-[#F2F4F8] px-20 pt-7 pb-14 w-full">
        <div className="w-full flex justify-end mb-10">
          <NavLink
            className="border-none px-[6px] py-[3px] rounded bg-color-primary90 mt-5 text-white hover:bg-pink-400 text-xs lg:text-sm"
            to="/all-reviews"
          >
            Semua Review
          </NavLink>
        </div>
        <div
          {...aosConfig("fade-right")}
          className="text-center rounded overflow-hidden border bg-white p-[40px] w-full lg:w-[45%] mb-5 lg:mb-0 hover:bg-transparent"
        >
          <p className="text-gray-500">
            Dokternya sabar banget dan selalu ngedepanin kenyamanan dari
            pasiennya
          </p>
          <div className="flex justify-center pt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
            </svg>
          </div>
          <h6 className="font-semibold text-[#333]">Santi Ismatul</h6>
          <p className="text-[13px]">Role</p>
        </div>

        <div
          {...aosConfig("fade-left")}
          className="text-center rounded overflow-hidden border bg-white p-[40px] w-full lg:w-[45%] hover:bg-transparent"
        >
          <p className="text-gray-500">
            Tempatnya sangat nyaman dan bersih, serta pelayananya yang bagus
          </p>
          <div className="flex justify-center pt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
            </svg>
          </div>
          <h6 className="font-semibold text-[#333]">Vindi Aprilia</h6>
          <p className="text-[13px]">Role</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
