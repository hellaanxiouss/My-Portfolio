import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  //   const navigate = useNavigate()
  //   useEffect(()=>{
  //     navigate("/home")
  //   },[])

  return (
    <div
      className="sticky top-0 left-0 w-full bg-[rgb(16,16,16)] flex justify-between p-5"
      style={{ zIndex: 9999 }}
    >
      <div className="hover:text-primary text-xl font-bold">Tirth</div>
      <ul className="flex  gap-5">
        <li className="hover:text-primary transition-all">
          <a href="#home">Home</a>
          {/* <a href="/">Home</a> */}
        </li>
        <li className="hover:text-primary transition-all">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-primary transition-all">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="hover:text-primary transition-all">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
    // <div className="flex justify-between p-5">
    //   <div className="">Logo</div>
    //   <ul className="flex  gap-5">
    //     <li className="hover:text-primary transition-all">
    //       <Link to="/home">Home</Link>
    //     </li>
    //     <li className="hover:text-primary transition-all">
    //       <Link to="about">About</Link>
    //     </li>
    //     <li className="hover:text-primary transition-all">
    //       <Link to="portfolio">Portfolio</Link>
    //     </li>
    //     <li className="hover:text-primary transition-all">
    //       <Link to="contact">Contact</Link>
    //     </li>
    //   </ul>
    // </div>
  );
}

export default Header;
