import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  text,
  url,
  img,
  type = "button",
  disabled = false,
  onClick,
  className = "",
}) => {
  const content = (
    <>
      {img && (
        <img
          loading="lazy"
          className="w-4 shadow-2xl lg:w-8"
          src={img}
          alt=""
        />
      )}{" "}
      {text}
    </>
  );

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`py-[0.6rem] md:py-[0.8rem] text-xl md:text-3xl font-[500] rounded-3xl custom-button ${
        className ? className : "w-[30%] md:w-[30%]"
      } ${disabled ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}
    >
      {url ? (
        <Link
          className="flex justify-center items-center w-full gap-3 text-white text-decoration-none"
          to={url}
        >
          {content}
        </Link>
      ) : (
        <span className="flex justify-center items-center w-full gap-3 text-white text-decoration-none">
          {content}
        </span>
      )}
    </button>
  );
};

export default Button;
