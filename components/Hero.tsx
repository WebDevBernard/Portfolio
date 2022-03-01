import { useRef, FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  heroBottomAnimation,
  heroTopAnimation,
  arrowAnimation,
} from "../styles/variants";
import useScroll from "../hooks/useScroll";

interface RefObject<T> {
  readonly current: T | null;
}
const Hero: FC<{
  scrollContact: () => void;
  scrollProjects: () => void;
  projectRef: RefObject<HTMLDivElement>;
}> = ({ scrollContact, scrollProjects, projectRef }) => {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const [ref, controls] = useScroll();
  return (
    <div className="flex flex-col justify-around lg:h-screen md:max-w-lg m-auto p-4">
      <div>
        <div className="flex justify-evenly items-center flex-col md:flex-row">
          {/* left */}
          <div className="w-full flex flex-col justify-center items-center md:items-start md:w-1/2">
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
          <div className="indent-[100%] whitespace-nowrap overflow-hidden select-none md:w-[420px] mt-16 md:mt-0 md:h-[420px] relative w-[280px] h-[280px] bg-transparent">
            <Image
              src="/docs/programming-animate.svg"
              alt="programmer guy"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={arrowAnimation}
        >
          <div
            className="left-[50%] bottom-[5%] absolute"
            onClick={scrollProjects}
            ref={projectRef}
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
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
