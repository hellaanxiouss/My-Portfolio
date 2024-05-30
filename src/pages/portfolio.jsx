import { FaArrowRightLong } from "react-icons/fa6";
import lpimg from "../assets/lpimg.png";
import { portfolioProjectsData } from "../assets/data";

function Portfolio() {
  return (
    <div id="portfolio" className="portfolio px-16 pt-10">
      <div className="mt-6">
        <p className="text-xs text-secondary">View my work</p>
        <h1 className="text-3xl font-bold underline decoration-primary underline-offset-8">
          Portfolio
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 py-12">
        {/* <div className="bg-1 h-56">
          <div className="flex justify-center items-center flex-col h-full">
            <p className="italic text-xs">Leaflet, Bootstrap, JQuerry</p>
            <h1 className="font-bold text-2xl">Bike Buddy</h1>
            <p className="flex justify-center items-center cursor-pointer hover:text-primary transition-all">
              View Work &nbsp; <FaArrowRightLong />
            </p>
          </div>
        </div>
        <div className="bg-2 h-56">
          <div className="flex justify-center items-center flex-col h-full">
            <p className="italic text-xs">JQuerry</p>
            <h1 className="font-bold text-2xl">Weather</h1>
            <p className="flex justify-center items-center cursor-pointer hover:text-primary transition-all">
              View Work &nbsp; <FaArrowRightLong />
            </p>
          </div>
        </div>
        <div className="bg-3 h-56">
          <div className="flex justify-center items-center flex-col h-full">
            <p className="italic text-xs">JS, Node, Bootstrap</p>
            <h1 className="font-bold text-2xl">Team</h1>
            <p className="flex justify-center items-center cursor-pointer hover:text-primary transition-all">
              View Work &nbsp; <FaArrowRightLong />
            </p>
          </div>
        </div>
        <div className="bg-4 h-56">
          <div className="flex justify-center items-center flex-col h-full">
            <p className="italic text-xs">JS</p>
            <h1 className="font-bold text-2xl">Quiz</h1>
            <p className="flex justify-center items-center cursor-pointer hover:text-primary transition-all">
              View Work &nbsp; <FaArrowRightLong />
            </p>
          </div>
        </div>
        <div className="bg-5 h-56">
          <div className="flex justify-center items-center flex-col h-full">
            <p className="italic text-xs">JS, Node</p>
            <h1 className="font-bold text-2xl">Team</h1>
            <p className="flex justify-center items-center cursor-pointer hover:text-primary transition-all">
              View Work &nbsp; <FaArrowRightLong />
            </p>
          </div>
        </div>
        <div className="bg-6 h-56">
          <div className="flex justify-center items-center flex-col h-full">
            <p className="italic text-xs">JS, Bootstrap</p>
            <h1 className="font-bold text-2xl">Planner</h1>
            <p className="flex justify-center items-center cursor-pointer hover:text-primary transition-all">
              View Work &nbsp; <FaArrowRightLong />
            </p>
          </div>
        </div> */}
        {portfolioProjectsData?.map((item, index) => (
          <div
            key={index}
            className={`bg-${item.cardColor} w-full h-56 relative flex rounded-sm hover:shadow-md transition-all hover:shadow-primary`}
          >
            <div className="flex justify-center items-center flex-col h-full w-2/4">
              <p className="italic text-xs">{item?.projectLanguage}</p>
              <h1 className="font-bold text-2xl">{item?.projectName}</h1>
              <p className="flex justify-center items-center cursor-pointer hover:text-primary transition-all">
                View Work &nbsp; <FaArrowRightLong />
              </p>
            </div>
            <div className="inset-0 flex justify-end items-center">
              <img src={lpimg} alt="laptopimg" className="h-5/6" />
            </div>
          </div>
        ))}
        {/* <div className="bg-2 h-56"></div>
        <div className="bg-3 h-56"></div>
        <div className="bg-4 h-56"></div>
        <div className="bg-5 h-56"></div>
        <div className="bg-6 h-56"></div> */}
      </div>
    </div>
  );
}

export default Portfolio;