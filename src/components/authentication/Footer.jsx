/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { GoogleLogo, TwitterLogo, AppleLogo } from "phosphor-react";
import { Link } from "react-router-dom";

const Footer = ({ path, namePath, text }) => {
  return (
    <div className="flex flex-col gap-3 mt-5">
      <hr />
      <p className="text-center text-base text-color-coolGray90 mt-2">Or log in with :</p>
      <div className="flex sm:flex-row flex-col justify-between items-center gap-2 text-color-primary90 font-semibold">
        <div className="py-2 rounded-sm  cursor-pointer w-full sm:px-4 md:px-6 border-2 border-color-primary90 flex items-center justify-center gap-2">
          <GoogleLogo size={32} />
          <p>Google</p>
        </div>
        <div className="py-2 rounded-sm  cursor-pointer w-full sm:px-4 md:px-6 border-2 border-color-primary90 flex items-center justify-center gap-2">
          <AppleLogo size={32} />
          <p>Apple</p>
        </div>
        <div className="py-2 rounded-sm  cursor-pointer w-full sm:px-4 md:px-6 border-2 border-color-primary90 flex items-center justify-center gap-2">
          <TwitterLogo size={32} />
          <p>Twitter</p>
        </div>
      </div>
      <hr className="mt-3" />
      <p className="text-center text-base text-color-coolGray90">
        {text ? (
          <>
            {text}{" "}
            <Link to={path} className="text-color-coolGray90 cursor-pointer hover:text-color-primary90 text-base transition-all">
              {namePath}
            </Link>
          </>
        ) : (
          <Link to={path} className="text-color-coolGray90 cursor-pointer hover:text-color-primary90 text-base transition-all">
            {namePath}
          </Link>
        )}
      </p>
    </div>
  );
};

export default Footer;
