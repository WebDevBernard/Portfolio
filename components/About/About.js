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
            I am a front end developer who enjoys creating projects that help
            automate simple tasks for the end-user. I am hungry for knowledge
            and interested in learning more about both the front and back end of
            web development. When I am not coding, I enjoy playing a bit of WoW,
            watching movies, and running outdoors.
          </p>
        </div>
      </span>
    </div>
  );
}
