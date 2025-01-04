import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Banner from "./Banner";
import About from "./About";
import Expertise from "./Expertise";
import Projects from "./Projects";
import Contact from "./Contact";

const Headers = () => {
  const [brandName, setBrandName] = useState("Mern Stack");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/",
      id: 1,
    },
    {
      title: "About",
      link: "/about",
      id: 2,
    },
    {
      title: "Skills",
      link: "/skills",
      id: 3,
    },
    {
      title: "Project",
      link: "/project",
      id: 4,
    },
    // {
    //   title: "Contact",
    //   link: "/contact",
    //   id: 5,
    // },
  ]);

  return (
    <>
      <div className="h-20 shadow-xl main flex justify-between items-center px-16 text-white-400 ">
        <div>
          {/* brand logo */}
          <h1 className="text-2xl font-bold text-neutral-300">{brandName}</h1>
        </div>

        <div className="space-x-6">
          {/* menu links */}
          {menuLinks.map((link) => (
            <Link
              key={link.id}
              to={link.link}
              className="active:text-violet-700 text-neutral-300 active:text-sky-700"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Banner email="teesha2201@gmail.com"/>} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Expertise  email="teesha2201@gmail.com"/>} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </>
  );
};

export default Headers;
