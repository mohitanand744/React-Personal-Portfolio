import React from "react";

const DownloadButton = ({ text, url }) => {
  return (
    <button className="py-[0.6rem] w-[30%] md:w-[30%] md:py-[0.8rem] text-xl md:text-3xl font-[500] rounded-3xl custom-button">
      <a
        href={url}
        download={"Mohit Anand Resume"}
        className="flex items-center justify-center w-full gap-3"
        target="_blank"
      >
        <img src="/download.png" alt="" className="w-4 shadow-2xl lg:w-8" />
        {text}
      </a>
    </button>
  );
};

export default DownloadButton;
