import React from "react";

const DownloadButton = ({ text, url }) => {
  return (
    <button className="p-[0.6rem] px-[0.8rem] md:p-[0.8rem] text-xl md:text-2xl font-[500] custom-button">
      <a
        href={url}
        download={"Mohit Anand Resume"}
        className="flex items-center justify-center w-full gap-3 text-nowrap"
        target="_blank"
      >
        <img src="/download.png" alt="" className="w-8 shadow-2xl " />
        {text}
      </a>
    </button>
  );
};

export default DownloadButton;
