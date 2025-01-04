import React from "react";
import { keyframes } from "@emotion/react";
import ecom from "../assets/ecom.png";
import blog from "../assets/blog.png";
import udemy from "../assets/udemy.jpg";
import Footer from "./Footer";
import tresource from "../assets/tresource.png";
import chaufferAdmin from "../assets/chaufferadmin.png";
import chaufferUserside from "../assets/chaufferUserside.png";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
`;

const Projects = () => {
  return (
    <>
      <h1 className="text-5xl font-semibold text-neutral-300 py-4 font-bold text-center ">
          Personal Projects
        </h1>
      <div className="flex justify-evenly items-start flex-wrap h-100 py-10">
        <div className="max-w-md mx-auto mt-8 p-6 bg-cyan-800 rounded-lg shadow-2xl  bg-slate-800 hover:-translate-y-1 hover:scale-100  hover:bg-slate-600 duration-300 ">
          <img
            src={ecom}
            alt="not found"
            className="shadow-2xl rounded-lg transition ease-in-out delay-150 bg-teal-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          />
          <h2 className="text-2xl font-bold mb-4 text-gray-300 py-4">
            E-commerce
          </h2>
          <p className="text-gray-300 mb-4 ">
            Developed a user-side web application for an e-commerce website
            during a training period. ,Integrate payment gateway
          </p>

          <button className="text-lg  px-3  py-2 bg-neutral-300 text-teal-950  rounded-full shadow-lg rounded-lg hover:netural-300 focus:outline-white">
            <a href="https://spontaneous-shortbread-606554.netlify.app">View Details</a>
          </button>
        </div>
       
        <div className="max-w-md mx-auto mt-8 p-6 bg-cyan-800 rounded-lg shadow-2xl  bg-slate-800 hover:-translate-y-1 hover:scale-100  hover:bg-slate-600  duration-300">
          <img src={blog} alt="not found" className="shadow-2xl rounded-lg transition ease-in-out delay-150 bg-teal-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" />
          <h2 className="text-2xl font-bold mb-4 text-gray-300 py-3">Blogger App</h2>
          <p className="text-gray-300 mb-4 ">
          Developed a blogging application with local storage functionality, allowing users to create, store, and manage blog posts.
          </p>

          <button className="text-lg  px-3  py-2 bg-neutral-300 text-teal-950  rounded-full shadow-lg rounded-lg hover:netural-300 focus:outline-white">
            
            <a href="https://fantastic-douhua-21793c.netlify.app/">View Details</a>
          </button>
        </div>
        <div className="max-w-md mx-auto mt-8 p-6 bg-cyan-800 rounded-lg shadow-2xl  bg-slate-800 hover:-translate-y-1 hover:scale-100 hover:bg-slate-600  duration-300 ">
          <img
            src={udemy}
            alt="not found"
            className="shadow-2xl rounded-lg transition ease-in-out delay-150 bg-teal-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
          />
          <h2 className="text-2xl font-bold mb-4 text-gray-300 py-4">
            Udemy Clone{" "}
          </h2>
          <p className="text-gray-300 mb-4 ">
            Created a static clone of the Udemy web application, replicating the
            core functionality and user experience ,Integrate payment gateway .
          </p>

          <button className="text-lg  px-3  py-2 bg-neutral-300 text-teal-950  rounded-full shadow-lg rounded-lg hover:netural-300 focus:outline-white">
            
            <a href="https://neon-kheer-313251.netlify.app/">View Details</a>
          </button>
        </div>

      </div>
        <h1 className="text-5xl font-semibold text-neutral-300 py-4 font-bold text-center  ">
          Office Projects
        </h1>
          <div className="flex justify-evenly items-start flex-wrap h-100 py-10">
          <div className="max-w-md mx-auto mt-8 p-6 bg-cyan-800 rounded-lg shadow-2xl  bg-slate-800 hover:-translate-y-1 hover:scale-100  hover:bg-slate-600 duration-300 ">
            <img
              src={tresource}
              alt="not found"
              className="shadow-2xl rounded-lg transition ease-in-out delay-150 bg-teal-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            />
            <h2 className="text-2xl font-bold mb-4 text-gray-300 py-4">
              T-Resource
            </h2>
            <p className="text-gray-300 mb-4 ">
              The tresource project developed an static UI  for job search resource to discover and connect with designers and jobs worldwide.
            </p>

            <button className="text-lg  px-3  py-2 bg-neutral-300 text-teal-950  rounded-full shadow-lg rounded-lg hover:netural-300 focus:outline-white">
              <a href="https://tresource.in/">View Details</a>
            </button>
          </div>
          <div className="max-w-md mx-auto mt-8 p-6 bg-cyan-800 rounded-lg shadow-2xl  bg-slate-800 hover:-translate-y-1 hover:scale-100  hover:bg-slate-600 duration-300 ">
            <img
              src={chaufferAdmin}
              alt="not found"
              className="shadow-2xl rounded-lg transition ease-in-out delay-150 bg-teal-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            />
            <h2 className="text-2xl font-bold mb-4 text-gray-300 py-4">
              Chauffer Admin
            </h2>
            <p className="text-gray-300 mb-4 ">
              Chauffer admin will approve/reject vehicle/driver of sub-agency, listing of vehicle/driver, show earning, policy, terms&condition, logout and all. 
            </p>

            <button className="text-lg  px-3  py-2 bg-neutral-300 text-teal-950  rounded-full shadow-lg rounded-lg hover:netural-300 focus:outline-white">
              <a href="https://chauffer.vercel.app/">View Details</a>
            </button>
          </div>
          <div className="max-w-md mx-auto mt-8 p-6 bg-cyan-800 rounded-lg shadow-2xl  bg-slate-800 hover:-translate-y-1 hover:scale-100  hover:bg-slate-600 duration-300 ">
            <img
              src={chaufferUserside}
              alt="not found"
              className="shadow-2xl rounded-lg transition ease-in-out delay-150 bg-teal-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            />
            <h2 className="text-2xl font-bold mb-4 text-gray-300 py-4">
              Chauffer
            </h2>
            <p className="text-gray-300 mb-4 ">
              A cab booking web app intercity project.  
            </p>

            <button className="text-lg  px-3  py-2 bg-neutral-300 text-teal-950  rounded-full shadow-lg rounded-lg hover:netural-300 focus:outline-white">
              <a href="https://chauffer.vercel.app/">View Details</a>
            </button>
          </div>
      </div>    
      <Footer />
    </>
  );
};

export default Projects;
