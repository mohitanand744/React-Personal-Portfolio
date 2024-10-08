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
        <div className="blur-overlay"></div>
        <div className="">
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
