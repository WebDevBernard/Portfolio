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
            I am a front end developer who enjoys making apps that help automate
            simple tasks. Alongside web development, I am interested in learning
            about developing in the DeFi space. When I'm not coding, I enjoy
            watching movies or playing a bit of WoW.
          </p>
        </div>
      </span>
    </div>
  );
}
