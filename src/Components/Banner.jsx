
import { useRef } from "react";
import { useEffect } from "react";
import Typed from "typed.js";
import Footer from "./Footer";
import logo from "../assets/mernlogo.png";

const Banner = ({email}) => {
  const el = useRef(null);

  const handleComposeEmail = () => {
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailComposeUrl, '_blank');
  };

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Mern Stack Developer  ",
        "Frontend Developer",
        "Backend Developer",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

   
    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <div className="main-container flex items-center py-16 ">
      <div className="w-full flex items-center justify-center text-neutral-300 ">

        <div className="w-2/3 space-y-3  ms-10">
          <h3 className="text-3xl font-semibold text-neutral-300">Hi, I am</h3>
          <h1 className="text-5xl font-bold">Teesha Gupta</h1>
          <h2 className="text-3xl ">
            I am <span className="font-bold underline" ref={el}></span>
          </h2>
          <p className="">
            Proficient in utilizing modern Technology JavaScript frameworks like
            React.js and Redux to craft scalable and user-friendly interfaces.
            Skilled in API integration, custom CSS implementation, and
            contributing to diverse projects such as cab booking MVPs, trading
            platforms, and static landing pages.
          </p>

          <div className="icons-container flex space-x-5 mb-5">
          <button onClick={handleComposeEmail} className=" hover:bg-gray-500  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-neutral-300 text-teal-950">
              <i class="text-4xl fa-regular fa-envelope"></i>
            </button>
            <a href="https://github.com/teesha2201/" target="_blank" className="  hover:bg-gray-500 border  cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800 " >
            <i class="fa-brands text-4xl fa-github "></i>
            </a>

            <a href="https://linkedin.com/in/teesha-gupta-9092b921b " target="_blank" className=" hover:bg-gray-500  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-neutral-300 text-teal-950">
              <i class="fa-brands text-4xl  fa-linkedin-in"></i>
            </a>
            
          </div>
          <br/>
          <button
            className=" text-xl  px-3  py-3 bg-neutral-300 text-teal-950  rounded-full shadow-lg "
            onClick={handleComposeEmail}
            
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* second  dabba */}

      <div className=" w-full flex justify-center">
        {/* image */}
        <img className="rounded-lg my-2 shadow-lg w-fit " src={logo} />
      </div>
     
    </div>
    <Footer/>
    </>
  );
};

export default Banner;
