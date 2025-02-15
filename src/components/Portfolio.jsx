import FlipDeal from "../assets/FlipDeal.png";
import FlipDealListingPage from "../assets/FlipDealListingPage.png";
import Stock from "../assets/StockAnalysis.png";
import ChatApp from "../assets/realtimechatapp.png";
import quickcart from "../assets/quickcart.png";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: ChatApp,
    title: "Real-time Chat App",
    description: `Built a real-time chat app with MERN stack and Socket.IO, supporting messaging and storing messages in MongoDB.`,
    links: {
      site: "https://real-time-chat-app-frontend-ashen.vercel.app/",
      github: "https://github.com/AkshAI-2030/Real-time-chat-App",
    },
  },
  {
    img: quickcart,
    title: "Quick-E-commerce",
    description: `Built an E-commerce app with user authentication, product listing, and add-to-cart functionalities.`,
    links: {
      site: "https://akshayarelli.ccbp.tech/login",
      github: "https://github.com/AkshAI-2030/QuickCart-E-commerce-App",
    },
  },
  {
    img: FlipDeal,
    title: "Flip Deal",
    description: `Built RESTful APIs for Flip Deal using Node.js and Express.js as a minimalist backend project. Backend URL: https://bd-1-5-assignment-1-5nkm.vercel.app`,
    links: {
      site: "https://bd1-1.vercel.app/",
      github: "https://github.com/AkshAI-2030/BD-1.5-Assignment-1",
    },
  },
  {
    img: Stock,
    title: "Stock Analysis",
    description: `Created a Stock Analysis API to add stocks to a portfolio, calculate cumulative returns, and return percentage. Backend URL: https://vercel.com/akshay-arellis-projects/bd-1-5-assignment-2-vao1`,
    links: {
      site: "https://bd1-stocks.vercel.app/",
      github: "https://github.com/AkshAI-2030/BD-1.5-Assignment-2",
    },
  },
  {
    img: FlipDealListingPage,
    title: "Flip Deal Listing Page",
    description: `Built APIs to sort products by popularity, price, and filter by RAM, ROM, OS, brand, and price. Backend URL: https://vercel.com/akshay-arellis-projects/bd-2-5-assignment-1.`,
    links: {
      site: "https://bd2-listing-page.vercel.app/",
      github: "https://github.com/AkshAI-2030/BD-2.5---Assignment-1",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-700 text-gray-200 rounded-lg hover:bg-slate-600 transition duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-500 transition duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
