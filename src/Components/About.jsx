import React, {useState} from 'react';
import Footer from './Footer';


const About = () => {

  const [data, setData] = useState({
    title: "Mern Stack Developer ",
    desc1: `I am a web developer .I have completed my graduation Bechleor of Technology(B.Tech)
    from RGPV university. My passion for web development began early on in 
    my academic journey, and since then, I have been honing my skills and expanding 
    my knowledge in this field and also in security part of it. `,
    desc2: ` I have experience with HTML, CSS, JavaScript,React.js ,Node.js and Mongodb  , and have worked on various web development projects
     in the past . During  my training Period, I am continuing to build my skills and knowledge through hands-on 
     experience with real-world projects and coursework. I am excited to see where my passion
      for web development will take me in the future, and am committed to staying up-to-date 
   with the latest technologies and best practices in the field.` ,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
    title1:"WORK EXPERIENCE at Quickly Platforms (1 year)",
    desc3:`Developed responsive, production-ready applications using
    React.js and Redux with full API integration. `,
    desc4:`Contributed to the development of Chauffer, a cab booking
    MVP for hotels, including the creation of an admin panel, website, and integration of Redux and custom CSS.`,
    desc5:`Contributed to the development of TResource, a static
    HTML/CSS landing page for costumes in various fields such
    as school uniforms, healthcare, and hotel management.`,
    desc6:`Implemented the complete user interface for a trading
    application.`,
  },
    
      
    
  );
  console.log("data:",data.title1)
  return (
    <>
      <div className="main-container py-4 ms-14 ">
        <h1 className="text-5xl font-semibold text-neutral-300 pb-16 font-bold text-center">
          About Me
        </h1>
        <div className="w-full  flex justify-center">
          <div className="space-y-5   w-2/3">
            <h1 className="text-3xl font-semibold text-neutral-300 ">{data.title}</h1>
            <p className='text-neutral-300'>{data.desc1}</p>
            <p className='text-neutral-300'>{data.desc2}</p>
          </div>
        </div>
        <div className="w-full  flex justify-center py-6 ">
          <div className="space-y-5   w-2/3">
            <h1 className="text-3xl font-semibold text-neutral-300 ">{data.title1}</h1>
            <p className='text-neutral-300'>{data.desc3} {data.desc4}</p>
            {/* <p className='font-semibold text-neutral-300'>{data.desc4}</p> */}
            <p className='text-neutral-300'>{data.desc5} {data.desc6}</p>
            {/* <p className='font-semibold text-neutral-300'>{data.desc6}</p> */}
            </div>
        </div>
      </div> 
      <Footer/> 
    </>
  )
}

export default About




