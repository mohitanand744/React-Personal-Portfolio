import { useRef } from "react";

const SkillsSlider = ({ index, skillsUsed }) => {
  const scrollContainers = useRef([]);

  const scroll = (index, direction) => {
    const scrollAmount = 150;
    const container = scrollContainers.current[index];
    container?.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Skills Section */}
      <div className="relative flex items-center w-full my-2">
        <h3 className="text-2xl md:text-3xl">Skills Used:</h3>
        <div className="scrollButtons h-[4rem]">
          <img
            loading="lazy"
            className="w-[3.6rem] absolute active:scale-90 transition-all duration-200 ease-linear right-4 cursor-pointer"
            src="/rightArrow.png"
            alt="Scroll Right"
            onClick={() => scroll(index, "right")}
          />
          <img
            loading="lazy"
            className="w-[3.6rem] absolute active:scale-90 transition-all duration-200 ease-linear right-20 rotate-[180deg] cursor-pointer"
            src="/rightArrow.png"
            alt="Scroll Left"
            onClick={() => scroll(index, "left")}
          />
        </div>
      </div>

      <div
        ref={(el) => (scrollContainers.current[index] = el)}
        className="flex w-full gap-5 overflow-x-scroll hide-ScrollBar"
      >
        {skillsUsed?.map((skill, i) => (
          <button
            key={i}
            className="border-b-2 whitespace-nowrap py-3 px-5 active:scale-[0.88] transition-all duration-300 text-xl ease rounded-3xl border-slate-600 custom-shadow2"
          >
            {skill}
          </button>
        ))}
      </div>
    </>
  );
};

export default SkillsSlider;
