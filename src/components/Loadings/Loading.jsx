import React from "react";

const Loading = () => {
  return (
    <div className="w-full fixed-top bottom-0 min-h-[100vh] flex justify-center items-center">
      <img className="w-[10rem] md:w-[15rem]" src="/spinner.gif" alt="" />
    </div>
  );
};

export default Loading;
