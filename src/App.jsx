import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Process from "./sections/Process";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="site-shell min-h-screen overflow-hidden bg-[#070707] text-white">
      <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;