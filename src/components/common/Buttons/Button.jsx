import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, url, img }) => {
  return (
    <button className="py-[0.6rem] w-[30%] md:w-[30%] md:py-[0.8rem] text-xl md:text-3xl font-[500] rounded-3xl custom-button">
      <Link className="flex gap-3 text-white text-decoration-none" to={url}>
        {img && (
          <img
            loading="lazy"
            className="w-4 shadow-2xl lg:w-8"
            src={img}
            alt=""
          />
        )}{" "}
        {text}
      </Link>
    </button>
  );
};

export default Button;
