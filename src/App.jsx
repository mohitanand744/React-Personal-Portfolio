import { useEffect, useState } from "react";
import AboutMe from "./components/About/AboutMe";
import Nav from "./components/common/Nav/Nav";
import Home from "./components/Home/Home";
import Skill from "./components/Skills/Skill";

function App() {
  const [showGoToTop, setShowGoToTop] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset >= 130) {
      setShowGoToTop(true);
    } else {
      setShowGoToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="Home ">
        {" "}
        {!showGoToTop ? (
          ""
        ) : (
          <img
            className="fixed bottom-10 right-10 w-16 lg:w-20 rotate-[268deg] cursor-pointer active:scale-90  transition-all duration-100 ease-linear z-50"
            onClick={goToTop}
            src="/rightArrow.png"
            alt="Go to Top"
          />
        )}
        <div className="blur-overlay hidden md:block"></div>
        <div className="px-3 lg:px-10">
          <Nav />
          <Home />
          <AboutMe />
          <Skill />
        </div>
      </section>
    </>
  );
}

export default App;
