import { useState } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

// const email= "teesha2201@gmail.com" ;

const Expertise = ({email}) => {

 const [achievements , setAchievements] = useState([
 {desc1:"Completed Training of C/C++ from Universal Informatics,ISO Certified Company.",desc2:"Completed MERN Stack Training from Prepbytes coaching",desc3:"Completed Python Training"}
 ])
 console.log("achievment:",achievements[0].desc1)

 const navigate = useNavigate();
 const handleComposeEmail = () => {
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  window.open(gmailComposeUrl, '_blank');
};

  return (
    <>
      <div className="mt-4">
        <h1 className="text-5xl font-semibold text-neutral-300 pb-10 font-bold text-centermb-16 text-5xl font-bold text-center">
          Skills
        </h1>
        {/* box section */}

        <div
          style={{
            // backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16  font-semibold text-neutral-300"
        >
          <div className="flex text-white justify-center">
            <div className="w-2/3 text-center space-y-4">
              <h1 className="text-4xl font-bold text-white">I love these technologies</h1>
              <p className="font-semibold text-neutral-300">
                I have been using the programming languages since my college period.
                But i have started study for "MERN STACK DEVELOPER" since last 8 months (april 2023-dec 2023) .
                I have completed whole project which was assigned in duration of my training period.
              
              </p>
              <button  onClick={handleComposeEmail} className="text-2xl  px-3  py-2 bg-neutral-300 text-teal-950  rounded-full shadow-lg">
                Hire Me
              </button> 
            </div>
          </div>
          <div className="flex justify-center">
            {/* skills container */}

            <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
              <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-gray-500 cursor-pointer  text-teal-950">
                JavaScript
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-gray-500 cursor-pointer text-teal-950">
                React js
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-gray-500 cursor-pointer text-teal-950">
                Redux
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-gray-500 cursor-pointer text-teal-950">
                Npm and yarn
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-gray-500 cursor-pointer text-teal-950">
                Git/GitHub
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-gray-500 cursor-pointer text-teal-950">
                Bootstrap
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-gray-500 cursor-pointer text-teal-950">
                Node js
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-gray-500 cursor-pointer text-teal-950">
                Mongodb
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-gray-500 cursor-pointer text-teal-950">
                Tailwind CSS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-gray-500 cursor-pointer text-teal-950">
                Custom Hook
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-gray-500 cursor-pointer text-teal-950">
                Rest API
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-gray-500 cursor-pointer text-teal-950">
                HTML CSS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-gray-500 cursor-pointer text-teal-950">
                Talwind Css
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-gray-500 cursor-pointer text-teal-950 ">
                Netlify
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-gray-500 cursor-pointer text-teal-950">
                Render
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-neutral-300 pb-3 font-bold text-center">
        ACHIEVEMENTS
        </h1>
        <div className="w-full  flex justify-center py-3 ">
          <div className="space-y-5   w-1/3">
            <p className='font-semibold text-neutral-300 text-center'>{achievements[0].desc1} {achievements[0].desc2} {achievements[0].desc3}</p>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Expertise;
