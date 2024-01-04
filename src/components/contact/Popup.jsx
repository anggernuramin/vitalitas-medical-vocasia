/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

function Popup(props) {
  const navigate = useNavigate();
  let closePop = () => {
    navigate("/");
  };

  return props.trigger ? (
    <div className="fixed z-[100] top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-slate-950 bg-opacity-50">
      <div className="bg-white w-full min-[320px]:max-w-xs md:max-w-md mx-auto rounded-md overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-semibold  text-[#B97375] text-center">
            {props.children}
          </h2>

          <div className="flex justify-end mt-5">
            <button
              onClick={closePop}
              type="button"
              className="bg-color-primary90 w-[30%] text-white px-4 py-2 rounded-sm hover:bg-primary70 focus:outline-none focus:shadow-outline-primary active:bg-primary80"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
