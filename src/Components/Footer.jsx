const Footer = () => {
  return (
    <>
      <div className="h-24 w-100  shadow-xl  flex justify-between items-center px-16 text-neutral-300">
        <div>
          <p>
            @2024 Teesha Gupta <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="space-x-5">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a
            href="https://github.com/teesha2201/"
            target="_blank"
            className="  active:text-violet-700 text-neutral-300 active:text-sky-700"
          >
            github
          </a>
          <a
            href="https://linkedin.com/in/teesha-gupta-9092b921b "
            target="_blank"
            className="  active:text-violet-700 text-neutral-300 active:text-sky-700"
          >
            linkedin
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
