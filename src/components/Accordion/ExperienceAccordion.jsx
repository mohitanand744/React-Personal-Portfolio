import { useState } from "react";

// In your component
const ExperienceAccordion = ({ experienceItem }) => {
  const [expandedIndex, setExpandedIndex] = useState(0); // Start with first role expanded

  const toggleRole = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const navigate = (direction) => {
    if (
      direction === "down" &&
      expandedIndex < experienceItem.roles.length - 1
    ) {
      setExpandedIndex(expandedIndex + 1);
    } else if (direction === "up" && expandedIndex > 0) {
      setExpandedIndex(expandedIndex - 1);
    }
  };

  return (
    <div className="flex flex-col gap-8 mt-2">
      {experienceItem.roles.map((role, rIndex) => (
        <div
          key={rIndex}
          className={`p-5 border-b-[1px] rounded-2xl transition-all duration-300 ${
            expandedIndex === rIndex ? "custom-shadow3" : ""
          }`}
        >
          {/* Header - Always visible */}
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleRole(rIndex)}
          >
            <div className="flex-1">
              <h2 className="mb-1 text-2xl lg:text-3xl">
                <span className="highLight-text">{role.position}</span>{" "}
                <span className="text-xl"> [{role.type}]</span>
              </h2>

              <p className="text-lg sm:text-xl">
                {role.start_date} -{" "}
                <span
                  className={`${
                    role.end_date === "Working..." && "text-green-500"
                  }`}
                >
                  {role.end_date}
                </span>
              </p>
            </div>

            {/* Arrow indicator */}
            <div className="ml-4">
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  expandedIndex === rIndex ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Expandable content */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedIndex === rIndex
                ? "max-h-[500px] opacity-100 mt-4"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-lg sm:text-xl">
              Duration: <span className="highLight-text">{role.duration}</span>
            </p>

            <p className="mt-3 text-xl lg:text-2xl">{role.description}</p>
          </div>

          {/* Navigation arrows - Only show when expanded */}
          {expandedIndex === rIndex && (
            <div className="flex items-center justify-between pt-4 mt-6 border-t border-gray-200 dark:border-gray-700">
              {/* Up arrow - hide if on first item */}
              {rIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("up");
                  }}
                  className="flex items-center gap-2 px-4 py-2 transition-colors bg-gray-100 rounded-lg dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                  <span>Previous Role</span>
                </button>
              )}

              {/* Down arrow - hide if on last item */}
              {rIndex < experienceItem.roles.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("down");
                  }}
                  className="flex items-center gap-2 px-4 py-2 ml-auto transition-colors bg-gray-100 rounded-lg dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <span>Next Role</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceAccordion;
