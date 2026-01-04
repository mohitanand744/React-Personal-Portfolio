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
          Worked on <b>12+</b> Real World Projects 🚀
        </p>
        <p style={{ color: "white", fontSize: "20px", margin: "0 10px" }}>
          Proficient in <b>Frontend Development</b> 🌟
        </p>
        <p style={{ color: "white", fontSize: "20px", margin: "0 10px" }}>
          Dedicated to Creating <b>User Centric</b> Solutions 💡
        </p>
        <p style={{ color: "white", fontSize: "20px", margin: "0 10px" }}>
          Learning <b>Backend</b> 🖥️📖🖊️
        </p>
      </Marquee>
    </div>
  );
};

export default RealWorldExperience;
