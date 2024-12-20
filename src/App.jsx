import { useEffect, useRef, useState } from "react";
import AboutMe from "./components/About/AboutMe";
import Home from "./components/Home/Home";
import Skill from "./components/Skills/Skill";
import Experience from "./components/Experiences/Experience";
import ContactForm from "./components/Contact/ContactForm";
import useContextData from "./Hook/useContextData";
import LatestNotes from "./components/FreeNotes/LatestNotes";
import CursorFollowing from "./components/CurserAnimations/CursorFollowing";
import Projects from "./components/LatestProjects/Projects";
import RealWorldExperience from "./components/RealWorldExperineceData/RealWorldExperience";
import MobileMenu from "./components/common/Sidebar/MobileMenu";

function App() {
  const [showGoToTop, setShowGoToTop] = useState(false);
  const { setActive } = useContextData();

  // Selecting Containers

  const home = useRef(null);
  const about = useRef(null);
  const skill = useRef(null);
  const experience = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const notes = useRef(null);

  const handleScroll = () => {
    if (window.pageYOffset >= 30) {
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
      { id: "Notes", container: notes },
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        <CursorFollowing />
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

          {/*  <div id="Notes" ref={notes}>
            <LatestNotes />
          </div> */}

          <div id="Contact" ref={contact}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
