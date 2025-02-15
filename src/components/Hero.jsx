import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FaGitAlt, FaSquareXTwitter } from "react-icons/fa6";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { motion } from "framer-motion";
import { SiExpress, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8 p-5">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={["MERN Stack Developer", 1000, "Backend Developer", 1000]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            Hey there! I'm <br />
            <span className="text-purple-500">Akshay Arelli 🚀</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6 p-2"
          >
            I am a passionate backend developer with expertise in Node.js,
            Express.js, and MongoDB, specializing in building scalable
            applications, designing RESTful APIs, and optimizing databases.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1pIwyn-CP3FoVFLFCt0Ayp6OOiUWaXqQ_/view",
                  "_blank"
                )
              }
            >
              View Resume
            </motion.button>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/AkshAI-2030"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/akshay-arelli-b5476b32a/"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://twitter.com/AkshAI_2030"
              >
                <FaSquareXTwitter />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXVrYnA2a216YTUxcTlpam93ZW4zZTJ4cTlyZ2M4bTR2OTFjM295cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif"
          className="w-[300px] md:w-[450px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-col items-center text-center px-6 md:px-0 w-full py-24"
      >
        <p className="text-gray-200 text-4xl md:text-5xl font-semibold mb-8">
          My Tech Stack
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 justify-items-center w-full border-purple-400">
          {[
            {
              icon: <DiHtml5 className="text-blue-600 text-4xl" />,
              name: "Html",
              id: 1,
            },
            {
              icon: <DiJavascript1 className="text-yellow-500 text-4xl" />,
              name: "JavaScript",
              id: 2,
            },
            {
              icon: <DiReact className="text-blue-500 text-4xl" />,
              name: "React",
              id: 3,
            },
            {
              icon: <DiNodejsSmall className="text-green-500 text-4xl" />,
              name: "Node.js",
              id: 4,
            },
            {
              icon: <DiMongodb className="text-green-600 text-4xl" />,
              name: "MongoDB",
              id: 5,
            },
            {
              icon: <SiExpress className="text-gray-400 text-4xl" />,
              name: "Express.js",
              id: 6,
            },
            {
              icon: <SiPostman className="text-orange-700 text-4xl" />,
              name: "Postman",
              id: 7,
            },
            {
              icon: <DiCss3 className="text-blue-500 text-4xl" />,
              name: "Css",
              id: 8,
            },
            {
              icon: <FaGitAlt className="text-orange-700 text-4xl" />,
              name: "Git",
              id: 9,
            },
            {
              icon: <VscVscode className="text-blue-500 text-4xl" />,
              name: "VS Code",
              id: 10,
            },
          ].map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.1 }} // Slight scale-up effect on hover
              className="group relative flex items-center justify-center w-24 h-24 md:w-40 md:h-28 rounded-md shadow-md border-2 bg-purple-700/10 border-transparent group-hover:border-purple-400 transition-all duration-300"
            >
              {/* Icon */}
              <div className="group-hover:bg-gray-700 w-full h-full flex items-center justify-center rounded-md">
                {item.icon}
              </div>

              {/* Tooltip */}
              <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm text-gray-300 bg-gray-700 px-2 py-1 rounded-md shadow-md">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
