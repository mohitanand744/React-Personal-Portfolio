import React from "react";

const FilterButtons = ({ text, customStyling, onClickFun }) => {
  return (
    <button
      onClick={onClickFun}
      className={`title highLight-text ${customStyling} h-14 active:scale-[0.88] transition-all duration-300 text-lg sm:text-3xl ease rounded-3xl border-slate-600 font-normal  border-b-2`}
    >
      {text}
    </button>
  );
};

export default FilterButtons;
