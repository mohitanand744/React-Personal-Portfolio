import React from "react";

const Button = ({ text, url, img }) => {
  return (
    <button className="py-[0.6rem] w-[30%] md:w-[30%] md:py-[0.8rem] text-xl md:text-3xl font-[500] rounded-3xl custom-button">
      <a
        target="_blank"
        className="text-decoration-none text-white flex gap-3"
        href={url}
      >
        {img && <img className="w-8 shadow-2xl" src={img} alt="" />} {text}
      </a>
    </button>
  );
};

export default Button;
