import About_image from "../assets/images/about.png";
import Resume from "../assets/Doc/Geemeth Damsath Kuruppu.pdf";

const About = () => {
  return (
    <div id="about" className="border-neutral-900 pb-4">
      <h1 className="text-white my-20 text-center text-4xl">
        About <span style={{ color: "#0ef" }}>Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center items-center">
          <img src={About_image} alt="About" className="rounded-2xl" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:justify-start">
          <p className="text-white my-2 max-w-xl py-6">
            I am a final-year Computer Science student with a strong passion for
            Artificial Intelligence, Machine Learning, and full-stack
            development. I specialize in building scalable and innovative
            solutions using technologies like React, Node.js, Flutter, MySQL,
            and Laravel. Whether it's developing intelligent systems, designing
            seamless user experiences, or optimizing backend performance, I
            enjoy tackling complex challenges with efficient, well-structured
            code.
            <br />
            <br />Beyond coding, I am constantly exploring new technologies and
            refining my problem-solving skills through real-world projects.
            With a solid foundation in software development, data structures,
            and algorithms, I am eager to apply my knowledge in a dynamic
            environment. As I approach graduation, I am actively seeking
            opportunities to contribute, learn, and grow alongside industry
            professionals, bringing my enthusiasm for technology and innovation
            to every project I undertake.
          </p>
          <button className="relative z-10 font-bold bg-[#0ef] px-4 py-2 rounded mt-4 self-start cursor-pointer" onClick={() => window.open(Resume, "_blank")}  download="Geemeth Kuruppu Resume.pdf" >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;