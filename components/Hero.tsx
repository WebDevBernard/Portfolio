import { useEffect, FC } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero: FC<{ scrollContact: () => void }> = ({ scrollContact }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const heroLeftAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
  };

  const heroRightAnimation = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.6,
      },
    },
  };
  return (
    <div className="flex justify-evenly items-center flex-col md:flex-row">
      {/* left */}
      <div className="w-full flex flex-col justify-center items-center md:items-start md:w-1/2">
        <h1 className="ml-8 md:ml-0  text-2xl leading-tight tracking-wider">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={heroLeftAnimation}
            className="font-bold text-4xl text-indigo-900  inline-block"
          >
            Hello!
          </motion.div>
          <span>
            <br />
            I am Bernard,
            <br />a{" "}
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={heroRightAnimation}
              className="highlight inline-block"
            >
              software engineer
            </motion.div>{" "}
            in Vancouver{" "}
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
