import React from "react";

const DownloadButton = () => {
  return (
    <button className="py-[0.6rem] w-[30%] md:w-[30%] md:py-[0.8rem] text-xl md:text-3xl font-[500] rounded-3xl custom-button">
      <a
        href="/Mohit Anand.pdf"
        download={"Mohit Anand Resume"}
        className="flex gap-3 items-center"
        target="_blank"
      >
        <img src="/download.png" alt="" className="w-4 lg:w-8 shadow-2xl" />
        Resume
      </a>
    </button>
  );
};

export default DownloadButton;
