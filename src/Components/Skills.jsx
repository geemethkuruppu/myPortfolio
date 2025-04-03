import { RiReactjsLine } from "react-icons/ri";
import { FaDatabase, FaNodeJs } from "react-icons/fa"; 
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { RiFlutterFill } from "react-icons/ri";
import { RiFirebaseFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills" className="border-neutral-900 pb-4">
       <h1 className="text-white my-20 text-center text-4xl">My <span style={{ color: "#0ef" }}>Skills</span></h1>

      <div className="flex flex-wrap justify-center items-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p className="text-xl text-white">React</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <FaNodeJs className="text-7xl text-green-400" />
          <p className="text-xl text-white">Node.Js</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
          <p className="text-xl text-white ">Tailwind <br/>CSS</p>
        </div>
        < div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <FaLaravel className="text-7xl text-red-400" />
          <p className="text-xl text-white">Laravel</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <FaBootstrap className="text-7xl text-purple-400" />
          <p className="text-xl text-white">Bootstrap</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
            <RiFlutterFill className="text-7xl text-cyan-400" />
            <p className="text-xl text-white">Flutter</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center mt-8">
          <FaJava className="text-7xl text-blue-400" />
          <p className="text-xl text-white">Java</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center mt-8">
          <FaPython className="text-7xl text-cyan-400" />
          <p className="text-xl text-white">Python</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center mt-8">
          <RiJavascriptFill className="text-7xl text-yellow-400" />
          <p className="text-xl text-white">JavaScript</p>
        </div> 
      </div>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                <FaDatabase className="text-7xl text-gray-400" />
                <p className="text-xl text-white">MySQL</p>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center ">
                <RiFirebaseFill className="text-7xl text-yellow-400" />
                <p className="text-xl text-white">Firebase</p>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                <FaGithub className="text-7xl text-white" />
                <p className="text-xl text-white">GitHub</p>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
                <FaAws className="text-7xl text-white" />
                <p className="text-xl text-white">AWS</p>
            </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            
        </div>
    </div>
  );
};

export default Skills;
