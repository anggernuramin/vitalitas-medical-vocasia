// import React from "react";

import { useDataAppoinment } from "../../context/data-appoinment";

const Riwayat = () => {
  const { dataAppoinment } = useDataAppoinment();
  console.log("dataAppoinment", dataAppoinment);
  return (
    <div className="py-[300px]">
      <div className="text-black pt-[100px]">
        {/* {dataAppoinment ? (
          <>
            <p>{dataAppoinment.doctor}</p>
          </>
        ) : (
          <p>Riwayat kosong</p>
        )} */}
      </div>
    </div>
  );
};

export default Riwayat;
