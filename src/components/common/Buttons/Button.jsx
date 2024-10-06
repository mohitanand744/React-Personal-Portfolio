import React from "react";

const Button = ({ text }) => {
  return (
    <button className="py-[0.6rem] w-[30%] md:w-[30%] md:py-[0.8rem] text-xl md:text-3xl font-[500] rounded-3xl custom-button">
      {text}
    </button>
  );
};

export default Button;
