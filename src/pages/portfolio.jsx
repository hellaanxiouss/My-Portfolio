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
        {portfolioProjectsData?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                console.log(`bg-${item.cardColor}`, "item");
              }}
              style={{ background: item?.cardColor }}
              className="w-full h-56 relative flex rounded-sm hover:shadow-normal transition-all hover:shadow-primary"
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
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
