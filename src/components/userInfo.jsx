/* eslint-disable react-hooks/rules-of-hooks */
// import React from 'react'

import { useContextUser } from "../context/auth-context";

const userInfo = () => {
  const { user } = useContextUser();
  return (
    <section className="bg-[#F2F4F8]">
      <div className="container min-h-screen flex justify-start items-center flex-col py-[120px]">
        <div className="bg-white py-9 px-6 w-[450px] rounded-sm min-h-[320px] shadow-sm ">
          <h1 className="text-3xl mb-5 text-center">Profile User</h1>
          <p className="text-base mb-5">Nama : {user?.name}</p>
          <p className="text-base mb-5">Email : {user?.email}</p>
        </div>
      </div>
    </section>
  );
};

export default userInfo;
