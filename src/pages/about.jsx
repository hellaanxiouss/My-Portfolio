import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa6";
import me from "../assets/me.jpg";
import { information } from "../assets/data";

function About() {
  return (
    <div id="about" className="about px-10 h-full pt-10">
      <div className="mt-6">
        <p className="text-xs text-secondary">let me introduce myself</p>
        <h1 className="text-3xl font-bold underline decoration-primary underline-offset-8">
          About Me
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row  justify-center items-center gap-10 text-left px-16 pt-8 pb-4">
        <div className="h-full w-full flex justify-center items-center">
          <img src={me} alt="me" className="border p-2 w-[250px]" />
        </div>
        <div className="space-y-4">
          <p>Nice to meet you</p>
          <h5>
            Frontend Web Developer who creates amazing digital experiences!
          </h5>
          <p>
            As a passionate web development intern, I create engaging websites
            with a focus on user experience using modern technologies like
            React.js, TailwindCSS, and others. My strong foundation in front-end
            development enables me to explore innovative solutions and stay
            updated on the latest trends. My interest in AI drives me to blend
            creativity with technology, delivering exceptional results that
            exceed expectations.
          </p>
          <hr />
          {information?.map((item, index) => (
            <div key={index} className="grid grid-cols-2 gap-2">
              <div>
                Name: {item?.fname} {item?.lname}
              </div>
              <div className="flex gap-2">
                <div>Email:</div>
                <div className="text-primary underline">
                  <a href="mailto:tirthp.1128@icloud.com">{item?.email}</a>
                </div>
              </div>
              <div>Loaction: {item?.loaction}</div>
              <div>Availability: {item?.availability}</div>
            </div>
          ))}
          <div className="flex justify-between pb-6 pt-4">
            <button
              type="button"
              className="bg-primary rounded-full px-3 text-black hover:bg-white transition-all"
            >
              <a
                href="../src/assets/Tirth-Resume.pdf"
                download={"Tirth_Resume.pdf"}
              >
                Download resume
              </a>
            </button>
            <ul className="flex items-center  gap-4">
              <div className="flex justify-center h-10">
                <li>____</li>
              </div>
              <li>
                <a href="https://github.com/hellaanxiouss" target="_black">
                  <IoLogoGithub className="size-5 hover:text-primary transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tirthdhedhi/"
                  target="_black"
                >
                  <IoLogoLinkedin className="size-5 hover:text-primary transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="https://discordapp.com/users/879740872051290232"
                  target="_black"
                >
                  <FaDiscord className="size-5 hover:text-primary transition-all" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/tirrrthhh/" target="_black">
                  <IoLogoInstagram className="size-5 hover:text-primary transition-all" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default About;
