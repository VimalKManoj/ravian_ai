import About from "./components/About";
import Contact from "./components/Contact";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Offering from "./components/Offering";
import Vision from "./components/Vision";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <Hero />
      <Offering />
      <About />
      <Vision/>
      <Contact/>
    </>
  );
}

export default App;
