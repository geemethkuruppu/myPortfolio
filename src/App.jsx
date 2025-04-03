import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import ContactMe from "./Components/Contact";
import { useEffect } from "react"

const App = () => {
  
  return (
    <div>
      <div className="fixed top-0 z-0 h-full w-full"></div>
      <div className="relative min-h-screen w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

        <div className="container mx-auto px-12">
          <NavBar />
          <Hero id="home"/>
          <About id="about" />
          <Skills id="skills" />
          <Projects id="projects" />
          <ContactMe id="contact" />
        </div>
      </div>
    </div>
  );
};

export default App;
