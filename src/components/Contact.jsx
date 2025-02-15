import Reveal from "./Reveal";
import GitHubCalendar from "react-github-calendar";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1200px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          {/* About section */}
          <div>
            <div className="text-gray-300 my-3 px-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 text-base  md:text-lg w-full mx-auto">
                As a backend developer specializing in the MERN (MongoDB,
                Express, React) stack, I am eager to start my career by building
                scalable applications and efficient APIs. Passionate about
                learning and solving challenges, I seek an opportunity to grow
                and contribute to a dynamic team.
              </p>
            </div>
          </div>

          <div>
            {" "}
            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  Building
                  <span></span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Projects Currently</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  0-1<span></span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>years of experience</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      <div className="flex flex-col m-5 md:m-10">
        <h3 className="text-2xl font-semibold m-4 mx-auto text-gray-300">
          My Contributions
        </h3>

        <div className="w-full justify-center overflow-x-auto mx-auto  text-white">
          {" "}
          <GitHubCalendar
            username="AkshAI-2030"
            blockSize={window.innerWidth < 640 ? 10 : 15}
            blockMargin={5}
            color="#c084f5"
            fontSize={window.innerWidth < 640 ? 12 : 16}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
