// import React from "react";
import Riwayat from "../components/navbar/Riwayat";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer-page/Footer";
import AuthPrivateRoute from "../hoc/AuthPrivateRoute";

const RiwayatPage = () => {
  return (
    <>
      <Navbar />
      <Riwayat />
      <Footer />
    </>
  );
};

export default AuthPrivateRoute(RiwayatPage);
