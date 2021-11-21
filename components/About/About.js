import Skills from "../Skills/Skills";
import classes from "./About.module.css";

export default function About({ aboutRef }) {
  return (
    <div>
      <div ref={aboutRef} className={classes.title}>
        <Skills />
        <span>
          <p className={classes.project_title}>About me</p>
          Having recently completed the Lighthouse Labs Web Development Program,
          I am excited to take on the next big challenge. I am currently taking
          a deep dive into React and NodeJS. Eventually, I would like to start
          building apps in the DeFi space. In my free time, I enjoy running
          outdoors, watching movies and playing videogames.
        </span>
      </div>
    </div>
  );
}
