import { useEffect, useRef, useState } from "react";
import AboutMe from "./components/About/AboutMe";
import Home from "./components/Home/Home";
import Skill from "./components/Skills/Skill";
import Experience from "./components/Experiences/Experience";
import Projects from "./components/common/LatestProjects/Projects";
import ContactForm from "./components/Contact/ContactForm";
import useContextData from "./Hook/useContextData";

function App() {
  const [showGoToTop, setShowGoToTop] = useState(false);
  const { setActive } = useContextData();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [mouseOut, setMouseOut] = useState(false);

  // Storing Mouse Moves

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Selecting Containers

  const home = useRef(null);
  const about = useRef(null);
  const skill = useRef(null);
  const experience = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const handleScroll = () => {
    if (window.pageYOffset >= 130) {
      setShowGoToTop(true);
    } else {
      setShowGoToTop(false);
    }
  };

  useEffect(() => {
    // watching all sections
    window.addEventListener("scroll", handleScroll);

    const sections = [
      { id: "Home", container: home },
      { id: "About", container: about },
      { id: "Skill", container: skill },
      { id: "Experience", container: experience },
      { id: "Projects", container: projects },
      { id: "Contact", container: contact },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sections.forEach((section) => {
      if (section.container.current) {
        observer.observe(section.container.current);
      }
    });

    // tracking mouseMove
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", () => setMouseOut(true));
    window.addEventListener("mouseover", () => setMouseOut(false));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", () => setMouseOut(true));
      window.removeEventListener("mouseover", () => setMouseOut(false));
      sections.forEach((section) => {
        if (section.container.current) {
          observer.unobserve(section.container.current);
        }
      });
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="Home w-full min-h-[100vh] ">
        {" "}
        {!showGoToTop ? (
          ""
        ) : (
          <img
            className="fixed bottom-16 right-16 w-16 lg:w-20 active:rotate-[368deg] cursor-pointer active:scale-90  transition-all duration-200  z-50 rotate-[268deg]"
            onClick={goToTop}
            src="/rightArrow.png"
            alt="Go to Top"
          />
        )}
        {!mouseOut && (
          <div
            className={`followCursor w-8 h-8 fixed rounded-full `}
            style={{
              top: `${mousePosition.y}px`,
              left: `${mousePosition.x}px`,
            }}
          ></div>
        )}
        <div className="w-full">
          <div id="Home" ref={home}>
            <Home />
          </div>

          <div id="About" ref={about}>
            <AboutMe />
          </div>

          <div id="Skills" ref={skill}>
            <Skill />
          </div>
          <div id="Experience" ref={experience}>
            <Experience />
          </div>

          <div id="Projects" ref={projects}>
            <Projects />
          </div>

          <div id="Contact" ref={contact}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
