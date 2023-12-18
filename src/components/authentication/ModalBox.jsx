/* eslint-disable react/prop-types */
import { X } from "phosphor-react";

const ModalBox = ({ responseMessageError, closeModal }) => {
  return (
    <>
      <div className="absolute  top-0 right-0 bottom-0 left-0 bg-slate-900 opacity-50 z-30 "></div>
      <div className="fixed w-[80%] md:w-[60%] container mx-auto z-40 rounded-sm top-[-8%] left-[50%] translate-x-[-50%] translate-y-[50%] bg-slate-100">
        <div className="flex flex-col gap-3 dark:text-slate-900">
          <div className="flex px-5 pt-5 justify-between items-center">
            <h2 className="text-2xl">Warning</h2>
            <X
              size={24}
              className="cursor-pointer hover:text-color-primary90"
              onClick={closeModal}
            />
          </div>
          <hr />
          <p className="mx-5 p-5 rounded-sm bg-yellow-200">
            {responseMessageError}
          </p>
          <hr />
          <div className="flex justify-end items-end px-5 mb-3">
            <button
              onClick={closeModal}
              className="btn btn-ghost bg-slate-300 text-md"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBox;
