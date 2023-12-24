// import React from "react";
import Navbar from "../components/navbar/Navbar";
import AllReview from "../components/AllReview";
import Footer from "../components/footer-page/Footer";
import AuthPrivateRoute from "../hoc/AuthPrivateRoute";

const ReviewPage = () => {
  return (
    <>
      <Navbar />
      <AllReview />
      <Footer />
    </>
  );
};

export default AuthPrivateRoute(ReviewPage);
