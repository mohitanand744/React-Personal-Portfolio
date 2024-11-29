import Marquee from "react-fast-marquee";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const RealWorldExperience = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`py-3 bg-transparent custom-shadow2 ${
        isMobile && location.pathname === "/projects" ? "mt-[4.5rem]" : ""
      }`}
    >
      <Marquee
        gradient={true}
        gradientColor={[183, 0, 255]}
        direction="right"
        speed={120}
        pauseOnHover
      >
        <p style={{ color: "white", fontSize: "20px", margin: "0 10px" }}>
          Worked on 5 Real World Projects 🚀
        </p>
        <p style={{ color: "white", fontSize: "20px", margin: "0 10px" }}>
          Proficient in Frontend Development 🌟
        </p>
        <p style={{ color: "white", fontSize: "20px", margin: "0 10px" }}>
          Dedicated to Creating User-Centric Solutions 💡
        </p>
        <p style={{ color: "white", fontSize: "20px", margin: "0 10px" }}>
          Learning MERN 🖥️📖🖊️
        </p>
      </Marquee>
    </div>
  );
};

export default RealWorldExperience;
