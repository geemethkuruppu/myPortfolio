import { motion } from "framer-motion";
import carCareImg from "../assets/images/car-care.png";
import Petpal from "../assets/images/petpal.png";

const projects = [
  {
    id: 1,
    image: carCareImg, 
    title: "Car Care App",
    description: "A mobile app for managing car services, including appointment scheduling and service records.",
    technologies: ["Flutter", "Laravel", "MySQL"],
    link: "",
  },
  {
    id: 2,
    image: Petpal,
    title: "PetPal",
    description: "An online platform for buying, selling, and renting properties with virtual tours.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    image: "project3.jpg",
    title: "Beauty Services App",
    description: "Enhancing the experience of girls in beauty services through booking and reviews.",
    technologies: ["Flutter", "Firebase", "Tailwind CSS"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="border-neutral-900 pb-4">
      <h1 className="text-white my-20 text-center text-4xl">
        My <span className="text-cyan-400">Projects</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.1, rotateX: 10 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative overflow-hidden rounded-2xl border-4 border-neutral-800 shadow-lg cursor-pointer"
          >
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-2xl" />
            
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm mt-2 text-gray-300">{project.description}</p>
              <p className="text-sm mt-2 font-semibold">Technologies:</p>
              <div className="flex gap-2 mt-1">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="text-xs bg-gray-700 px-2 py-1 rounded-lg">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-cyan-400 text-black px-4 py-2 rounded-lg shadow-md hover:bg-cyan-300 transition-all">
                  Read More
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
