// import React from "react";
import Riwayat from "../components/navbar/Riwayat";
import AuthPrivateRoute from "../hoc/AuthPrivateRoute";
import LayoutPages from "../layout/LayoutPages";

const RiwayatPage = () => {
  return (
    <LayoutPages>
      <Riwayat />
    </LayoutPages>
  );
};

export default AuthPrivateRoute(RiwayatPage);
