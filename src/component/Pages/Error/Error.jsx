import React from "react";
import { Link } from "react-router-dom";
import error from "../../../images/error.webp";

const Error = () => {
  return (
    <div className="error">
      <div className="error-img text-center mt-5">
        <img className="w-25" src={error} alt="error" />
      </div>
      <div className="text-center">
        <Link className="btn btn-warning py-2 px-4" to="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default Error;
