import AboutMe from "./components/About/AboutMe";
import Nav from "./components/common/Nav/Nav";
import Home from "./components/Home/Home";
import Skill from "./components/Skills/Skill";

function App() {
  return (
    <>
      <section className="Home ">
        <div className="blur-overlay"></div>
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
