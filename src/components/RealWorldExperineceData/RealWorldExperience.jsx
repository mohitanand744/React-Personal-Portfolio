import Marquee from "react-fast-marquee";

const RealWorldExperience = () => {
  /*  const [isMobile, setIsMobile] = useState(window.innerWidth < 642);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 642);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); */

  return (
    <div className={`py-3 bg-transparent custom-shadow2`}>
      <Marquee
        gradient={true}
        gradientColor={[183, 0, 255]}
        direction="left"
        speed={120}
        pauseOnHover
      >
        <p style={{ color: "white", fontSize: "20px", margin: "0 10px" }}>
          Worked on 7 Real World Projects 🚀
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
