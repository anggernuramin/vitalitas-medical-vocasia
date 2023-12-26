// import React from "react";
import AllReview from "../components/AllReview";
import AuthPrivateRoute from "../hoc/AuthPrivateRoute";
import LayoutPages from "../layout/LayoutPages";

const ReviewPage = () => {
  return (
    <LayoutPages>
      <AllReview />
    </LayoutPages>
  );
};

export default AuthPrivateRoute(ReviewPage);
