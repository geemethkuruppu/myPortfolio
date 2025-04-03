import logo from '../assets/images/Logo.jpg';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-4">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-12 h-12" />
      </div>
      <div className="relative z-10 ml-20 flex items-center justify-center space-x-4 text-2xl text-white">
        <a href="https://www.linkedin.com/in/geemeth-kuruppu-60551228b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500 transition-all" />
        </a>
        <a href="https://github.com/geemethkuruppu" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400 transition-all" />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-blue-400 transition-all" />
        </a>
        <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 transition-all" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
