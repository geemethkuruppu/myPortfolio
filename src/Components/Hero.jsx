import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import profile_pic from "../assets/images/profile.png";
import { useState, useEffect } from "react";

const Hero = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Function to smoothly scroll to a section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId); // Update the active section
    }
  };

  
  

  return (
    <div id="home" className="relative min-h-screen flex items-center">
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6">
        {[
          { id: "home", icon: <FaHome />, label: "Home" },
          { id: "about", icon: <FaUser />, label: "About Me" },
          { id: "skills", icon: <FaCode />, label: "Skills" },
          { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
          { id: "contact", icon: <FaEnvelope />, label: "Contact Me" },
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => scrollToSection(item.id)}
            className={`group relative w-10 h-10 flex items-center justify-center border-2 rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-110
              ${activeSection === item.id ? "bg-[#0ef] text-white" : "border-[#0ef] text-white"}
            `}
          >
            {item.icon}
            <span className="absolute left-16 px-3 py-1 bg-[#0ef] text-black text-sm rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Main Hero Section */}
      <div className="pb-24 lg:mb-36 ml-10 ">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Left Content */}
          <div className="w-full lg:w-3/5">
            <div className="flex flex-col items-start p-6 sm:p-10">
              <h1 className="text-white text-2xl font-bold mb-2 text-left">Hello, It's Me</h1>
              <h1 className="text-white text-6xl font-thin tracking-tight sm:text-6xl lg:text-7xl mb-4 text-left">
                Geemeth Kuruppu
              </h1>
              <h1 className="text-white text-2xl sm:text-3xl font-bold mb-4 text-left py-8">
                And I'm a <span className="text-[#0ef]">Computer Science Undergraduate</span>
              </h1>
              <p className="text-white text-lg mb-6 text-left">
                Passionate about coding, problem-solving, and exploring the world of Artificial Intelligence and Machine Learning.
                Currently building innovative solutions as a Computer Science undergraduate.
              </p>
              <button 
                onClick={() => scrollToSection('contact')} // Corrected scroll function
                className="relative z-10 font-bold bg-[#0ef] px-4 py-2 rounded mt-auto">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img
              src={profile_pic}
              alt="Geemeth Kuruppu"
              className="w-[20rem] h-[24rem] sm:w-[16rem] sm:h-[20rem] lg:w-[24rem] lg:h-[30rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
