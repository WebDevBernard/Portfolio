import Skills from "../Skills/Skills";
import classes from "./About.module.css";

export default function About({ aboutRef }) {
  return (
    <div ref={aboutRef} className={classes.title}>
      <Skills />

      <span>
        <p className={classes.project_title}>About me</p>
        <div>
          <p className={classes.aboutcard}>
            I am a front end developer who enjoys finding ways to automate
            things with code. I love working on my personal projects and I
            always spend extra time on the design and try to make them look
            good. When I am not coding, I enjoy watching movies or playing a bit
            of WoW.
          </p>
        </div>
      </span>
    </div>
  );
}
