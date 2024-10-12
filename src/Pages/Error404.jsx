import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Buttons/Button";

const Error404 = () => {
  return (
    <center className="w-full h-[90vh] flex justify-center items-center gap-8 flex-col">
      <h1 className="text-red-500 mt-5 text-2xl md:text-4xl font-bold">
        Error404
      </h1>
      <Link to={"/"} className="w-full ">
        <Button text={"Back to Home Page"} />
      </Link>
    </center>
  );
};

export default Error404;
