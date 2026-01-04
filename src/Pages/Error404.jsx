import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Buttons/Button";

const Error404 = () => {
  return (
    <center className="w-full h-[90vh] flex justify-center items-center gap-8 flex-col">
      <h1 className="mt-5 text-2xl font-bold text-red-500 md:text-4xl">
        Error 404 Page Not Found!!
      </h1>
      <Link to={"/"} className="w-full ">
        <Button text={"Back to Home Page"} />
      </Link>
    </center>
  );
};

export default Error404;
