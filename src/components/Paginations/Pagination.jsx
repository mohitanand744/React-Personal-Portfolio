import React from "react";
import useContextData from "../../Hook/useContextData";

const Pagination = ({
  handlePageChange,
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const { scrollToSection } = useContextData();

  return (
    <>
      <div className="float-end flex justify-center w-full items-center gap-3 mb-16">
        <img
          className="w-[4rem] h-[4rem] active:scale-90 transition-all duration-200 ease-linear cursor-pointer rotate-[180deg]"
          src="/rightArrow.png"
          alt="Scroll Right"
          onClick={() => {
            setCurrentPage((pageNum) => Math.max(pageNum - 1, 1));
            scrollToSection("Home");
          }}
        />
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => {
              handlePageChange(i + 1);
              scrollToSection("Home");
            }}
            className={`border-b-[3px] border-t-2 w-[4rem] text-2xl text-white md:w-[4.5rem] h-[4rem]  md:h-[4.5rem] active:scale-[0.88] transition-all duration-300 ease rounded-full border-slate-600 ${
              currentPage === i + 1 ? "custom-shadow3" : "custom-shadow2"
            } font-bold  `}
          >
            {i + 1}
          </button>
        ))}
        <img
          className="w-[4rem] h-[4rem] active:scale-90 transition-all duration-200 ease-linear  cursor-pointer"
          src="/rightArrow.png"
          alt="Scroll Left"
          onClick={() => {
            setCurrentPage((pageNum) => Math.min(pageNum + 1, totalPages));
            scrollToSection("Home");
          }}
        />
      </div>
    </>
  );
};

export default Pagination;
