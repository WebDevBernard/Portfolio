import { FC } from "react";
const Hero: FC<{ scrollContact: () => void }> = ({ scrollContact }) => {
  return (
    <div className="flex justify-evenly items-center flex-col md:flex-row">
      {/* left */}
      <div className="flex flex-col justify-center items-center md:items-start md:w-1/2">
        <h1 className="ml-1 md:ml-0  text-2xl leading-tight tracking-wider">
          <span className="font-bold text-4xl text-indigo-900 mb-24">
            Hello!
          </span>
          <span className="whitespace-nowrap">
            <br />
            I am Bernard,
            <br />a <span className="highlight ">software developer</span> in
            Vancouver{" "}
          </span>
        </h1>
        <div className="flex justify-start mt-12 md:mt-6">
          <button onClick={scrollContact} className="btn btn-primary mr-2">
            Work With Me
          </button>
          <a
            href="/resume.pdf"
            // target="_blank" rel="noreferrer"
          >
            <button className="btn btn-primary">View Resume</button>
          </a>
        </div>
        {/* right */}
      </div>
      <img
        className="h-[360px] md:h-[420px] mt-16 md:object-contain"
        src={
          "https://raw.githubusercontent.com/WebDevBernard/Portfolio/48b9f22660231fc9dfa6e2c7f20f00a91a0998af/docs/programming-animate.svg"
        }
        alt="programmer guy"
      />
    </div>
  );
};

export default Hero;
