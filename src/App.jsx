import Nav from "./components/common/Nav/Nav";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <section className="Home">
        <div className="blur-overlay"></div>
        <Nav />
        <Home />
      </section>
    </>
  );
}

export default App;
