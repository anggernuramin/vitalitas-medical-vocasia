/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer-page/Footer";

const LayoutPages = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutPages;
