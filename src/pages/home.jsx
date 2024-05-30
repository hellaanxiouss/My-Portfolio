import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa6";
import { information } from "../assets/data";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div id="home" className="h-[90vh] flex justify-center items-center">
      {information?.map((item, index) => (
        <div key={index} className="">
          <h1 className="font-extrabold text-7xl mb-4">
            {item?.fname} <span className="text-primary">{item?.lname}</span>
          </h1>
          <p className="text-4xl">
            <TypeAnimation
              sequence={[
                "I'm a Student",
                1000,
                "I'm a Developer",
                1000,
                "I'm an Intern",
                1000,
              ]}
              wrapper="span"
              speed={25}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
        </div>
      ))}
      <div className="absolute bottom-0 left-0 pl-7 mb-7">
        <ul className="space-y-5 pb-3">
          <li>
            <a href="https://github.com/hellaanxiouss" target="_black">
              <IoLogoGithub className="size-5 hover:text-primary transition-all" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tirthdhedhi/" target="_black">
              <IoLogoLinkedin className="size-5 hover:text-primary transition-all" />
            </a>
          </li>
          <li id="about">
            <a
              href="https://discordapp.com/users/879740872051290232"
              target="_black"
            >
              <FaDiscord className="size-5 hover:text-primary transition-all" />
            </a>
          </li>
          <li>
            <a  href="https://www.instagram.com/tirrrthhh/" target="_black">
              <IoLogoInstagram className="size-5 hover:text-primary transition-all" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
