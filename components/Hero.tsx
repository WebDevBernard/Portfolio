import { useRef, FC } from "react";
import { motion } from "framer-motion";
import { heroBottomAnimation, heroTopAnimation } from "../styles/animation";
import useScroll from "../hooks/useScroll";

const Hero: FC<{ scrollContact: () => void }> = ({ scrollContact }) => {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const [ref, controls] = useScroll();
  return (
    <div className="flex justify-evenly items-center flex-col md:flex-row">
      {/* left */}
      <div className="w-full flex flex-col justify-center items-center md:items-start md:w-1/2 md:h-screen">
        <h1 className="ml-8 md:ml-0  text-2xl leading-tight tracking-wider">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={heroTopAnimation}
            className="font-bold text-4xl text-indigo-900  inline-block"
          >
            Hello!
          </motion.div>
          <span>
            <br />
            I am Bernard,
            <br />a{" "}
            <span className="relative">
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={heroBottomAnimation}
                className={`z-0 w-[239px] h-[29px] highlight inline-block absolute`}
              ></motion.div>
              <span className="z-10 relative" ref={spanRef}>
                software engineer
              </span>{" "}
              in Vancouver{" "}
            </span>
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
        className="h-[360px] md:h-[450px] mt-16 md:object-contain"
        src={
          "https://raw.githubusercontent.com/WebDevBernard/Portfolio/48b9f22660231fc9dfa6e2c7f20f00a91a0998af/docs/programming-animate.svg"
        }
        alt="programmer guy"
      />
    </div>
  );
};

export default Hero;
