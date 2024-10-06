import React from "react";

const Button = ({ text, url }) => {
  return (
    <button className="py-[0.6rem] w-[30%] md:w-[30%] md:py-[0.8rem] text-xl md:text-3xl font-[500] rounded-3xl custom-button">
      <a target="_blank" className="text-decoration-none text-white" href={url}>
        {text}
      </a>
    </button>
  );
};

export default Button;
