import { useRef, FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { heroBottomAnimation } from "../styles/variants";
import useScroll from "../hooks/useScroll";

const Hero: FC<{
  scrollContact: () => void;
  scrollProjects: () => void;
}> = ({ scrollContact }) => {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const [ref, controls] = useScroll();
  return (
    <div className="tracking-wider flex flex-col justify-around md:max-w-lg m-auto sm:mt-0 md:mt-16 lg:mt-0 p-4">
      <div>
        <div className="flex justify-evenly items-center flex-col md:flex-row">
          {/* left */}
          <div className="w-full flex flex-col justify-center items-center md:items-start md:w-1/2">
            <div className="ml-8 md:ml-0  text-2xl leading-tight tracking-wider">
              {/* <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={heroTopAnimation}
                className="font-bold text-4xl text-indigo-900  inline-block"
              >
                Hello!
              </motion.div> */}
              <h1 className="font-bold text-4xl text-indigo-900 inline-block">
                Hello!
              </h1>
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
                    className={`z-0 w-[194px] h-[29px] highlight inline-block absolute`}
                  ></motion.div>
                  <span className="z-10 relative" ref={spanRef}>
                    web developer
                  </span>{" "}
                  in Vancouver{" "}
                </span>
              </span>
            </div>
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
          <div className="select-none md:w-[420px] mt-16 md:h-[420px] relative w-[280px] h-[280px] bg-transparent">
            <Image
              className="indent-[100%] whitespace-nowrap overflow-hidden"
              src="/docs/programming-animate.svg"
              alt="hero image"
              layout="fill"
              objectFit="contain"
              loading="eager"
            />
          </div>
        </div>
        {/* <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={arrowAnimation}
        >
          <div
            className="left-[50%] bottom-[5%] absolute"
            onClick={scrollProjects}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-indigo-900 motion-safe:animate-bounce h-[40px] w-[40px] hidden lg:flex cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Hero;
